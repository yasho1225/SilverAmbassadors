import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { volunteerForm } from "@/lib/config";

export function EventsPreview() {
  return (
    <section
      className="calendar-section site-pad section-y border-y border-line"
      aria-labelledby="events"
    >
      <div className="site-container-wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <h2
              id="events"
              className="display max-w-[12ch] text-[clamp(2.4rem,5vw,4.2rem)] text-ink"
            >
              The club calendar.
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
        <p className="mt-8 flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-t border-line pt-6 text-sm text-ink">
          <span>Your time. Someone’s Sunday.</span>
          <a
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 underline underline-offset-4"
          >
            Already volunteered? Log your hours
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
