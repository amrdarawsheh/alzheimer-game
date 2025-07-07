/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Casino green theme
        casino: {
          50: '#f0f9f0',
          100: '#dcf2dc',
          200: '#bce4bc',
          300: '#8fd18f',
          400: '#5cb85c',
          500: '#0f7b0f',  // Primary casino green
          600: '#0d6b0d',
          700: '#0a5a0a',
          800: '#084908',
          900: '#063d06',
        },
        // Card red theme
        card: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#dc2626',  // Card red
          600: '#b91c1c',
          700: '#991b1b',
          800: '#7f1d1d',
          900: '#671b1b',
        },
        // Gold accent theme
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Primary gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Rich neutrals for table
        felt: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0f1419',
        }
      },
      backgroundImage: {
        'felt-texture': 'linear-gradient(135deg, #0f7b0f 0%, #0d6b0d 50%, #0a5a0a 100%)',
        'card-back': 'linear-gradient(45deg, #1e3a8a 0%, #3b82f6 50%, #1e40af 100%)',
        'table-edge': 'linear-gradient(to bottom, #92400e 0%, #78350f 100%)',
        'casino-table': 'radial-gradient(ellipse at center, #0f7b0f 0%, #0d6b0d 40%, #0a5a0a 100%)',
        'table-felt': 'linear-gradient(45deg, #0f7b0f 25%, transparent 25%), linear-gradient(-45deg, #0f7b0f 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #0a5a0a 75%), linear-gradient(-45deg, transparent 75%, #0a5a0a 75%)',
        'room-ambient': 'radial-gradient(ellipse at top, #1a1a1a 0%, #0f0f0f 100%)',
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
        'table': 'inset 0 0 20px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}