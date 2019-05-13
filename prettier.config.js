module.exports = {
  bracketSpacing: true,
  printWidth: 80,
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: 'package*.json',
      options: {
        printWidth: 1000,
      },
    },
  ],
}
