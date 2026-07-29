# Bee Unique — Website

Marketing site for **Bee Unique**, a Texas-based youth nonprofit. Built with [Astro](https://astro.build) + [Tailwind CSS](https://tailwindcss.com), deployed as a static site.

## Structure

Five main pages plus supporting pages, per the site content plan:

- `/` — Home
- `/about` — About Us
- `/programs` — Programs & Impact
- `/get-involved` — Get Involved (mentor, volunteer, corporate partnership forms)
- `/donate` — Donate
- `/events`, `/news`, `/contact`, `/privacy-policy`, `/financial-transparency` — secondary pages, linked from the footer

Shared UI lives in `src/components/`; the page shell (header, footer, meta tags) is `src/layouts/Layout.astro`. Brand colors and fonts are defined in `src/styles/global.css` under `@theme`.

## Placeholder content

This is a working scaffold with **real structure and voice, but placeholder facts** — anything in `[brackets]` needs a real answer before this goes live: age ranges served, city/region names, program schedules, leadership and board names, stats, contact info, EIN/501(c)(3) status, and the donation platform link. See `CONTENT-CHECKLIST.md` for the full list.

Forms (mentor application, volunteer signup, corporate partnership, contact, newsletter) are wired for **Netlify Forms** — no backend required, but form submissions only work once the site is deployed on Netlify (they won't submit from `npm run dev`).

## Commands

| Command           | Action                                      |
| ------------------ | -------------------------------------------- |
| `npm install`       | Install dependencies                         |
| `npm run dev`       | Start local dev server at `localhost:4321`   |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview the production build locally         |

## Deploying to Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import an existing project**, connect the GitHub repo.
3. Build command: `npm run build` — Publish directory: `dist` (already set in `netlify.toml`).
4. Deploy. Netlify auto-detects the forms in the built HTML — no extra config needed.
5. Every push to the main branch redeploys automatically.
