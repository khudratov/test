module.exports = {
  root: true,
  extends: ['@react-native-community', 'plugin:react/recommended'],
  plugins: ['react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    semi: 'off',
    'jsx-quotes': 'prefer-single',
    'comma-dangle': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react-native/no-inline-styles': 0,
    'react/jsx-curly-brace-presence': [
      'error',
      {props: 'never', children: 'never'},
    ],
  },
};
