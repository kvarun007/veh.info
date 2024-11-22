/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans:["Audiowide","DynaPuff","Roboto"],
        loto: ["Audiowide","Lato","DynaPuff","Roboto","Work+Sans"],
      }
    },
  },
  plugins: [],
}

