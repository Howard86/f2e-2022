/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    fontSize: {
      h1: ['3.75rem', { fontWeight: 700 }],
      h2: ['3rem', { fontWeight: 700 }],
      h3: ['2rem', { fontWeight: 700 }],
      h4: ['1.75rem', { fontWeight: 700 }],
      p: '1.5rem',
      notice: '1rem',
    },
    extend: {
      spacing: {
        7.5: '1.875rem',
        15: '3.75rem',
        17: '4.25rem',
      },
      borderWidth: {
        5: '5px',
      },
      colors: {
        primary: {
          main: '#70D6DF',
          dark: '#2C8492',
        },
        'secondary-brown': {
          light: '#8C6A5E',
          main: '#593C40',
          dark: '#473438',
        },
        'secondary-green': {
          light: '#80C74F',
          main: '#42A94E',
          dark: '#4C793E',
        },
        'neutral-white': {
          light: '#FFFFFF',
          main: '#DCE9EA',
          dark: '#A0A9AA',
        },
        'neutral-black': {
          light: '#8D8A91',
          main: '#726D7A',
          dark: '#524D5B',
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
