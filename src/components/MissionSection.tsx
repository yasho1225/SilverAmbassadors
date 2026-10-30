import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { SeniorIllustration } from "@/components/SeniorIllustration";
export function MissionSection() {
  return (
    <section
      id="mission"
      className="mission-section site-pad section-y"
      aria-labelledby="mission-title"
    >
      <div className="site-container-wide mission-grid">
        <div className="mission-aside">
          <p className="section-label">Our mission</p>
          <SeniorIllustration />
        </div>
        <div>
          <Reveal>
            <h2 id="mission-title" className="editorial-heading">
              Bringing generations together.
              <br />
              <em>One visit at a time.</em>
            </h2>
          </Reveal>
          <div className="mission-body">
            <p>
              We are a student-led volunteering organization at Alpharetta High
              School. Our mission is to create mutual joy, respect, and
              community between students and senior citizens in Alpharetta.
            </p>
            <p>
              Students help seniors with technology and take part in social and
              seasonal activities. Seniors share their company and experience.
              Students gain communication skills and volunteer hours through
              flexible opportunities to serve.
            </p>
          </div>
          <Link className="text-link" href="/about">
            Meet Silver Ambassadors{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
