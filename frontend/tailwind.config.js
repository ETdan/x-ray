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
        },
        accent: {
          DEFAULT: "#FACC15",
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
        },
        text: {
          DEFAULT: "#172033",
          muted: "#64748B",
        },
        border: {
          DEFAULT: "#E2E8F0",
        },
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.05)',
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
