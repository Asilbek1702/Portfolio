/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:      '#060910',
        surface: '#0D1521',
        card:    '#111827',
        border:  'rgba(255,255,255,0.08)',
        blue:    '#63B3ED',
        purple:  '#9F7AEA',
        pink:    '#F687B3',
        dim:     '#A0AEC0',
        muted:   '#4A5568',
        bright:  '#E8EAED',
      },
      fontFamily: {
        sans:  ['Sora', 'system-ui', 'sans-serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-med':  'float 6s ease-in-out infinite',
        'spin-slow':  'spin 25s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'blink':      'blink 1.2s step-end infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-18px)' },
        },
        blink: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0' },
        },
      },
      backgroundImage: {
        'grad-blue-purple': 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
        'grad-hero':        'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(59,130,246,0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-blue':   '0 0 40px rgba(99, 179, 237, 0.15)',
        'glow-purple': '0 0 40px rgba(159, 122, 234, 0.15)',
        'card':        '0 4px 24px rgba(0,0,0,0.4)',
        'card-hover':  '0 20px 60px rgba(0,0,0,0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
