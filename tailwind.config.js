/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["28px", "50px"],
      "3.5xl": ["35px", "48.5px"],
      "4xl": ["48px", "58px"],
      "5xl": ["64px", "72px"],
      "6xl": ["3.5rem", "4rem"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      colors: {
        golden: "#DCCA87",
        black: "#0C0C0C",
        gray: "#545454",
        crimson: "#F5EFDB",
        grey: "#AAAAAA",
        white: "#FFFFFF",
      },
      fontFamily: {
        base: ["Cormorant Upright", "serif"],
        alt: ["Open Sans", "sans-serif"],
      },
      screens: {
        ultra: "2000px",
        wide: "1440px",
        xs: "360px",
      },
      letterSpacing: {
        custom: "0.04rem",
      },
      backgroundImage: {
        "bg-image": "url(assets/bg.png)",
      },
    },
  },
  plugins: [],
};
