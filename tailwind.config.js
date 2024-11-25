/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsla(160, 100%, 37%, 1)'
      }
    },
  },
  plugins: [],
}

