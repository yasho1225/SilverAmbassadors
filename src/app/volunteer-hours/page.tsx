import type { Metadata } from "next";
import { VolunteerHoursSection } from "@/components/VolunteerHoursSection";

export const metadata: Metadata = {
  title: "Volunteer Hours",
  description:
    "Submit completed Silver Ambassadors volunteering hours through the official Google Form.",
};

export default function VolunteerHoursPage() {
  return (
    <>
      <section className="border-b border-border bg-off-white section-pad !pb-10 !pt-20">
        <div className="site-container">
          <p className="eyebrow mb-4">For members</p>
          <h1 className="font-display max-w-3xl text-4xl tracking-tight text-ink sm:text-5xl">
            Volunteer Hours
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Use the official form below to log hours you have completed
            volunteering with Silver Ambassadors.
          </p>
        </div>
      </section>
      <VolunteerHoursSection />
    </>
  );
}
