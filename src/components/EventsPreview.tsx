import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";

export function EventsPreview() {
  return (
    <section className="site-pad section-y border-y border-line bg-surface" aria-labelledby="events">
      <div className="site-container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2 id="events" className="display max-w-[12ch] text-[clamp(2.4rem,5vw,4.2rem)] text-ink">
              Join us this Sunday.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Weekly Tech Helps are typically Sundays at 1:00 pm, with special
              community events throughout the year.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Link href="/events" className="btn btn-ghost">
              Full calendar
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="mt-12">
          <CalendarEmbed />
        </Reveal>
      </div>
    </section>
  );
}
