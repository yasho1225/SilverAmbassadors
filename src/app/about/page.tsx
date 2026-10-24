import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/CallToAction";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: site.mission,
};

export default function AboutPage() {
  return (
    <>
      <section className="site-pad section-y border-b border-line">
        <div className="site-container-wide">
          <Reveal>
            <h1 className="display max-w-[12ch] text-[clamp(2.8rem,7vw,5.25rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-6 max-w-[44ch] text-base leading-relaxed text-muted sm:text-lg">
              A student organization at {site.school} building mutual joy,
              respect, and community with seniors in Alpharetta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink">
              Why we gather
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-display text-[clamp(1.15rem,0.95rem+0.7vw,1.5rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/gallery" className="cta-underline text-accent">
                See photographs from our visits
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
