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
      title: "Sunday Tech Helps",
      detail:
        "Weekly sessions, typically at 1:00 pm, where students help seniors with technology questions and everyday digital tasks.",
    },
    {
      title: "Special events",
      detail:
        "Seasonal and social gatherings such as pumpkin carving, serving ice cream, and board games that bring students and seniors together.",
    },
    {
      title: "Flexible volunteer hours",
      detail:
        "Frequent, shorter opportunities so students can earn valuable volunteer hours without a large one-time commitment.",
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
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/volunteer-hours", label: "Volunteer Hours" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const galleryPhotos = [
  {
    id: "visit-lounge",
    src: "/images/visit-lounge.jpg",
    alt: "A Silver Ambassador visiting with two senior residents in a lounge",
    caption: "Sunday visit",
    span: "tall" as const,
  },
  {
    id: "group-lounge",
    src: "/images/group-lounge.jpg",
    alt: "Ambassadors gathered with a senior resident in the community lounge",
    caption: "Shared company",
    span: "wide" as const,
  },
  {
    id: "members-lobby",
    src: "/images/members-lobby.jpg",
    alt: "Silver Ambassadors members together in the building lobby",
    caption: "The ambassadors",
    span: "wide" as const,
  },
  {
    id: "members-patio",
    src: "/images/members-patio.jpg",
    alt: "Silver Ambassadors members outdoors after a visit",
    caption: "After the visit",
    span: "wide" as const,
  },
] as const;
