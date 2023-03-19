/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{js,jsx,ts,tsx,html}",
    "./src/**/*.{js,jsx,ts,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#d9e6e9",
          medium: "rgb(91, 151, 166)",
        },
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
