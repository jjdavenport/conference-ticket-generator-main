/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["inconsolata", "sans-serif"],
      },
      colors: {
        neutral0: "hsl(0, 0%, 100%)",
        neutral300: "hsl(252, 6%, 83%)",
        neutral500: "hsl(245, 15%, 58%)",
        neutral700: "hsl(245, 19%, 35%)",
        neutral900: "hsl(248, 70%, 10%)",
        orange500: "hsl(7, 88%, 67%)",
        orange700: "hsl(7, 71%, 60%)",
        gradientStart: "hsl(7, 86%, 67%)",
        gradientEnd: "hsl(0, 0%, 100%)",
      },
      backgroundImage: {
        mobile: "url('./src/assets/background-mobile.png')",
        tablet: "url('./src/assets/background-tablet.png')",
        desktop: "url('./src/assets/background-desktop.png')",
        top: "url('./src/assets/pattern-squiggly-line-top.svg')",
        bottom: "url('./src/assets/pattern-squiggly-line-bottom.svg')",
      },
    },
  },
  plugins: [],
};
