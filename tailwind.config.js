/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['"Pacifico"', 'cursive'], // Replace "Comic Sans MS" with the desired cursive font
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['night', 'lofi'],
  },
}
