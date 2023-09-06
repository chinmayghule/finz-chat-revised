/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-bg-clr': '#111',
        'c-bg-clr-secondary': '#1c1c1e'
      },
      fontFamily: {
        'sf-pro': "'SF Pro', serif",
        'inter': "'Inter', sans-serif"
      }
    },
  },
  plugins: [],
}