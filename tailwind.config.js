/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.tsx', 'index.html'],
  theme: {
    extend: {
      colors: {
        baron: '#151a5a',
      },
      fontFamily: {
        sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
        mukta: ['Mukta', 'Noto Sans', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        clickAnimation: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        click: 'clickAnimation 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
