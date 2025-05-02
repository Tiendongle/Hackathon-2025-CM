/** @type {import('tailwindcss').Config} */

// Example to modify Tailwind Config
// https://github.com/apptainer/apptainer.org/blob/master/tailwind.config.mjs
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inclusive Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        boldBorder: "#2D3648",
        lightBolder: "#CBD2E0",
        "theme-orange": "#FF4B33",
      },
    },
  },
};
