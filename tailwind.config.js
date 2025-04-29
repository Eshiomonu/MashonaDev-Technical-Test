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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#EBFFE2", // Custom theme color
        secondary: "#525252",
        heroStrong: "#C5ECF4E5", // hero overlay strong
        heroMild: "#E2F5F9E5", // heor overlay mild
      },
    },
  },
  plugins: [],
};
