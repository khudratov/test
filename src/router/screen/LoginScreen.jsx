import { useNavigation } from '@react-navigation/native'
import React from 'react'
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
import { IS_IOS } from '../../utils/constants'

export const LoginScreen = () => {
  const navigation = useNavigation()

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

            <Input width='80%' label='Email' placeholder='example@gmail.com' />
            <Space height={15} />
            <Input
              width='80%'
              label='Password'
              placeholder='******'
              secureTextEntry
              error='I am error'
            />

            <Space height={15} />
            <Button
              label='Submit'
              onPress={() => navigation.navigate('PostsScreen')}
            />
          </Flex>
        </Container>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({})
