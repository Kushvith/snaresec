/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#414141',
        'text-dark': '#202124',
        'text-light': '#FFFFFF',
        'web-bg': '#D9D9D9',
      },
      fontFamily: {
        heading: ['Hydrophilia-Heading', 'sans-serif'],
        body: ['Hydrophilia-Body', 'sans-serif'],
      },
  
      animation: {
        'fade-in-up': 'fade-in-up 0.5s ease-out forwards',
        'marquee': 'marquee 10s linear infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
         marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}