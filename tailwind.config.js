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
        bkkt: ['Bkkt'],
      },
      colors: {
        // Improved landing backgrounds with better contrast
        landing_bg1: "#6EC4C1",  // Darker teal for better contrast
        landing_bg2: "#E0F7FA",  // Softer light blue-white
        landing_bg3: "#E69500",   // More vibrant orange
        landing_bg4: "#FDBF5E",  // Warmer peach

        // Enhanced primary colors
        lightGreen: "#8BB82D",   // More saturated
        lightBlue: "#00A8E0",    // Slightly deeper
        darkBlue: "#001A3A",     // Richer navy
        turquoise: "#2FA98E",    // More sophisticated

        // Refined brand colors
        avanianBlue: "#28A99A",  // Slightly deeper
        avanianGreen: "#91C22B",  // More vibrant

        // Improved dark variants
        dark1: "#00615E",        // Better contrast
        dark2: "#3A125F",        // Slightly desaturated purple
        dark3: "#008A47",        // More natural green
        dark4: "#C47A10",        // Richer gold

        // New additions for better design system
        accent: "#FF6B35",       // Complementary orange
        lightGray: "#F5F7FA",    // Useful background
        darkGray: "#2D3748"      // For secondary text
      },
      screens: {
        'short': { 'raw': '(min-height: 700px)' },
      },

    },
  },
  plugins: [],
  darkMode: "selector",
};

