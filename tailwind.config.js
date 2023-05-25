/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'tablet': '768px',
        // => @media (min-width: 768px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'pc-min': '1280px',
        // => @media (min-width: 1280px) { ... }
      }
    },
  },
  plugins: [],
}

