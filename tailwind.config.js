module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "back": "url(/src/assets/back.jpg)",
        "back-gris": "url(/src/assets/back-gris.jpg)",
      },
      fontFamily: {
        "abel": "abel",
      },
    },
  },
  plugins: [],
}
