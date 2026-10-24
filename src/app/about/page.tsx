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
            <h1 className="display max-w-[14ch] text-[clamp(2.5rem,5.5vw,4rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-6 max-w-[38rem] text-[1.05rem] leading-relaxed text-muted">
              A student organization at {site.school} building mutual joy,
              respect, and community with seniors in Alpharetta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="display text-[clamp(1.85rem,3.5vw,2.75rem)] text-ink">
              Why we gather
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="font-display text-[clamp(1.1rem,0.95rem+0.6vw,1.35rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8">
              <Link href="/gallery" className="cta-underline text-accent">
                View the photo gallery
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
