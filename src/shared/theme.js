import {StyleSheet} from 'react-native';

export const COLORS = {
  Primary: '#7573F0',
  Secondary: '#D66AA5',
  DarkText: '#070934',
  GrayText: '#A9AAB8',
  GrayTextDarker: '#858692',
  GrayTextDarkerest: '#5D5E68',
  White: '#FFFFFF',
  Black: '#000000',
};

export const Fonts = {
  ManropeExtraLight: 'Manrope-ExtraLight',
  ManropeLight: 'Manrope-Light',
  ManropeRegular: 'Manrope-Regular',
  ManropeMedium: 'Manrope-Medium',
  ManropeBold: 'Manrope-Bold',
  ManropeExtraBold: 'Manrope-ExtraBold',
  ManropeSemibold: 'Manrope-SemiBold',
};

export const THEME = StyleSheet.create({
  Flex: {
    flex: 1,
  },
  CardContainer: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: 'white',
  },
  ShadowLight: {
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 2,
  },
});
