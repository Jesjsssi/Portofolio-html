/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#6630E5',
        dark: '#0f172A',
      },
      screens: {
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
};

