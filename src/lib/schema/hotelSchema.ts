import { ADDRESS, EMAIL, PHONE_INTL, SITE_URL } from "@/config/site";

/**
 * Generate comprehensive Schema.org Hotel / Motel JSON-LD structured data.
 */
export function generateHotelSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE_URL}/#hotel`,
    name: "Eden Park Motel",
    alternateName: "Eden Park Motel Auckland",
    description:
      "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, private kitchenettes, double glazing and Kiwi hospitality.",
    url: SITE_URL,
    telephone: PHONE_INTL,
    email: EMAIL,
    image: [
      `${SITE_URL}/assets/img/hero-villa.jpg`,
      `${SITE_URL}/assets/img/sur-stadium.jpg`,
      `${SITE_URL}/assets/img/room-queen.jpg`,
    ],
    logo: `${SITE_URL}/assets/img/logo-navy.png`,
    priceRange: "NZD 151-209",
    currenciesAccepted: "NZD",
    paymentAccepted: "Credit Card, Debit Card, Visa, MasterCard",
    checkinTime: "14:00",
    checkoutTime: "10:00",
    petsAllowed: false,
    parentOrganization: {
      "@id": `${SITE_URL}/#organization`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.mainEntrance,
      addressLocality: ADDRESS.suburb,
      addressRegion: ADDRESS.city,
      postalCode: ADDRESS.postcode,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -36.8744,
      longitude: 174.7431,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "8.9",
      bestRating: "10",
      worstRating: "1",
      reviewCount: "475",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free on-site parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free high-speed Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Private kitchenette", value: true },
      { "@type": "LocationFeatureSpecification", name: "Double glazed quiet rooms", value: true },
      { "@type": "LocationFeatureSpecification", name: "Air conditioning / Heat pump", value: true },
      { "@type": "LocationFeatureSpecification", name: "Contactless self check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walk to Eden Park Stadium", value: true },
    ],
  };
}
