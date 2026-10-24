import type { Metadata } from "next";
import Image from "next/image";
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
        <div className="site-container-wide grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-12">
          <Reveal>
            <h1 className="display max-w-[12ch] text-[clamp(2.6rem,7vw,4.75rem)] text-ink">
              {site.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              A student organization at {site.school} building mutual joy,
              respect, and community with seniors in Alpharetta.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="relative aspect-[4/3] overflow-hidden bg-ink">
              <Image
                src="/images/members-patio.jpg"
                alt="Silver Ambassadors members outdoors after a visit"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-[center_40%]"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-pad section-y bg-surface">
        <div className="site-container-wide grid gap-8 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <h2 className="display text-[clamp(2rem,4vw,3.2rem)] text-ink">
              Why we gather
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="font-display text-[clamp(1.15rem,0.95rem+0.8vw,1.5rem)] leading-relaxed text-ink">
              {site.mission}
            </p>
            <div className="mt-6 space-y-3 text-base leading-relaxed text-muted">
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
