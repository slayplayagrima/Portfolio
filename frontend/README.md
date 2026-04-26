# Data Analyst Portfolio

Minimal, modular portfolio site built with React, Vite, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm install
npm run dev
```

The local dev server usually runs at `http://localhost:5173`.

## Build for production

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Deploy

### Vercel

1. Import the project.
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`

### Netlify

1. Create a new site from this folder.
2. Build command: `npm run build`
3. Publish directory: `dist`

## Editing content

Most updates happen in one file:

- `src/data/content.ts`

This file controls:

- hero text and role
- about copy
- skills and marquee items
- project titles, descriptions, links, and image paths
- achievements
- contact details

## Replacing images

- Profile image: `public/assets/profile/profile.png`
- Project and screenshot images: `public/assets/projects/`

If you replace an image filename, update the matching path in `src/data/content.ts`.

## Project structure

```text
public/
  assets/
    profile/
    projects/
src/
  animations/
  components/
    layout/
    sections/
  data/
  pages/
  styles/
  utils/
```

## Notes

- The contact form uses `mailto:` so the portfolio works without a backend.
- The current screenshot assets are easy placeholders and can be swapped with real dashboard or case-study images later.
