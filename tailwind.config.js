/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#4F46E5",
          dark: "#818CF8"
        },
        secondary: {
          light: "#10B981",
          dark: "#34D399"
        },
        accent: {
          light: "#8B5CF6",
          dark: "#A78BFA"
        },
        background: {
          light: "#F8FAFC",
          dark: "#111827"
        },
        card: {
          light: "#FFFFFF",
          dark: "#1F2937"
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [],
}