// ==========================================================================
// Site-wide constants — booking engine, navigation, canonical domain.
// ==========================================================================

/** SwiftBook STAAH booking engine — property 587. */
export const BOOK = "https://www.swiftbook.io/inst/#home?propertyId=587";

/** Generate a direct booking URL for a specific room or the general booking engine. */
export function getBookingUrl(roomId?: string | number): string {
  if (!roomId) return BOOK;
  return `https://www.swiftbook.io/inst/#home?propertyId=587&RoomID=${roomId}`;
}

/** Canonical domain for metadata / structured data. */
export const SITE_URL = "https://www.edenparkmotel.co.nz";

export interface NavItem {
  href: string;
  label: string;
}

/** Primary navigation, in display order. */
export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/rooms", label: "Rooms" },
  { href: "/faq", label: "FAQ" },
  { href: "/find-us", label: "Find Us" },
  { href: "/corporate", label: "Corporate" },
  { href: "/self-check-in", label: "Self Check-In" },
  { href: "/blog", label: "Blog" },
];

/** Short links shown in the masthead quick strip. */
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
