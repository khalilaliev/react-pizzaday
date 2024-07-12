/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    letterSpacing: {
      wide: ".05em",
    },
    colors: {
      "bg-color": "#EAB308",
      "custom-gray": "#44403C",
      "custom-border": "#E7E5E4",
    },
    extend: {},
  },
  plugins: [],
};
