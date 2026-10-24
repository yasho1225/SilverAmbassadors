import { FadeIn } from "@/components/FadeIn";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section
      className="section-pad"
      aria-labelledby="mission-heading"
    >
      <div className="site-container">
        <div className="panel-soft grid items-stretch overflow-hidden lg:grid-cols-[0.95fr_1.15fr]">
          <FadeIn className="border-b border-border/80 bg-charcoal px-8 py-10 text-white sm:px-10 sm:py-12 lg:border-r lg:border-b-0">
            <p className="eyebrow mb-3 !text-white/55">Who we are</p>
            <h2
              id="mission-heading"
              className="font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl md:text-[2.6rem]"
            >
              Connecting generations through service
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-white/65">
              A student organization at {site.school} serving seniors in
              Alpharetta through weekly volunteering.
            </p>
          </FadeIn>

          <FadeIn
            delay={0.08}
            className="bg-surface-elevated px-8 py-10 sm:px-10 sm:py-12"
          >
            <blockquote className="border-l-2 border-charcoal/25 pl-5">
              <p className="font-display text-xl leading-relaxed text-ink sm:text-[1.55rem]">
                {site.mission}
              </p>
            </blockquote>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
