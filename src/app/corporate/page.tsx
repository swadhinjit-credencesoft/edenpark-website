import type { Metadata } from "next";
import { Banner } from "@/components/common";
import { EMAIL, SITE_URL } from "@/config";

export const metadata: Metadata = {
  title: "Corporate Bookings",
  description:
    "Midweek corporate accommodation on the Auckland city fringe. Free parking, fibre Wi-Fi, quiet double-glazed rooms and preferred corporate rates.",
  alternates: { canonical: SITE_URL + "/corporate" },
};

export default function Corporate() {
  return (
    <>
      <Banner
        h1="Midweek corporate comfort on the city fringe"
        sub="Trade clinical central-city hotels for a productive, character-rich base minutes from the CBD."
      />

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">The midweek business advantage</p>
            <h2>Built for working travellers</h2>
          </div>
          <div className="grid grid--3">
            <article className="card card--accent">
              <h3>Quiet productivity</h3>
              <p>
                Our modernised villa keeps its historic exterior but adds double-glazed windows and quiet
                interiors — a peaceful night&apos;s rest and a distraction-free space to work.
              </p>
            </article>
            <article className="card card--accent">
              <h3>Complimentary parking</h3>
              <p>
                Skip the $30–$50 daily valet fees charged by CBD hotels. Every room includes free on-site
                parking, so you can drive out to regional meetings whenever you need.
              </p>
            </article>
            <article className="card card--accent">
              <h3>Digital connectivity</h3>
              <p>
                High-speed fibre Wi-Fi and direct-dial telephones in every room keep you connected to your team
                and clients throughout your stay.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Transit efficiency</p>
            <h2>Strategic location</h2>
          </div>
          <div className="grid grid--3">
            <div className="stat">
              <strong>10 min</strong>
              <span>drive to the CBD commercial hub</span>
            </div>
            <div className="stat">
              <strong>20 min</strong>
              <span>direct drive to Auckland Airport</span>
            </div>
            <div className="stat">
              <strong>2 min</strong>
              <span>walk to Kingsland Station rail</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Preferred rates &amp; accounts</p>
            <h2>Streamline your business travel</h2>
          </div>
          <div className="grid grid--2">
            <article className="card">
              <h3>Guaranteed preferred rates</h3>
              <p>Fixed, competitive pricing to protect your travel budget year-round.</p>
            </article>
            <article className="card">
              <h3>Priority room allocation</h3>
              <p>First access to our top-selling Queen Studio Rooms and executive units.</p>
            </article>
            <article className="card">
              <h3>Flexible cancellation terms</h3>
              <p>Booking flexibility built around rapidly changing corporate schedules.</p>
            </article>
            <article className="card">
              <h3>Simplified invoicing</h3>
              <p>Direct billing options and streamlined expense reporting for approved accounts.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--navy roofed">
        <div className="wrap center">
          <h2>Set up your preferred corporate rate</h2>
          <p className="lede" style={{ marginInline: "auto", color: "var(--tint)" }}>
            Setting up an account is immediate. Contact our management team directly to unlock your custom rate.
          </p>
          <p>
            <a
              className="btn btn--gold"
              href={`mailto:${EMAIL}?subject=Corporate%20Account%20Inquiry`}
            >
              Email us about a corporate account
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
