/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        party: {
          // Primary — warm orange
          orange: {
            50:  '#FFF8E5',
            100: '#FFEFCC',
            200: '#FFE099',
            300: '#FFD066',
            400: '#FFC133',
            500: '#FF9F1C',
            600: '#CC7F16',
            700: '#995F11',
            800: '#663F0B',
            900: '#332005',
            950: '#1A1003',
          },
          // Primary — coral/red
          coral: {
            50:  '#FDF3F0',
            100: '#FBE6E1',
            200: '#F5C2B4',
            300: '#EF9D88',
            400: '#E9785B',
            500: '#E94B23',
            600: '#BA3C1C',
            700: '#8C2D15',
            800: '#5D1E0E',
            900: '#2E0F07',
            950: '#170804',
          },
          // Accent — soft peach
          peach: {
            50:  '#FFF9F4',
            100: '#FFF0E5',
            200: '#FFDFCC',
            300: '#FFCEB3',
            400: '#FFBD99',
            500: '#FFAD80',
            600: '#CC8A66',
            700: '#99684D',
            800: '#664533',
            900: '#33221A',
          },
          // Accent - Purple (Mapped to Orange for theme consistency)
          purple: {
            50:  '#FFF8E5',
            100: '#FFEFCC',
            200: '#FFE099',
            300: '#FFD066',
            400: '#FFC133',
            500: '#FF9F1C',
            600: '#CC7F16',
            700: '#995F11',
            800: '#663F0B',
            900: '#332005',
            950: '#1A1003',
          },
          // Accent - Pink (Mapped to Coral for theme consistency)
          pink: {
            50:  '#FDF3F0',
            100: '#FBE6E1',
            200: '#F5C2B4',
            300: '#EF9D88',
            400: '#E9785B',
            500: '#E94B23',
            600: '#BA3C1C',
            700: '#8C2D15',
            800: '#5D1E0E',
            900: '#2E0F07',
            950: '#170804',
          },
          // Accent - Gold
          gold: {
            50: '#FEFCE8',
            100: '#FEF9C3',
            200: '#FEF08A',
            300: '#FDE047',
            400: '#FACC15',
            500: '#EAB308',
            600: '#CA8A04',
            700: '#A16207',
            800: '#854D0E',
            900: '#713F12',
            950: '#422006',
          },
          // Dark backgrounds
          dark: {
            800: '#3D3431',
            900: '#211C1A',
            950: '#110E0D',
          }
        }
      },
      fontFamily: {
        sans: ['"Nunito"', 'ui-rounded', '"SF Pro Rounded"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft':           '0 10px 30px -10px rgba(208, 61, 36, 0.12)',
        'glow':           '0 0 25px rgba(245, 166, 35, 0.28)',
        'glow-purple':    '0 0 25px rgba(232, 83, 58, 0.30)',
        'glow-lg':        '0 0 40px rgba(245, 166, 35, 0.32)',
        'card':           '0 8px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        'card-dark':      '0 10px 30px -5px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'card-hover':     '0 20px 35px -10px rgba(208, 61, 36, 0.20)',
        'card-hover-dark':'0 20px 40px -10px rgba(232, 83, 58, 0.30), 0 0 0 1px rgba(245, 166, 35, 0.25)',
      },
      animation: {
        'bounce-slow':    'bounce 3s infinite',
        'pulse-subtle':   'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':          'float 4s ease-in-out infinite',
        'float-delayed':  'float 4s ease-in-out 2s infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
