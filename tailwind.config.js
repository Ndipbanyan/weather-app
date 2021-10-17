module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      myFont: "Proxima-Nova-Regular",
      myFontBold: "Proxima-Nova-Bold",
    },
    extend: {
      colors: {
        cream: "F5EED7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
