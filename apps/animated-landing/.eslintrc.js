/** @type{import('eslint').ESLint.ConfigData} */
module.exports = {
  root: true,
  extends: ['f2e-2022'],
  rules: {
    'tailwindcss/no-custom-classname': [
      1,
      {
        config: 'apps/animated-landing/tailwind.config.js',
        css: 'apps/animated-landing/src/styles/global.css',
      },
    ],
  },
}
