import React from 'react'
import { StyleSheet } from 'react-native'
import { Provider } from 'react-redux'
import { Router } from './router'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

const styles = StyleSheet.create({})

export default App
