/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.amber,
        tertiary: colors.rose
      },
      fontFamily: {
        mono: ['var(--font-robotoMono)', ...fontFamily.mono]
      }
    },
  },
  plugins: [],
}
