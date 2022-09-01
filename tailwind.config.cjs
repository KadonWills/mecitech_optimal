/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class" ,
  theme: {
    colors: {
      primary: "#0258ad",
      secondary: "#0f9922",
      light: "#e4e4e4",
      dark: "#213547"
    },
    fontFamily: {
      'thin': ["'rbno3.1light'", 'sans-serif'],
      'black': ["'rbno3.1black'", 'sans-serif'],
      'ultra': ["'rbno3.1ultra'", 'sans-serif'],
      'sans': ["Raleway",'Poppins', 'Montserrat', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
