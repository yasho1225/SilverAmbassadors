"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhotoPlaceholder } from "@/components/PhotoPlaceholder";
import { heroContent } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);
export function Hero() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const scrollTrigger = {
          trigger: root.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.6,
          invalidateOnRefresh: true,
        };
        gsap.to(".hero-main-photo .hero-art-inner", {
          yPercent: 5,
          scale: 1.04,
          ease: "none",
          scrollTrigger,
        });
        gsap.to(".hero-secondary-photo", {
          y: -18,
          rotate: -3,
          ease: "none",
          scrollTrigger,
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return (
    <section ref={root} className="hero site-pad" aria-labelledby="hero-title">
      <div className="site-container-wide hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span aria-hidden="true" />
            {heroContent.eyebrow}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span>{heroContent.headline[0]}</span>
            <em>{heroContent.headline[1]}</em>
          </h1>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-actions">
            <Link href="#volunteering" className="hero-primary-link">
              {heroContent.primaryAction}
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
            <Link href="#mission" className="hero-mission-link">
              {heroContent.secondaryAction}
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <p className="hero-visit-note">{heroContent.visitNote}</p>
        </div>
        <div className="hero-photo-story">
          <div className="hero-main-photo">
            <div className="hero-art-inner">
              <PhotoPlaceholder
                asset="hero"
                position="50% 88%"
                sizes="(max-width: 767px) 80vw, (max-width: 1439px) 38vw, 475px"
              />
            </div>
          </div>
          <div className="hero-secondary-photo">
            <PhotoPlaceholder
              asset="community"
              eager
              sizes="(max-width: 767px) 55vw, (max-width: 1439px) 25vw, 340px"
            />
          </div>
          <p className="hero-photo-note">
            {heroContent.photoNote[0]}
            <br />
            <em>{heroContent.photoNote[1]}</em>
          </p>
        </div>
      </div>
    </section>
  );
}
