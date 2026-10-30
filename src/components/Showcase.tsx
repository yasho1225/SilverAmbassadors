"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GenerationIllustration } from "@/components/GenerationIllustration";
gsap.registerPlugin(ScrollTrigger);
export function Showcase() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top 85%",
            end: "center 45%",
            scrub: 0.7,
            invalidateOnRefresh: true,
          },
        });
        timeline
          .from(
            ".generation-student",
            { xPercent: -14, rotate: -5, duration: 0.9, ease: "none" },
            0,
          )
          .from(
            ".generation-senior",
            { xPercent: 14, rotate: 5, duration: 0.9, ease: "none" },
            0,
          )
          .from(".connection-word", { y: 8, duration: 0.9, ease: "none" }, 0)
          .from(
            ".generation-art",
            { y: 10, autoAlpha: 0.7, duration: 0.9, ease: "none" },
            0,
          )
          .fromTo(
            ".connection-trace",
            { attr: { "stroke-dashoffset": 1 } },
            { attr: { "stroke-dashoffset": 0 }, duration: 0.45, ease: "none" },
            0.45,
          );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);
  return (
    <section
      ref={root}
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
            Students share digital know-how.
            <br />
            Seniors share stories and experience.
          </p>
        </div>
        <div className="generation-composition">
          <div className="generation-panel generation-student">
            <span>Something to give</span>
            <p>Students</p>
            <GenerationIllustration generation="students" />
            <small>Patient tech help. A fresh perspective.</small>
          </div>
          <div className="generation-panel generation-senior">
            <span>Something to share</span>
            <p>Seniors</p>
            <GenerationIllustration generation="seniors" />
            <small>Stories. Experience. Good company.</small>
          </div>
          <span className="connection-word" aria-hidden="true">
            together.
          </span>
        </div>
        <p className="connection-footnote">
          Tech help, conversation, and friendships that go both ways.
        </p>
      </div>
    </section>
  );
}
