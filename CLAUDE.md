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

---

## Project Detail Page Template

New-style project pages live as **static routes** in `src/pages/projects/<slug>.astro`. A static route always overrides the dynamic `[slug].astro` fallback.

**Reference file:** `src/pages/projects/you-should-choose.astro`

To create a new page, copy that file and replace only the `project` meta object and the `sections` array at the top. All styles, lightbox logic, parallax, and scroll effects are inherited unchanged.

### `/NewSite` slash command

Type `/NewSite` to launch the interactive builder. Claude will:
1. Present the available section types
2. Ask for page meta (title, category, subtitle, banner image, tags, slug)
3. Ask for section choices and content
4. Generate the complete `.astro` file

### Section types

| type | Media | Optional text |
|------|-------|---------------|
| `gallery` | 1–6 images, lightbox + zoom/pan | left / right / none |
| `video` | YouTube (`youtubeId`) or self-hosted (`videoSrc`) | left / right / none |
| `model3d` | Sketchfab / ArtStation iframe (`embedUrl`) | left / right / none |
| `text` | — none — | always full-width (`centered` or `wide` layout) |

`textSide: "none"` makes the media span the full section width with no text column.

### Section backgrounds
- Even sections (0, 2, 4…): white
- Odd sections (1, 3, 5…): subtle pink `rgba(244,167,185,0.09)`

### Lightbox features (built in, no config needed)
- Click thumbnail → opens lightbox
- Click lightbox image → toggles 2.2× zoom
- Scroll wheel → continuous zoom (1×–4×)
- Drag → pan when zoomed
- Arrow keys / buttons → navigate between images
- Escape → close
