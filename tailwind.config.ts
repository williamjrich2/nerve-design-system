/* ============================================================
   NERVE DESIGN SYSTEM v3 — Tailwind Config
   OpenAI-heavy, light-first, minimalist AI product aesthetic.

   Pairs with: tokens.css
   Skill ref: ~/.claude/skills/nerve-design-system/SKILL.md
   ============================================================ */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Geist", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "SF Mono", "Fira Code", "Roboto Mono", "monospace"],
        display: ["Inter", "Geist", "-apple-system", "system-ui", "sans-serif"],
      },

      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          warm: "hsl(var(--background-warm))",
          cool: "hsl(var(--background-cool))",
          pure: "hsl(var(--background-pure))",
        },
        foreground: { DEFAULT: "hsl(var(--foreground))" },
        surface: {
          0: "hsl(var(--surface-0))",
          1: "hsl(var(--surface-1))",
          2: "hsl(var(--surface-2))",
          3: "hsl(var(--surface-3))",
        },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        "accent-green": { DEFAULT: "hsl(var(--accent-green))", foreground: "hsl(var(--accent-green-foreground))" },
        "accent-orange": { DEFAULT: "hsl(var(--accent-orange))", foreground: "hsl(var(--accent-orange-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        success: { DEFAULT: "hsl(var(--success))", foreground: "hsl(var(--success-foreground))" },
        warning: { DEFAULT: "hsl(var(--warning))", foreground: "hsl(var(--warning-foreground))" },
        info: { DEFAULT: "hsl(var(--info))", foreground: "hsl(var(--info-foreground))" },
        border: { DEFAULT: "hsl(var(--border))", strong: "hsl(var(--border-strong))" },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",

        violet: {
          50: "hsl(var(--violet-50))", 100: "hsl(var(--violet-100))", 200: "hsl(var(--violet-200))",
          300: "hsl(var(--violet-300))", 400: "hsl(var(--violet-400))", 500: "hsl(var(--violet-500))",
        },
        nblue: { 50: "hsl(var(--blue-50))", 100: "hsl(var(--blue-100))", 400: "hsl(var(--blue-400))", 500: "hsl(var(--blue-500))" },
        ngreen: { 50: "hsl(var(--green-50))", 100: "hsl(var(--green-100))", 400: "hsl(var(--green-400))", 500: "hsl(var(--green-500))" },
        namber: { 50: "hsl(var(--amber-50))", 400: "hsl(var(--amber-400))", 500: "hsl(var(--amber-500))" },
        norange: { 50: "hsl(var(--orange-50))", 400: "hsl(var(--orange-400))", 500: "hsl(var(--orange-500))" },
        nred: { 50: "hsl(var(--red-50))", 400: "hsl(var(--red-400))", 500: "hsl(var(--red-500))" },
        npink: { 50: "hsl(var(--pink-50))", 400: "hsl(var(--pink-400))" },
        anova: {
          DEFAULT: "hsl(var(--anova-purple))",
          light: "hsl(var(--anova-purple-light))",
          mid: "hsl(var(--anova-purple-mid))",
        },
        ngray: {
          50: "hsl(var(--gray-50))", 100: "hsl(var(--gray-100))", 200: "hsl(var(--gray-200))",
          300: "hsl(var(--gray-300))", 400: "hsl(var(--gray-400))", 500: "hsl(var(--gray-500))",
          600: "hsl(var(--gray-600))", 700: "hsl(var(--gray-700))", 800: "hsl(var(--gray-800))",
          900: "hsl(var(--gray-900))",
        },
      },

      borderRadius: {
        pill: "9999px",
        card: "var(--radius-card)",
        panel: "var(--radius-panel)",
        input: "var(--radius-input)",
        badge: "var(--radius-badge)",
        code: "var(--radius-code)",
        lg: "var(--radius-card)",
        md: "var(--radius-panel)",
        sm: "var(--radius-code)",
      },

      boxShadow: {
        xs: "var(--shadow-xs)",
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
        float: "var(--shadow-float)",
        glow: "var(--shadow-glow)",
        anova: "0 12px 40px rgba(0,0,0,0.4), 0 0 30px rgba(115,5,255,0.08)",
      },

      backdropBlur: {
        glass: "var(--glass-blur)",
      },

      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        wide: "0.04em",
      },

      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-out": {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.96)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-in": "fade-in 400ms ease-out",
        "fade-out": "fade-out 200ms ease-in",
        "slide-up": "slide-up 500ms ease-out",
        "scale-in": "scale-in 300ms ease-out",
        shimmer: "shimmer 2s infinite linear",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
