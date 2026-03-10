/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: "#FFF8F0",
          100: "#FFEDD5",
          200: "#FED7AA",
          300: "#FDBA74",
          400: "#E8A35E",
          500: "#D4772C",
          600: "#B35F1A",
          700: "#92400E",
        },
        gold: {
          300: "#E2CC7A",
          400: "#D4B85C",
          500: "#C9A84C",
        },
        cream: {
          50: "#FEFCF9",
          100: "#FDF8F0",
          200: "#F5EDE0",
        },
        earth: {
          400: "#8B7355",
          500: "#6B4F3A",
          600: "#5C3D2E",
          700: "#3D2B1F",
        },
        sage: {
          400: "#9BAD8E",
          500: "#7A8B6F",
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Lora"', 'serif'],
        sans: ['"Nunito Sans"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.7s ease-out forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-right': 'slideRight 0.8s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'breathe': 'breathe 5s ease-in-out infinite',
        'shimmer': 'shimmer 4s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(-60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(60px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
