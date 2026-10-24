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
            <p className="text-sm font-semibold tracking-[0.14em] text-silver uppercase">
              About
            </p>
            <h1 className="display mt-4 max-w-[12ch] text-[clamp(2.6rem,7vw,5rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              A student organization at {site.school} building mutual joy,
              respect, and community with seniors in Alpharetta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide max-w-3xl">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4vw,3rem)] text-ink">
              Why we gather
            </h2>
            <p className="mt-6 text-[clamp(1.15rem,2vw,1.4rem)] font-medium leading-snug tracking-[-0.02em] text-ink">
              {site.mission}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/gallery" className="cta-underline font-medium text-ink">
                See photographs from real visits
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
