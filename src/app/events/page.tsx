import type { Metadata } from "next";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { Reveal } from "@/components/motion/Reveal";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Silver Ambassadors events, including weekly Sunday Tech Helps and special community gatherings.",
};

export default function EventsPage() {
  return (
    <>
      <PageIntro
        label="Events & volunteering"
        title={
          <>
            When we <em>meet.</em>
          </>
        }
      >
        <p>
          Sunday Tech Helps, seasonal gatherings, and time spent together. Check
          the calendar for upcoming opportunities.
        </p>
      </PageIntro>

      <section
        className="site-pad section-y calendar-section"
        aria-label="Club calendar"
      >
        <div className="site-container-wide">
          <Reveal>
            <CalendarEmbed />
          </Reveal>
        </div>
      </section>
    </>
  );
}
