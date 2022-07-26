/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
    colors: ({ colors }) => ({
      ...colors,
      white: "#f2f3f7",
      neutral: {
        ...colors.gray,
        '700': "#2a2c42",
        '800': "#202130",
        '850': "#1b1c29",
        '900': "#1a1b26"
      },
    }),
  },
  plugins: [],
};
