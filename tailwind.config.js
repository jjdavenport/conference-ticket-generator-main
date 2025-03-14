import fluid, { extract, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ["./src/**/*.{html,js,jsx}"],
    extract,
  },
  theme: {
    screens,
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
      outlineOffset: {
        3: "3px",
      },
      backgroundImage: {
        ticket: "url('../src/assets/pattern-ticket.svg')",
      },
    },
  },
  plugins: [
    fluid,
    function ({ addUtilities }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
