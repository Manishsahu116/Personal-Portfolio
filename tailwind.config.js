/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#121212',
        darkText: '#E0E0E0',
        darkAccent: '#1F1F1F',
      },
    },
  },
  plugins: [],
}

