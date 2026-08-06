/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: '#F8FAFC',
        canvas: '#FFFFFF',
        'surface-alt': '#F1F5F9',
        card: '#FFFFFF',
        primary: {
          50: '#EFF6FF',
          DEFAULT: '#2563EB',
          hover: '#1D4ED8',
          dark: '#1E3A8A',
        },
        heading: '#0F172A',
        body: '#64748B',
        border: '#E2E8F0',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 23, 42, 0.04)',
        'hero-card': '0 25px 50px -12px rgba(15, 23, 42, 0.08), 0 0 0 1px rgba(226, 232, 240, 0.8)',
        'card-hover': '0 20px 25px -5px rgba(15, 23, 42, 0.06), 0 8px 10px -6px rgba(15, 23, 42, 0.03)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}