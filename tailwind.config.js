/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      /* //3D logo font
      logo3D: ["Nabla", "system-ui"], */

      //logo font
      logo: ["Sixtyfour", "system-ui"],
      //headline-title text
      ht: ["Sora", "system-ui"],
      //body text
      sans: ["Jura", "system-ui"],
      //nav
      tags: ["Raleway", "system-ui"],
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
      base: "1.2rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      colors: {
        neon: "#caebfa",
        bgColor: "#F0F0F3",
        highlight: "#D2D2D2",
      },
      //20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
      boxShadow: {
        box: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
      },

      dropShadow: {
        light: "0 0 5px theme('colors.sky.100')",
        gray: "0 0 9px #8c92a8",
        doublelight: ["0 0 5px #96989a", "0 0 15px #a0d9fa"],
        //doublelight:
        active: [
          "0 0 5px theme('colors.sky.300')",
          "0 0 15px theme('colors.sky.100')",
        ],
      },
    },
  },
  plugins: [],
};
