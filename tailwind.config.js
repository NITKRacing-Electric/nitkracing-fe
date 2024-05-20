const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  darkMode: "class",
  theme: {

    extend: {
      boxShadow: {
        'custom-gray': '0 4px 6px rgba(128, 128, 128, 0.5)', // Customize as needed
        'custom-red': '0 0 40px 5px rgba(255, 0, 0, 0.5)', // Example of a custom red shadow
        'dark-red':'0 0 80px 20px rgba(255, 0, 0, 0.5)',
      },
      animation: {
          aurora: "aurora 60s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
          aurora: {
                   from: {
                     backgroundPosition: "50% 50%, 50% 50%",
                   },
                   to: {
                     backgroundPosition: "350% 50%, 350% 50%",
                   },
                 },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
