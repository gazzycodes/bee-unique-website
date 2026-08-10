# Bee Unique Website

Marketing site for **Bee Unique**, a 501(c)(3) nonprofit founded in April 2020 by Monique Grant. It
empowers youth through mentorship, education, and meaningful opportunities: college readiness,
college tours, scholarships and community outreach, at no cost to participating students.

Built with [Astro](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed as
a static site on Netlify.

## House style

**No em dashes anywhere in visitor facing copy.** Use a colon when the second half explains the
first, a comma pair for a parenthetical, or split the sentence. This is a deliberate house rule, so
please keep it when adding copy. Searching the repo for U+2014 should return no hits, including this
file.

Spelling follows US English in visitor facing copy.

## Pages

| Route                     | What it is                                          |
| ------------------------- | --------------------------------------------------- |
| `/`                       | Home: hero video, programs, gallery, testimonials   |
| `/about`                  | Story, values, Monique's bio, board, supporters     |
| `/programs`               | The six programs in detail, gallery, testimonials   |
| `/get-involved`           | Mentor, volunteer and partnership forms             |
| `/donate`                 | Ways to give, what a gift covers, receipt request   |
| `/events` `/news`         | Event history and announcements                     |
| `/contact`                | Contact details and general inquiry form            |
| `/financial-transparency` | Filings and fund use                                |
| `/privacy-policy`         | What the site collects                              |
| `/thank-you`              | Post form submission confirmation                   |

The nav is deliberately four items plus the Donate button. Gallery and sponsors are surfaced
in-page rather than as extra destinations.

## Brand

Colours and fonts are defined once in `src/styles/global.css` under `@theme`. The palette is sampled
from the Bee Unique logo (`#43943A`) and program flyer (`#0F9429`), plus white and the flyer's light
greys. Each green is annotated in that file with what it is safe to use for, so text contrast stays
WCAG AA compliant. **Read those comments before introducing a new green.**

| Token                  | Hex       | Use                                              |
| ---------------------- | --------- | ------------------------------------------------ |
| `--color-brand`        | `#43943A` | Logo green: decorative, large text, borders      |
| `--color-brand-strong` | `#357A2E` | Button fills, small green text on white (5.3:1)  |
| `--color-brand-deep`   | `#2A5F26` | Hover and pressed                                |
| `--color-brand-forest` | `#14361A` | Dark sections: footer, CTA bands (13.4:1)        |
| `--color-brand-tint`   | `#EDF5EB` | Pale green surfaces                              |
| `--color-brand-soft`   | `#A7D9A0` | Light green text and rules on forest backgrounds |
| `--color-ink`          | `#1C1F1D` | Body text                                        |
| `--color-ink-soft`     | `#4A524B` | Secondary text                                   |
| `--color-line`         | `#DBDBD9` | Hairlines, card borders                          |
| `--color-mist`         | `#F5F6F4` | Off-white section background                     |

Fonts: **Poppins** for display (matches the logo wordmark), **Inter** for body.

### Logo and icons

`Logo.astro` reproduces the printed mark, a green wordmark against a honeycomb field that fades as
it recedes, drawn as vector rather than lifting the source PNG so it stays crisp at any size and can
be recoloured for dark backgrounds.

The stroke weight and opacity ramp are tuned for roughly 36 to 48px. **Below about 28px the faintest
cells stop resolving**, so the favicon carries a reduced three-cell version of the same geometry.
Icon files, all generated from `public/favicon.svg`:

- `favicon.svg` for modern browsers
- `favicon.ico` at 16, 32 and 48px
- `apple-touch-icon.png` at 180px on an opaque white background, because iOS ignores transparency

If you change the mark, regenerate all three so they keep reading as one family. The original
printed logo is at `public/images/logo-full.png` for print and social profiles.

## Shared building blocks

- **`SectionHeading.astro`** eyebrow, heading, rule and an optional slot for intro copy. Use it
  instead of hand-rolling heading markup so type scale and spacing stay consistent.
- **`Icon.astro`** the whole line-icon set, one stroke weight on one 24px grid. Add new icons to the
  `PATHS` map rather than pasting inline SVG into pages.
- **`Photo.astro`** responsive images. See Media below.
- **`Lightbox.astro`** the shared full-screen media viewer. Include it once per page that has
  anything with `data-lightbox`.
- **`GalleryGrid.astro`** the filterable media wall, driven by `src/gallery.ts`.
- **`Testimonials.astro`** the quote carousel, driven by `testimonials` in `src/site.ts`.
- **`SponsorBand.astro`** the supporter strip, driven by `sponsors` in `src/site.ts`. Each sponsor gets
  a monogram badge until a real logo file exists.
- **`ImpactStats.astro`** the impact number grid, driven by `impactStats` in `src/site.ts`. Renders
  nothing while that list is empty, so it ships with no visual change until real figures land, then
  add entries and it appears on Home, Programs and About at once.
- **`VideoCard.astro`** the shared autoplaying, muted, looping video tile with native controls. Used
  for the home hero and the sponsor cheque clip on About.
- **`HeroMosaic.astro`** the honeycomb photo flower, built for the home hero and kept in the codebase
  but currently unused there. The hero now plays a video instead, per Mike's Aug 2026 feedback; see
  CONTENT-CHECKLIST.md if that changes back.
- **`.card-lift`** hover lift and green border, disabled under `prefers-reduced-motion`.
- **`.reveal`** opts an element into the scroll reveal. The CSS is armed by a `js-reveal` class that
  the observer in `Layout.astro` adds, so if that script never runs the content renders fully
  visible. Never gate meaningful content on it.

The `.honeycomb-bg` and `.honeycomb-bg-dark` utilities render a seamless hex grid as an inline SVG,
with no image request. The tile maths is in `global.css`. If you change the tile, keep
`background-size` in sync with the SVG's `width` and `height` or it will visibly seam.

## Data files

Content that appears in more than one place lives in data files, not in pages:

- **`src/site.ts`** contact details, founder, socials, donation methods, sponsors, testimonials, impact
  stats.
- **`src/gallery.ts`** every photo and clip, with captions and categories. The gallery grid, the
  hero mosaic and the lightbox all read from here.

Anything wrapped in `[brackets]` anywhere in the codebase is an unconfirmed placeholder. See
`CONTENT-CHECKLIST.md`.

## Media

Web-ready images live in `public/images/` as WebP at multiple widths (`<name>-<width>.webp`), with
video in `public/video/`. `Photo.astro` holds a catalog of every image with its available widths and
intrinsic dimensions, and builds the `srcset` and `width`/`height` attributes so nothing shifts while
loading.

**To add a photo:** export WebP at 600, 1000 and 1600px into `public/images/`, add an entry to the
`CATALOG` in `src/components/Photo.astro`, then add it to `src/gallery.ts` if it belongs in the
gallery. Use the `object-[x%_y%]` utility to keep faces in frame when a tall photo sits in a short
tile.

**To add a video:** encode to H.264 MP4 at 540px wide, strip the audio track if it is decorative,
and export a poster frame to WebP. Check for letterboxing baked into the source first: phone videos
of landscape footage often carry black bars that `object-cover` will faithfully display.

Raw originals are **not** in the repo. `BeeUnique Content/` is gitignored to keep clones and Netlify
builds fast. Keep the originals somewhere backed up.

## Commands

| Command           | Action                                 |
| ----------------- | -------------------------------------- |
| `npm install`     | Install dependencies                   |
| `npm run dev`     | Dev server at `localhost:4321`         |
| `npm run build`   | Build production site to `./dist/`     |
| `npm run preview` | Preview the production build locally   |

## Forms

The mentor, volunteer, partnership, contact, newsletter and donation receipt forms are wired for
**Netlify Forms**, so there is no backend. They only work on the deployed site, not from
`npm run dev`. Successful submissions redirect to `/thank-you`.

After the first deploy, set up submission notifications in Netlify under
**Site configuration, Forms, Form notifications**, or nobody will know when someone applies.

## Deploying

The site is connected to Netlify from this GitHub repo. Build command `npm run build`, publish
directory `dist`, both already set in `netlify.toml`. Every push to `master` redeploys.
