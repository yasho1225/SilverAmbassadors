import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/lib/content";

export function MissionSection() {
  return (
    <section className="section-pad bg-white" aria-labelledby="mission-heading">
      <div className="site-container">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <FadeIn>
            <SectionHeading
              eyebrow="Who we are"
              title="Connecting generations through service"
            />
            <p id="mission-heading" className="sr-only">
              Silver Ambassadors mission
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <blockquote className="border-l border-light-gray pl-6">
              <p className="font-display text-xl leading-relaxed text-ink sm:text-2xl">
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
