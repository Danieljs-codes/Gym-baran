/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        'grotesk': ['Sporting Grotesque', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#6765F0',
        'purple_gray': '#262524',
        'purple_gray_light': '#264373',
      },
    },
  },
    plugins: [],
  }
