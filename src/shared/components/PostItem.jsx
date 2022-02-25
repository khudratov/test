import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { COLORS, Fonts, THEME } from '../theme'
import { Text, Flex, Space } from './common'
import { CommentSvg } from './svg/CommentSvg'

export const PostItem = (props) => {
  const { title, description, commets, author, ...other } = props

  return (
    <TouchableOpacity style={[THEME.ShadowLight, styles.container]} {...other}>
      <Text
        color={COLORS.Primary}
        font={Fonts.ManropeExtraBold}
        size={16}
        mb={10}
      >
        {title}
      </Text>

      <Text color={COLORS.GrayTextDarkerest} lineHeight={20} numberOfLines={3}>
        {description}
      </Text>

      <Space height={15} />

      <Flex justify='space-between'>
        <Text color={COLORS.GrayTextDarker}>{author}</Text>

        <Flex align='center' justify='center'>
          <CommentSvg color={COLORS.GrayTextDarker} />

          <Text ml={5} color={COLORS.GrayTextDarker}>
            {commets}
          </Text>
        </Flex>
      </Flex>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: COLORS.White,
    borderRadius: 5
  }
})
