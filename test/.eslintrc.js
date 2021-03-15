module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'generator-star-spacing': 'off',
    'no-debugger': 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-undef': 'off',
    'space-before-function-paren': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    quotes: [1, 'single'],
    camelcase: 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
