// ==========================================================================
// FAQ content, grouped by topic.
// ==========================================================================

export interface FaqItem {
  q: string;
  /** Answer text, optionally split around an inline link. */
  a: string;
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
  return item.a + (item.link ? item.link.label : "") + (item.after ?? "");
}

export const FAQ: FaqGroup[] = [
  {
    title: "Arrival, parking & logistics",
    items: [
      {
        q: "Do you offer guest parking, and what does it cost?",
        a: "Yes. Complimentary on-site parking is included in your nightly rate for every guest. Unlike CBD properties that charge premium daily fees, your vehicle has a secure, designated space right here on the city fringe.",
      },
      {
        q: "What are your check-in and check-out times?",
        a: "Check-in is from 2:00 PM and check-out is by 10:00 AM. Book direct and you also get late check-out upon request (subject to availability).",
      },
      {
        q: "Bookings through Third Party Channels (like Booking.com/ Expedia, etc)",
        a: "For bookings made via external Third party channels where early check-outs or uncollected payments pose a risk, self/late check-ins is strictly restricted to prior arrangment only, ensuring valid credit card details and pre-settlement are securely obtained before arrival.",
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
        a: "Two minutes' walk from the stadium gates. No event-day traffic, no road closures to navigate and no rideshare surge pricing — you simply walk across the street.",
      },
      {
        q: "How do I reach Spark Arena or the Auckland CBD?",
        a: "Kingsland Train Station is a two-minute walk from our front door, with a direct rail link into Britomart Station in the heart of the CBD and easy pedestrian access to Spark Arena.",
      },
    ],
  },
  {
    title: "Rooms & amenities",
    items: [
      {
        q: "Are the rooms quiet on busy event nights?",
        a: "Yes. While we have preserved the character of our 1910 villa, the rooms are fully modernised with double glazing and blackout curtains to minimise street noise and light.",
      },
      {
        q: "What is included in the kitchenettes?",
        a: "Every room has a private kitchenette with a refrigerator, microwave, toaster, electric kettle and essential kitchenware. The Large Twin / Family Room also has a built-in dishwasher.",
      },
      {
        q: "How does self check-in work?",
        a: "On the morning of arrival we send a code by email and SMS. Use it to open the key box, collect your room key, and return the key to the same box when you leave. See the ",
        link: { href: "/self-check-in", label: "self check-in guide" },
        after: " for the full process.",
      },
    ],
  },
];
