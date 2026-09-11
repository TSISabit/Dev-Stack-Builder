/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'brand-gradient': 'linear-gradient(to right, #f97316, #ec4899, #8b5cf6)',
      },
    },
  },
  plugins: [],
}