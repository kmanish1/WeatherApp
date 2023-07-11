/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish","sans-serif"],
      },
      colors:{
        deepBlue: "#02042a",
        imgBlue: "#181C2E",
        darkblue:"rgb(15,23,42)"
      }
    },
  },
  plugins: [],
};
