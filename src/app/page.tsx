import { CallToAction } from "@/components/CallToAction";
import { EventsPreview } from "@/components/EventsPreview";
import { Hero } from "@/components/Hero";
import { MissionSection } from "@/components/MissionSection";
import { PhotoGallery } from "@/components/PhotoGallery";
import { WhatWeDo } from "@/components/WhatWeDo";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <WhatWeDo />
      <EventsPreview />
      <PhotoGallery limit={5} />
      <div className="bg-off-white pb-4 text-center">
        <Link
          href="/gallery"
          className="inline-flex text-sm font-semibold text-ink underline decoration-light-gray underline-offset-4 transition-colors hover:decoration-ink"
        >
          View full gallery
        </Link>
      </div>
      <CallToAction />
    </>
  );
}
