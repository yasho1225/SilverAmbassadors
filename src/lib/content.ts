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
} as const;

export const heroContent = {
  eyebrow: "Alpharetta High School · Student volunteers",
  headline: ["Students helping", "seniors connect."],
  description:
    "We help local seniors use their phones, work through technology questions, and enjoy games and conversation during regular visits.",
  primaryAction: "Explore volunteering",
  secondaryAction: "Our mission",
  visitNote: "Sunday Tech Helps · Typically 1:00 pm",
  photoNote: ["Tech help.", "Time together."],
} as const;

export const generationContent = {
  students: {
    title: "Students",
    description:
      "Share tech skills, build confidence, and earn volunteer hours.",
  },
  seniors: {
    title: "Seniors",
    description:
      "Get friendly tech help, share stories, and enjoy good company.",
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

export const primaryNavLinks = [
  { href: "/about", label: "Mission" },
  { href: "/events", label: "Volunteer" },
  { href: "/contact", label: "Get involved" },
] as const;

export const volunteerStories = [
  {
    title: "Make technology feel a little friendlier.",
    note: "Sunday Tech Helps",
    text: "Sit down with seniors to work through phone settings, new devices, and everyday technology questions—at their pace.",
    detail: "Sundays · Typically 1:00 pm",
    scene: "tech",
    visualLabel: "A helping hand",
  },
  {
    title: "Make space for good company.",
    note: "Shared activities",
    text: "Play board games, carve pumpkins, or serve ice cream. Simple activities make room for conversation and new friendships.",
    detail: "Seasonal & special gatherings",
    scene: "games",
    visualLabel: "A shared moment",
  },
  {
    title: "Give a little time. Take away a lot.",
    note: "Flexible volunteering",
    text: "Choose regular visits that fit around school. Build communication skills and earn volunteer hours, one visit at a time.",
    detail: "Submit your hours after volunteering",
    scene: "time",
    visualLabel: "Time well spent",
  },
] as const;

export const galleryPlaceholders = [
  {
    id: "1",
    alt: "Placeholder for a Silver Ambassadors event photograph",
    caption: "Event photo placeholder",
    span: "wide" as const,
  },
  {
    id: "2",
    alt: "Placeholder for students volunteering with seniors",
    caption: "Event photo placeholder",
    span: "tall" as const,
  },
  {
    id: "3",
    alt: "Placeholder for a Tech Help session photograph",
    caption: "Event photo placeholder",
    span: "square" as const,
  },
  {
    id: "4",
    alt: "Placeholder for a special community event photograph",
    caption: "Event photo placeholder",
    span: "square" as const,
  },
  {
    id: "5",
    alt: "Placeholder for a seasonal Silver Ambassadors gathering",
    caption: "Event photo placeholder",
    span: "wide" as const,
  },
  {
    id: "6",
    alt: "Placeholder for members sharing time with seniors",
    caption: "Event photo placeholder",
    span: "square" as const,
  },
];
