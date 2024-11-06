module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
      },
    },
    screens: {
      1560: { max: "1560px" },
      1440: { max: "1440px" },
      1280: { max: "1280px" },
      1240: { max: "1240px" },
      1040: { max: "1040px" },
      995: { max: "995px" },
      895: { max: "895px" },
      795: { max: "795px" },
      695: { max: "695px" },
      595: { max: "595px" },
      580: { max: "580px" },
      495: { max: "495px" },
      400: { max: "400px" },
    },
  },
  plugins: [],
};
