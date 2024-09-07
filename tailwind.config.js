/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Work Sans', 'sans-serif'],
        title: ['Oswald', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",
        border: "rgba(var(--border))",
        card: "rgba(var(--card))",
        "copy-primary": "rgba(var(--copy-primary))",
        "copy-secondary": "rgba(var(--copy-secondary))",
        "yellow-primary": "rgba(var(--yellow-primary))",
        "yellow-secondary": "rgba(var(--yellow-secondary))",
      },
    },
  },
  plugins: [],
}

