const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "*",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: " ",
        secondary: " ",
      },
      container:{
        center: true,
        padding:{
          default:"1rem",
          sm:"3rem",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

