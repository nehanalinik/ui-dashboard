/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#6f94fc",
          700: "#263463",
        },
        greyshades: {
          100: "#FFFFFF",
          300: "#A2A3A5",
          400: "#45464B",
          500: "#2A2B30",
          600: "#202028",
          900: "#141416",
        },
        greenColor: {
          400: "#00C98D",
          700: "#165044",
        },
        redColor: {
          400: "#F15D5D",
          700: "#5F3237",
        },
        pinkColor: {
          400: "#EA3FA5",
          700: "#5C2E4B",
        },
        tealColor: {
          400: "#239AD0",
          700: "#214A60",
        },
        yellowColor: {
          400: "#FCDE2F",
        },
      },
    },
  },
  plugins: [],
};
