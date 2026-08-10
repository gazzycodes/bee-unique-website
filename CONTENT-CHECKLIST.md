# Content Checklist

Everything wrapped in `[brackets]` on the site is an unconfirmed placeholder. Nothing is stated as
fact unless it came from Bee Unique's own materials or directly from Monique.

## Confirmed and live

From the program flyer, pull-up banner, event signage, the Bastrop County Cares cheque video, and
Monique's own bio:

- Mission statement, "To expose, educate, and equip students..."
- Program inclusions: campus visits, real talk with college students and staff, scholarship,
  financial aid and admissions info, readiness workshops, empowerment and leadership activities
- Taglines: "Bee-lieve & Achieve" and "Your Gateway to Success"
- Phone (832) 455-7427, email mgrantbeeunique@gmail.com
- Instagram @beeunique27 (confirmed by Gazzy, Aug 2026)
- Founder and CEO: Monique Grant. Founded April 2020
- Monique's full bio and her quote, "Opening doors, expanding possibilities, and empowering the next
  generation."
- 501(c)(3) nonprofit status
- Bastrop County Cares granted **$35,000** to the Bee-lieve & Achieve Tour on **June 2, 2025**
- Cash App donations at `$BeeUnique17`, confirmed as a **Business account** (Monique, via Gazzy, Aug 2026), so the
  $1,000/30 day personal-account cap does not apply
- Board of Directors: two names confirmed, **Gloria Grant** and **Jonathan Johnson** (Gazzy, Aug 2026). Titles
  still needed, currently shown as "Board Member"

## Blocking, resolve before promoting the site publicly

- [ ] **EIN.** Appears in the footer, on Donate and on Financial Transparency (`src/site.ts` → `ein`).
      A donor cannot claim a deduction without it on the acknowledgment.
- [ ] **Privacy policy legal review**, especially the children's information section. Not optional
      for an organization working with minors.
