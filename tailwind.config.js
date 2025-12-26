/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,svelte,vue}'],
  theme: {
    extend: {
      colors: {
        azul: '#192253',
        magenta: '#c23a97',
        rosa: '#fb8ad7',
        blanco: '#ffffff',
        // Colores para roles
        'rol-propietario': '#FACC15',     // amarillo
        'rol-administracion': '#EF4444',  // rojo
        'rol-colaborador': '#3B82F6',     // azul
        'rol-visitante': '#10B981',       // verde
      },
      screens: {
		    'max-sm': { max: '800px' },
		},
    },
  },
  plugins: [
    animations
  ],
}

