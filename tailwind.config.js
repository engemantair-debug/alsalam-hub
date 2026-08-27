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
          DEFAULT: "#0F1E30",
          soft: "#4A5A6B",
        },
        primary: {
          DEFAULT: "#14345B",
          deep: "#0B2340",
          light: "#1E4A7C",
        },
        secondary: {
          DEFAULT: "#2159A0",
          light: "#3E76BE",
        },
        accent: {
          DEFAULT: "#E31E3C",
          deep: "#B71430",
          light: "#F04D64",
        },
        paper: {
          DEFAULT: "#FAF9F5",
          alt: "#F1F4F8",
          line: "#E4E1D8",
        },
      },
      fontFamily: {
        display: ["Cairo", "sans-serif"],
        body: ["Tajawal", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px -12px rgba(15, 30, 48, 0.18)",
        card: "0 4px 20px -6px rgba(15, 30, 48, 0.12)",
        lift: "0 20px 40px -16px rgba(15, 30, 48, 0.28)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(16px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(2deg)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out both",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        spinSlow: "spinSlow 70s linear infinite",
      },
    },
  },
  plugins: [],
}
