/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"SF Pro Display"', '"SF Pro Text"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
        display: ['"SF Pro Display"', '-apple-system', 'BlinkMacSystemFont', 'Inter', 'sans-serif'],
        mono: ['"SF Mono"', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      colors: {
        // Dark Mode: Cyan Navy (60%), Ghost White (30%), Neon Pear (10%)
        cyanNavy: '#092742',
        ghostWhite: '#FEFFFA',
        neonPear: '#D23A00',
        // Light Mode: #F5F3EF (60%), #08090B (40%), #FFC900 (10%)
        lightCanvas: '#F5F3EF',
        lightText: '#08090B',
        lightAccent: '#FFC900',
        brand: {
          navy: '#092742',
          ghost: '#FEFFFA',
          accent: '#D23A00',
          lightBg: '#F5F3EF',
          lightInk: '#08090B',
          lightGold: '#FFC900'
        }
      }
    },
  },
  plugins: [],
}
