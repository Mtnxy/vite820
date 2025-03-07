/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#2D336B",
        primaryContenten: "#7886C7",
        primarySubcontent: "#56021",
        primaryBase: "#4A628A",
        primaryAccent: "#7886C7",
        primaryBg: "#F5F5F5",
      },
    },
  },
  plugins: [],
}

