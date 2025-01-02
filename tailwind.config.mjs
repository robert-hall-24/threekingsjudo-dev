/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-left': 'slideInLeft 1s ease-in-out',
        'slide-in-right': 'slideInRight 1s ease-in-out',
        'slide-in-up': 'slideInUp 1s ease-in-out',
        'slide-in-down': 'slideInDown 1s ease-in-out',
        'hover-ring': 'ringing 1.5s infinite',
        'hover-bounce': 'bounceIn 0.3s ease-in-out',
        'highlight-fade': 'fadeHighlight 1s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ringing: {
          '0%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(2deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '75%': { transform: 'rotate(-2deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        bounceIn: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        fadeHighlight: {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: '#ffd700' },
          '100%': { backgroundColor: 'transparent' },
        },
      },
      colors: {
        'logo-color': '#B49C78',
        'dark-color-logo': '#8d7e66',
      },
      fontFamily: {
        righteous: ['Righteous', 'cursive'],
        kosugi: ['Kosugi Maru', 'sans-serif'],
        fahkwang: ['Fahkwang', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
