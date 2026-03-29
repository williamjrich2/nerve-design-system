# NERVE Design System v3

## What This Is

Jake Richardson's master design system for Anova Growth Solutions. OpenAI-heavy, light-mode-first, minimalist AI product aesthetic. This is the single source of truth for all UI/frontend work.

**Built from:** OpenAI + Vercel Geist + LobeHub + shadcn/ui + typeui.sh (paper, bento, corporate, elegant) + Anova brand DNA (#7305FF).

## Files

| File | Purpose |
|------|---------|
| `tokens.css` | CSS custom properties — colors, typography, spacing, shadows, radii, Anova brand tokens |
| `tailwind.config.ts` | Tailwind config mapping all tokens to utility classes |
| `shadcn-overrides.css` | Component overrides — pill buttons, floating cards, tinted badges, bento grids, glass cards |
| `reference.html` | Interactive visual reference — open in browser to preview everything |
| `QUICKSTART.md` | Setup instructions and overview |

## Design Rules (Non-Negotiable)

### Light Mode is Default
- Page background: warm off-white `#FDFCFA` — NEVER pure white
- Cards: pure white `#FFFFFF` floating on warm background with soft shadows
- Dark mode exists but is ONLY used when explicitly requested

### Pill Everything
- Buttons: `border-radius: 9999px` — always, no exceptions
- Badges: `border-radius: 9999px`
- Inputs: `border-radius: 9999px`
- Tab triggers: `border-radius: 9999px`
- Cards use `border-radius: 20px` (softer, NOT pill)

### Primary CTA = Near-Black
- Primary button color: `#212830` (hsl 220 14% 15%) — like OpenAI's buttons
- NOT blue, NOT purple, NOT any accent color
- Anova Purple `#7305FF` is for brand moments and dark mode only

### Typography
- Font stack: Inter → Geist → system (closest free match to OpenAI's Söhne)
- Headlines: weight 700-800, letter-spacing -0.03em, line-height 1.15
- Body: weight 400, line-height 1.5
- Buttons: weight 500, 15px
- Labels/overlines: weight 600, uppercase, letter-spacing 0.08em, 11px

### Shadows
- Always soft and diffused, never harsh
- Cards: `shadow-sm` default → `shadow-md` on hover
- Floating cards: `shadow-float` for hero sections
- Hover: `translateY(-1px)` for buttons, `translateY(-2px)` for cards

### Animations
- Primary entrance: fade-up (opacity + translateY 8px→0, 400ms)
- Stagger children with delay classes
- Always respect `prefers-reduced-motion: reduce`
- Max 500ms for interactive elements
- Easing: `cubic-bezier(0.16, 1, 0.3, 1)` for major transitions

### Spacing
- 4px base grid
- Cards: 24px padding (default), 32px (large)
- Section padding: 80-120px vertical
- When in doubt, add more whitespace

### Layout
- Bento grid pattern: modular cards with clear hierarchy
- Use `.bento-grid` for card layouts
- Max content width: 1200px centered
- Background layering: warm bg → gradient section → white floating cards

## Color Palette Quick Reference

### Core
```
Background:      #FDFCFA    (warm off-white)
Card:            #FFFFFF    (pure white, floats on warm bg)
Foreground:      #171C26    (near-black)
Muted:           #6B7280    (secondary text)
Primary CTA:     #212830    (near-black buttons)
Border:          #E8E5DF    (warm, barely visible)
```

### Accents (badges, tinted cards, highlights only)
```
Violet:          #7C5CFA
Green:           #2BA06E
Orange:          #E8772E
Blue:            #3B82F6
Red:             #DC2626
```

### Anova Brand (brand moments / dark mode)
```
Purple:          #7305FF
Purple Light:    #B87FFF
Purple Mid:      #9B4DFF
```

## Component Classes

### Buttons
- `.btn-primary` — near-black pill CTA
- `.btn-secondary` — bordered pill
- `.btn-ghost` — transparent, hover reveals bg
- `.btn-accent` — violet pill
- `.btn-orange` — warm orange CTA
- `.btn-green` — teal CTA
- `.btn-anova` — Anova purple (brand/dark mode)
- `.btn-icon` — 40px circle icon button
- Sizes: `.btn-sm`, `.btn-lg`, `.btn-xl`

### Cards
- `.card` — default floating white card
- `.card-float` — hero floating card with stronger shadow
- `.card-stat` — stat/metric card
- `.card-violet`, `.card-green`, `.card-blue`, `.card-orange`, `.card-pink` — tinted
- `.card-glass` — glassmorphism (dark mode only)
- `.card-anova` — purple glow accent

### Layout
- `.bento-grid` — responsive 1→2→3 column grid
- `.bento-span-2` — span two columns
- `.bento-span-full` — span full width
- `.bg-gradient-warm` — warm cream→off-white gradient
- `.bg-gradient-cool` — lavender→off-white gradient
- `.bg-gradient-anova` — Anova purple radial glow (dark mode)

### Typography
- `.display-xl`, `.display-lg`, `.display-md` — hero headlines
- `.overline` — uppercase label style

### Other
- `.badge-*` — pill badges (primary, violet, green, orange, blue, red, neutral)
- `.chip` / `.chip-active` — filter toggle pills
- `.tabs-list` / `.tab-trigger` — pill tabs
- `.input` — pill input
- `.code-block` / `.inline-code` — code styling
- `.skeleton` — shimmer loading
- `.toast` — notification toast
- `.kbd` — keyboard shortcut badge

## Anti-Patterns (Do NOT Do)

- ❌ Pure white page backgrounds
- ❌ Blue or colored primary buttons (primary = near-black)
- ❌ Square or slightly-rounded buttons (always pill)
- ❌ Harsh shadows
- ❌ Glassmorphism in light mode
- ❌ Serif fonts
- ❌ Dark mode unless explicitly asked for
- ❌ More than 2-3 accent colors per page
- ❌ Animations over 500ms on interactive elements
- ❌ Anova Purple (#7305FF) as a primary button in light mode

## Setup

```bash
npm install geist lucide-react @lobehub/icons @radix-ui/react-icons
npx shadcn@latest init

# In globals.css:
@import './tokens.css';
@import './shadcn-overrides.css';
```

## Related Skills

The following typeui.sh design skills are installed in `~/.claude/skills/` for reference:
- `design-system-paper` — minimal, tactile
- `design-system-bento` — modular grids
- `design-system-corporate` — enterprise polish
- `design-system-elegant` — refined sophistication
- `design-system-shadcn` — utility-first monochrome
- `design-system-refined` — understated elegance
- `design-system-clean` — whitespace simplicity

The master skill specification lives at `~/.claude/skills/nerve-design-system/SKILL.md`.
