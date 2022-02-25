import { useState } from 'react'
import { auth } from '../utils/auth'

import axios from 'axios'
import humps from 'humps'
import { BASE_URL } from '../../env'

const baseAxios = axios.create({
  baseURL: `${BASE_URL}/api/v1/`,
  transformResponse: [...axios.defaults.transformResponse, humps.camelizeKeys],
  transformRequest: [decamelize, ...axios.defaults.transformRequest]
})

baseAxios.interceptors.request.use((config) => {
  return {
    ...config,
    params: humps.decamelizeKeys(config.params)
  }
})

function decamelize(object) {
  if (!(object && !(object instanceof File))) return object

  if (object instanceof FormData) {
    const formData = new FormData()
    for (const [key, value] of object.entries()) {
      formData.append(humps.decamelize(key), value)
    }
    return formData
  }

  if (typeof object === 'object') {
    return Object.keys(object).reduce(
      (acc, next) => ({
        ...acc,
        [humps.decamelize(next)]: object[next]
      }),
      {}
    )
  }
}

export function usePostRequest(options = {}) {
  return useRequest({ method: 'POST', ...options })
}

export function usePutRequest(options = {}) {
  return useRequest({ method: 'PUT', ...options })
}

export function useGetRequest(options = {}) {
  return useRequest({ method: 'GET', ...options })
}

export function useDeleteRequest(options = {}) {
  return useRequest({ method: 'DELETE', ...options })
}

export function useRequest(options = {}) {
  const [response, setResponse] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})

  async function request(overrideOptions = {}, sync = false) {
    setLoading(true)

    try {
      const { data } = await baseAxios({
        // ...auth(),
        ...options,
        ...overrideOptions
      })
      if (!sync) setResponse(data)
      return { response: data, success: true }
    } catch (e) {
      console.log('error', e)
      setError(e.response || {})
      if (e.response === undefined) {
      } else if (e.response.status >= 500) {
      } else if (e.response.status === 401 && e.response.data.logout) {
      }

      return { error: e.response, success: false }
    } finally {
      if (!sync) setLoading(false)
    }
  }

  return {
    loading,
    request,
    error,
    response,
    setResponse,
    setError,
    setLoading
  }
}
