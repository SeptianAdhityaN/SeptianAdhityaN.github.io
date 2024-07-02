/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container:{
      center: true,
    },
    extend: {
      colors: {
        "primary": "#051923",
        "secondary": "#00a6fb",
      }
    },
  },
  plugins: [],
}

