import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Container = props => {
  const {children, style, ...other} = props;

  return (
    <View style={[styles.container, style]} {...other}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});
