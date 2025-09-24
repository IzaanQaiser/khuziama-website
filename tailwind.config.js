/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cappuccino': '#D2B48C',
        'muted-purple': '#8B7D9A',
        'dark-green': '#2D5016',
      },
    },
  },
  plugins: [],
}
