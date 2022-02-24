import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const Text = props => {
  const {
    mt = 0,
    mb = 0,
    ml = 0,
    mr = 0,
    size = 14,
    color = '#000000',
    center,
    lineHeight,
    uppercase,
    captalize,
    underline,
    lineThrough,
    bold,
    normal,
    semiBold,
    children,
    style,
    allowEmpty = true,
    font = 'Arial',
    ...rest
  } = props;

  if (!children && !allowEmpty) {
    return null;
  }

  return (
    <RNText
      style={[
        styles.text,
        {color: color},
        {fontSize: scale(size)},
        {lineHeight: lineHeight || size * 1.1},
        {marginTop: mt},
        {marginLeft: ml},
        {marginRight: mr},
        {marginBottom: mb},
        font && {fontFamily: font},
        center && styles.textCenter,
        uppercase && styles.textUppercase,
        captalize && styles.textCaptalize,
        underline && styles.textUnderline,
        lineThrough && styles.textLineThrough,
        bold && styles.textBold,
        normal && styles.textNormal,
        semiBold && styles.textSemiBold,
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    paddingTop: 4,
  },

  textBold: {
    fontWeight: 'bold',
  },
  textNormal: {
    fontWeight: '400',
  },
  textSemiBold: {
    fontWeight: '500',
  },

  textCenter: {
    textAlign: 'center',
  },
  textUnderline: {
    textDecorationLine: 'underline',
  },
  textCaptalize: {
    textTransform: 'capitalize',
  },
  textUppercase: {
    textTransform: 'uppercase',
  },
  textLineThrough: {
    textDecorationLine: 'line-through',
  },
});
