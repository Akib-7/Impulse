/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading1: ["'Exo 2'", "system-ui"],
        heading2: ["'NullShock'"],
      },
    },
  },
  plugins: [],
};
