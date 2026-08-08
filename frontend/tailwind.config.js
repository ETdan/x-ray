/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#EEF0EC", // Soft Neumorphic base
          light: "#F5F7F3",
          dark: "#E3E6E0",
        },
        ink: {
          DEFAULT: "#1C1E1B", // Soft Black
          light: "#3A3D39",
          muted: "#6A6E68",
        },
        primary: {
          DEFAULT: "#3B5EDB", // Vibrant but soft Indigo
          light: "#5C7CFA",
          dark: "#2A41A1",
        },
        accent: {
          danger: "#E03131",
          warning: "#F08C00",
          success: "#2F9E44",
        },
        neutral: {
          50: "#F8F9F8",
          100: "#F1F3F0",
          200: "#E6E9E4",
          300: "#D3D7D0",
          400: "#ADB5AA",
          500: "#868E82",
          600: "#60675D",
          700: "#495047",
          800: "#343A33",
          900: "#222621",
        }
      },
      boxShadow: {
        'neu-1': '8px 8px 16px rgba(180, 185, 178, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8)',
        'neu-2': '12px 12px 24px rgba(180, 185, 178, 0.45), -12px -12px 24px rgba(255, 255, 255, 0.9)',
        'neu-3': '6px 6px 12px rgba(180, 185, 178, 0.35), -6px -6px 12px rgba(255, 255, 255, 0.8)',
        'neu-inset': 'inset 4px 4px 8px rgba(180, 185, 178, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.8)',
        'neu-primary': '6px 6px 16px rgba(59, 94, 219, 0.35), -4px -4px 12px rgba(255, 255, 255, 0.6)',
      },
      borderRadius: {
        'neu-sm': '10px',
        'neu-md': '16px',
        'neu-lg': '20px',
        'neu-xl': '28px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
