/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'navFont': ['Roboto Condensed', 'sans-serif', 'monospace'],
        'secFont': ['Courier Prime', 'sans-serif', 'monospace'],
        'btnFont': ['Ubuntu', 'sans-serif', 'monospace'],
        'vsFont': ['Fira Code', 'sans-serif', 'monospace'],
      },
      animation: {
        'typing': 'typing 1.5s steps(10) 1 normal both',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        typing: {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        blink: {
          '50%': { opacity: 0 },
        },
      },
    },
  },
  plugins: [tailwindScrollbar],
}
