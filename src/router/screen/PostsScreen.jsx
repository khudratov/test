import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { SafeAreaView, StyleSheet, FlatList, View } from 'react-native'
import { PostItem } from '../../shared/components'

import { Container, Space, Text } from '../../shared/components/common'
import { Fonts, THEME } from '../../shared/theme'

const data = [
  {
    id: 1,
    title: 'Post Title',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit perspiciatis sequi quis iusto? Veritatis ut, earum illum consequuntur, cupiditate assumenda adipisci commodi sit error tempore vero minima quam sequi.',
    author: 'Qudratov Mirjalol',
    comments: 123
  },
  {
    id: 2,
    title: 'Post Title 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit perspiciatis sequi quis iusto? Veritatis ut, earum illum consequuntur, cupiditate assumenda adipisci commodi sit error tempore vero minima quam sequi.',
    author: 'Qudratov Mirjalol 2',
    comments: 123
  },
  {
    id: 3,
    title: 'Post Title 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla odit perspiciatis sequi quis iusto? Veritatis ut, earum illum consequuntur, cupiditate assumenda adipisci commodi sit error tempore vero minima quam sequi.',
    author: 'Qudratov Mirjalol 3',
    comments: 123
  }
]

export const PostsScreen = () => {
  const navigation = useNavigation()

  const handleSubmit = (id) => {
    navigation.navigate('PostDetailScreen')
  }
  return (
    <SafeAreaView style={THEME.Flex}>
      <Container style={THEME.Flex}>
        <Text size={32} font={Fonts.ManropeBold} mb={20} mt={10}>
          Posts
        </Text>

        <FlatList
          data={data}
          renderItem={({ item }) => {
            console.log(item)

            return (
              <View key={item.id}>
                <PostItem
                  onPress={() => handleSubmit(item.id)}
                  title={item.title}
                  description={item.description}
                  author={item.author}
                  comments={item.comments}
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

const styles = StyleSheet.create({})
