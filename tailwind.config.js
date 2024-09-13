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
      screens: {
        'ml': '410px', // Custom breakpoint named 2xl
      },
      textShadow: {
        'yellow-outline': '0 0 2px yellow, 0 0 5px yellow',
      },
      fontSize: {
        'tiny': '0.625rem', // 10px
        'huge': '15rem',     
        'medium': '12rem',     
      },
      boxShadow: {
        'custom-gray': '0 4px 6px rgba(128, 128, 128, 0.5)', // Customize as needed
        'custom-red': '0 0 40px 5px rgba(255, 0, 0, 0.5)', // Example of a custom red shadow
        'dark-red':'0 0 50px 10px rgba(245, 0, 0, 0.5)',
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [addVariablesForColors,
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-yellow-outline': {
          'text-shadow': '0 0 2px yellow, 0 0 5px yellow',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
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
