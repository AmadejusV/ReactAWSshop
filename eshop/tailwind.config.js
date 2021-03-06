// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxHeight: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxWidth: {
        "1/2": "50%",
      },
    },
  },
  variants: {
    extend: {
      translate: ["active"],
    },
  },
  plugins: [],
};
