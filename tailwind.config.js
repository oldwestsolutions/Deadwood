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
        dw: {
          bg: '#0A0A08',
          surface: '#1A1814',
          tan: '#C9A96E',
          cream: '#EDE9E0',
          muted: '#7A7570',
          highlight: '#D4B896',
          glow: 'rgba(201, 169, 110, 0.08)',
          /** Subtle Snowflake-themed accent — use sparingly (~10% opacity in rgba) */
          snow: '#E0F5FF',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        card: '24px',
        pill: '999px',
      },
      boxShadow: {
        'dw-glow': '0 0 80px rgba(201, 169, 110, 0.08)',
        'dw-glow-sm': '0 0 40px rgba(201, 169, 110, 0.06)',
        'dw-glow-ice': '0 0 64px rgba(224, 245, 255, 0.06)',
      },
      backgroundImage: {
        'dw-radial-warm':
          'radial-gradient(ellipse 80% 60% at 85% 12%, rgba(201, 169, 110, 0.14) 0%, transparent 55%)',
      },
      spacing: {
        section: 'clamp(5rem, 12vw, 9rem)',
      },
    },
  },
  plugins: [],
};
