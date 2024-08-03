// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: 'expo',
  globals: {
    setTimeout: 'readonly',
    clearTimeout: 'readonly',
    setInterval: 'readonly',
    clearInterval: 'readonly',
  },
};
