import { CallToAction } from "@/components/CallToAction";
import { EventsPreview } from "@/components/EventsPreview";
import { GalleryTeaser } from "@/components/GalleryTeaser";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <WhatWeDo />
      <GalleryTeaser />
      <EventsPreview />
      <CallToAction />
    </>
  );
}
