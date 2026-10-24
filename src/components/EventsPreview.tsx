import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section className="site-pad section-y" aria-labelledby="events">
      <div className="site-container-wide">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <p className="text-sm font-semibold tracking-[0.14em] text-silver uppercase">
              Calendar
            </p>
            <h2
              id="events"
              className="display mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,3.5rem)] text-ink"
            >
              This Sunday.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted">
              Tech Helps at 1:00 pm — plus seasonal gatherings through the year.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link href="/events" className="btn btn-ghost !min-h-0 px-4 py-2 text-sm">
              Full calendar
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <CalendarEmbed />
        </Reveal>
      </div>
    </section>
  );
}
