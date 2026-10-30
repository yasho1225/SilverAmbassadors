import type { Metadata } from "next";
import { PhotoGallery } from "@/components/PhotoGallery";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs of Silver Ambassadors students and seniors sharing time and building connections in Alpharetta.",
};

export default function GalleryPage() {
  return <PhotoGallery standalone />;
}
