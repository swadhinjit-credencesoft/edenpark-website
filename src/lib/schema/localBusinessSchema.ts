import { ADDRESS, EMAIL, PHONE_INTL, SITE_URL } from "@/config/site";

/**
 * Generate Schema.org Hotel / LodgingBusiness structured data for Location page.
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "@id": `${SITE_URL}/#hotel`,
    name: "Eden Park Motel",
    url: SITE_URL,
    telephone: PHONE_INTL,
    email: EMAIL,
    image: `${SITE_URL}/assets/img/sur-gates.jpg`,
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
    hasMap: "https://maps.google.com/?q=36+Sandringham+Road+Auckland",
    smokingAllowed: false,
    checkinTime: "14:00",
    checkoutTime: "10:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free on-site parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free high-speed Wi-Fi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Contactless self check-in", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walk to Eden Park Stadium", value: true },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:30",
        closes: "21:00",
      },
    ],
  };
}
