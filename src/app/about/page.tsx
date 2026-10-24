import type { Metadata } from "next";
import { CallToAction } from "@/components/CallToAction";
import { Reveal } from "@/components/motion/Reveal";
import { Showcase } from "@/components/Showcase";
import { WhatWeDo } from "@/components/WhatWeDo";
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
            <h1 className="display max-w-[12ch] text-[clamp(3rem,9vw,6.5rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
              A student organization at {site.school} dedicated to mutual joy,
              respect, and community with senior citizens in Alpharetta.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide grid gap-12 lg:grid-cols-2">
          <Reveal>
            <h2 className="display text-[clamp(2.2rem,4vw,3.5rem)] text-ink">
              Why we gather
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="font-display text-[clamp(1.25rem,1rem+1vw,1.75rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
              {site.aboutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Showcase />
      <WhatWeDo />
      <CallToAction />
    </>
  );
}
