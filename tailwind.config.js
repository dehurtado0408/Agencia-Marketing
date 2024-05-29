/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red-button": '#F84E45'
      }
    },
    boxShadow: {
      navbar: "0px 10px 8px 0px rgba(3, 3, 4, 0.03), 0 1px 2px -1px rgba(3, 3, 4, 0.03)",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
          'textDecoration': 'underline',
          'text-decoration-color': '#F84E45',
        },
      }
      addUtilities(extendUnderline)
    }
  ],
}

