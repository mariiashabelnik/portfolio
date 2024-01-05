/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Ubuntu Mono", "system-ui"],
      headline: ["Tektur", "system-ui"],
      tags: ["Ubuntu Mono", "system-ui"],
    },
    fontSize: {
      title: ["5rem", { lineHeight: "5rem", fontWeight: "900" }],
      titlePhone: ["3rem", { lineHeight: "3rem", fontWeight: "900" }],
      subT: ["3.5rem", { lineHeight: "3.5rem", fontWeight: "800" }],
      subTPhone: ["2.5rem", { lineHeight: "2.5rem", fontWeight: "800" }],
      subTMini: ["1.4rem", { lineHeight: "1.4rem", fontWeight: "900" }],
      subTMiniPhone: ["1.2rem", { lineHeight: "1.2rem", fontWeight: "800" }],
      tags: ["0.8rem", { fontWeight: "400" }],
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        neon: "#ccff00",
        bgColor: "#031417",
        highlight: "#ccff00",
      },
      dropShadow: {
        light: "0 0 5px theme('colors.indigo.800')",
        yellow: "0 0 9px theme('colors.lime.400')",
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
