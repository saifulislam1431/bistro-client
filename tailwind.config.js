/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#c1703e",

          "secondary": "#9eef2d",

          "accent": "#fce46a",

          "neutral": "#181221",

          "base-100": "#FFFFFF",

          "info": "#4180C3",

          "success": "#1F7A59",

          "warning": "#EBBB1E",

          "error": "#F95234",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

