import { ADDRESS, EMAIL, PHONE_INTL, SITE_URL } from "@/config/site";

/**
 * Generate Schema.org LocalBusiness / LodgingBusiness for Location page.
 */
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/find-us#location`,
    name: "Eden Park Motel Location & Directions",
    url: `${SITE_URL}/find-us`,
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
    publicAccess: true,
    smokingAllowed: false,
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
