/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: 'hsl(0, 0%, 100%)',
      primary: {
        cyan: 'hsl(180, 66%, 49%)',
        'dark-violet': 'hsl(257, 27%, 26%)',
      },
      secondary: {
        red: 'hsl(0, 87%, 67%)',
      },
      neutral: {
        gray: 'hsl(0, 0%, 75%)',
        'grayish-violet': 'hsl(257, 7%, 63%)',
        'very-dark-blue': 'hsl(255, 11%, 22%)',
        'very-dark-violet': 'hsl(260, 8%, 14%)',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        body: '18px',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-secondary-red': {
          borderColor: 'hsl(0, 87%, 67%)',
        },
        '.placeholder-red::placeholder': {
          color: 'hsl(0, 87%, 67%)',
          opacity: '0.6', // You can adjust the opacity as desired
        },
        '.placeholder-gray::placeholder': {
          color: 'hsl(257, 7%, 63%)',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
}
