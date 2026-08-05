# Bee Unique — Website

Marketing site for **Bee Unique**, a 501(c)(3) nonprofit that empowers youth through mentorship,
education, and meaningful opportunities — college readiness, college tours, scholarships and
community outreach, at no cost to participating students.

Built with [Astro](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com), deployed as a
static site on Netlify.

## Pages

- `/` — Home
- `/about` — About Us
- `/programs` — Programs & Impact
- `/get-involved` — Get Involved (mentor, volunteer, sponsor/partner forms)
- `/donate` — Donate
- `/events`, `/news`, `/contact`, `/financial-transparency`, `/privacy-policy` — secondary pages
- `/thank-you` — post-form-submission confirmation

Shared UI lives in `src/components/`; the page shell is `src/layouts/Layout.astro`.

## Brand

Colours and fonts are defined once in `src/styles/global.css` under `@theme`. The palette is
sampled from the Bee Unique logo (`#43943A`) and program flyer (`#0F9429`), plus white and the
flyer's light greys. Each green is annotated in that file with what it's safe to use for so text
contrast stays WCAG AA compliant — **read those comments before introducing a new green.**

| Token                  | Hex       | Use                                                |
| ---------------------- | --------- | -------------------------------------------------- |
| `--color-brand`        | `#43943A` | Logo green — decorative, large text, borders        |
| `--color-brand-strong` | `#357A2E` | Button fills, small green text on white (5.3:1)     |
| `--color-brand-deep`   | `#2A5F26` | Hover / pressed                                     |
| `--color-brand-forest` | `#14361A` | Dark sections — footer, CTA bands (13.4:1)          |
| `--color-brand-tint`   | `#EDF5EB` | Pale green surfaces                                 |
| `--color-brand-soft`   | `#A7D9A0` | Light green text/rules on forest backgrounds        |
| `--color-ink`          | `#1C1F1D` | Body text                                           |
| `--color-ink-soft`     | `#4A524B` | Secondary text                                      |
| `--color-line`         | `#DBDBD9` | Hairlines, card borders                             |
| `--color-mist`         | `#F5F6F4` | Off-white section background                        |

Fonts: **Poppins** for display (matches the logo wordmark), **Inter** for body.

### Logo

`Logo.astro` reproduces the printed mark — a green wordmark against a honeycomb field that fades as
it recedes — as vector rather than lifting the source PNG, so it stays crisp at any size and can be
recoloured for dark backgrounds. One solid cell anchors the near corner, then four outlined cells
step down in opacity.

The stroke weight and opacity ramp are tuned for roughly 36–48px. **Below about 28px the faintest
cells stop resolving**, so `public/favicon.svg` carries a reduced three-cell version of the same
geometry instead. If you change one, change both — they should keep reading as one family.

The original printed logo is at `public/images/logo-full.png` for print and social profiles.

### Shared building blocks

- **`SectionHeading.astro`** — eyebrow + heading + rule, with an optional slot for intro copy. Use it
  instead of hand-rolling heading markup so type scale and spacing stay consistent.
- **`Icon.astro`** — the whole line-icon set, one stroke weight on one 24px grid. Add new icons to
  the `PATHS` map rather than pasting inline SVG into pages.
- **`.card-lift`** — hover lift + green border, disabled under `prefers-reduced-motion`.
- **`.reveal`** — opt an element into the scroll-reveal animation. The CSS is armed by a `js-reveal`
  class that the observer in `Layout.astro` adds, so if that script never runs the content renders
  fully visible. Never gate meaningful content on it.

The `.honeycomb-bg` / `.honeycomb-bg-dark` utilities render a seamless hex-grid texture as an inline
SVG — no image request. The tile maths is in `global.css`; if you change the tile, keep
`background-size` in sync with the SVG's `width`/`height` or it will visibly seam.

## Organisation details

Contact details, founder name, social handles and the donation URL live in **`src/site.ts`** —
change them there, not in individual pages. Anything still wrapped in `[brackets]` anywhere in the
codebase is an unconfirmed placeholder; see `CONTENT-CHECKLIST.md`.

## Media

Web-ready images live in `public/images/` as WebP at multiple widths (`<name>-<width>.webp`), with
video in `public/video/`. The `Photo.astro` component holds a catalog of every image with its
available widths and intrinsic dimensions, and builds the `srcset` and `width`/`height` attributes
so nothing shifts while loading.

**To add a new photo:** export WebP at 600/1000/1600px into `public/images/`, then add an entry to
the `CATALOG` in `src/components/Photo.astro`. Use the `object-[x%_y%]` utility to keep faces in
frame when a portrait photo sits in a wide box.

Raw originals are **not** in the repo — `BeeUnique Content/` is gitignored to keep clones and
Netlify builds fast. Keep the originals somewhere backed up.

## Commands

| Command         | Action                                     |
| --------------- | ------------------------------------------ |
| `npm install`   | Install dependencies                       |
| `npm run dev`   | Dev server at `localhost:4321`             |
| `npm run build` | Build production site to `./dist/`         |
| `npm run preview` | Preview the production build locally     |

## Forms

The mentor, volunteer, partnership, contact and newsletter forms are wired for **Netlify Forms** —
no backend needed. They only work on the deployed site, not from `npm run dev`. Successful
submissions redirect to `/thank-you`.

After the first deploy, set up submission notifications in Netlify (**Site configuration → Forms →
Form notifications**) or nobody will know when someone applies.

## Deploying

The site is connected to Netlify from this GitHub repo. Build command `npm run build`, publish
directory `dist` — both already set in `netlify.toml`. Every push to `master` redeploys.
