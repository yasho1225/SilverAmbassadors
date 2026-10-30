import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { VolunteerHoursSection } from "@/components/VolunteerHoursSection";

export const metadata: Metadata = {
  title: "Volunteer Hours",
  description:
    "Submit completed Silver Ambassadors volunteering hours through the official Google Form.",
};

export default function VolunteerHoursPage() {
  return (
    <>
      <PageIntro
        label="For members"
        title={
          <>
            Volunteer <em>hours.</em>
          </>
        }
      >
        <p>
          Log the time you shared through the official Silver Ambassadors form.
        </p>
      </PageIntro>
      <VolunteerHoursSection />
    </>
  );
}
