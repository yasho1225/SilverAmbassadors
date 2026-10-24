import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Silver Ambassadors events, including weekly Sunday Tech Helps and special community gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <section className="site-pad section-y border-b border-line">
        <div className="site-container-wide">
          <Reveal>
            <h1 className="display max-w-[10ch] text-[clamp(3rem,9vw,6rem)] text-ink">
              When we meet.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Weekly events are typically held every Sunday—most often Tech
              Helps at 1:00 pm—with additional special events throughout the
              year.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y">
        <div className="site-container-wide">
          <Reveal>
            <CalendarEmbed />
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-10 max-w-2xl border border-line bg-surface p-6">
              <h2 className="font-display text-xl text-ink">
                Calendar setup note
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Publish the Google Calendar, copy the embed URL, and set{" "}
                <code className="rounded bg-surface-2 px-1.5 py-0.5 text-xs text-ink">
                  NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL
                </code>
                . Public viewers only need view access—not edit access.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
