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
        'brutal': '4px 4px 0px 0px rgba(17, 24, 39, 1)',
        'brutal-sm': '2px 2px 0px 0px rgba(17, 24, 39, 1)',
        'brutal-lg': '8px 8px 0px 0px rgba(17, 24, 39, 1)',
        'brutal-hover': '6px 6px 0px 0px rgba(17, 24, 39, 1)',
      },
      borderWidth: {
        '3': '3px',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'], // Or any striking sans
        serif: ['Merriweather', 'Georgia', 'serif'], // Editorial feel
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'halftone': 'radial-gradient(circle, #D1CFC7 1px, transparent 1px)',
        'stripes': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(17,24,39,0.05) 10px, rgba(17,24,39,0.05) 20px)',
      }
    },
  },
  plugins: [],
}
