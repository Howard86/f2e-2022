/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
