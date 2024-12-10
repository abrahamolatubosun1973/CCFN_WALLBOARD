const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".iframe-hidden-footer": {
          overflow: "hidden",
        },
        ".iframe-footer-hidden::after": {
          content: '""',
          display: "none",
        },
      });
    }),
  ],
};
