module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'], // alternative: https://github.com/prettier/prettier-eslint
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
    // general ESLint rules
    'no-case-declarations': 0,
    'no-plusplus': 0,
    'sort-imports': 'off',
    'sort-keys': ['error', 'asc', { caseSensitive: true, natural: true }],

    // rules for https://github.com/benmosher/eslint-plugin-import
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/prefer-default-export': 0,

    // rules for https://github.com/prettier/eslint-plugin-prettier
    'prettier/prettier': [
      'error',
      {
        // keep this in sync with .prettier.config.js (or .prettierrc)
        bracketSpacing: true,
        printWidth: 80,
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
      },
    ],

    // rules for https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb
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
