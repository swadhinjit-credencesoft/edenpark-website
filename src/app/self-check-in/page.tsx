import type { Metadata } from "next";
import Banner from "@/components/Banner";
import { STEPS } from "@/data/checkIn";
import { PHONE_HREF, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Self Check-In",
  description:
    "Contactless self check-in at Eden Park Motel: receive your code, park on site, and collect your room key from the key box. Ideal for late arrivals.",
  alternates: { canonical: SITE_URL + "/self-check-in" },
};

export default function SelfCheckIn() {
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
    </>
  );
}
