/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{ts,tsx}'],
  plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/forms')],
  theme: {
    extend: {
      animation: {
        slide: 'slide 8s linear infinite',
      },
      backgroundImage: (theme) => ({
        'card-background': `linear-gradient(100.38deg, ${theme('colors.stroke')} 3.95%, ${theme(
          'colors.stroke'
        )} 100%), linear-gradient(0deg, ${theme('colors.n3')}, ${theme('colors.n3')})`,
        'card-stroke': `linear-gradient(100.38deg, ${theme('colors.stroke')} 3.95%, ${theme(
          'colors.stroke'
        )} 100%)`,
        decoration: `linear-gradient(90deg, ${theme('colors.p1')} 0%, ${theme('colors.g1')} 100%)`,
        'text-decoration': `linear-gradient(${theme('colors.p1')} 0%, ${theme('colors.g1')} 100%)`,
      }),
      borderRadius: {
        button: '100%',
        card: '2rem',
      },
      boxShadow: (theme) => ({
        green: `0 0 10px ${theme('colors.g1/0.6')}`,
        purple: `0 0 10px ${theme('colors.p1/0.6')}`,
        white: `0 0 10px ${theme('colors.n1/0.6')}`,
        yellow: `0 0 10px ${theme('colors.y2/0.6')}`,
      }),
      colors: {
        g1: '#55FFAD',
        n1: '#FFFFFF',
        n2: '#858993',
        n3: '#151F3F',
        n4: '#0E1835',
        n5: '#06102B',
        n6: '#000000',

        p1: '#9DA4FF',
        p2: '#C4C8FF',
        p3: '#6E77E9',

        stroke: '#313A65',

        y1: '#FFE34E',
        y2: '#FFF385',
      },
      dropShadow: (theme) => ({
        green: `0 0 10px ${theme('colors.g1/0.6')}`,
        purple: `0 0 10px ${theme('colors.p1/0.6')}`,
        white: `0 0 10px ${theme('colors.n1/0.6')}`,
        yellow: `0 0 10px ${theme('colors.y2/0.6')}`,
      }),
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      spacing: {
        7.5: '1.875rem',
      },
    },
    fontFamily: {
      en: 'var(--monument-font)',
      sans: 'var(--noto-font)',
    },
    fontSize: {
      'ch-caption': ['12px', '16px'],
      // CH - Heading
      'ch-h1': ['48px', '72px'],
      'ch-h2': ['40px', '60px'],
      'ch-h3': ['32px', '48px'],
      'ch-h4': ['24px', '36px'],
      'ch-h5': ['20px', '28px'],
      // CH - Paragraph
      'ch-p1': ['24px', '36px'],
      'ch-p2': ['20px', '28px'],
      'ch-p3': ['16px', '20px'],
      'ch-p4': ['14px', '18px'],
      'ch-subtitle': ['14px', '18px'],
      'ch-title': ['16px', '20px'],
      'en-caption': ['12px', '16px'],

      // EN - Heading
      'en-h1': ['48px', '72px', { letterSpacing: '10%' }],
      'en-h2': ['40px', '60px', { letterSpacing: '10%' }],
      'en-h3': ['32px', '48px', { letterSpacing: '10%' }],
      'en-h4': ['24px', '36px', { letterSpacing: '10%' }],
      'en-h5': ['20px', '28px', { letterSpacing: '10%' }],
      // EN - Paragraph
      'en-p1': ['24px', '36px', { fontWeight: 500 }],
      'en-p2': ['20px', '28px', { fontWeight: 500 }],
      'en-p3': ['16px', '20px', { fontWeight: 500 }],
      'en-p4': ['14px', '18px'],
      'en-subtitle': ['14px', '18px', { letterSpacing: '10%' }],
      'en-title': ['16px', '20px', { letterSpacing: '10%' }],
    },
    screens: {
      lg: '980px',
      md: '650px',
      sm: '375px',
      xl: '1440px',
    },
  },
}
