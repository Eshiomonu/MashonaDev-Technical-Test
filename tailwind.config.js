/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        btnActive: "#262A48",
        banner: "#262A48",
        primary: "#EBFFE2", // Custom theme color
        secondary: "#525252",
      },
      backgroundImage: {
        "hero-pattern": "url('/blend.png')",
      },
    },
  },
  plugins: [],
};
