/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ffea3d',
        secondary: '#2b2e34',
        background: '#000000',
      },
      animation: {
        'bounce': 'bounce 1s infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'super-glow': 'super-glow 2s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'brightness(100%)',
          },
          '50%': {
            opacity: '.9',
            filter: 'brightness(150%)',
          },
        },
        'super-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px theme("colors.primary"), 0 0 10px theme("colors.primary"), 0 0 15px theme("colors.primary")',
          },
          '50%': {
            boxShadow: '0 0 10px theme("colors.primary"), 0 0 20px theme("colors.primary"), 0 0 30px theme("colors.primary")',
          },
        },
      },
    },
  },
  plugins: [],
};