"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  useEffect(() => {
    const mm = gsap.matchMedia();
    let active = true;
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const lenis = new Lenis({
        duration: 0.9,
        smoothWheel: true,
        anchors: { offset: -90 },
        autoResize: true,
      });
      lenis.on("scroll", ScrollTrigger.update);
      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      const frame = requestAnimationFrame(() => ScrollTrigger.refresh());
      return () => {
        cancelAnimationFrame(frame);
        gsap.ticker.remove(ticker);
        lenis.off("scroll", ScrollTrigger.update);
        lenis.destroy();
      };
    });
    document.fonts.ready.then(() => {
      if (active) ScrollTrigger.refresh();
    });
    return () => {
      active = false;
      mm.revert();
    };
  }, [pathname]);
  return children;
}
