module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'prefer-template': 0,
    'react/no-children-prop': [0],
    'linebreak-style': 0
  },
};
