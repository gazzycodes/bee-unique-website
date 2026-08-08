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
- Cash App donations at `$BeeUnique17`

## Blocking, resolve before promoting the site publicly

- [ ] **EIN.** Appears in the footer, on Donate and on Financial Transparency (`src/site.ts` → `ein`).
      A donor cannot claim a deduction without it on the acknowledgment.
- [ ] **Privacy policy legal review**, especially the children's information section. Not optional
      for an organization working with minors.
- [ ] **Photo permissions.** Confirm written permission, and parent or guardian consent for minors,
      for every student photo on the site. There are now 13 items in the gallery plus 7 in the hero
      mosaic.
- [ ] **Cash App account type.** A personal Cash App account caps at $1,000 per 30 days, so a busy
      month of giving would silently start failing. Confirm `$BeeUnique17` is a Business account.
      Business accounts pay 2.75% on card-funded payments; bank and debit transfers are free.

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

- [ ] Confirm and name the other supporters. Only Bastrop County Cares is documented, so only
      Bastrop County Cares is published. Organizations that appear in photos but are **not** yet
      confirmed as sponsors: Alpha Phi Alpha, HCC North Forest Campus, Lamar University, MCT Credit
      Union. Say the word and each goes into `sponsors` in `src/site.ts`.
- [ ] Written permission to use sponsor logos, then add them alongside the names

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
