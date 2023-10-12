/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto Mono", "system-ui"],
      headline: ["Roboto Mono", "system-ui"],
    },
    extend: {
      colors: {
        neon: "#ccff00",
        bgColor: "#302f39",
      },
      dropShadow: {
        light: "0 0 5px theme('colors.indigo.800')",
        doublelight: [
          "0 0 5px theme('colors.lime.400')",
          "0 0 15px theme('colors.yellow.400')",
        ],
        active: [
          "0 0 5px theme('colors.lime.400')",
          "0 0 15px theme('colors.indigo.950')",
        ],
      },
    },
  },
  plugins: [],
};
