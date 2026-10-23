import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Silver Ambassadors events and community gatherings.",
};

export default function GalleryPage() {
  return (
    <PhotoGallery
      eyebrow="Gallery"
      title="Event photographs"
      description="These frames are clearly marked placeholders. Replace them with authentic Silver Ambassadors photographs when available—without inventing event names or dates."
    />
  );
}
