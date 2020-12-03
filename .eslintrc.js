module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'semi': [2, 'never'],
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': 2,
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    'block-spacing': [2, 'always'],
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'space-before-blocks': [2, 'always'],
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    'array-bracket-spacing': [2, 'never'],
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }]
  }
}
