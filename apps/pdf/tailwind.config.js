/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      backgroundImage: {
        signature: 'url("/assets/sample-signature.png")',
      },
      borderRadius: {
        sm: '0.25rem',
      },
      colors: {
        error: '#D83A52',
        greyscale: {
          dark: '#323338',
          'dark-grey': '#676879',
          grey: '#C5C7D0',
          'light-grey': '#F5F6F8',
          'ui-grey': '#E6E9EF',
          white: '#FFFFFF',
        },
        info: '#0073EA',
        mask: '#CEE5E466',
        primary: {
          dark: '#096561',
          light: '#CEE5E4',
          main: '#0B7D77',
        },
        success: '#0B8652',
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
    },
    letterSpacing: {
      tighter: '0.03125rem',
    },
  },
}
