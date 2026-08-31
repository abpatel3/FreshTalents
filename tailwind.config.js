/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3D',
          dark: '#081327',
          light: '#16305F',
        },
        gold: {
          DEFAULT: '#D9A520',
          hover: '#C79215',
          soft: '#E8C35A',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          light: '#F8FAFC',
          muted: '#EEF2F7',
        },
        border: {
          DEFAULT: '#E5EAF2',
          dark: '#D7DEE8',
        },
        text: {
          primary: '#111827',
          secondary: '#64748B',
          muted: '#94A3B8',
        },
        success: {
          DEFAULT: '#22C55E',
        }
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(13, 27, 61, 0.05), 0 1px 4px -1px rgba(13, 27, 61, 0.03)',
        card: '0 12px 32px -8px rgba(13, 27, 61, 0.08), 0 0 0 1px #E5EAF2',
        glow: '0 0 24px -4px rgba(217, 165, 32, 0.25)',
      },
      borderRadius: {
        '20': '20px',
        '28': '28px',
      }
    },
  },
  plugins: [],
}
