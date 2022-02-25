import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'

import {
  Button,
  Container,
  Flex,
  Space,
  Text
} from '../../shared/components/common'
import { Input } from '../../shared/components/form'
import { Fonts, THEME } from '../../shared/theme'
import { useGetRequest } from '../../utils/apiService'
import { IS_IOS } from '../../utils/constants'
import { checkAuth } from '../../utils/auth'

export const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { request, loading } = useGetRequest({ url: 'users' })

  const handleSubmit = async () => {
    const data = await request()

    const check = checkAuth(email, password, data.response)

    if (check?.error) {
      setError(check.error)
    } else {
      navigation.navigate('PostsScreen')
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={IS_IOS ? 'padding' : undefined}
      style={THEME.Flex}
    >
      <SafeAreaView style={THEME.Flex}>
        <Container style={THEME.Flex}>
          <Flex
            justify='center'
            direction='column'
            align='center'
            style={THEME.Flex}
          >
            <View>
              <Text size={32} font={Fonts.ManropeBold} mb={30}>
                Sign In
              </Text>
            </View>

            <Input
              autoCapitalize='none'
              width='80%'
              label='Email'
              placeholder='example@gmail.com'
              value={email}
              onChangeText={(text) => setEmail(text)}
              error={error}
            />
            <Space height={15} />

            <Input
              autoCapitalize='none'
              width='80%'
              label='Password'
              placeholder='******'
              secureTextEntry
              value={password}
              onChangeText={(text) => setPassword(text)}
            />

            <Space height={15} />
            <Button label='Submit' onPress={handleSubmit} disabled={loading} />
          </Flex>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({})
