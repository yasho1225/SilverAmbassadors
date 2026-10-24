import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section className="site-pad section-y" aria-labelledby="events">
      <div className="site-container-wide">
        <div className="editorial-axis mb-8 sm:mb-10">
          <Reveal>
            <p className="editorial-note text-sm text-muted">Calendar</p>
          </Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <Reveal>
              <h2
                id="events"
                className="display max-w-[12ch] text-[clamp(2.2rem,4.5vw,3.5rem)] text-ink"
              >
                Join us this Sunday
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                Tech Helps at 1:00 pm, plus seasonal gatherings through the year.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <Link
                href="/events"
                className="btn btn-ghost !min-h-0 shrink-0 px-4 py-2 text-sm"
              >
                Full calendar
              </Link>
            </Reveal>
          </div>
        </div>
        <Reveal delay={0.05}>
          <CalendarEmbed />
        </Reveal>
      </div>
    </section>
  );
}
