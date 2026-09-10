/**
 * SwiftBook STAAH booking engine configuration.
 */

export const BOOKING_CONFIG = {
  propertyId: 587,
  baseUrl: "https://www.swiftbook.io/inst/#home?propertyId=587",
  roomIds: {
    compactStudio: "157313",
    studioQueen: "157314",
    stayLonger2Nights: "157315",
    loveGolf2Night: "157316",
    executiveQueen: "157317",
    oneBedroomSuperKing: "157318",
    executiveSuperKing: "157319",
    apartment: "157320",
    bellwoodGuestHouse: "157321",
    wheelchairAccess: "157322",
  },
} as const;

/** Canonical booking URL constant */
export const BOOK = BOOKING_CONFIG.baseUrl;
