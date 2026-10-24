import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from Silver Ambassadors visits — the only page that displays club photos.",
};

export default function GalleryPage() {
  return (
    <div className="pt-10 sm:pt-12">
      <PhotoGallery />
    </div>
  );
}
