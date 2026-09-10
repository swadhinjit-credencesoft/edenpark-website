import type { Post, Category } from "@/types/post";

export type { Post, Category } from "@/types/post";

export const CATS: Category[] = [
  { key: "all", label: "All" },
  { key: "events", label: "Events" },
  { key: "food", label: "Food & drink" },
  { key: "business", label: "Business" },
  { key: "heritage", label: "Heritage" },
  { key: "transit", label: "Transit" },
];

export const POSTS: Post[] = [
  {
    category: "events",
    label: "Events",
    title: "The ultimate Eden Park event guide: stress-free match and concert days",
    excerpt:
      "Road closures, surge pricing and hour-long taxi queues turn a great night into an ordeal. Staying across the road means you walk away from the crowds and are home in minutes.",
    seo: "accommodation near Eden Park Stadium · Auckland event accommodation · motels near Eden Park",
    img: "sur-gates.jpg",
    minutes: "5 min read",
  },
  {
    category: "food",
    label: "Food & drink",
    title: "The Dominion Road foodie trail: neighbourhood hidden gems",
    excerpt:
      "Auckland's iconic international food strip is a 10-minute stroll away — hand-pulled noodles, legendary dumpling houses, clay-pot dishes, laksa and Sichuan hot pot.",
    seo: "Dominion Road restaurants · places to eat Sandringham · best dumplings Auckland",
    img: "sur-kingsland.jpg",
    minutes: "5 min read",
  },
  {
    category: "business",
    label: "Business",
    title: "Corporate proximity: the midweek guide to Sandringham and Kingsland",
    excerpt:
      "Why the city fringe beats the CBD for business travel: free parking that saves $30–$50 a day, double-glazed quiet, fibre Wi-Fi and a direct rail link to Britomart.",
    seo: "Auckland corporate accommodation · business motels Auckland fringe · hotel with free parking",
    img: "sur-villa.jpg",
    minutes: "5 min read",
  },
  {
    category: "heritage",
    label: "Heritage",
    title: "Living history: the heritage charm of our 1910 villa",
    excerpt:
      "Edwardian craftsmanship meets 2026 comfort — timber framing and classic porchways outside; ensuites, kitchenettes, heat pumps and blackout insulation within.",
    seo: "boutique accommodation Auckland · heritage villa motel New Zealand · historic stays Auckland",
    img: "sur-signage.jpg",
    minutes: "5 min read",
  },
  {
    category: "transit",
    label: "Transit",
    title: "Transit made easy: reaching Spark Arena and the CBD from Kingsland",
    excerpt:
      "Skip the gridlock. Walk to Kingsland Station, ride the western line to Britomart, then stroll the waterfront to Spark Arena, Commercial Bay and the Viaduct.",
    seo: "how to get to Spark Arena · transport Kingsland station to CBD · motels near Britomart",
    img: "sur-sign-stadium.jpg",
    minutes: "5 min read",
  },
];
