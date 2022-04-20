const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "425px",
      // => @media (min-width: 425px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1440px) { ... }

      xxl: "1920px",
      // => @media (min-width: 1920px) { ... }
    },
    fontFamily: {
      sans: ['Commissioner", sans-serif'],
    },
    colors: {
      "primary-cyan": "hsl(176, 50%, 47%)",
      "primary-cyan-dark": "hsl(176, 72%, 28%)",
      "neutral-black": "hsl(0, 0%, 0%)",
      "neutral-gray-dark": "hsl(0, 0%, 48%)",
      white: "hsl(255, 255%, 255%)",
      gray: colors.gray,
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
