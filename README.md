# HiveTalk Slides — Astro clone

Visual rebuild of [slides.hivetalk.org](https://slides.hivetalk.org/) in Astro.

## Run

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Build

```bash
npm run build
npm run preview
```

## Notes

- Original is a Canva-exported slideshow (proprietary fonts/assets). This is a from-scratch visual rebuild using free Google Fonts approximations (Archivo Black, Oswald, IBM Plex Sans, Poppins).
- Three slides: **Home**, **Talks**, **Projects** — rendered as full-viewport sections with snap scrolling, matching the dark/neon aesthetic.
- Imagery is recreated with CSS gradients + emoji + SVG (no copied raster assets).
