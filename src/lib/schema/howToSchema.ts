import { SITE_URL } from "@/config/site";
import type { CheckInStep } from "@/types/checkIn";

/**
 * Generate Schema.org HowTo schema for the Self Check-In guide.
 */
export function generateHowToSchema(steps: CheckInStep[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Complete Contactless Self Check-In at Eden Park Motel",
    description:
      "A simple 3-step guide for contactless self check-in, on-site parking, and digital key box access at Eden Park Motel Auckland.",
    image: `${SITE_URL}/assets/img/hero-villa.jpg`,
    totalTime: "PT5M",
    step: steps.map((s) => ({
      "@type": "HowToStep",
      position: s.num,
      name: s.name,
      text: s.copy,
      url: `${SITE_URL}/self-check-in#step-${s.num}`,
    })),
  };
}
