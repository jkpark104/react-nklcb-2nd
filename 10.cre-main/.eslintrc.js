module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'jest'],
  rules: {
    'react/prop-types': 'warn',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
  },
  globals: {
    jest: true,
  },
};
