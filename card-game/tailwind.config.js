/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'casino': ['Playfair Display', 'serif'], // Alias for casino elegance
      },
      colors: {
        // Casino green theme - Rich felt colors
        casino: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#16a34a',  // Rich casino green
          600: '#15803d',  // Deep felt green
          700: '#166534',  // Table edge green
          800: '#14532d',  // Shadow green
          900: '#052e16',  // Dark casino green
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
        // Gold accent theme - Luxury casino accents
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',  // Primary gold
          600: '#d97706',  // Rich gold
          700: '#b45309',  // Deep gold
          800: '#92400e',  // Bronze accent
          900: '#78350f',  // Dark bronze
        },
        // Vibrant suit colors
        suits: {
          hearts: '#dc2626',    // Vibrant red
          diamonds: '#dc2626',  // Vibrant red  
          clubs: '#1f2937',     // Rich black
          spades: '#1f2937',    // Rich black
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
        'felt-texture': 'linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)',
        'rich-felt': 'radial-gradient(ellipse at center, #16a34a 0%, #15803d 60%, #166534 100%)',
        'card-back': 'linear-gradient(45deg, #3b82f6 0%, #1d4ed8 50%, #1e40af 100%)',
        'gold-accent': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'table-edge': 'linear-gradient(to bottom, #92400e 0%, #78350f 100%)',
        'casino-table': 'radial-gradient(ellipse at center, #16a34a 0%, #15803d 40%, #166534 100%)',
        'luxury-felt': 'linear-gradient(45deg, #16a34a 25%, transparent 25%), linear-gradient(-45deg, #16a34a 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #166534 75%), linear-gradient(-45deg, transparent 75%, #166534 75%)',
        'room-ambient': 'radial-gradient(ellipse at top, #1a1a1a 0%, #0f0f0f 100%)',
        'vibrant-card': 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
        'suit-hearts': 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        'suit-diamonds': 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        'suit-clubs': 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
        'suit-spades': 'linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)',
      },
      boxShadow: {
        'card': '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
        'card-3d': '0 6px 12px rgba(0, 0, 0, 0.25), 0 3px 6px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        'table': 'inset 0 0 20px rgba(0, 0, 0, 0.2), 0 4px 20px rgba(0, 0, 0, 0.3)',
        'felt-depth': 'inset 0 0 30px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2)',
        'gold-glow': '0 0 20px rgba(251, 191, 36, 0.3), 0 4px 8px rgba(0, 0, 0, 0.2)',
        'button-casino': '0 4px 12px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
      }
    },
  },
  plugins: [],
}