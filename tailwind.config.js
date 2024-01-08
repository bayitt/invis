const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1025px',
    },
    colors: {

    },
    fontFamily: {
      'manrope': ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}