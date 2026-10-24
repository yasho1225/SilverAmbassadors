import Link from "next/link";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { FadeIn } from "@/components/FadeIn";

export function EventsPreview() {
  return (
    <section className="section-pad bg-charcoal text-white" aria-labelledby="events-preview">
      <div className="site-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <FadeIn>
            <p className="eyebrow mb-3 !text-white/50">Upcoming events</p>
            <h2 className="font-display max-w-xl text-3xl tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
              Join us this Sunday
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Weekly Tech Helps are typically Sundays at 1:00 pm, alongside
              special community events throughout the year.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <Link
              href="/events"
              className="inline-flex shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/8 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/14"
            >
              Explore full calendar
            </Link>
          </FadeIn>
        </div>

        <FadeIn delay={0.1} className="mt-12">
          <h3 id="events-preview" className="sr-only">
            Calendar preview
          </h3>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/95 text-ink shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <CalendarEmbed className="[&_.rounded-2xl]:rounded-none [&_.rounded-2xl]:border-0" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
