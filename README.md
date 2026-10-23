# NB Instrument website

A multi-page product and company website for NB Instrument Pvt. Ltd., built with TanStack Start, React, and Vite. The live deployment is [advanced-research-hub.vercel.app](https://advanced-research-hub.vercel.app); the company site is [nbinstrument.in](https://www.nbinstrument.in/).

## Development

This repository uses Bun and commits `bun.lock` for reproducible installs.

```sh
bun install --frozen-lockfile
bun run dev
```

Useful commands:

- `bun run build` — production build
- `bun run lint` — ESLint
- `bun run preview` — serve the production build locally

## Project structure

- `src/routes/` — file-based TanStack Start routes
- `src/components/` — shared page sections, navigation, and product layouts
- `src/lib/site-data.ts` — shared product, application, partner, and technology content
- `public/images/` — locally served site images
- `public/videos/` — locally served featured-story videos

Use `/images/...` and `/videos/...` paths for static media. Keep image and video files in `public`; the app should not depend on platform-specific asset URLs.

## Content and design

Keep product claims, specifications, company details, and partner descriptions grounded in published sources. The visual direction is restrained and editorial: generous whitespace, deep navy and cool neutral colors, technical imagery, and subtle motion. Product detail routes have dedicated layouts; product cards continue to share the common product list and grid.
