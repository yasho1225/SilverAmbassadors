"use client";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { photographs } from "@/lib/photographs";
gsap.registerPlugin(ScrollTrigger);
export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.to(".hero-art-inner", {
          yPercent: 9,
          scale: 1.07,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} className="hero site-pad" aria-labelledby="hero-title">
      <div className="site-container-wide">
        <div className="hero-topline">
          <span>Student volunteers. Senior connections.</span>
          <span>Alpharetta, Georgia</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <h1 id="hero-title" className="hero-title">
              Students
              <br />
              helping
              <br />
              <em>seniors.</em>
            </h1>
            <p className="hero-description">
              A student-led volunteering community in Alpharetta. We bring high
              school students and seniors together through tech help, games,
              and shared activities.
            </p>
            <Link href="#volunteering" className="text-link">
              Explore volunteering <ArrowUpRight size={19} aria-hidden="true" />
            </Link>
          </div>
          <div className="hero-art">
            <div className="hero-art-inner">
              <PhotoPlaceholder asset="hero" variant="connection" />
            </div>
            <div className="art-caption">
              <span>A space for shared moments</span>
              <span>
                {photographs.hero.src
                  ? "Silver Ambassadors"
                  : "Photography coming soon"}
              </span>
            </div>
          </div>
        </div>
        <div className="hero-bottom">
          <a href="#mission" className="scroll-link">
            <ArrowDown size={15} aria-hidden="true" /> A small introduction
          </a>
          <p>Different generations. Common ground.</p>
          <span className="hero-seal" aria-hidden="true">
            SA / AHS
          </span>
        </div>
      </div>
    </section>
  );
}
