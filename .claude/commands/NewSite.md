# /NewSite — Project Page Builder

Use this command to create a new project detail page for the Susanne Bataloff website.

## What you do

1. **Present the available section types** (see below) and ask the user which ones they want and in what order. Example: "gallery, text, video, gallery, text"
2. **Ask for the page meta** (title, category, subtitle, banner image, tags, URL slug)
3. **Ask for section content** — collect details for each section they requested (images, youtube ID, embed URL, text, textSide)
4. **Generate the file** at `src/pages/projects/<slug>.astro` by copying the structure from `src/pages/projects/you-should-choose.astro` and filling in the data. Keep ALL styles, lightbox logic, and parallax scripts unchanged — only replace the `project` meta object and the `sections` array.

---

## Available Section Types

### `gallery` — Image grid (1–6 photos, lightbox + zoom)
```ts
{
  type: "gallery",
  images: ["/path/to/img1.png", "/path/to/img2.png"],  // 1–6 images from /public
  text: { title: "Section Title", body: "Description text." } | null,
  textSide: "left" | "right" | "none",  // 'none' = full-width, no text column
}
```

### `video` — YouTube embed or self-hosted video
```ts
{
  type: "video",
  youtubeId: "dQw4w9WgXcQ" | null,   // YouTube video ID
  videoSrc:  "/videos/clip.mp4" | null, // self-hosted alternative
  text: { title: "Section Title", body: "Description text." } | null,
  textSide: "left" | "right" | "none",
}
```

### `model3d` — Sketchfab or ArtStation 3D viewer
```ts
{
  type: "model3d",
  embedUrl: "https://sketchfab.com/models/MODEL_ID/embed" | null,
  text: { title: "Section Title", body: "Description text." } | null,
  textSide: "left" | "right" | "none",
}
```

### `text` — Text only, no media
```ts
{
  type: "text",
  layout: "centered" | "wide",  // centered = 680px max centred, wide = 900px left-aligned
  text: { title: "Section Title", body: "Full paragraph text here." },
}
```

---

## textSide rules
- `"right"` → media on the left, text on the right (default alternating look)
- `"left"`  → text on the left, media on the right
- `"none"`  → media spans full width, no text column rendered

## Section backgrounds
- Even-indexed sections (0, 2, 4…): white `#ffffff`
- Odd-indexed sections (1, 3, 5…): subtle pink `rgba(244,167,185,0.09)`

---

## File to copy from
`src/pages/projects/you-should-choose.astro`

Copy the ENTIRE file. Only replace:
- The `project` object (title, subtitle, bannerImage, category, tags)
- The `sections` array

Leave all `<style>`, `<script>`, lightbox HTML, and parallax code identical.

---

## Example interaction

**User:** "gallery, text, video, gallery, text"

**Claude asks:**
- Page title?
- Category badge? (e.g. "02 — 3D Art")
- Subtitle text?
- Banner image path? (e.g. "/MyProject/banner.png")
- Tags? (comma separated)
- URL slug? (becomes /projects/slug)
- For gallery 1: image paths? textSide?
- For text 1: title and body?
- For video: youtubeId or videoSrc? textSide?
- For gallery 2: image paths? textSide?
- For text 2: title and body?

Then generates: `src/pages/projects/<slug>.astro`
