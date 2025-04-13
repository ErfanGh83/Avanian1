/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazirmatn: ["Vazirmatn"],
      },
      colors: {
        lightGreen: "#a2c837",
        lightBlue: "#00C0F3",
        darkBlue: "#00234F",
        turquoise: "#42b9a2",
        avanianBlue: "#32BCAD",
        avanianGreen: "#A6CE39",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};