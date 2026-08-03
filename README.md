# Eden Park Motel — Website

Static HTML prototype built to **Brand Guidelines v2.0**. Every page is production-quality
markup intended as the reference implementation for the Next.js + Contentful build.

## Run it

Any static server works — there is no build step.

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Pages

| File | Page |
|---|---|
| `index.html` | Home |
| `rooms.html` | Rooms (Ambience & Surroundings + six room types) |
| `faq.html` | FAQ |
| `find-us.html` | Find Us |
| `corporate.html` | Corporate Bookings |
| `self-check-in.html` | Self Check-In |
| `blog.html` | Blog (search, category filter, pagination) |

Book Now links point to the STAAH booking engine via the `BOOK` constant in `build.py`.

## Structure

```
assets/css/style.css   Brand token system, all components
assets/js/main.js      Mobile nav, FAQ accordion, blog search/filter
assets/img/            Property photography
build.py               Regenerates all HTML from shared templates
```

Edit `build.py` and re-run `python3 build.py` rather than editing HTML by hand —
the header, footer and nav are shared templates.

## Brand tokens

Defined once in `:root` in `style.css`:

| Token | Value | Role |
|---|---|---|
| `--navy` | `#0D3B66` | Primary |
| `--blue` | `#1D7FC1` | Secondary |
| `--sky` | `#5FA8D3` | Support |
| `--tint` | `#EAF3FA` | Background |
| `--char` | `#2D3436` | Body text |
| `--gold` | `#C9A227` | Booking CTAs only |
| `--pad` | `30px` | Card/panel inner padding |
| `--gap` | `22px` | Text-to-control clearance |

Type: **Playfair Display** (display only) + **Inter** (everything functional), both self-hostable
Google Fonts with macron support for te reo Māori.

Signature element: the **Maungawhau ridgeline** — inline SVG in the hero and every page banner.

## Verified

- 0 HTML parse errors, 0 missing assets, 0 JS errors
- 0 horizontal overflow at 360 / 414 / 768 / 1024 / 1440 px
- Every image has `alt`; one `<h1>` per page; `lang="en-NZ"`; all inputs labelled
- Visible keyboard focus; `prefers-reduced-motion` respected
- Hotel + FAQPage JSON-LD structured data

## Handoff notes for the Next.js build

1. **Blog filtering must be server-side.** The JS filter here is a prototype. Real category
   pages need crawlable URLs (`/blog/events`) or the five SEO-targeted articles will not rank.
2. **Confirm the STAAH property URL** — `BOOK` is currently a placeholder.
3. **Rates are indicative** and follow the client content document. They need a named owner
   or a live feed; always display with a "from" qualifier.
4. **Images need responsive treatment** — convert to AVIF/WebP with `next/image` and add
   `srcset`. Current JPEGs are unoptimised.
5. **Verify the One-Bedroom Apartment photo.** The supplied image shows a full kitchen with
   dishwasher and two single beds, which matches the Large Twin / Family Room specification.
6. **Embed the map** on Find Us — placeholder block is marked in the markup.
