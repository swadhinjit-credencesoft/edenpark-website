/**
 * Room domain model and bedding types.
 */

export type RoomId =
  | "157313" // Compact Studio
  | "157314" // Studio - Queen
  | "157315" // Linked Stay Longer - 2 Nights
  | "157316" // Linked Love Golf 2 Night Stay
  | "157317" // Executive - Queen
  | "157318" // 1 Bedroom - Super King
  | "157319" // Executive - Super King
  | "157320" // Apartment
  | "157321" // Bellwood Guest House
  | "157322"; // Studio - Wheelchair Access

export interface Room {
  slug: string;
  name: string;
  roomId?: RoomId | string;
  flag: string;
  featured: boolean;
  tag: string;
  copy: string;
  feats: string[];
  rate: string;
}
