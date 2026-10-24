import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section className="site-pad section-y" aria-labelledby="events">
      <div className="site-container-wide">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2
              id="events"
              className="display max-w-[14ch] text-[clamp(1.85rem,3.5vw,2.75rem)] text-ink"
            >
              Join us this Sunday
            </h2>
            <p className="mt-4 max-w-[38rem] text-[1.05rem] leading-relaxed text-muted">
              Tech Helps at 1:00 pm, with seasonal gatherings throughout the year.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/events"
              className="btn btn-ghost !min-h-0 shrink-0 px-4 py-2 text-sm"
            >
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
