module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'no-multi-spaces': ['error'],
    'keyword-spacing': ['error', { before: true }],
    'key-spacing': ['error', { afterColon: true }],
    'comma-spacing': ['error', { before: false, after: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'block-spacing': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'space-infix-ops': ['error'],
    'space-before-blocks': ['error'],
    'global-require': 0,
    eqeqeq: ['error', 'always'],
    'no-spaced-func': ['error'],
    'no-empty': ['error', { allowEmptyCatch: true }],
    'use-isnan': ['error'],
    'default-case': ['error'],
    'no-empty-function': ['error'],
    'no-eval': ['error'],
    'no-fallthrough': ['error'],
    'no-global-assign': ['error'],
    'prefer-promise-reject-errors': ['error'],
    radix: ['error'],
    'require-await': ['error'],
    'brace-style': ['error'],
    'jsx-quotes': ['error'],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 3],
  },
}
