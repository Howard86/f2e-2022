/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['f2e-2022'],
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
