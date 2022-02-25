import React from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import { COLORS, THEME } from '../theme'
import { Flex } from './common'

export const Loading = () => {
  return (
    <Flex align='center' justify='center' style={THEME.Flex}>
      <ActivityIndicator color={COLORS.Primary} size='large' />
    </Flex>
  )
}

const styles = StyleSheet.create({})
