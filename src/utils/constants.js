import { Platform, Dimensions } from 'react-native'

export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'

export const DEVICE_WIDTH = Dimensions.get('window').width
export const DEVICE_HEIGHT = Dimensions.get('window').height
