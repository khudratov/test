import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { SafeAreaView, FlatList, View } from 'react-native'
import { PostItem } from '../../shared/components'

import { Container, Space, Text } from '../../shared/components/common'
import { Loading } from '../../shared/components'
import { Fonts, THEME } from '../../shared/theme'
import { useGetRequest } from '../../utils/apiService'

export const PostsScreen = () => {
  const navigation = useNavigation()
  const { response, request, loading } = useGetRequest({ url: 'posts' })

  useEffect(() => {
    request()
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
        <Text size={32} font={Fonts.ManropeBold} mb={20} mt={10}>
          Posts
        </Text>

        <FlatList
          data={response}
          renderItem={({ item }) => {
            return (
              <View key={item.id}>
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
          }}
          keyExtractor={(item) => item.id}
        />
      </Container>
    </SafeAreaView>
  )
}
