export const site = {
  name: "Silver Ambassadors",
  school: "Alpharetta High School",
  tagline: "Students and seniors, connected through service.",
  description:
    "A student organization at Alpharetta High School that promotes mutual joy, respect, and community among students and senior citizens in Alpharetta.",
  mission:
    "The goal of Silver Ambassadors is to promote mutual joy, respect, and community among students and senior citizens in Alpharetta, and to provide opportunities for students to earn valuable volunteer hours while improving their communication skills and sharing their time and talents.",
  aboutBody: [
    "We do weekly events every Sunday, typically Tech Helps at 1:00 pm, and help facilitate special events, such as pumpkin carving, serving ice cream, and board games.",
    "Through these frequent opportunities, students gain the volunteering hours they need without making a large commitment all at once, making the events a convenient way to serve our community.",
  ],
  activities: [
    {
      verb: "Show",
      title: "Sunday Tech Helps",
      detail:
        "Show up at 1:00 pm. Help with phones, apps, and the everyday digital tasks that unlock independence.",
      image: "/images/atmosphere/help.jpg",
      imageAlt: "People collaborating around a table during a workshop",
    },
    {
      verb: "Share",
      title: "Special events",
      detail:
        "Share seasons together — pumpkin carving, ice cream socials, board games, and celebration.",
      image: "/images/atmosphere/laugh.jpg",
      imageAlt: "Friends laughing together outdoors",
    },
    {
      verb: "Serve",
      title: "Flexible hours",
      detail:
        "Serve in short weekly visits so hours add up without a single large commitment.",
      image: "/images/atmosphere/share.jpg",
      imageAlt: "A group of friends together in a warm gathering",
    },
  ],
  contactPlaceholders: {
    email: "[Club email — placeholder]",
    advisor: "[Staff advisor — placeholder]",
    location: "Alpharetta High School, Alpharetta, GA",
    note: "Contact details will be added once verified by club leadership.",
  },
  logo: {
    src: "/images/logo.png",
    alt: "Silver Ambassadors medallion logo — handshake, Established 2026",
  },
  atmosphere: {
    heroStrip: {
      src: "/images/atmosphere/hands.jpg",
      alt: "Many hands stacked together in a circle of community",
    },
    missionPortrait: {
      src: "/images/atmosphere/help.jpg",
      alt: "Volunteers working side by side",
    },
  },
  /** Unsplash atmosphere — club visit photos are listed only in `galleryPhotos`. */
  atmosphereCredits: [
    {
      label: "Hands",
      href: "https://unsplash.com/photos/people-putting-their-hands-together-e0d53f98f2ca",
    },
    {
      label: "Help",
      href: "https://unsplash.com/photos/person-holding-baby-s-hand-5f04d1e3f289",
    },
    {
      label: "Gather",
      href: "https://unsplash.com/photos/person-writing-on-white-paper-c3d57bc86b40",
    },
    {
      label: "Share",
      href: "https://unsplash.com/photos/people-sitting-on-green-grass-field-during-daytime-a01980e01a18",
    },
  ],
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/volunteer-hours", label: "Hours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

/** Club visit photographs — render ONLY on `/gallery`. */
export const galleryPhotos = [
  {
    id: "visit-lounge",
    src: "/images/visit-lounge.jpg",
    alt: "A Silver Ambassador visiting with two senior residents in a lounge",
    caption: "Sunday visit",
  },
  {
    id: "group-lounge",
    src: "/images/group-lounge.jpg",
    alt: "Ambassadors gathered with a senior resident in the community lounge",
    caption: "Shared company",
  },
  {
    id: "members-lobby",
    src: "/images/members-lobby.jpg",
    alt: "Silver Ambassadors members together in the building lobby",
    caption: "The ambassadors",
  },
  {
    id: "members-patio",
    src: "/images/members-patio.jpg",
    alt: "Silver Ambassadors members outdoors after a visit",
    caption: "After the visit",
  },
] as const;
