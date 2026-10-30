"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GenerationIllustration } from "@/components/GenerationIllustration";
import { generationContent } from "@/lib/content";
gsap.registerPlugin(ScrollTrigger);
export function Showcase() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current?.querySelector(".generation-composition"),
            start: "top 85%",
            end: "top top+=120",
            scrub: 0.45,
            invalidateOnRefresh: true,
          },
        });
        timeline
          .from(
            ".generation-student",
            { xPercent: -10, rotate: -4, duration: 1, ease: "none" },
            0,
          )
          .from(
            ".generation-senior",
            { xPercent: 10, rotate: 4, duration: 1, ease: "none" },
            0,
          )
          .fromTo(
            ".connection-trace",
            { attr: { "stroke-dashoffset": 1 } },
            { attr: { "stroke-dashoffset": 0 }, duration: 0.3, ease: "none" },
            0.7,
          );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return (
    <section
      ref={root}
      id="generations"
      className="connection-section site-pad"
      aria-labelledby="connection-title"
    >
      <div className="site-container-wide">
        <div className="connection-intro">
          <h2 id="connection-title">
            Two generations.
            <br />
            <em>A world to share.</em>
          </h2>
          <p>
            Every visit is a chance to help—and to learn from each other.
          </p>
        </div>
        <div className="generation-composition">
          {(["students", "seniors"] as const).map((generation) => {
            const content = generationContent[generation];
            return (
              <div
                key={generation}
                className={`generation-panel generation-${generation === "students" ? "student" : "senior"}`}
              >
                <h3 className="generation-title">{content.title}</h3>
                <p className="generation-description">{content.description}</p>
                <GenerationIllustration generation={generation} />
              </div>
            );
          })}
          <span className="connection-word" aria-hidden="true">
            together.
          </span>
        </div>
      </div>
    </section>
  );
}
