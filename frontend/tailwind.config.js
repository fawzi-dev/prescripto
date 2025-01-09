/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#5f6FFF",

      },
      gridTemplateColumns: {
        "auto": "repeat(auto-fill, minmax(200px, 1fr))",
      },
    },
    container: {
      center: true,
      padding: '1rem',
    },
  },
  plugins: [],
}