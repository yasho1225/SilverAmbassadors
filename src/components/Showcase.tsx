"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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
            { xPercent: -14, rotate: -5, ease: "none" },
            0,
          )
          .from(
            ".generation-senior",
            { xPercent: 14, rotate: 5, ease: "none" },
            0,
          )
          .from(".connection-word", { y: -12, ease: "none" }, 0);
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
            Different experiences.
            <br />
            The same need to connect.
          </p>
        </div>
        <div className="generation-composition">
          <div className="generation-panel generation-student">
            <span>Something to give</span>
            <p>Students</p>
            <small>Time. Talent. A fresh perspective.</small>
          </div>
          <div className="generation-panel generation-senior">
            <span>Something to share</span>
            <p>Seniors</p>
            <small>Stories. Experience. A new friendship.</small>
          </div>
          <span className="connection-word" aria-hidden="true">
            together.
          </span>
        </div>
        <p className="connection-footnote">
          The best part is what we learn from each other.
        </p>
      </div>
    </section>
  );
}
