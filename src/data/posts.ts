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
    slug: "eden-park-event-guide",
    category: "events",
    label: "Events",
    title: "The ultimate Eden Park event guide: stress-free match and concert days",
    excerpt:
      "Road closures, surge pricing and hour-long taxi queues turn a great night into an ordeal. Staying across the road means you walk away from the crowds and are home in minutes.",
    seo: "accommodation near Eden Park Stadium · Auckland event accommodation · motels near Eden Park",
    img: "sur-gates.jpg",
    minutes: "5 min read",
    date: "2026-03-12",
    content: [
      {
        heading: "Why staying across the road changes everything",
        paragraphs: [
          "On event days, the area around Eden Park transforms. Sandringham Road closes to through-traffic, ride-share surge pricing multiplies fares, and the last train home can feel like a sport in itself. Thousands of people are trying to leave the same event at the same time — and most of them have a long journey ahead.",
          "Guests at Eden Park Motel skip almost all of it. We're a two-minute walk from Gate 2 at the north-west corner of the stadium. When the final siren sounds or the encore finishes, you don't queue for a taxi, you don't refresh the ride-share app, and you don't sprint for the station. You just walk across the road and you're home.",
        ],
      },
      {
        heading: "Arriving for your event",
        paragraphs: [
          "Aim to arrive at least 60–90 minutes before gates open. Local streets fill up fast, and while our on-site parking is reserved for guests, the surrounding roads are metered or resident-only. Walking is genuinely the best way to arrive — the motel is on the main pedestrian route used by thousands of event-goers each fixture.",
          "If you're coming by train, alight at Kingsland Station (a 12-minute stroll) or Mount Eden Station (around 15 minutes). Both connect to the western line. The Kingsland Quarter bars and restaurants are a lively pre-match spot, and you can walk from there straight down to Gate 1 on the corner of Reimers Avenue.",
        ],
      },
      {
        heading: "Leaving without the ordeal",
        paragraphs: [
          "The biggest travel mistakes on event nights happen after the event: queuing at the bus stop for 40 minutes, watching surge pricing double in real time, or joining a line of cars trying to exit one road at once. Staying a short walk away turns that stressful final hour into a minor, pleasant stroll.",
          "For concert-goers, the venue curfews are strict around 11pm — taxis and trains all peak at the same moment. Our guests simply walk home through the gates, grab a snack in the kitchenette, and head to bed while traffic clears outside. It's the sleep you actually want after a big night.",
        ],
      },
    ],
  },
  {
    slug: "dominion-road-foodie-trail",
    category: "food",
    label: "Food & drink",
    title: "The Dominion Road foodie trail: neighbourhood hidden gems",
    excerpt:
      "Auckland's iconic international food strip is a 10-minute stroll away — hand-pulled noodles, legendary dumpling houses, clay-pot dishes, laksa and Sichuan hot pot.",
    seo: "Dominion Road restaurants · places to eat Sandringham · best dumplings Auckland",
    img: "sur-kingsland.jpg",
    minutes: "5 min read",
    date: "2026-04-03",
    content: [
      {
        heading: "One street, the world's cuisine",
        paragraphs: [
          "Dominion Road is Auckland's unofficial international food capital. It's not a tourist attraction that needs booking months ahead — it's a working neighbourhood strip where families, students and locals eat incredible food every day. And it's ten minutes' walk from the motel, past the Sandringham shops.",
          "The street is famous for Chinese regional cooking from across the country: hand-pulled noodles you watch being made at the window, xiao long bao with soupy centres, sizzling clay-pot dishes and buns straight from wood-fired baskets. Arrive hungry — portion sizes are generous and the room service trick is to order to share so you can try more.",
        ],
      },
      {
        heading: "Beyond Chinese food",
        paragraphs: [
          "Keep walking south past Valley Road and the strip shifts: Korean fried chicken joints, Japanese ramen bars, Malaysian laksa houses and a Filipino block of bakeries and sizzling plates. There's also legendary Indian in nearby Sandringham and one of the city's best-loved pie shops if you want something classic.",
          "For a quick, authentic pick: a dumpling house for a starter and a clay-pot rice place for mains is a classic combo. Most venues are walk-in friendly at lunch and early dinner — tables start to fill around 7pm on weekends, so go early or be prepared to wait a little for the best-known names.",
        ],
      },
      {
        heading: "Turning it into a night out",
        paragraphs: [
          "Start with a drink in Kingsland's bars (closer to the motel), then move to Dominion Road for dinner on the way back. Or do dessert the Auckland way: a custard-and-pastry fix from a late-night bakery, gelato from the Italian joints near Valley Road, then a stroll home through quiet residential streets.",
          "Because the strip is a ten-minute walk from Eden Park Motel, you don't drive, you don't park twice, and you can split the bill and walk it off. A proper foodie night out without fighting traffic — that's the neighbourhood promise.",
        ],
      },
    ],
  },
  {
    slug: "corporate-proximity-midweek-guide",
    category: "business",
    label: "Business",
    title: "Corporate proximity: the midweek guide to Sandringham and Kingsland",
    excerpt:
      "Why the city fringe beats the CBD for business travel: free parking that saves $30–$50 a day, double-glazed quiet, fibre Wi-Fi and a direct rail link to Britomart.",
    seo: "Auckland corporate accommodation · business motels Auckland fringe · hotel with free parking",
    img: "sur-villa.jpg",
    minutes: "5 min read",
    date: "2026-05-14",
    content: [
      {
        heading: "The fringe advantage",
        paragraphs: [
          "Midweek in the Auckland CBD means parking at hotel rates that can exceed $50 a day, traffic that keeps changing, and rooms that are often booked out by conferences. Staying on the city fringe at Eden Park Motel flips the economics: free on-site parking is included with every stay, and the trade-off for ten extra minutes downtown is a genuinely quiet night's sleep.",
          "Business travellers come back to us for the same three things every time: a car that isn't costing them money, a desk they can actually work at, and a bed that isn't above a busy CBD street. The 1910 villa sits on tree-lined grounds — you can leave a meeting in the city and be in a quiet, settled room within twenty minutes door to door.",
        ],
      },
      {
        heading: "Getting to the city",
        paragraphs: [
          "Kingsland Station is a 12-minute walk and puts you on the western line to Britomart in under twenty minutes — two stops on a good day. Trains run through the morning and evening peaks for your commute, and Britomart drops you at the heart of the waterfront, Commercial Bay and the business district.",
          "Driving is just as easy: Sandringham Road loops onto the state highways toward the city and airport, and Mount Eden's shopping village is close by. For Auckland Hospital, Greenlane Clinical Centre and the southern business parks, the motel's position on the city edge is actually quicker than staying in the CBD itself.",
        ],
      },
      {
        heading: "Whatever you need, midweek",
        paragraphs: [
          "Rooms include kitchenettes for self-catering (hotel breakfast marked up at $25 a plate doesn't happen here), an iron, a desk and free fibre Wi-Fi for video calls. Double glazing and blackout treatment keep meetings humming during the day and keep city noise out at night.",
          "Coming back refreshed is the quiet part of the working week that hotels in the middle of everything can't always deliver. The combination of included parking, direct rail, and a restful heritage property keeps corporate travellers returning midweek — often booked by the same companies, week after week.",
        ],
      },
    ],
  },
  {
    slug: "heritage-charm-1910-villa",
    category: "heritage",
    label: "Heritage",
    title: "Living history: the heritage charm of our 1910 villa",
    excerpt:
      "Edwardian craftsmanship meets 2026 comfort — timber framing and classic porchways outside; ensuites, kitchenettes, heat pumps and blackout insulation within.",
    seo: "boutique accommodation Auckland · heritage villa motel New Zealand · historic stays Auckland",
    img: "sur-signage.jpg",
    minutes: "5 min read",
    date: "2026-06-25",
    content: [
      {
        heading: "A house with a story",
        paragraphs: [
          "Number 36 Sandringham Road has been standing since 1910 — a timber Edwardian-era villa in a suburb that grew up with the tramlines of early Auckland. The original construction, with its classic verandah and solid timber framing, is still visible in the character of the building today. It's the kind of old-new contrast that boutique travellers love: genuine heritage outside, genuinely modern inside.",
          "Adapting a heritage villa into a motel was always about preservation meets practicality. Original architectural details have been kept where they give the building its character, while everything that makes a stay comfortable — insulation, double glazing, heat pumps, modern ensuites — has been quietly upgraded so the heritage charm doesn't come at the cost of comfort.",
        ],
      },
      {
        heading: "Travelling for character",
        paragraphs: [
          "Chain hotels give you the same room in every city. Staying in a heritage property gives you a sense of place: you're in a building that watched Sandringham develop from farmland-bound tram suburb to one of Auckland's liveliest neighbourhoods. Families, couples and international visitors all respond to it differently, but the consistent comment is that it feels genuinely New Zealand.",
          "There's a reason heritage accommodation is so sought-after — it photographs beautifully, it tells a story, and it slows you down in the best way. After a busy day at Eden Park or a long flight in, coming home to a porch-lit, timber-framed building feels like arriving, not just checking in.",
        ],
      },
      {
        heading: "Old bones, modern stay",
        paragraphs: [
          "The practical side matters too: kitchenettes mean self-contained convenience, ensuites in each room mean privacy, and the quiet grounds mean you sleep properly. Because the villa structure naturally diffuses sound between rooms and our double glazing handles the street, heritage character and restful nights actually complement each other.",
          "Whether you pick the villa for a romantic weekend, a base for exploring the stadium precinct, or somewhere genuinely charming for the parents visiting family in Auckland, it offers the one thing that's increasingly rare in accommodation: a story to remember.",
        ],
      },
    ],
  },
  {
    slug: "transit-made-easy-spark-arena-cbd",
    category: "transit",
    label: "Transit",
    title: "Transit made easy: reaching Spark Arena and the CBD from Kingsland",
    excerpt:
      "Skip the gridlock. Walk to Kingsland Station, ride the western line to Britomart, then stroll the waterfront to Spark Arena, Commercial Bay and the Viaduct.",
    seo: "how to get to Spark Arena · transport Kingsland station to CBD · motels near Britomart",
    img: "sur-sign-stadium.jpg",
    minutes: "5 min read",
    date: "2026-07-02",
    content: [
      {
        heading: "The 40-minute plan that beats driving",
        paragraphs: [
          "From Eden Park Motel to Spark Arena is around 40 minutes door to door — and none of it is gridlock. The route: 12 minutes on foot to Kingsland Station, the western line into Britomart (about 20 minutes), then a waterfront stroll of 10 minutes or so to Spark Arena. Compare that with driving into the CBD on event nights and the choice is obvious.",
          "The same journey gets you to Commercial Bay and the Viaduct Harbour — the dining-and-walking strip at the foot of Queen Street. After a concert finishes, simply retrace the route: the trains run late for events, and walking home from the station covers the last stretch in fresh air instead of a queue.",
        ],
      },
      {
        heading: "Fares and timing",
        paragraphs: [
          "Tag on with a HOP card or use contactless bank cards at the stations. Tickets are priced by zone, and the Kingsland–Britomart length is one of the most straightforward journeys on the network — no transfers required. Check the AT (Auckland Transport) live departures before you leave; peak-hour trains are frequent.",
          "For very late finishes, taxi or ride-share back is fine too — but skip the CBD surge by grabbing it from Britomart's rank at the start of the walk home, or take the 20-minute drive directly. The motel has free on-site parking for those who prefer to drive into the city early and simply walk back across the road at the end.",
        ],
      },
      {
        heading: "One base, every arena",
        paragraphs: [
          "Because Eden Park is itself on the way to the western line, the motel works for anyone mixing events across venues: a concert at Spark Arena, a game at Eden Park, or meetings in Britomart. One room, one parking spot, and every direction covered by a station or a short drive.",
          "That's the practical beauty of the fringe location: the CBD, the stadium and the airport are all reachable without owning the traffic problem. Arrive, park, and let the rail line do the city work for you.",
        ],
      },
    ],
  },
];