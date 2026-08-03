// ==========================================================================
// Ambience & surroundings mosaic tiles.
// ==========================================================================

export type TileSize = "lg" | "sm" | "wide";

export interface Surrounding {
  img: string;
  caption: string;
  alt: string;
  size: TileSize;
}

export const SURROUNDINGS: Surrounding[] = [
  {
    img: "sur-stadium.jpg",
    caption: "Eden Park Stadium, directly behind the motel",
    alt: "Eden Park Stadium rising directly behind the motel roofs",
    size: "lg",
  },
  {
    img: "sur-villa.jpg",
    caption: "The 1910 villa frontage",
    alt: "The 1910 villa frontage",
    size: "sm",
  },
  {
    img: "sur-sign-stadium.jpg",
    caption: "Two minutes to the gates",
    alt: "Motel signage with Eden Park behind",
    size: "sm",
  },
  {
    img: "sur-gates.jpg",
    caption: "Eden Park entry gates",
    alt: "Eden Park stadium entry gates",
    size: "wide",
  },
  {
    img: "sur-kingsland.jpg",
    caption: "Kingsland cafés · 5 min walk",
    alt: "Kingsland cafe and shop frontages",
    size: "wide",
  },
  {
    img: "sur-signage.jpg",
    caption: "Parkside signage, Sandringham Road",
    alt: "Eden Park Motel roadside sign",
    size: "wide",
  },
];
