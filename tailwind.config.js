/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          50: '#ecfdf5',
          100: '#d1fae5',
          500: 'var(--color-primary)',
          600: 'var(--color-primary-hover)',
          700: '#065f46',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          50: '#eef2ff',
          100: '#e0e7ff',
          500: 'var(--color-secondary)',
          600: 'var(--color-secondary-hover)',
          700: '#3730a3',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          500: 'var(--color-accent)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
        },
        border: 'var(--color-border)',
      },
      fontFamily: {
        bangla: ['Noto Sans Bengali', 'NikoshBAN', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      spacing: {
        'section': 'var(--spacing-section)',
      },
    },
  },
  plugins: [],
}
