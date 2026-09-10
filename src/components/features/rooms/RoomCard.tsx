import Image from "next/image";
import type { Room } from "@/types/room";
import { getBookingUrl } from "@/lib/utils/booking";
import Chips from "@/components/common/Chips";

export interface RoomCardProps {
  room: Room;
  anchor?: string;
  marginBottom?: boolean;
  /** CTA label — defaults to the rooms-page wording. */
  cta?: string;
  /** Override the image alt text. */
  alt?: string;
}

/** A single room row with photo, features, price and direct booking CTA. */
export default function RoomCard({
  room,
  anchor,
  marginBottom = true,
  cta = "View availability & book direct",
  alt,
}: RoomCardProps) {
  return (
    <article
      className={`room${room.featured ? " room--featured" : ""}`}
      id={anchor}
      style={marginBottom ? { marginBottom: "var(--card-gap)" } : undefined}
    >
      <div className="room__media">
        <Image
          src={`/assets/img/room-${room.slug}.jpg`}
          alt={alt ?? `${room.name} at Eden Park Motel`}
          fill
          sizes="(max-width: 900px) 100vw, 330px"
        />
        {room.flag ? <span className="room__flag">{room.flag}</span> : null}
      </div>
      <div>
        <h3>{room.name}</h3>
        <p className="room__tag">{room.tag}</p>
        <p>{room.copy}</p>
        <Chips items={room.feats} />
        <div className="room__foot">
          <p className="room__price">
            <em>From</em>NZD {room.rate} <small>/ night, incl. taxes</small>
          </p>
          <a
            className="btn btn--navy"
            href={getBookingUrl(room.roomId)}
            rel="noopener"
            target="_blank"
          >
            {cta}
          </a>
        </div>
      </div>
    </article>
  );
}
