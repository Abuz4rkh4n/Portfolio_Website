/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "#121212",
        "custom-white": "#F5F5F5",
        "custom-grey": "#acacac",
        "dark-grey": "#333333",
        "custom-blue": "#40a4ff",
        "custom-shade": "#00FFFF",
        "black-background": "#282828",
      },
      fontSize: {
        "1.4rem": "1.4rem",
        "1.6rem": "1.6rem",
        "3rem": "5rem",
        "2.5rem": "2.5rem",
        "2rem": "2rem",
      },
      fontFamily: {
        outfit: "Outfit",
      },
      width: {
        "10rem": "41rem",
        "15rem": "30rem",
      },
      height: {
        "10rem": "10rem",
      },
      boxShadow: {
        "3xl": "0 0 10rem 13rem #00FFFF",
        header: "0 0 1rem 0.2rem #333333",
      },
      spacing: {
        90: "41rem",
        91: "29rem",
      },
      margin: {
        "10rem": "80rem",
      },
      screens: {
        "3xl": "1745px",
      },
    },
  },
  plugins: [],
};
