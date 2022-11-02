const config = require('@org/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ['src/**/*.{ts,tsx}', '../../packages/core/src/**/*.{ts,tsx}'],
}
