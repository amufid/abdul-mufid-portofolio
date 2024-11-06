/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': 'url("/public/blue2.jpg")',
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

