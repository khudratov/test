import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState, useMemo } from 'react'
import {
  SafeAreaView,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { PostItem } from '../../shared/components'

import { Container, Space, Text } from '../../shared/components/common'
import { Loading } from '../../shared/components'
import { THEME, COLORS } from '../../shared/theme'
import { useGetRequest } from '../../utils/apiService'
import { useSelector } from 'react-redux'
import { BookMarkSvg } from '../../shared/components/svg'

export const PostsScreen = () => {
  const navigation = useNavigation()
  const { response, request, loading } = useGetRequest({ url: 'posts' })
  const [posts, setPosts] = useState([])
  const state = useSelector((state) => state)
  const [showSavedPost, setShowSavedPost] = useState(false)

  const renderItem = ({ item }) => (
    <View>
      <PostItem
        onPress={() => handleSubmit(item.id)}
        title={item.title}
        description={item.description}
        author={item.author}
        commets={item.commets}
      />
      <Space height={10} />
    </View>
  )

  useEffect(() => {
    if (showSavedPost) {
      const filtered = response.filter((post) => {
        return state.posts.savedPosts.includes(post.id)
      })
      setPosts(filtered)
    } else {
      setPosts(response)
    }
  }, [showSavedPost])

  useEffect(() => {
    request().then((data) => {
      setPosts(data.response)
    })
  }, [])

  const handleSubmit = (id) => {
    navigation.navigate('PostDetailScreen', { id })
  }

  if (loading) {
    return <Loading />
  }

  return (
    <SafeAreaView style={THEME.Flex}>
      <Container style={THEME.Flex}>
        <TouchableOpacity
          style={styles.buttonSavedPost}
          onPress={() => setShowSavedPost(!showSavedPost)}
        >
          <BookMarkSvg
            size={45}
            color={showSavedPost ? COLORS.Secondary : COLORS.GrayTextDarker}
          />
        </TouchableOpacity>

        <FlatList
          data={posts}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  buttonSavedPost: {
    padding: 20
  }
})
