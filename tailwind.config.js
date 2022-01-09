module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        larger : "calc(((100vh - 5.75rem) - 6rem) - var(--height))",
      },
    },
  },
  plugins: [],
};
