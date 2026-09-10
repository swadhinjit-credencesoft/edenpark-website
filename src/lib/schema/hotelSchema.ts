import { ADDRESS, PHONE_INTL } from "@/config/site";

/**
 * Generate Schema.org Hotel JSON-LD object for rich search snippets.
 */
export function generateHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: "Eden Park Motel",
    description:
      "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.mainEntrance,
      addressLocality: ADDRESS.suburb,
      addressRegion: ADDRESS.city,
      postalCode: ADDRESS.postcode,
      addressCountry: ADDRESS.country,
    },
    telephone: PHONE_INTL,
    priceRange: "NZD 151-209",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "8.9",
      bestRating: "10",
      reviewCount: "475",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchenette", value: true },
    ],
  };
}
