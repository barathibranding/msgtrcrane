// import type { Config } from "tailwindcss";

// const config: Config = {
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
//   theme: {
//     container: { center: true, padding: "1.25rem" },
//     extend: {
//       colors: {
//         brand: {
//           50: "#fffbea",
//           100: "#fff3c4",
//           200: "#fce588",
//           300: "#fadb5f",
//           400: "#f7c948",
//           500: "#f0b429",
//           600: "#de911d",
//           700: "#cb6e17",
//           800: "#b44d12",
//           900: "#8d2b0b",
//         },
//         ink: {
//           50: "#f5f7fa",
//           100: "#e9edf3",
//           200: "#cbd5e1",
//           300: "#94a3b8",
//           400: "#64748b",
//           500: "#475569",
//           600: "#334155",
//           700: "#1e293b",
//           800: "#131c2b",
//           900: "#0b1220",
//           950: "#070c16",
//         },
//       },
//       fontFamily: {
//         sans: ["var(--font-sans)", "system-ui", "sans-serif"],
//         display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
//       },
//       boxShadow: {
//         card: "0 10px 30px -12px rgba(7, 12, 22, 0.25)",
//       },
//       keyframes: {
//         "fade-up": {
//           "0%": { opacity: "0", transform: "translateY(14px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       animation: {
//         "fade-up": "fade-up .6s ease-out both",
//       },
//     },
//   },
//   plugins: [],
// };

// export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.25rem",
    },
    extend: {
      colors: {
        brand: {
          50: "#fffbea",
          100: "#fff3c4",
          200: "#fce588",
          300: "#fadb5f",
          400: "#f7c948",
          500: "#f0b429",
          600: "#de911d",
          700: "#cb6e17",
          800: "#b44d12",
          900: "#8d2b0b",
        },
        ink: {
          50: "#f5f7fa",
          100: "#e9edf3",
          200: "#cbd5e1",
          300: "#94a3b8",
          400: "#64748b",
          500: "#475569",
          600: "#334155",
          700: "#1e293b",
          800: "#131c2b",
          900: "#0b1220",
          950: "#070c16",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(7, 12, 22, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up .6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
