import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { VolunteerHoursSection } from "@/components/VolunteerHoursSection";

export const metadata: Metadata = {
  title: "Volunteer Hours",
  description:
    "Submit completed Silver Ambassadors volunteering hours through the official Google Form.",
};

export default function VolunteerHoursPage() {
  return (
    <>
      <section className="site-pad section-y border-b border-line">
        <div className="site-container-wide">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-silver uppercase">
              Members
            </p>
            <h1 className="display mt-4 max-w-[10ch] text-[clamp(2.8rem,8vw,5.5rem)] text-ink">
              Volunteer Hours
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Use the official form to log hours completed with Silver
              Ambassadors.
            </p>
          </Reveal>
        </div>
      </section>
      <VolunteerHoursSection />
    </>
  );
}
