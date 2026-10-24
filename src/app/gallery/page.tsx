import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs and highlights from Silver Ambassadors events and community gatherings.",
};

export default function GalleryPage() {
  return (
    <PhotoGallery title="Event photographs and club rhythm" />
  );
}
