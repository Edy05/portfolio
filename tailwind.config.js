/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terminal-bg': '#0d1117',       // Fondo oscuro (estilo GitHub Dark, no negro puro)
        'terminal-card': '#161b22',     // Fondo para tarjetas o secciones
        'terminal-border': '#30363d',   // Bordes sutiles para separar elementos
        'terminal-green': '#00ff9d',    // Verde neón para acentos y botones
        'terminal-cyan': '#00e5ff',     // Cyan para detalles secundarios
        'terminal-text': '#c9d1d9',     // Texto principal (blanco roto, fácil de leer)
        'terminal-muted': '#8b949e',    // Texto secundario o descripciones
      },
      fontFamily: {
        mono: ['"Fira Code"', '"Courier New"', 'monospace'], // Fuente tipo terminal para títulos
        sans: ['"Inter"', 'system-ui', 'sans-serif'],        // Fuente limpia para párrafos largos
      },
    },
  },
  plugins: [],
}