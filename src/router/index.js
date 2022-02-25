import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from './screen/LoginScreen'
import { PostsScreen } from './screen/PostsScreen'
import { PostDetail } from './screen/PostDetail'

const Stack = createNativeStackNavigator()

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName='PostDetail'
      >
        <Stack.Screen name='LoginScreen' component={LoginScreen} />
        <Stack.Screen name='PostsScreen' component={PostsScreen} />
        <Stack.Screen name='PostDetail' component={PostDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
