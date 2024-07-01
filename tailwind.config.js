/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
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

