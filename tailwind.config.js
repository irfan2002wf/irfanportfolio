/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        bodi:'#040404',
        tulisan:'#FBFAFC',
        tombol:'#8E05C2',
        navbar:'#3E065F',
        gambar:'#700B97',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui'],
        'serif': ['ui-serif', 'Georgia'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
  },
  plugins: [],
}

