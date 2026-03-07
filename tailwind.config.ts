import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/landing-page/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand core
        "brand-bg": "#022136",
        "brand-surface": "#2D3847",
        "brand-surface-secondary": "#1A2E42",
        "brand-primary": "#00BFFF",
        "brand-hover": "#00D4FF",
        "brand-risk": "#FF8A00",
        "brand-dark": "#022136",
        // Text hierarchy
        "text-primary": "#FFFFFF",
        "text-secondary": "#B8C4CC",
        "text-tertiary": "#7A92A8",
        // Borders
        "border-subtle": "#2A4A68",
        "border-brand": "#00BFFF",
        // Semantic
        "semantic-success": "#00D4AA",
        "semantic-warning": "#FFB81C",
        "semantic-error": "#FF5757",
        // Legacy aliases (kept for compatibility)
        "brand-accent": "#00BFFF",
        "brand-accent2": "#FF8A00",
        "brand-text": "#022136",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "system-ui", "sans-serif"],
        sans: ["Ubuntu", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out both",
        "fade-in-up": "fadeInUp 0.7s ease-out both",
        "fade-in-down": "fadeInDown 0.5s ease-out both",
        "slide-up": "slideUp 0.6s ease-out",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "text-cycle": "textCycle 0.5s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(30px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0, 191, 255, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0, 191, 255, 0.6)" },
        },
        textCycle: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "radial-gradient(ellipse at 50% 0%, rgba(0, 191, 255, 0.15) 0%, transparent 70%)",
        "surface-gradient":
          "linear-gradient(135deg, #2D3847 0%, #1f2e3d 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
