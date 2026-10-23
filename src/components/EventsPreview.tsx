import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export function EventsPreview() {
  return (
    <section className="section-pad bg-white" aria-labelledby="events-preview">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <SectionHeading
              eyebrow="Upcoming events"
              title="Join us this Sunday"
              description="Weekly Tech Helps are typically Sundays at 1:00 pm, alongside special community events throughout the year."
            />
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link
              href="/events"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-border bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-off-white"
            >
              Explore full calendar
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-12">
          <h3 id="events-preview" className="sr-only">
            Calendar preview
          </h3>
          <CalendarEmbed />
        </FadeIn>
      </div>
    </section>
  );
}
