module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        nft: "url('/nfthunt.png')",
        charities: "url('/charities.png')",
        jobs: "url('/jobs.png')",
      },
    },
  },
  plugins: [],
}
