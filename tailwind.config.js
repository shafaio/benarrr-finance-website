/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          DEFAULT: "1130px",
        },
      },
      colors: {
        primary: "#5313CA",
        secondary: "#FF9736",
        tertiary: "#75F1F1",
        black: "#050729",
      },
      fontFamily: {
        clash: ["Clash Display"],
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideToR: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slideToT: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-100%)" },
        },
        slideToB: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
      },
      boxShadow: {
        custom: "0 0 50px -2px rgba(5, 7, 41, 0.11)",
      },
    },
  },
  plugins: [],
};
