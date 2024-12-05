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
          'navFont' : ['Roboto Condensed', 'sans-serif', 'monospace'],
          'secFont' : ['Courier Prime', 'sans-serif', 'monospace'],
          'btnFont' : ['Ubuntu', 'sans-serif', 'monospace']
      }
    },
  },
  plugins: [tailwindScrollbar],
}