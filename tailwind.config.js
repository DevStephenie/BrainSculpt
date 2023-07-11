/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'base-white': '#F8FBFF',
      'white': '#FFFFFF',
      'blue': '#2AB1FA',
      'deep-blue': '#698AFF',
      'simple-dark': '#2A2A2A',
      'dark-rgba': 'rgba(0,0,0,0.2)',
      'white-rgba': 'rgba(255,255,255,0.6)',

    },
    fontFamily: {openSans: "openSans"},
    extend: {},
  },
  plugins: [],
}

