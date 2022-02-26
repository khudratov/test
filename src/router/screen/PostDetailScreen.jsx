import React, { useEffect } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Share
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { Text, Container, Flex, Space } from '../../shared/components/common'
import { Fonts, THEME, COLORS } from '../../shared/theme'
import { BookMarkSvg, CommentSvg, ShareSvg } from '../../shared/components/svg'
import { useRoute } from '@react-navigation/native'
import { useGetRequest } from '../../utils/apiService'
import { Loading } from '../../shared/components'
import { BASE_URL } from '../../../env'

export const PostDetailScreen = () => {
  const route = useRoute()
  const { id } = route.params
  const { response, request, loading } = useGetRequest({
    url: `posts/${id}`
  })
  const dispatch = useDispatch()
  const { savedPosts } = useSelector((state) => state.posts)

  useEffect(() => {
    request()
  }, [])

  if (loading) {
    return <Loading />
  }

  const toggleSave = () => {
    if (savedPosts.includes(id)) {
      dispatch({ type: 'REMOVE_POST', payload: id })
    } else {
      dispatch({ type: 'ADD_POST', payload: id })
    }
  }

  handleShare = async () => {
    try {
      Share.share({
        message: `Hey look at that ${BASE_URL}/api/v1/posts/${id}`
      })
    } catch (error) {
      console.log(error.message)
    }
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
              <TouchableOpacity onPress={handleShare}>
                <ShareSvg color={COLORS.Primary} />
              </TouchableOpacity>

              <Space width={16} />

              <TouchableOpacity onPress={toggleSave}>
                <BookMarkSvg
                  color={
                    savedPosts.includes(id)
                      ? COLORS.Secondary
                      : COLORS.GrayTextDarker
                  }
                />
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
