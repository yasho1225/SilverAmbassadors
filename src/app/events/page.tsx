import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Silver Ambassadors events, including weekly Sunday Tech Helps and special community gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <section className="border-b border-border bg-off-white section-pad !pb-14 !pt-20">
        <div className="site-container">
          <FadeIn>
            <SectionHeading
              eyebrow="Events"
              title="When we meet"
              description="Weekly events are typically held every Sunday—most often Tech Helps at 1:00 pm—with additional special events throughout the year."
            />
          </FadeIn>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container">
          <FadeIn>
            <CalendarEmbed />
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-off-white p-6">
              <h2 className="text-lg font-semibold text-ink">
                Calendar setup note
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                If you are a club administrator: publish the Google Calendar, copy
                the embed URL from Calendar settings → Integrate calendar, and set{" "}
                <code className="rounded bg-white px-1.5 py-0.5 text-xs">
                  NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL
                </code>{" "}
                in the project environment. Public viewers do not need edit
                access—only the ability to see the calendar without signing in.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
