/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      primary: {
        dark: '#1A1E79',
        main: '#2D31A6',
        light: '#EAEAFC',
        soft: '#F4F7FF',
      },
      secondary: {
        dark: '#F9643B',
        main: '#FF7F5C',
        light: '#FFE6E0',
        soft: '#EEF8F4',
      },
      grey: {
        50: '#F9F9F9',
        200: '#E0E0E0',
        300: '#B3B3B3',
        400: '#939393',
        map: '#F2F2F2',
      },
      green: {
        main: '#5CB660',
        light: '#EDF7ED',
      },
      orange: {
        main: '#FFA117',
        light: '#FFF4E5',
      },
      red: {
        main: '#FF3C38',
        light: '#FDEDED',
      },
      text: {
        primary: '#04184B',
        secondary: '#4C5271',
        grey: '#9E9E9E',
        blue: '#1776D2',
      },
      white: {
        default: '#ffffff',
        30: 'rgba(255, 255, 255, 0.3)',
        50: 'rgba(255, 255, 255, 0.5)',
        80: 'rgba(255, 255, 255, 0.8)',
      },
      border: {
        main: '#E6E8F0',
      },
    },
    fontFamily: {
      sans: ['Roboto'],
    },
    fontSize: {
      h1: ['3.125rem', { lineHeight: 1.27, fontWeight: 700, letterSpacing: 1 }], // 50px
      h2: [
        '2.625rem',
        { lineHeight: 1.31, fontWeight: 700, letterSpacing: 0.8 }, // 42px
      ],
      h3: [
        '2.25rem',
        { lineHeight: 1.22, fontWeight: 600, letterSpacing: 0.2 }, // 36px
      ],
      h4: [
        '1.75rem',
        { lineHeight: 1.28, fontWeight: 600, letterSpacing: 0.2 }, // 28px
      ],
      h5: ['1.5rem', { lineHeight: 1.16, fontWeight: 500, letterSpacing: 0.5 }], // 24px
      h6: ['1.25rem', { lineHeight: 1.4, fontWeight: 500, letterSpacing: 0.3 }], // 20px
      subtitle1: [
        '1rem',
        { lineHeight: '24px', fontWeight: 700, letterSpacing: 0.08 }, // 16px
      ],
      subtitle2: [
        '0.875rem',
        { lineHeight: '24px', fontWeight: 700, letterSpacing: 0 }, // 14px
      ],
      body1: [
        '1rem',
        { lineHeight: '24px', fontWeight: 400, letterSpacing: 0.08 }, // 16px
      ],
      body2: [
        '0.875rem',
        { lineHeight: '20px', fontWeight: 400, letterSpacing: 0.08 }, // 14px
      ],
      btnMedium: [
        '0.875rem',
        { lineHeight: '25px', fontWeight: 500, letterSpacing: 0.4 }, // 14px
      ],
      btnLarge: [
        '0.94rem',
        { lineHeight: '26px', fontWeight: 500, letterSpacing: 0.46 }, // 15px
      ],
      btnSmall: ['0.812rem', { lineHeight: '23px', fontWeight: 500 }], // 13px
      caption: ['0.75rem', { lineHeight: '16px', fontWeight: 500 }], // 12px
      overline: ['0.875 rem', { lineHeight: '16px', fontWeight: 500 }], // 14px
      code: [
        '0.875rem',
        { lineHeight: '24px', fontWeight: 400, fontFamily: 'Monoid' }, // 14px
      ],
    },
    boxShadow: {
      0.25: '0 1px 2px 0 rgba(17, 20, 103, 0.12)',
      0.5: '0px 0px 8px rgba(0, 0, 0, 0.12)',
      1: '1px 2px 6px rgba(17, 20, 103, 0.12)',
      2: '1px 3px 10px 2px rgba(45, 49, 166, 0.1)',
      3: '2px 4px 8px rgba(55, 52, 169, 0.05)',
      4: '1px 2px 6px 0px rgba(7, 20, 103, 0.12)',
      8: '1px 2px 6px rgba(17, 20, 103, 0.12)',
      16: '1px 2px 6px rgba(17, 20, 103, 0.12)',
      none: 'none',
    },
    screens: {
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1600px',
    },
    extend: {},
  },
  plugins: [],
}
