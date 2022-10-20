/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: "#333333",
        title: "#4F4F4F",
        cmnbg: "#DCEAFB",
      },
    },
  },
  plugins: [],
};
