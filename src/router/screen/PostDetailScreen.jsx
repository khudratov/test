import React from 'react'
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

export const PostDetailScreen = () => {
  const route = useRoute()

  console.log(route.params)

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
            Title
          </Text>

          <Text lineHeight={20} mb={20} color={COLORS.GrayTextDarker}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            commodi soluta veniam placeat animi sed, est a eius dolore
            molestiae. Voluptate, ab similique totam iusto harum magni iure unde
            eius itaque eos, deserunt error consectetur. Iure quod fugiat quasi
            dolores facere laborum optio accusantium! Consequuntur, animi, est
            inventore cupiditate, saepe tempore sed quaerat laudantium
            reprehenderit possimus et nesciunt eaque porro autem modi. Accusamus
            quasi sapiente dolore, architecto consequuntur repudiandae libero?
          </Text>

          <Flex justify='space-between' align='center'>
            <Text color={COLORS.GrayTextDarker}>Mirjalol</Text>

            <Flex align='center' justify='center'>
              <TouchableOpacity>
                <BookMarkSvg color={COLORS.GrayTextDarker} />
              </TouchableOpacity>
              <Space width={16} />

              <CommentSvg color={COLORS.GrayTextDarker} />

              <Text ml={5} color={COLORS.GrayTextDarker}>
                234
              </Text>
            </Flex>
          </Flex>
        </Container>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
