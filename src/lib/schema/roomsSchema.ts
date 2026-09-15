import { SITE_URL } from "@/config/site";
import { getBookingUrl } from "@/lib/utils/booking";
import type { Room } from "@/types/room";

/**
 * Generate Schema.org ItemList with HotelRoom entities for the Rooms page.
 */
export function generateRoomsSchema(rooms: Room[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Accommodation Rooms at Eden Park Motel",
    description: "Six boutique room configurations at Eden Park Motel, Auckland.",
    numberOfItems: rooms.length,
    itemListElement: rooms.map((room, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "HotelRoom",
        "@id": `${SITE_URL}/rooms#${room.slug}`,
        name: room.name,
        description: room.copy,
        image: `${SITE_URL}/assets/img/room-${room.slug}.jpg`,
        url: `${SITE_URL}/rooms#${room.slug}`,
        offers: {
          "@type": "Offer",
          price: room.rate,
          priceCurrency: "NZD",
          availability: "https://schema.org/InStock",
          url: getBookingUrl(room.roomId),
          priceValidUntil: "2027-12-31",
        },
        amenityFeature: room.feats.map((feat) => ({
          "@type": "LocationFeatureSpecification",
          name: feat,
          value: true,
        })),
      },
    })),
  };
}
