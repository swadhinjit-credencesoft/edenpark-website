"use client";

import { useEffect, useState } from "react";

interface Review {
  text: string;
  author: string;
}

const REVIEWS: Review[] = [
  {
    text: "An absolute gem of a location. Literally walked across the road to the game, and the free parking saved us a fortune compared to staying in the city centre. The room was immaculately clean and full of character.",
    author: "Leisure guest · verified review",
  },
  {
    text: "The staff were warm and welcoming from the moment we arrived. A beautifully renovated villa with every modern comfort, and being two minutes from Eden Park made match day completely stress-free.",
    author: "Sports traveller · verified review",
  },
  {
    text: "Perfect base for our Auckland trip. Quiet, spotless and charming, with a proper kitchenette and a comfortable bed. The free parking and easy rail access to the city were a huge bonus.",
    author: "Business guest · verified review",
  },
  {
    text: "We stayed as a family for a weekend event and could not have asked for more. Spacious room, friendly service and an unbeatable location right across from the stadium gates.",
    author: "Family guest · verified review",
  },
  {
    text: "A historic villa with all the modern touches. The double glazing kept it peaceful on a busy concert night, and walking back from Eden Park in minutes was priceless. Highly recommended.",
    author: "Concert guest · verified review",
  },
];

/** Rotating guest-review carousel — cycles every 2 seconds. */
export default function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % REVIEWS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const review = REVIEWS[index];

  return (
    <div className="reviews" aria-label="Guest reviews carousel">
      <div className="reviews__dots" aria-hidden="true">
        {REVIEWS.map((_, i) => (
          <i key={i} className={i === index ? "is-on" : ""} />
        ))}
      </div>
      <blockquote className="quote">
        <p className="eyebrow eyebrow-light">What our guests say</p>
        <span className="quote__mark">“</span>
        <p>{review.text}</p>
        <cite>— {review.author}</cite>
      </blockquote>
    </div>
  );
}
