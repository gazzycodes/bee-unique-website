# Content Checklist — Before Publishing

Everything wrapped in `[brackets]` on the site is an unconfirmed placeholder. Nothing on the site is
stated as fact unless it came from Bee Unique's own flyer, banner or event signage.

## ✅ Already confirmed and live

Taken from the program flyer, pull-up banner and event signage:

- Mission statement ("To expose, educate, and equip students…")
- Program inclusions (campus visits, real talk with college students & staff, scholarship/financial
  aid/admissions info, readiness workshops, empowerment + leadership activities)
- Taglines — "Bee-lieve & Achieve", "Your Gateway to Success"
- Phone: (832) 455-7427
- Email: mgrantbeeunique@gmail.com
- Instagram: @beeunique27
- Founder: Monique Grant, Founder & Executive Director
- 501(c)(3) nonprofit status
- Scholarships & resources provided; programs free to students

## ❗ Blocking — must be resolved before the site goes public

- [ ] **EIN** — appears in the footer, on Donate and on Financial Transparency (`src/site.ts` → `ein`)
- [ ] **Donation platform link** — every Donate button currently points at a placeholder
      (`src/site.ts` → `donateUrl`). Donorbox, Givebutter, Zeffy and Stripe Donations are all viable.
- [ ] **Privacy policy legal review** — especially the children's-information section. This is not
      optional for an organisation working with minors.
- [ ] **Photo permissions** — confirm you have written permission (and parent/guardian consent for
      minors) to publish every student photo currently on the site.

## Organisation basics

- [ ] Grade levels / age range served — currently written as "students preparing for life after high
      school" to avoid stating something unverified
- [ ] Specific Texas cities/regions served — site currently says "Texas". Photos suggest Houston area
      (832) plus Bastrop County; confirm before narrowing.
- [ ] Founding year
- [ ] Mailing address (Contact page)
- [ ] Whether a branded email (e.g. `info@beeunique.org`) should replace the Gmail address
- [ ] Confirm the Instagram handle — the flyer shows `@beeunique`, event signage shows `@beeunique27`.
      The site currently links `@beeunique27`.
- [ ] Any other social accounts (Facebook, LinkedIn, TikTok) — add to `site.socials` in `src/site.ts`
- [ ] **Custom domain.** The site is live at `bee-unique.netlify.app`, and `src/site.ts` → `url` is
      set to match so canonical URLs and link previews are correct. `beeunique.org` is not
      registered/pointed anywhere as of this writing. When a real domain is connected in Netlify,
      change `url` in the same commit — a canonical pointing at a domain that doesn't resolve tells
      search engines the live pages are duplicates of nothing.

## About page

- [ ] Founder quote (currently a bracketed placeholder in the dark band)
- [ ] Short bio for Monique Grant
- [ ] Additional leadership / program staff, if any
- [ ] Board member names and titles
- [ ] Partner and sponsor names + written logo permission

## Programs & Impact

- [ ] Program schedules, locations and eligibility — the six programs listed are drawn from the
      flyer and event photos; confirm names and add real dates
- [ ] Scholarship award amounts and criteria
- [ ] **Verified impact numbers** — students served, tours hosted, scholarships awarded, volunteer
      hours. The `StatCard` component is ready for these. Do not publish estimates.
- [ ] Participant and parent testimonials, with written permission (`Testimonial` component is ready)

## Get Involved

- [ ] Mentor commitment details — frequency, season length, screening/background-check process
- [ ] Whether volunteer interest categories match how you actually organise volunteers

## Donate

- [ ] Confirm the $25 / $100 / $250 / $1,000 examples match real program costs
- [ ] Name the donation processor (mentioned on the Donate page)
- [ ] Fund-use breakdown (% programs / operations / fundraising) once financials exist

## Legal & trust pages

- [ ] Privacy Policy reviewed by counsel; add a data-retention period
- [ ] Financial Transparency: IRS determination letter, Form 990 or 990-N, annual report

## Events & News

- [ ] Add upcoming events to the `upcoming` array in `src/pages/events.astro` — the page shows a
      "dates being confirmed" message while it's empty
- [ ] News page is intentionally empty rather than filled with filler; add posts when there are real ones

## After first deploy

- [ ] Turn on Netlify form notifications so submissions reach a real inbox
- [ ] Submit the site to Google Search Console
- [ ] Check the Open Graph preview by pasting a link into a text message or Slack
