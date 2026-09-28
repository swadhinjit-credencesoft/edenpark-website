# Eden Park Motel — Website

Next.js + TypeScript + SCSS site for Eden Park Motel, built to **Brand Guidelines v2.0**.
The site is fully static and exports to plain HTML via `next.config.mjs`.

## Run it

```bash
npm install
npm run dev        # development
npm run build      # production build + static export to /out
npm run typecheck  # tsc --noEmit
npm run lint       # ESLint
```

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/rooms` | Rooms (Ambience & Surroundings + six room types) |
| `/faq` | FAQ |
| `/find-us` | Find Us |
| `/corporate` | Corporate Bookings |
| `/self-check-in` | Self Check-In |
| `/blog` | Blog (search, category filter) |

Book Now links point to the STAAH booking engine via the `BOOK` constant in `src/data/site.ts`.

## Structure

```
src/app/              App Router pages + layout + 404
src/components/       Header, Footer, Banner, RoomCard, BlogFilter, SVG signature …
src/data/             Content modules (rooms, FAQ, blog, transit, check-in, site constants)
src/styles/           SCSS partials, imported by globals.scss
public/assets/img/    Property photography
```

## Brand tokens

Defined once in `src/styles/_tokens.scss`:

| Token | Value | Role |
|---|---|---|
| `--navy` | `#0D3B66` | Primary |
| `--blue` | `#1D7FC1` | Secondary |
| `--sky` | `#5FA8D3` | Support |
| `--tint` | `#EAF3FA` | Background |
| `--char` | `#2D3436` | Body text |
| `--gold` | `#C9A227` | Booking CTAs only |

Type: **Playfair Display** (display only) + **Inter** (everything functional), Google Fonts.
Signature element: the **Maungawhau ridgeline** — inline SVG in the hero and every page banner.

## Verified

- 0 TypeScript errors; production export builds clean
- Hotel + FAQPage JSON-LD structured data
- Per-page canonical + OpenGraph metadata
- Accessible: skip link, `aria-current`/`aria-pressed` states, one `<h1>` per page, all images have `alt`

## TODO

1. **Blog articles are placeholders** — the "Read article" links point to `#`. Add real article pages
   (per-category crawlable URLs like `/blog/events`) so the SEO-targeted posts can rank.
2. **Rates are indicative** and follow the client content document. They need a named owner
   or a live feed; always display with a "from" qualifier.
3. **Images ship unoptimised** (`unoptimized: true`). Convert to AVIF/WebP with `next/image` and
   add `srcset` when the source asset set is upgraded.
4. **Embed the map** on Find Us — placeholder block is marked in `src/app/find-us/page.tsx`.
5. **Move Google Fonts to `next/font`** to silence the `no-page-custom-font` lint warning.

## SwiftBook / STAAH engine assets

- Booking engine: `https://www.swiftbook.io/inst/#home?propertyId=623NTgtlEo4zEKC10hlUeJfusoktOl3Agi6N13`
  (token confirmed; `getBookingUrl()` appends per-room `&RoomID=` for direct links).
- Full index of engine image URLs + direct room links: **`docs/swiftbook-engine.md`**.
- Room card photos were replaced with the engine's real photography (600px source).
  Complete per-room gallery downloads live in `public/assets/img/swiftbook/rooms/<RoomID>/`.
