import { ADDRESS, EMAIL, PHONE_INTL, SITE_URL } from "@/config/site";

/**
 * Generate Schema.org Organization entity shared across the site.
 * Home page and every inner page reference this @id so Google links them.
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Eden Park Motel",
    url: SITE_URL,
    email: EMAIL,
    telephone: PHONE_INTL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/img/logo-navy.png`,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.mainEntrance,
      addressLocality: ADDRESS.suburb,
      addressRegion: ADDRESS.city,
      postalCode: ADDRESS.postcode,
      addressCountry: ADDRESS.country,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: PHONE_INTL,
      contactType: "reservations",
      availableLanguage: "English",
    },
  };
}

/**
 * Generate Schema.org WebSite entity for the site.
 */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Eden Park Motel",
    description:
      "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, kitchenettes and genuine Kiwi hospitality.",
    inLanguage: "en-NZ",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}