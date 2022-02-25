import React from 'react';
import {View} from 'react-native';

export const Flex = props => {
  const {
    align = 'flex-start',
    style,
    justify,
    flex,
    children,
    direction = 'row',
  } = props;

  return (
    <View
      style={[
        {alignItems: align},
        {flexDirection: direction},
        {justifyContent: justify},
        flex ? {flex} : null,
        style,
      ]}>
      {children}
    </View>
  );
};
