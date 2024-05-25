/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const brandColor = colors.emerald;
const accentColor = colors.sky;
const noirColor = colors.noir;

module.exports = {
  content: ["index.html", "src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        noir: noirColor,
        brand: brandColor,
        accent: accentColor,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
  daisyui: {
    logs: false,
    themes: [
      {
        "nitro-dark": {
          primary: "#059669",
          "primary-focus": "#34d399",
          "primary-content": "#d1fae5",

          secondary: "#0284c7",
          "secondary-focus": "#7dd3fc",
          "secondary-content": "#e0f2fe",

          accent: "#c026d3",
          "accent-focus": "#e879f9",
          "accent-content": "#fae8ff",

          neutral: "#2a2e37",
          "neutral-focus": "#16181d",
          "neutral-content": "#ffffff",

          "base-100": "#27272a",
          "base-200": "#18181b",
          "base-300": "#09090b",
          "base-content": "#f4f4f5",

          info: "#2563eb",
          success: "#22c55e",
          warning: "#facc15",
          error: "#ef4444",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
