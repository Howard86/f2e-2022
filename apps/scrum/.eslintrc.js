const path = require('path')

/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['f2e-2022'],
  rules: {
    'tailwindcss/no-custom-classname': [
      1,
      {
        config: path.join(__dirname, 'tailwind.config.js'),
        css: path.join(__dirname, 'src/styles/global.css'),
      },
    ],
  },
}
