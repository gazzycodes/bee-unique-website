/**
 * Single source of truth for organisation details that appear in more than one
 * place. Confirmed against the Bee Unique program flyer, pull-up banner and
 * event signage. Anything still in [brackets] is unconfirmed — see
 * CONTENT-CHECKLIST.md.
 */
export const site = {
  name: "Bee Unique",
  tagline: "Bee-lieve & Achieve",
  strapline: "Your Gateway to Success",
  /**
   * Used for canonical URLs and the og:image absolute path. This MUST be the
   * domain the site is actually served from — beeunique.org does not resolve,
   * so pointing canonicals there would tell search engines the real pages are
   * duplicates of a dead address, and link previews would show a broken image.
   * Update this the day a custom domain goes live on Netlify.
   */
  url: "https://bee-unique.netlify.app",

  email: "mgrantbeeunique@gmail.com",
  phone: "(832) 455-7427",
  phoneHref: "tel:+18324557427",

  founder: "Monique Grant",
  founderRole: "Founder & Executive Director",

  serviceArea: "Texas",

  socials: [
    { label: "Instagram", handle: "@beeunique27", href: "https://instagram.com/beeunique27" },
  ],

  /** Replace with the live donation processor checkout link before launch. */
  donateUrl: "[DONATION-PLATFORM-URL]",

  /** 501(c)(3) determination on file; EIN still to be published. */
  ein: "[EIN]",
} as const;

/** What the College Readiness Program includes — taken from the program flyer. */
export const programIncludes = [
  "Campus visits to top colleges & universities",
  "Real talk with college students & staff",
  "Scholarship, financial aid & admissions info",
  "College readiness workshops",
  "Empowerment sessions + leadership activities",
] as const;
