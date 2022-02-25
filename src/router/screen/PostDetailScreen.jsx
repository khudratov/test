import React, { useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native'
import { Text, Container, Flex, Space } from '../../shared/components/common'
import { Fonts, THEME, COLORS } from '../../shared/theme'
import { BookMarkSvg, CommentSvg } from '../../shared/components/svg'
import { useRoute } from '@react-navigation/native'
import { useGetRequest } from '../../utils/apiService'
import { Loading } from '../../shared/components'

export const PostDetailScreen = () => {
  const route = useRoute()
  const { response, request, loading } = useGetRequest({
    url: `posts/${route.params.id}`
  })

  useEffect(() => {
    request()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={THEME.Flex}>
      <ScrollView>
        <Container style={THEME.Flex}>
          <Text
            size={24}
            font={Fonts.ManropeBold}
            mb={20}
            mt={20}
            color={COLORS.Primary}
          >
            {response?.title}
          </Text>

          <Text lineHeight={20} mb={20} color={COLORS.GrayTextDarker}>
            {response?.text}
          </Text>

          <Flex justify='space-between' align='center'>
            <Text color={COLORS.GrayTextDarker}>{response?.author}</Text>

            <Flex align='center' justify='center'>
              <TouchableOpacity>
                <BookMarkSvg color={COLORS.GrayTextDarker} />
              </TouchableOpacity>
              <Space width={16} />

              <CommentSvg color={COLORS.GrayTextDarker} />

              <Text ml={5} color={COLORS.GrayTextDarker}>
                {response?.commets}
              </Text>
            </Flex>
          </Flex>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
