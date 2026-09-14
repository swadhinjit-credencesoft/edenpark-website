import type { TransitItem, LocalGem } from "@/types/transit";

export type { TransitItem, LocalGem } from "@/types/transit";

export const TRANSIT: TransitItem[] = [
  {
    name: "Eden Park Stadium",
    dist: "2 min walk",
    desc: "Directly across the road — reach your seat without transit queues or surge pricing.",
  },
  {
    name: "Kingsland Train Station",
    dist: "2 min walk",
    desc: "Western Line rail direct to Britomart (CBD) and easy pedestrian link to Spark Arena.",
  },
   {
    name: "Spark Arena",
    dist: "10-minute drive",
    desc: "Auckland's premier indoor venue for global music tours and major events.",
  },
   {
    name: "The Powerstation",
    dist: "5-minute drive",
    desc: "Iconic Mount Eden live music venue and concert hall.",
  },
   {
    name: "The Glasshouse",
    dist: "2-minute drive",
    desc: "Boutique venue space in the heart of Morningside.",
  },
    {
    name: "Western Springs Bowl & Stadium",
    dist: "5-minute drive",
    desc: "Home to massive outdoor concerts, festivals, and racing.",
  },
  {
    name: "Auckland CBD / Commercial Bay",
    dist: "10 min drive",
    desc: "10 minutes by car or 12 minutes on the western line from Kingsland Station.",
  },
  {
    name: "Auckland Airport (AKL)",
    dist: "20 min drive",
    desc: "Direct airport access via SH20 without fighting city-centre congestion.",
  },
  {
    name: "Westfield St Lukes",
    dist: "15 min walk",
    desc: "Supermarkets, banking, department stores and cinemas — or a 5-minute drive.",
  },
];

export const GEMS: LocalGem[] = [
  {
    name: "Kingsland Village Cafés & Craft Beer",
    dist: "5 min walk",
    desc: "Artisan bakeries, specialty coffee roasters and craft breweries lining New North Road.",
    img: "sur-kingsland.jpg",
  },
  {
    name: "Dominion Road Dining Strip",
    dist: "10 min walk",
    desc: "Auckland's legendary international food street — hand-pulled noodles, dumplings and hot pot.",
    img: "sur-gates.jpg",
  },
  {
    name: "Morningside Precinct",
    dist: "8 min walk",
    desc: "Urban cider bars, dessert lounges and neighbourhood bistros in a repurposed industrial setting.",
    img: "sur-villa.jpg",
  },
];
