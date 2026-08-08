/**
 * Single source of truth for organisation details that appear in more than one
 * place. Confirmed against Bee Unique's own flyer, pull-up banner, event
 * signage and the Bastrop County Cares cheque presentation.
 *
 * Anything still in [brackets] is unconfirmed. See CONTENT-CHECKLIST.md.
 *
 * House style: no em dashes anywhere in visitor facing copy.
 */
export const site = {
  name: "Bee Unique",
  tagline: "Bee-lieve & Achieve",
  strapline: "Your Gateway to Success",
  url: "https://bee-unique.netlify.app",

  /** From Monique's bio. */
  founded: "April 2020",

  email: "mgrantbeeunique@gmail.com",
  phone: "(832) 455-7427",
  phoneHref: "tel:+18324557427",

  founder: "Monique Grant",
  founderRole: "Founder & CEO",

  serviceArea: "Texas",

  socials: [
    { label: "Instagram", handle: "@beeunique27", href: "https://instagram.com/beeunique27" },
  ],

  /** 501(c)(3) determination on file; EIN still to be published. */
  ein: "[EIN]",
} as const;

/**
 * Ways to give, in the order they appear on the Donate page.
 *
 * `live: false` entries render as "coming soon" rather than as broken links, so
 * a second platform can be listed before it is switched on. Cash App is live
 * today; a dedicated nonprofit platform is planned alongside it.
 */
export const donationMethods = [
  {
    id: "cashapp",
    name: "Cash App",
    handle: "$BeeUnique17",
    href: "https://cash.app/$BeeUnique17",
    live: true,
    blurb:
      "The fastest way to give right now. Bank and debit transfers reach us in full; card payments carry a small processing fee.",
  },
  {
    id: "platform",
    name: "Card & recurring giving",
    handle: "[Platform to be confirmed]",
    href: "",
    live: false,
    blurb:
      "A dedicated nonprofit giving platform is being set up for card payments, monthly gifts and automatic receipts.",
  },
] as const;

export const primaryDonation = donationMethods.find((m) => m.live) ?? null;

/**
 * Confirmed supporters only. A funder goes on this list when there is
 * documentation for it, not because they appear in a photo. Everything else
 * belongs in CONTENT-CHECKLIST.md until Monique confirms it.
 */
export const sponsors = [
  {
    name: "Bastrop County Cares",
    detail: "Investing in Community Impact",
    amount: "$35,000",
    date: "June 2, 2025",
    forProgram: "Bee-lieve & Achieve Tour",
    featured: true,
  },
] as const;

/**
 * Participant and family testimonials. Deliberately empty: nothing goes here
 * that a real person did not actually say, with permission. The slideshow
 * renders an invitation to share a story while this list is empty, and turns
 * into a carousel the moment entries are added.
 *
 * Shape: { quote, name, role }
 */
export const testimonials: { quote: string; name: string; role: string }[] = [];

/** What the College Readiness Program includes, taken from the program flyer. */
export const programIncludes = [
  "Campus visits to top colleges & universities",
  "Real talk with college students & staff",
  "Scholarship, financial aid & admissions info",
  "College readiness workshops",
  "Empowerment sessions + leadership activities",
] as const;
