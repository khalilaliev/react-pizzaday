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
      "custom-red": "#FF0000",
      "input-bg": "#FCF097",
    },
    outline: {
      orange: "1px solid #EAB308",
    },
    height: {
      "calc-100vh-minus-120px": "calc(100vh - 120px)",
    },
    fontFamily: {
      "source-code": ["Source Code Pro", "monospace"],
    },
    extend: {},
  },
  plugins: [],
};
