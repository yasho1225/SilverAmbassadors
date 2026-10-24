import { Activities } from "@/components/Activities";
import { CallToAction } from "@/components/CallToAction";
import { EventsPreview } from "@/components/EventsPreview";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <Activities />
      <EventsPreview />
      <CallToAction />
    </>
  );
}
