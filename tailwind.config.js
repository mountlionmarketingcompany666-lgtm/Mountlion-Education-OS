/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0B1F3A',
        royal: '#155EEF',
        teal: '#0E9F9A',
        body: '#475467',
        muted: '#667085',
        canvas: '#F7F9FC',
        line: '#E4E9F1',
      },
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      boxShadow: {
        panel: '0 1px 2px rgba(11,31,58,0.04), 0 12px 32px -12px rgba(11,31,58,0.18)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
}
