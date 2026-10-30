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
    text: "Students sit down with seniors to work through everyday technology questions, from finding a phone setting to getting comfortable with a new device. A little patience can make a difference.",
    detail: "Sundays · Typically 1:00 pm",
    scene: "tech",
    visualLabel: "A helping hand",
  },
  {
    title: "Make space for good company.",
    note: "Shared activities",
    text: "Board games, pumpkin carving, and serving ice cream bring students and seniors together. We share our time and talents, learn from each other, and enjoy the moment.",
    detail: "Seasonal & special gatherings",
    scene: "games",
    visualLabel: "A shared moment",
  },
  {
    title: "Give a little time. Take away a lot.",
    note: "Flexible volunteering",
    text: "Frequent opportunities make service easier to fit into student life. Build communication skills, earn volunteer hours, and help create a more connected community, one visit at a time.",
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
