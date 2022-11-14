/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    letterSpacing: {
      tighter: '0.03125rem',
    },
    extend: {
      colors: {
        primary: {
          light: '#CEE5E4',
          main: '#0B7D77',
          dark: '#096561',
        },
        success: '#0B8652',
        info: '#0073EA',
        error: '#D83A52',
        greyscale: {
          dark: '#323338',
          'dark-grey': '#676879',
          grey: '#C5C7D0',
          'ui-grey': '#E6E9EF',
          'light-grey': '#F5F6F8',
          white: '#FFFFFF',
        },
        mask: '#CEE5E466',
      },
      fontSize: {
        h1: '2rem',
        h2: '1.5rem',
        h3: '1.125rem',
        h4: '1rem',
        h5: '0.875rem',
        h6: '0.75rem',
        p: '0.875rem',
      },
      borderRadius: {
        sm: '0.25rem',
      },
      backgroundImage: {
        signature: 'url("/assets/sample-signature.png")',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
