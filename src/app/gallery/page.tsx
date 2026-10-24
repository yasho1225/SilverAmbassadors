import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Silver Ambassadors visits and gatherings.",
};

export default function GalleryPage() {
  return (
    <div className="pt-8 sm:pt-10">
      <PhotoGallery title="From our visits" />
    </div>
  );
}
