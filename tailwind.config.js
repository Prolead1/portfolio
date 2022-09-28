/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,tsx,ts,js,jsx}'],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '0%, 100%': {
            opacity: '1',
          },
          '50%': {
            opacity: '0',
          },
        },
      },
      animation: {
        blink: 'blink 0.75s ease-in-out infinite',
        'pulse-fast': 'pulse 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
