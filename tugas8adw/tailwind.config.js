module.exports = {
  content: ["./src/**/*.html"],
  darkMode: "class", // Menambahkan opsi dark mode
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Warna biru khusus
        secondary: "#FBBF24", // Warna kuning khusus
        lightBackground: "#FFFFFF", // Warna background terang
        darkBackground: "#1A202C", // Warna background gelap
        lightText: "#1A202C", // Warna teks terang
        darkText: "#E2E8F0", // Warna teks gelap
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
