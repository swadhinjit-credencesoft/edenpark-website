import type { Metadata } from "next";
import { Banner, Tile } from "@/components/common";
import { RoomCard } from "@/components/features/rooms";
import { ROOMS } from "@/data/rooms";
import { SURROUNDINGS } from "@/data/surroundings";
import { SITE_URL } from "@/config";
import { generateRoomsSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Rooms & Rates",
  description:
    "Explore six boutique room types at Eden Park Motel Auckland: Queen Studio, Executive Studio, One-Bedroom Apartment, Superking and Family Rooms. From NZD 151/night with free parking.",
  alternates: { canonical: `${SITE_URL}/rooms` },
  openGraph: {
    title: "Rooms & Rates | Eden Park Motel Auckland",
    description:
      "Six boutique room configurations with private kitchenettes, double glazing and free parking. Book direct for the best rate.",
    url: `${SITE_URL}/rooms`,
    siteName: "Eden Park Motel",
    images: [
      {
        url: "/assets/img/room-queen.jpg",
        width: 1200,
        height: 630,
        alt: "Queen Studio Room at Eden Park Motel Auckland",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rooms & Rates | Eden Park Motel Auckland",
    description:
      "Explore boutique rooms at Eden Park Motel. Free parking, kitchenettes & quiet double glazing.",
    images: ["/assets/img/room-queen.jpg"],
  },
};

export default function Rooms() {
  const roomsSchema = generateRoomsSchema(ROOMS);
  const breadcrumbsSchema = generateBreadcrumbSchema([
    { name: "Rooms", url: `${SITE_URL}/rooms` },
  ]);
  const lg = SURROUNDINGS.find((s) => s.size === "lg")!;
  const side = SURROUNDINGS.filter((s) => s.size === "sm");
  const row = SURROUNDINGS.filter((s) => s.size === "wide");

  return (
    <>
      <Banner
        h1="Convenient Comfort at Eden Park."
        sub="Modern, fully renovated spaces inside a historic 1910 villa — private kitchenettes, modern amenities and the ultimate city-fringe location."
      />

      {/* <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Ambience &amp; surroundings</p>
            <h2>Right across from the action</h2>
            <p className="lede">
              A fully renovated 1910 villa on a quiet, tree-lined street — with Eden Park Stadium directly behind
              us, Kingsland&apos;s cafés a five-minute walk away, and free parking at your door.
            </p>
          </div>
          <div className="mosaic">
            <Tile img={lg.img} alt={lg.alt} caption={lg.caption} size={lg.size} priority />
            <div className="mosaic__side">
              {side.map((s) => (
                <Tile key={s.img} img={s.img} alt={s.alt} caption={s.caption} size={s.size} />
              ))}
            </div>
            <div className="mosaic__row">
              {row.map((s) => (
                <Tile key={s.img} img={s.img} alt={s.alt} caption={s.caption} size={s.size} />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="section section--tint">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow">Our rooms</p>
            <h2>Six ways to stay</h2>
            <p className="lede">
              <strong>Book direct</strong> to receive complimentary on-site parking and a guaranteed Late Check-Out Upon Request
            </p>
          </div>
          {ROOMS.map((room) => (
            <RoomCard key={room.slug} room={room} anchor={room.slug} />
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
    </>
  );
}
