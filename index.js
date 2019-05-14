const { overrides, ...prettierRules } = require("./prettier.config");

module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
    'shared-node-browser': true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true,
      spread: true,
    },
  },
  rules: {
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'sort-imports': 'off',
    'sort-keys': 0,

    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    'prettier/prettier': [
      'error',
      prettierRules
    ],

    'react/jsx-curly-brace-presence': 'never', // use '' when passing a string as a property
    'react/jsx-filename-extension': 0, // we assume we do not use *.jsx files
    'react/sort-comp': 2,
  },
  overrides: [
    {
      files: ['./src/**/*.test.js', './src/**/*.spec.js'],
      globals: {
        React: true,
      },
      rules: {
        'import/no-named-as-default': 0,
        'no-prototype-builtins': 0,
        'class-methods-use-this': 0,
        'no-mixed-operators': 0,
        'react/forbid-prop-types': 0,
        'react/prop-types': 0,
        'no-use-before-define': 0,
        'camelcase': 0,
        'no-restricted-syntax': [
          'error',
          'ForInStatement',
          'LabeledStatement',
          'WithStatement'
        ]
      },
    },
  ],
};
