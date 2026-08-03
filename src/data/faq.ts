// ==========================================================================
// FAQ content, grouped by topic.
// ==========================================================================

export interface FaqItem {
  q: string;
  /** Answer text, optionally split around an inline link. */
  a: string;
  /** Optional bullet points rendered under the answer text. */
  bullets?: string[];
  /** Optional inline link rendered after `a`. */
  link?: { href: string; label: string };
  /** Optional text rendered after the inline link. */
  after?: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}

/** Plain-text answer including any inline link label (for JSON-LD). */
export function faqAnswerText(item: FaqItem): string {
  const bullets = item.bullets ? " " + item.bullets.join(". ") + "." : "";
  return item.a + bullets + (item.link ? item.link.label : "") + (item.after ?? "");
}

export const FAQ: FaqGroup[] = [
  {
    title: "Arrival, parking & logistics",
    items: [
      {
        q: "Do you offer guest parking, and what does it cost?",
        a: "Yes. Complimentary on-site parking is included in your nightly rate for every guest.",
        bullets: [
          "Secure, designated space right here on the city fringe",
          "No premium daily fees unlike CBD properties",
          "No event-day road closures or surge pricing to worry about",
        ],
      },
      {
        q: "What are your check-in and check-out times?",
        a: "Standard arrival and departure times keep housekeeping on schedule.",
        bullets: [
          "Check-in from 2:00 PM",
          "Check-out by 10:00 AM",
          "Guaranteed late check-out on direct bookings, subject to availability",
        ],
      },
      {
        q: "Can I store luggage before check-in or after check-out?",
        a: "Yes. Arrive early for a meeting or drop your bags before heading across the road to an event — our team will store your luggage safely.",
      },
    ],
  },
  {
    title: "Eden Park events & transit",
    items: [
      {
        q: "How close are you to Eden Park Stadium?",
        a: "Two minutes' walk from the stadium gates.",
        bullets: [
          "No event-day traffic or road closures to navigate",
          "No rideshare surge pricing — walk across the street",
          "Arrive at the gates before most guests have left their car",
        ],
      },
      {
        q: "How do I reach Spark Arena or the Auckland CBD?",
        a: "Kingsland Train Station is a two-minute walk from our front door.",
        bullets: [
          "Direct rail link into Britomart Station in the heart of the CBD",
          "Easy pedestrian access to Spark Arena",
          "A simple option if you're not driving",
        ],
      },
    ],
  },
  {
    title: "Rooms & amenities",
    items: [
      {
        q: "Are the rooms quiet on busy event nights?",
        a: "Yes. While we have preserved the character of our 1910 villa, the rooms are fully modernised.",
        bullets: [
          "Double glazing to minimise street noise",
          "Blackout curtains to keep out light",
          "Heritage villa character without the compromises",
        ],
      },
      {
        q: "What is included in the kitchenettes?",
        a: "Every room has a private kitchenette stocked for real cooking.",
        bullets: [
          "Refrigerator",
          "Microwave, toaster and electric kettle",
          "Essential kitchenware",
          "Built-in dishwasher in the Large Twin / Family Room",
        ],
      },
      {
        q: "How does self check-in work?",
        a: "On the morning of arrival we send a code by email and SMS.",
        bullets: [
          "Use the code to open the key box and collect your room key",
          "Return the key to the same box when you leave",
          "Perfect for late arrivals, including after events",
        ],
        link: { href: "/self-check-in", label: "self check-in guide" },
        after: " for the full process.",
      },
    ],
  },
];
