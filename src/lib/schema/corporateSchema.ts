import { ADDRESS, EMAIL, PHONE_INTL, SITE_URL } from "@/config/site";

/**
 * Generate Schema.org Service schema for the Corporate bookings page.
 */
export function generateCorporateServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/corporate#service`,
    serviceType: "Corporate accommodation",
    name: "Corporate Bookings & Business Stays at Eden Park Motel",
    description:
      "Midweek corporate accommodation on the Auckland city fringe. Free parking, high-speed fibre Wi-Fi, quiet double-glazed rooms and preferred corporate rates.",
    url: `${SITE_URL}/corporate`,
    provider: {
      "@type": "Hotel",
      "@id": `${SITE_URL}/#hotel`,
      name: "Eden Park Motel",
      url: SITE_URL,
      telephone: PHONE_INTL,
      email: EMAIL,
      priceRange: "NZD 151-209",
      image: `${SITE_URL}/assets/img/room-exec-studio.jpg`,
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.mainEntrance,
        addressLocality: ADDRESS.suburb,
        addressRegion: ADDRESS.city,
        postalCode: ADDRESS.postcode,
        addressCountry: ADDRESS.country,
      },
    },
    areaServed: { "@type": "City", name: "Auckland" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Business travel benefits",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Guaranteed preferred rates" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Priority room allocation" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Flexible cancellation terms" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Simplified invoicing" },
        },
      ],
    },
  };
}