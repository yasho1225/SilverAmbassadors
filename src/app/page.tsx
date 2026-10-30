import { EventsPreview } from "@/components/EventsPreview";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { Showcase } from "@/components/Showcase";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <Showcase />
      <WhatWeDo />
      <EventsPreview />
      <PhotoGallery showViewAll />
    </>
  );
}
