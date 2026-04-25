# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start dev server (localhost:4321)
pnpm build      # Type-check (astro check) then build
pnpm preview    # Preview production build locally
```

Package manager is **pnpm** (not npm/yarn). There are no tests.

## Architecture

This is a static **Astro 5** portfolio site for Susanne Bataloff / Thirteen Games (indie game studio).

### Content is centralized

**All site content lives in `src/config/index.ts`** — this is the primary file to edit for any content change (text, projects, nav links, social links, hero copy, experience entries). Components are purely presentational and receive data as props from the config.

TypeScript interfaces for all config shapes are in `src/types/index.ts`. When adding a new project, add it to the `projects` array in config and create a matching slug — the route `/projects/[slug].astro` generates detail pages dynamically from that array.

### Styling

TailwindCSS v4 is used — configuration is **not** in `tailwind.config.js` but inside `src/styles/global.css` via the `@theme {}` block. Custom color tokens:
- `primary` → `#F4A7B9` (dusty pink)
- `neutral` → `#FDF5DB` (warm cream)
- `black` → `#0E0D0C` (near-black background)

Two shared button utility classes are defined in `global.css`: `.btn-primary` and `.btn-outline`. Use these instead of inline Tailwind for buttons.

### Path aliases

`tsconfig.json` defines these aliases: `@components`, `@layouts`, `@icons`, `@config`, `@types` — use them for imports instead of relative paths.

### Static assets

All images go in `/public/`. Reference them with a root-relative path (e.g. `/my-image.png`). Project images, gallery images, and the about photo are all stored there.
