import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { volunteerForm } from "@/lib/config";
export function CallToAction() {
  return (
    <section className="site-pad closing-section" aria-labelledby="cta-title">
      <div className="site-container-wide">
        <p className="section-label">Make a little room for connection</p>
        <div className="closing-row">
          <h2 id="cta-title">
            Your time.
            <br />
            <em>Someone’s Sunday.</em>
          </h2>
          <Link
            href="/events"
            className="circle-link"
            aria-label="Explore volunteer events"
          >
            <ArrowUpRight size={40} strokeWidth={1} aria-hidden="true" />
          </Link>
        </div>
        <div className="closing-bottom">
          <p>Start with a Sunday. See where it takes you.</p>
          <a
            className="text-link"
            href={volunteerForm.viewUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Already volunteered? Log your hours{" "}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
