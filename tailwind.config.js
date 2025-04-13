/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn"],
      },
      colors: {
        lightGreen: "#a2c837",
        turquoise: "#42b9a2",
      },
    },
  },
  plugins: [],
  darkMode: 'selector'
};