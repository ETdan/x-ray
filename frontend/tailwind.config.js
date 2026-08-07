/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111827", // Deep Ink Black
          light: "#374151",
          muted: "#6B7280",
        },
        paper: {
          DEFAULT: "#FDFBF7", // Warm Cream / Paper White
          dark: "#F4F1EA",
        },
        primary: {
          DEFAULT: "#1E3A8A", // Prussian Blue
          light: "#3B82F6",
        },
        accent: {
          vermilion: "#DC2626", // Vermilion / Red
          ochre: "#D97706",    // Ochre / Mustard Yellow
          green: "#059669",    // Muted Green
          indigo: "#4F46E5",   // Indigo
        },
        neutral: {
          50: "#FDFBF7",
          100: "#F4F1EA",
          200: "#E5E1D8",
          300: "#D1CFC7",
          400: "#9CA3AF",
          500: "#6B7280",
          800: "#1F2937",
          900: "#111827",
        },
        success: "#059669", // Muted Green
        danger: "#DC2626", // Vermilion
        warning: "#D97706", // Ochre
      },
      boxShadow: {
        'editorial': '0 4px 14px 0 rgba(17, 24, 39, 0.05), 0 2px 4px 0 rgba(17, 24, 39, 0.03)',
        'editorial-hover': '0 6px 20px 0 rgba(17, 24, 39, 0.08), 0 3px 6px 0 rgba(17, 24, 39, 0.04)',
        'editorial-sm': '0 1px 3px 0 rgba(17, 24, 39, 0.08), 0 1px 2px 0 rgba(17, 24, 39, 0.04)',
      },
      borderRadius: {
        'editorial': '12px',
        'editorial-sm': '8px',
        'editorial-lg': '16px',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'], // Prioritizing readable sans
        serif: ['Merriweather', 'Georgia', 'serif'], // Editorial feel
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'halftone': 'radial-gradient(circle, rgba(17,24,39,0.08) 1px, transparent 1px)',
        'stripes': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(17,24,39,0.02) 10px, rgba(17,24,39,0.02) 20px)',
      }
    },
  },
  plugins: [],
}
