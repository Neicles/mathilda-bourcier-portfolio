# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, http://localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview the production build
```

No linter or test runner is configured.

## Architecture

Single-page React app built with Vite. The entire site is a **passport-themed portfolio** for Mathilda Bourcier (event planner, "MBourcier Airlines").

**Entry point:** `src/main.jsx` → `src/App.jsx`  
`App.jsx` stacks all sections vertically in one scrollable page. Navigation anchors (`#identity`, `#objectives`, etc.) smooth-scroll between them.

**Sections (in render order):**

| Component | Section id | Role |
|---|---|---|
| `Nav` | — | Fixed top bar with anchor links |
| `Cover` | `#cover` | Hero / landing — navy gradient, logo emblem |
| `Stamps` | `#stamps` | Animated circular stamps (IntersectionObserver) |
| `Welcome` | — | Short bilingual welcome blurb |
| `Identity` | `#identity` | Passport-style info card |
| `Objectives` | `#objectives` | Visa card layout — career goals |
| `Journey` | `#journey` | Polaroid photos (real images from `/public/logo/`) |
| `Projects` | `#projects` | Two "étapes" of escales (badge + text cards) |
| `Trust` | `#trust` | Client logo strip (images from `/public/logo/`) |
| `WhyMe` | `#why-me` | Animated checklist |
| `Contact` | `#contact` | Contact info |

**Reveal animation:** `src/components/Reveal.jsx` wraps any element with a `fade-up` class and an IntersectionObserver to trigger it. Accepts `tag`, `className`, and `delay` props.

**Styles:** Single flat CSS file `src/App.css`. Uses CSS custom properties defined on `:root` — navy/cream/gold palette, three font stacks (`--serif` Playfair Display, `--cormorant` Cormorant Garamond, `--sans` Lato). Section styles are co-located by comment block.

**Static assets:**
- `/public/logo/` — client/partner logos (`.webp`) used in Trust and Journey sections
- `/public/images/` — project screenshots and portfolio images

Images in `public/` are served at the root path (e.g. `/logo/fellys.webp`), not imported via JS.
