import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section
      className="site-pad section-y border-y border-line bg-surface"
      aria-labelledby="events"
    >
      <div className="site-container-wide">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2
              id="events"
              className="display max-w-[14ch] text-[clamp(2rem,4.2vw,3.4rem)] text-ink"
            >
              Join us this Sunday
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
              Tech Helps at 1:00 pm, plus seasonal gatherings through the year.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link href="/events" className="btn btn-ghost !min-h-0 px-4 py-2 text-sm">
              Full calendar
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.06}>
          <CalendarEmbed />
        </Reveal>
      </div>
    </section>
  );
}
