import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg:          '#000000',
          surface:     '#0A0A0A',
          border:      '#1A1A1A',
          footer:      '#111111',
          text:        '#E8E8E8',
          muted:       '#555555',
          headline:    '#CC2020',
          subheadline: '#6B1515',
          accent:      '#FFF004',
          cta:         '#CC2020',
          'cta-hover': '#A81A1A',
          error:       '#FF4444',
        },
      },
      fontFamily: {
        brand: ['var(--font-brother)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
