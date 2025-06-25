/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#315659",  // Main color
        secondary: "#022F40", // Darker shade
        accent: "#5FA8D3",  // Lighter shade
      },
      fontFamily: {
        // Add custom fonts here
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', 'sans-serif'],       // for body text
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'], // for headers
      },
    },
  },
  plugins: [],
}
