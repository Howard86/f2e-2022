const config = require('@f2e-2022/tailwind-config')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  content: ['src/**/*.{ts,tsx}', '../../packages/core/src/**/*.{ts,tsx}'],
}
