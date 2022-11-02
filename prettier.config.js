/** @type {import('prettier').Config} */
module.exports = {
  printWidth: 100,
  singleQuote: true,
  semi: false,
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './packages/tailwind-config/index.js',
}