- [ ] **Photo permissions.** Confirm written permission, and parent or guardian consent for minors,
      for every student photo on the site. There are 17 items in the gallery as of Aug 2026. The
      hero mosaic photos are among them; the home hero itself now plays a video instead (see "Home
      hero video" below), but the mosaic photos still appear in the gallery grid.

## Mike's feedback, Aug 2026

Mike (Monique's partner) reviewed the site and called it about 95% done. One item from the first
round of review needs a decision from Monique or Mike rather than more building:

- [ ] **Home hero video.** Mike asked for "the 20 second video we talked about" in the hero, in place
      of the honeycomb photo mosaic. Two clips were candidates: `elevate-youth.mp4` (Elevate Youth
      Bastrop County, runs 20.7 seconds) and `back2school-day.mp4` (Back2School day, runs 25.8
      seconds). The hero now plays `elevate-youth.mp4`, on the strength of the near exact 20 second
      match. If Mike meant the Back2School clip instead, that is a one line swap of `src`, `poster`
      and the caption text in the hero section of `src/pages/index.astro`. The honeycomb mosaic
      component (`HeroMosaic.astro`) was not deleted, only unhooked from the homepage, so the old
      look is one import away if anyone wants to compare it against the video again.

Addressed directly, no follow up needed:

- **Sponsor logos.** No sponsor has ever sent an actual logo file. The site shows a monogram badge
  (initials in a circle) next to each sponsor's name and grant amount, right under the hero on every
  page and again on the About page's supporters list. That is the strongest honest treatment
  possible without real artwork: it is a lettermark, not a logo. Get an actual SVG or PNG logo file,
  plus written permission to use it, from each sponsor, and it drops straight into
  `SponsorBand.astro` in place of the initials.
- Top of page call to action: the home hero now leads with **Donate** and **Get Involved** buttons,
  plus **Volunteer**, **Sponsor** and **Explore Programs** as quick links right under them. The header
  Donate button is now visible on phone screens too, not just from tablet width up.
- Impact numbers: `impactStats` in `src/site.ts` is wired to `ImpactStats.astro`, which appears on
  Home, Programs and About. It renders nothing while the list is empty, so nothing estimated ships
  to a visitor. The moment Monique shares real figures, add them there, e.g.
  `{ value: "500+", label: "Students served" }`, and the section appears on all three pages at once.
- Mobile pass: see "Mobile experience" below.
- **Duplicate gallery photo.** Mike flagged that the wide table shot beside the tighter banner photo
  in "Our Team" was the same picture zoomed out. Removed `founder-banner` from the gallery (it stays
  as the About page hero portrait, just not in the gallery grid).
- **Hero video black bar and framing.** The clip had a thin baked in black band across the very top
  (visible once scaled up in the hero). Re-encoded `elevate-youth.mp4` cropped to remove it. Also
  added two decorative honeycomb outline shapes peeking from behind the video card's corners, echoing
  the logo mark and the mosaic this hero replaced, per Mike's "honeycomb mesh or something" note.
- **"Mo" changed to "Monique"** everywhere on the site.
- **"Enquiry" changed to "inquiry"** everywhere (US spelling), on Contact, Get Involved, News and the
  Privacy Policy.
- **Austin Police Department added as a sponsor**, $30,000, name and amount confirmed by Gazzy. Shows
  in SponsorBand on every page and in the About page supporters list. Grant date and program are not
  yet documented, see the Sponsors section below.
- **Six new photos added to the general gallery** from the Aug 2026 content folder (`more2.jpeg`
  through `more7.jpeg`, plus `more1.jpeg` which had not been processed before): backpack giveaway
  volunteers, the backpack staging table, free haircuts at Back2School day, the Bee Unique banner
  set up in a school gym, a young supporter at the Bee Unique sign, and Houston City College
  Northeast tabling. `more2.jpeg` was left out, it is nearly the same shot as `more6.jpeg` from a
  slightly different angle. Monique described this batch as "vendors/volunteers that come out every
  year to help," so none of them went into the sponsors list, per her note.

## Mobile experience

Checked after the Aug 2026 round of changes, since most visitors arrive from phone links on social
media:

- [ ] Re-check on a real device after each round of content changes, not just the simulator width in
      this checklist. Emulated widths catch layout breaks; they do not catch everything a real phone
      does (address bar chrome, autoplay policy differences, slow connections).
- Header Donate button, hero buttons and quick links, sponsor badges, and the gallery filters were all
  verified at 375px and 414px widths after this round of changes.

## Donation receipts, the manual process

Cash App does not issue tax-compliant receipts, so this is on Monique. The site now collects what
she needs through the form at `/donate#receipt`, which arrives via Netlify Forms.

For any single gift, and **required** for gifts of $250 or more, send the donor a written
acknowledgment containing:

1. Bee Unique's name
2. The amount of the cash contribution
3. The date of the gift
4. The statement: "No goods or services were provided in exchange for this contribution."
5. The EIN (not strictly required by the IRS, but donors and their accountants expect it)

Email counts as written. Send it by the end of January following the year of the gift at the latest,
and ideally within a week. Keep a copy.

Two practical improvements worth making:

- [ ] Save a reusable acknowledgment email template so this is copy, paste, send
- [ ] Export Cash App activity monthly and reconcile it against receipt requests, so a donor who
      never filled in the form still gets acknowledged

## Organization basics

- [ ] Grade levels or age range served. Currently written as "students preparing for life after high
      school" to avoid stating something unverified.
- [ ] Specific Texas cities and regions served. The site says "Texas". Materials suggest the Houston
      area (832 area code, HCC North Forest Campus, Tidwell Park) plus Bastrop County. Confirm before
      narrowing.
- [ ] Mailing address for the Contact page
- [ ] Whether a branded email such as `info@beeunique.org` should replace the Gmail address
- [ ] Any other social accounts. A `@beeunique_21` watermark appears on some story videos and the
      flyer shows `@beeunique`. If those accounts are live too, add them to `site.socials`.
- [ ] **Custom domain.** The site runs on `bee-unique.netlify.app` and `src/site.ts` → `url` matches,
      so canonicals and link previews are correct. `beeunique.org` does not resolve. When a domain is
      connected in Netlify, change `url` in the same commit. A canonical pointing at a domain that
      does not resolve tells search engines the live pages are duplicates of nothing.

## People

- [ ] **Board of Directors: two names and titles.** Two placeholder seats are on the About page
      waiting for them (`board` array in `src/pages/about.astro`).
- [ ] Additional leadership or program staff, if any

## Testimonials

- [ ] **Two or three real quotes** from students or parents, with written permission. Add them to
      `testimonials` in `src/site.ts` as `{ quote, name, role }` and the carousel appears on Home and
      Programs automatically. Until then both pages show an honest invitation to share a story
      rather than invented praise.

## Sponsors

**Confirmed:** Bastrop County Cares ($35,000, featured) and Austin Police Department ($30,000,
name and amount confirmed by Gazzy, Aug 2026). Both are in `sponsors` in `src/site.ts` and show on
the SponsorBand strip and the About page supporters section. Austin Police Department is not the
About page's featured card, since its grant date and program are not yet documented, only Bastrop
County Cares has enough detail for that layout.

- [ ] Austin Police Department: date and program the grant supported, so it can be added if it
      should ever become the featured card too.
- [ ] Organizations that appear in photos but are **not** confirmed as sponsors, more of these
      turned up in the Aug 2026 content folder: Alpha Phi Alpha (backpack giveaway volunteers),
      Houston City College Northeast (tabling at a community day, matches or replaces the earlier
      "HCC North Forest Campus" note, worth reconciling which name is current), Lamar University,
      MCT Credit Union. Monique described the Aug 2026 batch as "vendors/volunteers that come out
      every year to help", not funders, so they stay in the general gallery, not this list, unless
      told otherwise.
- [ ] Written permission to use sponsor logos, then add them alongside the names. `SponsorBand`
      currently shows a monogram badge (initials in a circle) for each confirmed sponsor instead.

## Programs and impact

- [ ] Program schedules, locations and eligibility. The six programs are drawn from the flyer and
      event photos. Confirm names and add real dates.
- [ ] Scholarship award amounts and criteria
- [ ] **Verified impact numbers**: students served, tours hosted, scholarships awarded, volunteer
      hours. `StatCard` is ready for them. Do not publish estimates.

## Get Involved

- [ ] Mentor commitment details: frequency, season length, screening and background check process
- [ ] Whether the volunteer interest categories match how volunteers are actually organized

## Donate

- [ ] Confirm the $25, $100, $250 and $1,000 examples match real program costs
- [ ] Second giving platform. Zeffy is free for nonprofits and issues receipts automatically, which
      would remove the manual work above. Add it to `donationMethods` in `src/site.ts` and flip
      `live: true`.
- [ ] Fund use breakdown, percentage to programs, operations and fundraising, once financials exist

## Legal and trust pages

- [ ] Privacy Policy reviewed by counsel, and a data retention period added
- [ ] Financial Transparency: IRS determination letter, Form 990 or 990-N, annual report

## Events and News

- [ ] Add upcoming events to the `upcoming` array in `src/pages/events.astro`. The page shows a
      "dates being confirmed" message while it is empty.
- [ ] News is intentionally empty rather than filled with filler. Add posts when there are real ones.

## After deploy

- [ ] Turn on Netlify form notifications so submissions reach a real inbox. There are now six forms:
      mentor, volunteer, partnership, contact, newsletter and donation receipt.
- [ ] Submit the site to Google Search Console
- [ ] Check the link preview by pasting the URL into a text message or Slack
