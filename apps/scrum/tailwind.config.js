/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
