import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLORS} from 'shared/theme';
import {Text} from './Text';

export const Button = props => {
  const {
    label,
    style,
    fontSize,
    disabled = false,
    font = 'Arial',
    secondary = false,
    ...other
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.wrapper,
        disabled && styles.disabled,
        secondary && styles.secondary,
        style,
      ]}
      disabled={disabled}
      {...other}>
      <Text color={'White'} center font={font} size={fontSize}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: COLORS.Primary,
    padding: 16,
    borderRadius: 60,
    flexGrow: 1,
  },
  secondary: {
    backgroundColor: COLORS.Secondary,
  },
  disabled: {
    opacity: 0.4,
  },
});
