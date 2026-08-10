/**
 * Every photo and clip Bee Unique has published, in one ordered list.
 *
 * The gallery grid, the hero mosaic and the lightbox all read from here, so a
 * new image is added in exactly one place. `photo` names must exist in the
 * CATALOG in components/Photo.astro; `video` entries point straight at
 * /public/video with a poster from /public/images.
 *
 * `focus` is a Tailwind object-position utility, used to keep faces in frame
 * when a tall photo sits in a short tile.
 */
export type GalleryItem = {
  id: string;
  kind: "photo" | "video";
  /** Photo catalog name, or the video's public path. */
  src: string;
  poster?: string;
  alt: string;
  caption: string;
  category: "College Tours" | "Community" | "Our Team" | "Events";
  focus?: string;
};

export const gallery: GalleryItem[] = [
  {
    id: "students-selfie",
    kind: "photo",
    src: "students-selfie",
    alt: "Monique Grant and a group of smiling Bee Unique students in program T-shirts on a college tour",
    caption: "Bee Unique students on the Bee-lieve & Achieve college tour.",
    category: "College Tours",
    focus: "object-[50%_35%]",
  },
  {
    id: "college-tour-campus",
    kind: "photo",
    src: "college-tour-campus",
    alt: "Bee Unique students gathered outside a university stadium entrance during a college tour",
    caption: "Arriving on campus. For many students it is their first university visit.",
    category: "College Tours",
    focus: "object-[50%_55%]",
  },
  {
    id: "college-tour-group",
    kind: "photo",
    src: "college-tour-group",
    alt: "Bee Unique students in College Tour shirts gathered in front of a university backdrop",
    caption: "The full group on tour day, in Bee Unique college tour shirts.",
    category: "College Tours",
  },
  {
    id: "sponsor-cheque",
    kind: "video",
    src: "/video/sponsor-cheque.mp4",
    poster: "/images/sponsor-cheque-poster.webp",
    alt: "Bastrop County Cares presenting a $35,000 cheque to Bee Unique for the Bee-lieve & Achieve Tour",
    caption: "Bastrop County Cares backing the Bee-lieve & Achieve Tour with $35,000, June 2025.",
    category: "Community",
  },
  {
    id: "back2school-day",
    kind: "video",
    src: "/video/back2school-day.mp4",
    poster: "/images/back2school-day-poster.webp",
    alt: "Bee Unique Back2School day with free haircuts, backpacks and school supplies",
    caption: "Back2School day: free haircuts, backpacks and school supplies.",
    category: "Community",
  },
  {
    id: "backpack-giveaway",
    kind: "photo",
    src: "backpack-giveaway",
    alt: "A student receiving a new backpack from a volunteer at a Bee Unique giveaway",
    caption: "Backpacks handed out at a Bee Unique community giveaway.",
    category: "Community",
    focus: "object-[50%_35%]",
  },
  {
    id: "outreach-table",
    kind: "photo",
    src: "outreach-table",
    alt: "Students gathered around the Bee Unique information table at a school event",
    caption: "Signing students up at a school event.",
    category: "Events",
    focus: "object-[50%_40%]",
  },
  {
    id: "back2school",
    kind: "video",
    src: "/video/back2school.mp4",
    poster: "/images/back2school-poster.webp",
    alt: "Bee Unique Back2School community event with free supplies and haircuts",
    caption: "Back2School: a full day of free supplies, haircuts and information for families.",
    category: "Events",
  },
  {
    id: "founder-booth",
    kind: "photo",
    src: "founder-booth",
    alt: "Monique Grant beside the Bee Unique program banner at a community event",
    caption: "Monique Grant at the Bee Unique information table.",
    category: "Our Team",
    focus: "object-[65%_38%]",
  },
  {
    id: "student-outreach",
    kind: "photo",
    src: "student-outreach",
    alt: "A Bee Unique volunteer registering a student at an information table",
    caption: "Registering a student for the program.",
    category: "Events",
    focus: "object-[45%_52%]",
  },
  {
    id: "team-portrait",
    kind: "photo",
    src: "team-portrait",
    alt: "Two members of the Bee Unique team at a community education event",
    caption: "The Bee Unique team at a regional education conference.",
    category: "Our Team",
    focus: "object-[50%_28%]",
  },
  {
    id: "elevate-youth",
    kind: "video",
    src: "/video/elevate-youth.mp4",
    poster: "/images/elevate-youth-poster.webp",
    alt: "Bee Unique at the Elevate Youth Bastrop County education conference",
    caption: "Elevate Youth Bastrop County, building pathways to success for local students.",
    category: "Events",
  },
];

export const galleryCategories = [
  "All",
  ...Array.from(new Set(gallery.map((g) => g.category))),
] as const;
