/** @type {import('tailwindcss').Config} */


export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Manrope', 'sans-serif']
      },
      colors: {
        themeblack: '$202020',
        themered: '#f50e32'
      }
    },
  },
  plugins: [],
}

