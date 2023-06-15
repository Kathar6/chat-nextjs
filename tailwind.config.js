const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-main": "var(--primary-main)",
        "primary-dark": "var(--primary-dark)",
        "secondary-light": "var(--secondary-light)",
        "secondary-main": "var(--secondary-main)",
        "secondary-dark": "var(--secondary-dark)",
      },
    },
  },
  plugins: [],
};
