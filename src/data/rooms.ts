import type { Room } from "@/types/room";

export type { Room } from "@/types/room";

/** Room catalog with full specifications and STAAH inventory IDs */
export const ROOMS: Room[] = [
  {
    slug: "queen",
    name: "Queen Studio Room",
    roomId: "157314",
    flag: "Our best seller",
    featured: true,
    tag: "Boutique comfort tailored for corporate travellers and event-goers.",
    copy: "Our signature and most popular room choice. Designed with an optimal layout for up to two adults, the Queen Studio blends modern functionality with heritage charm. A mobility-accessible room is available on request.",
    feats: ["17 m²", "1 large double bed", "Private kitchenette", "Ensuite bathroom", "Sky TV & free Wi-Fi", "Mobility room available"],
    rate: "161",
  },
  {
    slug: "apartment",
    name: "1 Bedroom Super King ",
    roomId: "157318",
    flag: "",
    featured: false,
    tag: "Spacious multi-zone living for longer stays and families.",
    copy: "Apartment-style convenience on the city fringe. Spanning a generous 27 m², this layout features a separated master bedroom alongside a comfortable living zone with a flexible sofa bed. Ideal for families, small groups, or executives needing extra space.",
    feats: ["27 m²", "1 XL double + sofa bed", "Separate living room", "Private kitchenette", "Air conditioning", "Free Wi-Fi"],
    rate: "185",
  },
  {
    slug: "superking",
    name: "Executive Superking Room",
    roomId: "157319",
    flag: "",
    featured: false,
    tag: "Premium comfort with a spacious superking bed.",
    copy: "For guests who appreciate a little more breathing room without compromising on efficiency. A highly polished, comfortable space with a premium superking bed, custom styling and plenty of natural light.",
    feats: ["20 m²", "1 superking bed", "Private kitchenette", "Dedicated bathroom", "Air conditioning", "Free Wi-Fi"],
    rate: "180",
  },
  {
    slug: "exec-studio",
    name: "Executive Studio",
    roomId: "157317",
    flag: "",
    featured: false,
    tag: "Expansive studio living with premium bedding.",
    copy: "An open-plan studio focused on comfort and space. An extra-large double bed and a generous 25 m² footprint make it the ideal retreat after a day in the CBD or an event at the stadium.",
    feats: ["25 m²", "1 XL double bed", "Open-plan layout", "Kitchenette & ensuite", "Landmark views", "Free Wi-Fi"],
    rate: "180",
  },
  {
    slug: "family",
    name: "Large Twin / Family Room",
    roomId: "157320",
    flag: "Largest layout",
    featured: false,
    tag: "Flexible bedding for groups, concerts and sports travel.",
    copy: "Our largest layout, designed for groups travelling together for major sporting events, festivals or family getaways. At 36 m² it adapts to your needs, with a superking bed or two singles on request, plus a built-in dishwasher.",
    feats: ["36 m²", "1 superking or 2 singles", "Kitchen + dishwasher", "Private bathroom", "Air conditioning", "Free Wi-Fi"],
    rate: "209",
  },
  {
    slug: "small",
    name: "Small Studio Room",
    roomId: "157313",
    flag: "Best value",
    featured: false,
    tag: "Compact, efficient and budget-conscious.",
    copy: "Perfect for solo business travellers or weekend visitors who want a cosy, efficient place to rest right next to the action. Great value on the ground floor, without cutting corners on air conditioning or a private kitchenette.",
    feats: ["15 m²", "1 large double bed", "Ground floor", "Kitchenette & ensuite", "Ironing & wardrobe", "Free Wi-Fi"],
    rate: "151",
  },
];

/** Featured room used on the home page (Queen Studio). */
export const FEATURED_ROOM: Room = {
  ...ROOMS[0],
  flag: "5 units available",
};
