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
      boxShadow: {
        button: '0.25rem 0.25rem 0.25rem rgba(0, 0, 0, .25)',
        'button-inset': 'inset 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, .25)',
        brown: '0.5rem 0.625rem 0 rgba(71, 52, 56, .75)',
      },
      spacing: {
        7.5: '1.875rem',
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        21: '5.25rem',
        23: '5.75rem',
      },
      borderWidth: {
        3: '3px',
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
        error: {
          main: '#E8433F',
        },
      },
      opacity: {
        65: 0.65,
        85: 0.85,
      },
      borderRadius: {
        20: '20px',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
