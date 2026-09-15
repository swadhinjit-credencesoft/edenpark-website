import type { Metadata } from "next";
import { Banner } from "@/components/common";
import { STEPS } from "@/data/checkIn";
import { PHONE_HREF, SITE_URL } from "@/config";
import { generateHowToSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contactless Self Check-In Guide",
  description:
    "Step-by-step contactless self check-in at Eden Park Motel Auckland. Receive your digital PIN, park on site, and access your key box for seamless arrival.",
  alternates: { canonical: `${SITE_URL}/self-check-in` },
  openGraph: {
    title: "Contactless Self Check-In Guide | Eden Park Motel Auckland",
    description:
      "Arrive on your schedule with our simple 3-step digital key box check-in and complimentary on-site parking.",
    url: `${SITE_URL}/self-check-in`,
    siteName: "Eden Park Motel",
    images: [
      {
        url: "/assets/img/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Park Motel Contactless Self Check-In",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Self Check-In Guide | Eden Park Motel Auckland",
    description:
      "Seamless contactless arrival at Eden Park Motel with digital key box and free on-site parking.",
    images: ["/assets/img/hero-villa.jpg"],
  },
};

export default function SelfCheckIn() {
  const howToSchema = generateHowToSchema(STEPS);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Self Check-In", url: `${SITE_URL}/self-check-in` },
  ]);
  return (
    <>
      <Banner
        h1="Seamless arrival. Your schedule, your pace."
        sub="Arriving late after a concert, checking in between meetings, or beating the event crowds? Our contactless check-in gets you into your room without queues."
      />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">How it works</p>
            <h2>The three-step process</h2>
          </div>
          <div className="grid grid--3">
            {STEPS.map((step) => (
              <article className="card" key={step.num}>
                <div className="step__num">{step.num}</div>
                <h3>{step.name}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <p className="eyebrow">Proactive peace of mind</p>
          <h2>Secure, reliable and monitored</h2>
          <p className="lede">
            Our renovated 1910 villa has enhanced perimeter lighting and active security measures. While
            check-in is contactless, on-site management and support are always available — call{" "}
            <a href={PHONE_HREF}>0800 AT EDEN</a> if you need a hand.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Before you arrive</p>
            <h2>Pre-arrival checklist</h2>
          </div>
          <ul className="checklist">
            <li>
              <i></i>
              <span>Complete any pre-arrival registration forms sent by email.</span>
            </li>
            <li>
              <i></i>
              <span>Save your check-in code on your mobile device.</span>
            </li>
            <li>
              <i></i>
              <span>Enter via the main driveway at 36 Sandringham Road.</span>
            </li>
            <li>
              <i></i>
              <span>Return your key to the key box when you check out.</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="section section--navy roofed">
        <div className="wrap center">
          <h2>Ready for your stay?</h2>
          <p className="lede" style={{ marginInline: "auto", color: "var(--tint)" }}>
            Questions about your arrival, or need to update your contact details so we can send your code?
          </p>
          <p>
            <a className="btn btn--gold" href="/find-us">
              Contact the front desk
            </a>
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
