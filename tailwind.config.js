/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dream: {
          bg: '#1a0f2e',
          bg2: '#0f172a',
          card: '#221540',
          purple: '#a78bfa',
          pink: '#f472b6',
          teal: '#34d399',
          text: '#e2e8f0',
          muted: '#94a3b8',
        },
        rank: {
          s: '#a78bfa',
          a: '#f472b6',
          b: '#60a5fa',
          c: '#94a3b8',
        },
      },
      fontFamily: {
        heading: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        dream: '0.04em',
      },
      boxShadow: {
        glow: '0 0 18px rgba(167, 139, 250, 0.25)',
        'glow-lg': '0 0 32px rgba(167, 139, 250, 0.35)',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '1' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      animation: {
        twinkle: 'twinkle 2.4s ease-in-out infinite',
        scanline: 'scanline 1.2s linear infinite',
        floaty: 'floaty 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
