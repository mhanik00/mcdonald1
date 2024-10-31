/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{html,js}", // Added to include HTML files in src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff3e00', // Example primary color
        secondary: '#00bfff', // Example secondary color
      },
    },
  },
 
}

