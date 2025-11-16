/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Flexoki color palette
        // Base colors
        'flexoki-black': '#100F0F',
        'flexoki-paper': '#FFFCF0',
        
        // Base tones
        'flexoki-950': '#1C1B1A',
        'flexoki-900': '#282726',
        'flexoki-850': '#343331',
        'flexoki-800': '#403E3C',
        'flexoki-700': '#575653',
        'flexoki-600': '#6F6E69',
        'flexoki-500': '#878580',
        'flexoki-300': '#B7B5AC',
        'flexoki-200': '#CECDC3',
        'flexoki-150': '#DAD8CE',
        'flexoki-100': '#E6E4D9',
        'flexoki-50': '#F2F0E5',
        
        // Red
        'flexoki-red-600': '#AF3029',
        'flexoki-red-400': '#D14D41',
        
        // Orange
        'flexoki-orange-600': '#BC5215',
        'flexoki-orange-400': '#DA702C',
        
        // Yellow
        'flexoki-yellow-600': '#AD8301',
        'flexoki-yellow-400': '#D0A215',
        
        // Green
        'flexoki-green-600': '#66800B',
        'flexoki-green-400': '#879A39',
        
        // Cyan
        'flexoki-cyan-600': '#24837B',
        'flexoki-cyan-400': '#3AA99F',
        
        // Blue
        'flexoki-blue-600': '#205EA6',
        'flexoki-blue-400': '#4385BE',
        
        // Purple
        'flexoki-purple-600': '#5E409D',
        'flexoki-purple-400': '#8B7EC8',
        
        // Magenta
        'flexoki-magenta-600': '#A02F6F',
        'flexoki-magenta-400': '#CE5D97',
      },
    },
  },
  plugins: [],
}
