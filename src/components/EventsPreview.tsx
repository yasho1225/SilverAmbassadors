import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section
      className="site-pad section-y bg-field text-field-ink"
      aria-labelledby="events"
    >
      <div className="site-container-wide">
        <div className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <Reveal>
            <h2
              id="events"
              className="display max-w-[12ch] text-[clamp(2.2rem,5vw,3.75rem)] text-field-ink"
            >
              This Sunday.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-field-ink/65">
              Tech Helps at 1:00 pm — plus seasonal gatherings through the year.
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              href="/events"
              className="btn border border-field-ink/20 bg-transparent text-field-ink hover:bg-field-ink/5"
            >
              Full calendar
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <div className="[&_.border-line]:border-field-ink/15 [&_.bg-background]:bg-white [&_.text-ink]:text-field-ink [&_.text-muted]:text-field-ink/60 [&_.bg-surface-2]:bg-black/5">
            <CalendarEmbed />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
