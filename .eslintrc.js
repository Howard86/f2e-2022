/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['org'],
  parserOptions: {
    project: 'packages/tsconfig/eslint.json',
    tsconfigRootDir: __dirname,
  },
  settings: {
    next: {
      rootDir: ['apps/*/'],
    },
  },
}
