"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Room } from "@/types/room";
import { getBookingUrl } from "@/lib/utils/booking";
import Chips from "@/components/common/Chips";

export interface RoomCardProps {
  room: Room;
  anchor?: string;
  marginBottom?: boolean;
  /** CTA label — defaults to the rooms-page wording. */
  cta?: string;
}

/** Gap between auto-advances of the room photo gallery (ms). */
const SLIDE_INTERVAL = 2000;

/** A single room row with a rotating photo gallery, features, price and direct booking CTA. */
export default function RoomCard({
  room,
  anchor,
  marginBottom = true,
  cta = "View availability & book direct",
}: RoomCardProps) {
  const slides = [
    `/assets/img/room-${room.slug}.jpg`,
    ...room.images.filter((src) => src !== `/assets/img/room-${room.slug}.jpg`),
  ];
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (!playing || reducedMotion.current || slides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [playing, slides.length]);

  const pause = () => setPlaying(false);
  const resume = () => setPlaying(true);

  return (
    <article
      className={`room${room.featured ? " room--featured" : ""}`}
      id={anchor}
      style={marginBottom ? { marginBottom: "var(--card-gap)" } : undefined}
    >
      <div
        className="room__media"
        role="group"
        aria-roledescription="carousel"
        aria-label={`${room.name} photo gallery`}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocusCapture={pause}
        onBlurCapture={resume}
      >
        <div className="room__slides">
          {slides.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 330px"
              className={`room__slide${i === active ? " is-current" : ""}`}
              aria-hidden={i !== active}
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        {slides.length > 1 ? (
          <div className="room__dots" role="tablist" aria-label={`${room.name} photos`}>
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`room__dot${i === active ? " is-current" : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Show photo ${i + 1} of ${slides.length}`}
                aria-current={i === active}
              />
            ))}
          </div>
        ) : null}
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