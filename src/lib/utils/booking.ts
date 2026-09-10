import { BOOKING_CONFIG } from "@/config/booking";

/**
 * Generate a STAAH SwiftBook direct booking URL.
 * If a room ID is provided, direct link query param `&RoomID={roomId}` is attached.
 *
 * @param roomId - Optional individual room ID
 * @returns Fully qualified booking URL
 */
export function getBookingUrl(roomId?: string | number): string {
  if (!roomId) {
    return BOOKING_CONFIG.baseUrl;
  }
  return `https://www.swiftbook.io/inst/#home?propertyId=${BOOKING_CONFIG.propertyId}&RoomID=${roomId}`;
}
