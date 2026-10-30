"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { volunteerStories } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

function ActivityIllustration({ scene }: { scene: "tech" | "games" | "time" }) {
  return (
    <div
      className={`activity-illustration illustration-${scene}`}
      aria-hidden="true"
    >
      <div className="illustration-orbit" />
      {scene === "tech" && (
        <div className="tech-device">
          <div className="device-camera" />
          <div className="device-screen">
            <span className="device-type">Aa</span>
            <span className="device-rule" />
            <span className="device-rule short" />
          </div>
          <span className="device-button" />
        </div>
      )}
      {scene === "games" && (
        <div className="game-board">
          {Array.from({ length: 16 }, (_, i) => (
            <span
              key={i}
              className={`game-square ${(Math.floor(i / 4) + (i % 4)) % 2 ? "square-dark" : ""}`}
            />
          ))}
          <i className="game-piece piece-one" />
          <i className="game-piece piece-two" />
          <i className="game-piece piece-three" />
        </div>
      )}
      {scene === "time" && (
        <div className="time-dial">
          <span className="dial-twelve">12</span>
          <span className="dial-three">3</span>
          <span className="dial-six">6</span>
          <span className="dial-nine">9</span>
          <i className="dial-hand hand-hour" />
          <i className="dial-hand hand-minute" />
          <i className="dial-center" />
        </div>
      )}
    </div>
  );
}

export function WhatWeDo() {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const scenes = gsap.utils.toArray<HTMLElement>(".activity-scene");
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: ".activity-story-grid",
              start: "top top+=120",
              end: () => {
                const stage =
                  root.current?.querySelector<HTMLElement>(".activity-stage");
                return (
                  "bottom top+=" + (120 + (stage?.offsetHeight ?? 530) / 2)
                );
              },
              scrub: 0.6,
              invalidateOnRefresh: true,
            },
          });
          timeline
            .fromTo(
              ".activity-stage .tech-device",
              { rotate: -6, y: 8 },
              { rotate: -2, y: -4, duration: 0.8, ease: "none" },
              0,
            )
            .to(
              scenes[0],
              { autoAlpha: 0, duration: 0.18, ease: "none" },
              0.4,
            )
            .fromTo(
              scenes[1],
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.22, ease: "none" },
              0.58,
            )
            .fromTo(
              ".activity-stage .game-board",
              { rotate: -10, scale: 0.94 },
              { rotate: -3, scale: 1, duration: 1.1, ease: "none" },
              0.4,
            )
            .to(
              scenes[1],
              { autoAlpha: 0, duration: 0.18, ease: "none" },
              1.5,
            )
            .fromTo(
              scenes[2],
              { autoAlpha: 0 },
              { autoAlpha: 1, duration: 0.22, ease: "none" },
              1.68,
            )
            .fromTo(
              ".activity-stage .hand-minute",
              { rotate: -110 },
              { rotate: 25, duration: 1.1, ease: "none" },
              1.5,
            );
        }, root);
        return () => ctx.revert();
      },
    );
    mm.add(
      "(max-width: 899px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          gsap.utils
            .toArray<HTMLElement>(".activity-mobile-art")
            .forEach((art) => {
              gsap.fromTo(
                art.querySelector(".activity-illustration"),
                { y: 20 },
                {
                  y: -12,
                  ease: "none",
                  scrollTrigger: {
                    trigger: art,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: 0.5,
                  },
                },
              );
            });
        }, root);
        return () => ctx.revert();
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={root}
      id="volunteering"
      className="site-pad section-y activities"
      aria-labelledby="activities-title"
    >
      <div className="site-container-wide">
        <div className="activity-story-heading">
          <div>
            <p className="section-label">What volunteering looks like</p>
            <h2 id="activities-title" className="editorial-heading">
              A helping hand.
              <br />
              <em>A shared Sunday.</em>
            </h2>
          </div>
          <p>
            Three ways a little of your time
            <br className="hidden sm:block" /> can bring us closer together.
          </p>
        </div>
        <div className="activity-story-grid">
          <div className="activity-stage" aria-hidden="true">
            <div className="stage-topline">
              <span>Small gestures. Real connection.</span>
              <span>Silver Ambassadors</span>
            </div>
            {volunteerStories.map((story) => (
              <div
                key={story.scene}
                className={`activity-scene scene-${story.scene}`}
              >
                <div className="scene-artwork">
                  <ActivityIllustration scene={story.scene} />
                </div>
                <p className="scene-caption">{story.visualLabel}</p>
              </div>
            ))}
          </div>
          <div className="activity-chapters">
            {volunteerStories.map((story) => (
              <article className="activity-chapter" key={story.scene}>
                <p className="section-label">{story.note}</p>
                <div className="activity-mobile-art">
                  <ActivityIllustration scene={story.scene} />
                </div>
                <h3>{story.title}</h3>
                <p className="chapter-description">{story.text}</p>
                {story.scene !== "time" && (
                  <p className="chapter-detail">{story.detail}</p>
                )}
                {story.scene === "time" && (
                  <Link href="/volunteer-hours" className="text-link">
                    Log your volunteer hours{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
