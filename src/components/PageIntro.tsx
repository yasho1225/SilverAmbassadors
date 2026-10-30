import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

export function PageIntro({
  label,
  title,
  children,
}: {
  label: string;
  title: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="site-pad page-intro border-b border-line">
      <div className="site-container-wide">
        <Reveal>
          <p className="section-label">{label}</p>
          <h1 className="page-title">{title}</h1>
          <div className="page-intro-description">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}
