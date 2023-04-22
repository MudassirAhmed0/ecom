module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        myDesk: "2200px",
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      display: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
    },
  },
  plugins: [],
};
