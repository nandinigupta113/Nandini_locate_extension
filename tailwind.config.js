/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  plugins: [],
  theme: {
    extend: {
      width: {
        '500': '500px',
      },
      height: {
        '500': '500px',
      },
      borderWidth: {
        '40' : "40px"
      }
    }
  }
}