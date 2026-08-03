// ==========================================================================
// Find Us — transit links and neighbourhood hidden gems.
// ==========================================================================

export interface TransitRow {
  name: string;
  desc: string;
  dist: string;
}

export const TRANSIT: TransitRow[] = [
  { name: "Eden Park Stadium", desc: "Directly across the road. Inside the gates before the crowds line up.", dist: "2-minute walk" },
  { name: "Kingsland Train Station", desc: "Traffic-free rail link straight to Britomart Station in the CBD.", dist: "2-minute walk" },
  { name: "Westfield St Lukes", desc: "Major retail, department stores, supermarkets and essential services.", dist: "15-min walk / 5-min drive" },
  { name: "Auckland CBD", desc: "Rapid connectivity — and 20 minutes direct to Auckland Airport.", dist: "10-minute drive" },
  { name: "Mt Eden, SkyCity, Mission Bay", desc: "Our central fringe location puts greater Auckland within reach.", dist: "Within 30 minutes" },
];

export interface Gem {
  name: string;
  dist: string;
  desc: string;
  img: string;
}

export const GEMS: Gem[] = [
  {
    name: "Kingsland café & craft beer",
    dist: "5-minute walk",
    desc: "Independent espresso bars, brunch spots and craft beer pubs — ideal for a pre-event drink or a weekday meeting.",
    img: "sur-kingsland.jpg",
  },
  {
    name: "Dominion Road dining trail",
    dist: "10-minute walk",
    desc: "Auckland's legendary international food strip. Skip the tourist spots and find the hidden dumpling houses.",
    img: "sur-signage.jpg",
  },
  {
    name: "Gribblehirst Park",
    dist: "Short stroll",
    desc: "A quiet green space minutes away, perfect for a morning walk or a run before the day starts.",
    img: "sur-villa.jpg",
  },
];
