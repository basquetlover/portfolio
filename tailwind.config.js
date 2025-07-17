/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        azul: '#192253',
        magenta: '#c23a97',
        rosa: '#fb8ad7',
        blanco: '#ffffff'
      },
      screens: {
		    'max-sm': { max: '800px' },
		},
    },
  },
  plugins: [],
}

