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
        landing_bg1: "#96D5D2",
        landing_bg2: "#F2FFFF",
        landing_bg3: "#FAA61A",
        landing_bg4: "#FECF8D",
        lightGreen: "#a2c837",
        lightBlue: "#00C0F3",
        darkBlue: "#00234F",
        turquoise: "#42b9a2",
        avanianBlue: "#32BCAD",
        avanianGreen: "#A6CE39",
        dark1: "#007B78",
        dark2: "#45196F",
        dark3: "#00A651",
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};