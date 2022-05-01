module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins' , 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}
