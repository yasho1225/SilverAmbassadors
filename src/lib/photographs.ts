export type PhotoKey = "hero" | "connection" | "community" | "students";

type Photograph = {
  src: string;
  alt: string;
  caption: string;
  position: string;
};

const sharedVisit: Photograph = {
  src: "/photos/shared-visit.jpg",
  alt: "A student and two seniors sitting together around a table.",
  caption: "Time together.",
  position: "50% 78%",
};

// Original club-provided photographs. Focal points keep faces in the cover crops.
export const photographs: Record<PhotoKey, Photograph> = {
  hero: sharedVisit,
  connection: sharedVisit,
  community: {
    src: "/photos/community-visit.jpg",
    alt: "Students gathered around a seated senior holding a phone.",
    caption: "Across generations.",
    position: "50% 50%",
  },
  students: {
    src: "/photos/student-community.jpg",
    alt: "Four students posing together in a bright lobby.",
    caption: "Our student community.",
    position: "50% 50%",
  },
};
