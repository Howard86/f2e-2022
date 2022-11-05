/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      en: 'var(--monument-font)',
      sans: 'var(--noto-font)',
    },
    fontSize: {
      // CH - Heading
      'ch-h1': ['48px', '72px'],
      'ch-h2': ['40px', '60px'],
      'ch-h3': ['32px', '48px'],
      'ch-h4': ['24px', '36px'],
      'ch-h5': ['20px', '28px'],
      'ch-title': ['16px', '20px'],
      'ch-subtitle': ['14px', '18px'],
      // CH - Paragraph
      'ch-p1': ['24px', '36px'],
      'ch-p2': ['20px', '28px'],
      'ch-p3': ['16px', '20px'],
      'ch-p4': ['14px', '18px'],
      'ch-caption': ['12px', '16px'],

      // EN - Heading
      'en-h1': ['48px', '72px', { letterSpacing: '10%' }],
      'en-h2': ['40px', '60px', { letterSpacing: '10%' }],
      'en-h3': ['32px', '48px', { letterSpacing: '10%' }],
      'en-h4': ['24px', '36px', { letterSpacing: '10%' }],
      'en-h5': ['20px', '28px', { letterSpacing: '10%' }],
      'en-title': ['16px', '20px', { letterSpacing: '10%' }],
      'en-subtitle': ['14px', '18px', { letterSpacing: '10%' }],
      // EN - Paragraph
      'en-p1': ['24px', '36px', { fontWeight: 500 }],
      'en-p2': ['20px', '28px', { fontWeight: 500 }],
      'en-p3': ['16px', '20px', { fontWeight: 500 }],
      'en-p4': ['14px', '18px'],
      'en-caption': ['12px', '16px'],
    },
    screens: {
      sm: '375px',
      md: '650px',
      lg: '980px',
      xl: '1440px',
    },
    extend: {
      colors: {
        n1: '#FFFFFF',
        n2: '#858993',
        n3: '#151F3F',
        n4: '#0E1835',
        n5: '#06102B',
        n6: '#000000',

        p1: '#9DA4FF',
        p2: '#C4C8FF',
        p3: '#6E77E9',

        g1: '#55FFAD',

        y1: '#FFE34E',
        y2: '#FFF385',

        stroke: '#313A65',
      },
      boxShadow: (theme) => ({
        white: `0 0 10px ${theme('colors.n1/0.6')}`,
        green: `0 0 10px ${theme('colors.g1/0.6')}`,
        purple: `0 0 10px ${theme('colors.p1/0.6')}`,
        yellow: `0 0 10px ${theme('colors.y2/0.6')}`,
      }),
      backgroundImage: (theme) => ({
        decoration: `linear-gradient(90deg, ${theme('colors.p1')} 0%, ${theme('colors.g1')} 100%)`,
        'text-decoration': `linear-gradient(${theme('colors.p1')} 0%, ${theme('colors.g1')} 100%)`,
        'card-stroke': `linear-gradient(100.38deg, ${theme('colors.stroke')} 3.95%, ${theme(
          'colors.stroke'
        )} 100%)`,
        'card-background': `linear-gradient(100.38deg, ${theme('colors.stroke')} 3.95%, ${theme(
          'colors.stroke'
        )} 100%), linear-gradient(0deg, ${theme('colors.n3')}, ${theme('colors.n3')})`,
      }),
      spacing: {
        7.5: '1.875rem',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      borderRadius: {
        card: '2rem',
        button: '100%',
      },
      animation: {
        slide: 'slide 8s linear infinite',
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
}
