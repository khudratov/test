import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { verticalScale } from 'react-native-size-matters'
import { COLORS } from '../../theme'

import { Text } from '../common'

export const Input = (props) => {
  const { error, label, width, ...other } = props

  return (
    <View style={width && { width }}>
      <Text mb={verticalScale(10)}>{label}</Text>

      <TextInput {...other} style={styles.input} />

      {error && (
        <Text mb={verticalScale(10)} size={12} color='red'>
          I am error
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderColor: COLORS.Primary,
    borderWidth: 1,
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 25,
    fontSize: 20
  }
})
