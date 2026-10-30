"use client";

import Link from "next/link";
import { ArrowUpRight, Clock3, Smartphone, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { volunteerStories } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);
const activityIcons = { tech: Smartphone, games: Users, time: Clock3 };

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
          {Array.from({ length: 12 }, (_, index) => (
            <i key={index} className="dial-tick" style={{ rotate: `${index * 30}deg` }} />
          ))}
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
    const animateArtwork = (
      artwork: HTMLElement,
      trigger: HTMLElement,
      start: string,
      end: string,
    ) => {
      const timeline = gsap.timeline({
        defaults: { duration: 1, ease: "none" },
        scrollTrigger: { trigger, start, end, scrub: 0.6, invalidateOnRefresh: true },
      });
      const device = artwork.querySelector(".tech-device");
      const board = artwork.querySelector(".game-board");
      if (device) {
        timeline
          .fromTo(device, { rotate: -9, y: 14 }, { rotate: 1, y: -8 }, 0)
          .fromTo(artwork.querySelector(".device-type"), { scale: 0.85 }, { scale: 1 }, 0)
          .fromTo(artwork.querySelectorAll(".device-rule"), { scaleX: 0.65 }, { scaleX: 1 }, 0);
      } else if (board) {
        timeline
          .fromTo(board, { rotate: -11, scale: 0.94 }, { rotate: -2, scale: 1 }, 0)
          .fromTo(artwork.querySelector(".piece-one"), { xPercent: 0, yPercent: 0 }, { xPercent: 130, yPercent: 130 }, 0);
      } else {
        timeline
          .fromTo(artwork.querySelector(".hand-minute"), { rotate: -110 }, { rotate: 45 }, 0)
          .fromTo(artwork.querySelector(".hand-hour"), { rotate: 55 }, { rotate: 68 }, 0);
      }
    };
    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 900px) and (prefers-reduced-motion: no-preference)",
      () => {
        const ctx = gsap.context(() => {
          const stage = root.current?.querySelector<HTMLElement>(".activity-stage");
          const scenes = gsap.utils.toArray<HTMLElement>(".activity-scene");
          const chapters = gsap.utils.toArray<HTMLElement>(".activity-chapter");
          if (!stage) return;
          const stageCenter = () => parseFloat(getComputedStyle(stage).top) + stage.offsetHeight / 2;

          scenes.forEach((scene, index) => {
            const artwork = scene.querySelector<HTMLElement>(".activity-illustration");
            if (artwork) animateArtwork(artwork, chapters[index], "top 70%", "bottom 35%");
            if (!index) return;

            // Both drawings crossfade continuously. Captions take turns so the
            // frame never goes blank and the words never overlap.
            gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: chapters[index].querySelector("h3"),
                start: () => `top top+=${stageCenter() + 80}`,
                end: () => `top top+=${stageCenter() - 80}`,
                scrub: 0.5,
                invalidateOnRefresh: true,
              },
            })
              .fromTo(scenes[index - 1], { "--scene-alpha": 1 }, { "--scene-alpha": 0, duration: 1, immediateRender: false }, 0)
              .fromTo(scene, { "--scene-alpha": 0 }, { "--scene-alpha": 1, duration: 1 }, 0);
          });
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
              const artwork = art.querySelector<HTMLElement>(".activity-illustration");
              if (artwork) animateArtwork(artwork, art, "top 85%", "bottom 35%");
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
            Tech help, shared activities,
            <br className="hidden sm:block" /> and time well spent.
          </p>
        </div>
        <div className="activity-story-grid">
          <div className="activity-stage" aria-hidden="true">
            {volunteerStories.map((story, index) => {
              const Icon = activityIcons[story.scene];
              return (
              <div
                key={story.scene}
                className={`activity-scene scene-${story.scene}`}
              >
                <div className="stage-topline">
                  <span>{story.note}</span>
                  <Icon size={18} />
                </div>
                <div className="scene-artwork">
                  <ActivityIllustration scene={story.scene} />
                </div>
                <p className="scene-caption">
                  <span>{story.visualLabel}</span>
                  <span className="scene-dots">
                    {volunteerStories.map((item, dot) => (
                      <i key={item.scene} className={index === dot ? "is-current" : ""} />
                    ))}
                  </span>
                </p>
              </div>
              );
            })}
          </div>
          <div className="activity-chapters">
            {volunteerStories.map((story) => {
              const Icon = activityIcons[story.scene];
              return (
              <article className="activity-chapter" key={story.scene}>
                <div className="chapter-kicker">
                  <span className="chapter-icon"><Icon size={18} aria-hidden="true" /></span>
                  <p className="section-label">{story.note}</p>
                </div>
                <div className="activity-mobile-art">
                  <ActivityIllustration scene={story.scene} />
                </div>
                <h3>{story.title}</h3>
                <p className="chapter-description">{story.text}</p>
                {story.scene !== "time" && (
                  <p className="chapter-detail">{story.detail}</p>
                )}
                {story.scene === "tech" && (
                  <Link href="/events" className="text-link">
                    See upcoming visits <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                )}
                {story.scene === "time" && (
                  <Link href="/volunteer-hours" className="text-link">
                    Log your volunteer hours{" "}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </Link>
                )}
              </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
