import { CallToAction } from "@/components/CallToAction";
import { EventsPreview } from "@/components/EventsPreview";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { VerbStages } from "@/components/VerbStages";
import { VisitsTeaser } from "@/components/VisitsTeaser";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <VerbStages />
      <VisitsTeaser />
      <EventsPreview />
      <CallToAction />
    </>
  );
}
