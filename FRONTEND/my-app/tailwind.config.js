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
      },
      borderImage: {
        gradient: "linear-gradient(to top, #e2e2e2, #c2c2c2, #e2e2e2)",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
}

