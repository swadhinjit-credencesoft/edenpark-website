import type { NavItem } from "@/types/navigation";

/**
 * Site-wide configuration — metadata domain, navigation links, and contact info.
 */

export const SITE_URL = "https://www.edenparkmotel.co.nz";

export const SITE_METADATA = {
  name: "Eden Park Motel",
  tagline: "Boutique Heritage Accommodation Auckland",
  description:
    "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, kitchenettes and genuine Kiwi hospitality. Book direct for the best rate.",
  locale: "en-NZ",
} as const;

/** Primary navigation items in display order */
export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/faq", label: "FAQ" },
  { href: "/find-us", label: "Find Us" },
  { href: "/corporate", label: "Corporate" },
  { href: "/self-check-in", label: "Self Check-In" },
  { href: "/blog", label: "Blog" },
];

/** Quick links displayed in the masthead quick strip */
export const QUICK_LINKS: NavItem[] = [
  { href: "/rooms", label: "Rooms" },
  { href: "/find-us", label: "Find Us" },
  { href: "/faq", label: "FAQ" },
];

export const PHONE = "0800 AT EDEN (0800 283 336)";
export const PHONE_HREF = "tel:0800283336";
export const PHONE_INTL = "+64 9 846 4919";
export const PHONE_INTL_HREF = "tel:+6498464919";
export const EMAIL = "reservations@edenparkmotel.co.nz";
export const EMAIL_HREF = "mailto:reservations@edenparkmotel.co.nz";

export const ADDRESS = {
  mainEntrance: "36 Sandringham Road",
  pedestrianEntrance: "57 Walters Road",
  suburb: "Sandringham",
  city: "Auckland",
  postcode: "1024",
  country: "NZ",
  full: "36 Sandringham Road, Sandringham, Auckland 1024",
} as const;
