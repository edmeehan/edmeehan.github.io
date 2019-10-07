module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'one-var': 'off',
    camelcase: 'off',
    'comma-dangle': 'off',
    'quote-props': 'off',
    'import/no-unresolved': 'off',
    'no-new': 'off'
  },
};
