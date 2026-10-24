import { CallToAction } from "@/components/CallToAction";
import { EventsPreview } from "@/components/EventsPreview";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { WhatWeDo } from "@/components/WhatWeDo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <WhatWeDo />
      <EventsPreview />
      <CallToAction />
    </>
  );
}
