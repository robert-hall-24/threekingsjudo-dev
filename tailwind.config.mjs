/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
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
