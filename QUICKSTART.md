# NERVE Design System v3 — Quick Start

OpenAI-heavy, light-first, minimalist AI product aesthetic.
Built from: OpenAI + Vercel Geist + LobeHub + shadcn/ui + typeui.sh (paper, bento, corporate, elegant) + Anova brand DNA.

## What's in this folder

| File | What it is |
|------|-----------|
| `tokens.css` | CSS custom properties — warm backgrounds, typography, spacing, shadows, radii, Anova brand |
| `tailwind.config.ts` | Tailwind config mapping all tokens to utility classes |
| `shadcn-overrides.css` | Component overrides — pill buttons, floating cards, tinted badges, display type |
| `reference.html` | Interactive visual reference — open in browser to see everything |

## Master Skill

The complete design system specification lives at:
```
~/.claude/skills/nerve-design-system/SKILL.md
```
This is what all AI agents reference when building UI for Anova Growth projects.

## Key design decisions

- **Light-first**: Warm off-white backgrounds (#FDFCFA), not sterile pure white
- **Primary = dark/near-black**: Like OpenAI's CTAs — not purple, not blue, just clean dark
- **Pill everything**: Buttons, inputs, badges, tabs = 9999px border-radius
- **Cards = softer rounding**: 20px radius, floating on warm bg with soft shadows
- **Font**: Inter (closest free match to OpenAI's Söhne). Geist as alternative.
- **Display type**: 800 weight, tight letter-spacing (-0.035em), for big headlines
- **Accent colors**: Violet, green (teal), orange — used in badges/tinted cards
- **Anova Purple (#7305FF)**: Reserved for brand moments, dark mode contexts
- **Dark mode**: Toggle with `.dark` class on root — only when explicitly requested
- **Bento grids**: Modular card layouts with clear hierarchy
- **Paper tactility**: Soft shadows that feel like objects resting on a surface

## Setup

```bash
# Install font + icons
npm install geist lucide-react @lobehub/icons @radix-ui/react-icons

# Init shadcn (if using)
npx shadcn@latest init

# Copy files
cp tokens.css src/styles/tokens.css
cp shadcn-overrides.css src/styles/overrides.css
cp tailwind.config.ts tailwind.config.ts

# Import in globals.css
@import './tokens.css';
@import './overrides.css';
```

## Installed typeui.sh Skills

These are installed in `~/.claude/skills/` and available to all agents:
- `design-system-paper` — Paper-textured, print-inspired
- `design-system-bento` — Modular grid layouts
- `design-system-corporate` — Enterprise polish
- `design-system-elegant` — Refined sophistication
- `design-system-shadcn` — Utility-first monochrome
- `design-system-refined` — Serif typography, understated
- `design-system-clean` — Whitespace-focused simplicity

## Resources

- OpenAI apps-sdk-ui: github.com/openai/apps-sdk-ui
- LobeHub UI: github.com/lobehub/lobe-ui | ui.lobehub.com
- Geist: vercel.com/geist | github.com/vercel/geist-font
- shadcn/ui: ui.shadcn.com
- typeui.sh: typeui.sh
- assistant-ui (chat): github.com/assistant-ui/assistant-ui
