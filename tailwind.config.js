/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      es: "4px",
      sm: "8px",
      em: "12px",
      md: "16px",
      el: "20px",
      lg: "24px",
      elg: "32px",
      ex: "36px",
      exl: "40px",
      xl: "48px",
    },
    colors: {
      primary: "#1597e4",
      card: "#ffffff",
      cardborder: "#e6e6e6",
      font: "#212121",
      error: "#d86161",
      placholder: "#7a7a7a",
      componentbg: "#d8d8d8",
      backgroundfallback: `rgb(0,0,0, 0.4)`,
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
    extend: {
      borderRadius: {
        "4xl": "10px",
      },
    },
  },
  plugins: [],
};
