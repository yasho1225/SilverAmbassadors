import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journal of Silver Ambassadors. Event photographs and community highlights are coming soon.",
};

export default function GalleryPage() {
  return <PhotoGallery standalone />;
}
