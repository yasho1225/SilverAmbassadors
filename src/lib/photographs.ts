// Add approved local files under public/photos, then set src and descriptive alt.
// Empty sources display labeled artwork rather than unverified event imagery.
export const photographs: Record<
  "hero" | "tech" | "gatherings" | "moments",
  { src: string; alt: string }
> = {
  hero: { src: "", alt: "" },
  tech: { src: "", alt: "" },
  gatherings: { src: "", alt: "" },
  moments: { src: "", alt: "" },
};
export type PhotoKey = keyof typeof photographs;
