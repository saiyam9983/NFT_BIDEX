/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        grey: "#AFAFAF",
        red: "#B6503C",
        violet: "#57466B",
        white: "#fff",
        lightgrey: "#00000080",
        blue: "#427AE8",
      },
      // backgroundImage: {
      //   "hero-img": "/assets/herobg.png",
      //   "footer-texture": "url('/img/footer-texture.png')",
      // },
    },
  },
  plugins: [],
};
