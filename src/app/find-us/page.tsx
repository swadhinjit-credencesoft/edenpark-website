import type { Metadata } from "next";
import { Banner, Tile } from "@/components/common";
import { TRANSIT, GEMS } from "@/data/transit";
import { SITE_URL } from "@/config";

export const metadata: Metadata = {
  title: "Find Us",
  description:
    "36 Sandringham Road, Sandringham, Auckland. Two minutes' walk to Eden Park Stadium and Kingsland Station, with free on-site parking.",
  alternates: { canonical: SITE_URL + "/find-us" },
};

export default function FindUs() {
  return (
    <>
      <Banner
        h1="At the centre of the action"
        sub="Eden Park Motel bridges historic neighbourhood charm and seamless urban connectivity. Here are our entry details, transit links and insider guide."
      />

      <section className="section">
        <div className="wrap">
          <div className="grid grid--2">
            <div className="card">
              <p className="eyebrow">Physical address</p>
              <h3>
                36 Sandringham Road <span className="muted">(main entrance)</span>
              </h3>
              <p>or 57 Walters Road, Sandringham, Auckland 1024</p>
              <p className="muted">
                Vehicles enter from Sandringham Road. Pedestrian access via Walters Road puts you steps from the
                stadium gates.
              </p>
            </div>
            <div
              className="card"
              style={{ background: "var(--navy)", borderColor: "var(--navy)", color: "#fff" }}
            >
              <p className="eyebrow eyebrow-light">The arrival advantage</p>
              <h3 style={{ color: "#fff", fontFamily: "'Playfair Display',serif", fontSize: "1.6rem" }}>
                Free on-site parking
              </h3>
              <p style={{ color: "var(--tint)" }}>
                No expensive public parking or tight city structures. Every guest gets secure, complimentary
                parking at the property — included in your rate, on event days too.
              </p>
            </div>
          </div>

          <h2 style={{ marginTop: 64 }}>Connected to Auckland</h2>
          <ul className="transit" style={{ marginTop: 24 }}>
            {TRANSIT.map((t) => (
              <li key={t.name}>
                <span className="transit__txt">
                  <strong>{t.name}</strong>
                  <span>{t.desc}</span>
                </span>
                <span className="chip chip--navy">{t.dist}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Hidden gems</p>
            <h2>Neighbourhood insider guide</h2>
          </div>
          <div className="grid grid--3">
            {GEMS.map((g) => (
              <article key={g.name} className="card" style={{ padding: 0, overflow: "hidden" }}>
                <Tile img={g.img} alt={g.name} caption={g.dist} size="wide" flat />
                <div style={{ padding: "var(--pad)" }}>
                  <h3>{g.name}</h3>
                  <p>{g.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="mapbox">
            <h2>Find us on the map</h2>
            <p className="muted">
              Interactive map showing the motel, Eden Park Stadium and Kingsland Station.
              <br />
              <span style={{ fontSize: ".85rem", color: "var(--sky)" }}>
                Developer note: embed a custom-styled Google Map here, lazy-loaded for Core Web Vitals.
              </span>
            </p>
            <p>
              <a
                className="btn btn--outline"
                href="https://maps.google.com/?q=36+Sandringham+Road+Auckland"
                rel="noopener"
              >
                Open in Google Maps
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
