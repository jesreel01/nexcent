import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        primary: "#4CAF4F",
        secondary: "#263238",
        info: "#2194f3",
        neutral: {
          black: "#263238",
          d_grey: "#4D4D4D",
          grey: "#717171",
          l_grey: "#89939E",
          grey_blue: "#ABBED1",
          silver: "#F5F7FA",
          white: "#FFFFFF",
        },
        shade: {
          shade_1: "#43A046",
          shade_2: "#388E3B",
          shade_3: "#237D31",
          shade_4: "#1B5E1F",
          shade_5: "#103E13",
        },
        tint: {
          tint_1: "#66BB69",
          tint_2: "#81C784",
          tint_3: "#A5D6A7",
          tint_4: "#C8E6C9",
          tint_5: "#E8F5E9",
        },
        action: {
          warning: "#FBC02D",
          error: "#E53835",
          success: "#2E7D31",
        },
      },
      fontSize: {
        regular: "1rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }: any) {
      const newUtilities = {
        ".text-body-1": {
          fontSize: "18px",
          lineHeight: "28px",
        },
        ".text-body-2": {
          fontSize: "16px",
          lineHeight: "24px",
        },
        ".text-body-3": {
          fontSize: "14px",
          lineHeight: "20px",
        },
        ".text-body-4": {
          fontSize: "12px",
          lineHeight: "16px",
        },
        ".text-body-m-1": {
          fontSize: "18px",
          lineHeight: "28px",
          fontWeight: 500,
        },
        ".text-body-m-2": {
          fontSize: "16px",
          lineHeight: "24px",
          fontWeight: 500,
        },
        ".text-body-m-3": {
          fontSize: "14px",
          lineHeight: "20px",
          fontWeight: 500,
        },
        ".text-body-m-4": {
          fontSize: "12px",
          lineHeight: "16px",
          fontWeight: 500,
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
export default config;
