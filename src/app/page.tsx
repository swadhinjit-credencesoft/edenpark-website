import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Swoosh, Ridge, Tick, Reviews } from "@/components/common";
import { RoomCard } from "@/components/features/rooms";
import { FEATURED_ROOM } from "@/data/rooms";
import { BOOK, SITE_URL } from "@/config";
import { generateHotelSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Convenient Comfort at Eden Park",
  description:
    "A fully renovated 1910 villa two minutes' walk from Eden Park Stadium. Free parking, kitchenettes, double glazing and genuine Kiwi hospitality. Book direct for best rates.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Convenient Comfort at Eden Park | Eden Park Motel Auckland",
    description:
      "A fully renovated 1910 villa two minutes' walk from Eden Park Stadium. Free parking, kitchenettes and genuine Kiwi hospitality.",
    url: `${SITE_URL}/`,
    siteName: "Eden Park Motel",
    images: [
      {
        url: "/assets/img/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Park Motel exterior villa",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convenient Comfort at Eden Park | Eden Park Motel Auckland",
    description:
      "Boutique accommodation directly across from Eden Park Stadium, Auckland. Free parking and kitchenettes.",
    images: ["/assets/img/hero-villa.jpg"],
  },
};

export default function Home() {
  const hotelSchema = generateHotelSchema();
  return (
    <>
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/assets/img/hero-villa.jpg"
            alt="The Eden Park Motel villa on Sandringham Road"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero__scrim" />
        <Swoosh />
        <Ridge />
        <div className="wrap hero__inner">
          <div className="hero__body">
            <p className="eyebrow eyebrow-light">A fully renovated 1910 villa</p>
            <h1>
          Convenient Comfort 
              <br />
             at Eden Park
            </h1>
            <p className="hero__sub">
              Experience the charm of our historic 1910 Villa, sitting directly at the doorstep of Eden Park.
              Whether you are arriving for a midweek corporate stay or a weekend stadium event, discover premier
              Auckland accommodation tailored for seamless comfort.
            </p>
            <div className="hero__actions">
              <a className="btn btn--gold" href={BOOK} rel="noopener" target="_blank">
                Book Direct &amp; Save
              </a>
              <Link className="btn btn--ghost" href="/rooms">
                Explore Our Rooms
              </Link>
            </div>
            <p className="hero__note">
              <span className="dots" aria-hidden="true">
                <i className="is-on"></i>
                <i></i>
                <i></i>
              </span>
              Villa exterior → Queen Studio interior → Eden Park at dusk
            </p>
          </div>
          {/* <div className="pricecard">
            <div>
              <span className="pricecard__label">From</span>
              <span className="pricecard__rate">
                NZD 151 <small>/ night</small>
              </span>
            </div>
            <a className="btn btn--gold btn--sm" href={BOOK} rel="noopener">
              Book now
            </a>
          </div> */}
        </div>
      </section>
<div className="wrap">
        <div className="trust roofed">
          <div className="trust__grid">
            <div className="trust__lead">
              <strong>
                8.9<small>/10</small>
              </strong>
              <span>
                <b>Excellent</b>
                <br />
                based on 475+ reviews
              </span>
            </div>
            <div className="trust__item">
              <span>Booking.com</span>
              <strong>
                8.9<small>/10</small>
              </strong>
            </div>
            <div className="trust__item">
              <span>Location score</span>
              <strong>
                9.6<small>/10</small>
              </strong>
            </div>
            <div className="trust__item">
              <span>Staff / Hospitality</span>
              <strong>
                9.6<small>/10</small>
              </strong>
            </div>
             <a className="btn btn--gold btn--sm" href={BOOK} rel="noopener">
              Book now
            </a>
          </div>
        </div>
      </div>

      <section className="section section--tint">
        <div className="wrap">
          <p className="eyebrow">The direct booking club</p>
          <h2>The Eden Park Advantage: Book Direct &amp; Unlock More</h2>
          <p className="lede">Skip the third-party booking fees and secure the best rate guaranteed. Every direct booking includes:</p>
          <div className="club">
            <span className="club__perk">
              <Tick /> Complimentary on-site parking
            </span>
             <span className="club__perk">
              <Tick /> Late Check-In with peace of mind
            </span>
             <span className="club__perk">
              <Tick />Late Check-out available on request
            </span>
            <a className="btn btn--gold" href={BOOK} rel="noopener" target="_blank">
              Check availability
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head center">
            <p className="eyebrow">Featured room</p>
            <h2>Designed for Comfort. Crafted for Convenience.</h2>
            <p className="lede" style={{ marginInline: "auto" }}>
              With a boutique portfolio featuring our highly popular configurations, we offer modern amenities
              wrapped in historic character.
            </p>
          </div>
          <RoomCard
            room={FEATURED_ROOM}
            marginBottom={false}
            cta="Check availability"
            alt="Queen Studio Room with bay windows and a queen bed"
          />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head center">
            <p className="eyebrow">Who we host</p>
            <h2>Two Stays, One Perfect Location</h2>
          </div>
          <div className="grid grid--2">
            <article className="card card--accent">
              <p className="split__label">The midweek corporate</p>
              <h3>Smart business stays</h3>
              <p>
                Trade the noisy high-rises of the CBD for a peaceful, productive base. On the city fringe you get
                stress-free transit, free dedicated parking, fast Wi-Fi and a quiet night&apos;s sleep behind double glazing.
              </p>
              <p>
                <Link href="/corporate">Corporate bookings →</Link>
              </p>
            </article>
            <article className="card card--gold">
              <p className="split__label">The weekend event-goer</p>
              <h3>Entertainment &amp; family visits</h3>
              <p>
             Skip post-event traffic and long transport queues. Located directly across from Eden Park Stadium with seamless access to Spark Arena, The Powerstation, The Glasshouse, and Western Springs, we put you front-row for Auckland’s best live events  and offer a peaceful base for families hosting visiting relatives.
              </p>
              <p>
                <Link href="/blog">Event-day guide →</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Location &amp; the local vibe</p>
            <h2>Where heritage meets urban culture</h2>
            <p className="lede">
              On the border of Auckland&apos;s most vibrant city-fringe suburbs. Walk to the craft beer and café scene
              around Kingsland Station, or stroll to the hidden gems along Dominion Road.
            </p>
          </div>
          <div className="grid grid--4">
            <div className="stat">
              <strong>2 min</strong>
              <span>walk to Eden Park gates</span>
              <em>Directly across the road</em>
            </div>
            <div className="stat">
              <strong>2 min</strong>
              <span>walk to Kingsland Station</span>
              <em>Direct rail to Britomart</em>
            </div>
            <div className="stat">
              <strong>10 min</strong>
              <span>drive to Auckland CBD</span>
              <em>20 min to the airport</em>
            </div>
            <div className="stat">
              <strong>15 min</strong>
              <span>walk to Westfield St Lukes</span>
              <em>Or a 5 min drive</em>
            </div>
              <div className="stat">
              <strong>10-12 min</strong>
              <span>drive to Spark Arena</span>
              <em>Or direct train via Kingsland</em>
            </div>
              <div className="stat">
              <strong>5 min</strong>
              <span>drive to The Powerstation</span>
              <em>Mount Eden concert hub</em>
            </div>
              <div className="stat">
              <strong>2 min</strong>
              <span>drive to The Glasshouse</span>
              <em>Or a simple 10 min walk</em>
            </div>
              <div className="stat">
              <strong>5-7 min</strong>
              <span>drive to Western Springs</span>
              <em>Bowl & Stadium events</em>
            </div>
          </div>
          <p style={{ marginTop: 32 }}>
            <Link className="btn btn--outline" href="/find-us">
              View our local guide
            </Link>
          </p>
        </div>
      </section>

      <section className="section section--navy roofed">
        <div className="wrap">
          <Reviews />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelSchema) }}
      />
    </>
  );
}
