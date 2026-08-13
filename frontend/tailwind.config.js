/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          hover: "#4338CA",
          light: "#EEF2FF",
        },
        accent: {
          DEFAULT: "#FACC15",
          hover: "#EAB308",
          warning: "#F59E0B",
          success: "#16A34A",
          danger: "#DC2626",
        },
        background: {
          DEFAULT: "#F8FAFC",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          secondary: "#F1F5F9",
          tertiary: "#E2E8F0",
          glass: "rgba(255, 255, 255, 0.72)",
        },
        text: {
          DEFAULT: "#172033",
          muted: "#64748B",
          light: "#94A3B8",
        },
        border: {
          DEFAULT: "#E2E8F0",
          subtle: "#F1F5F9",
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.03), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'hover': '0 12px 20px -5px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)',
        'modal': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        'card': '16px',
        'surface': '20px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}

