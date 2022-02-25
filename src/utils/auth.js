export function auth() {
  return {
    headers: {
      Authorization: `Token ${localStorage.token}`
    }
  }
}

export function checkAuth(email, password, data) {
  const found = data.find((item) => {
    return item.email === email
  })

  if (!found) {
    return { error: 'User does not exist' }
  }

  if (found.password != password) {
    return { error: 'Wrong password or email' }
  }

  return { error: null }
}
