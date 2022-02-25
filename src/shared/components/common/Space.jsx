import React from 'react';
import {View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';

export const Space = props => {
  const {style, height = 0, width = 0} = props;

  return (
    <View
      style={[style, {height: verticalScale(height), width: scale(width)}]}
    />
  );
};
