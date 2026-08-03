#!/usr/bin/env python3
"""Builds the Eden Park Motel static site from shared templates."""
import os, html

OUT = os.path.dirname(os.path.abspath(__file__))
BOOK = "https://book.staah.net/"          # STAAH booking engine (confirm exact property URL)

NAV = [("index.html", "Home"), ("rooms.html", "Rooms"), ("faq.html", "FAQ"),
       ("find-us.html", "Find Us"), ("corporate.html", "Corporate"),
       ("self-check-in.html", "Self Check-In"), ("blog.html", "Blog")]

SWOOSH = '''<svg class="swoosh" viewBox="0 0 1200 340" preserveAspectRatio="none" aria-hidden="true" focusable="false">
  <defs>
    <linearGradient id="swooshGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#0D3B66"/>
      <stop offset="0.55" stop-color="#12518D"/>
      <stop offset="1" stop-color="#1D7FC1"/>
    </linearGradient>
  </defs>
  <path d="M0,0 H1200 V364 Q590,-16 0,28 Z" fill="#fff"/>
  <path d="M0,0 H1200 V332 Q600,-40 0,14 Z" fill="url(#swooshGrad)"/>
</svg>'''

RIDGE = '''<svg class="ridge" viewBox="0 0 560 300" fill="none" aria-hidden="true" focusable="false">
  <path d="M60 300 Q280 40 500 300 Z" fill="#fff"/>
  <path d="M108 300 Q280 96 452 300" stroke="#5FA8D3" stroke-width="3" fill="none"/>
  <path d="M156 300 Q280 148 404 300" stroke="#fff" stroke-width="3" fill="none" opacity=".62"/>
  <path d="M204 300 Q280 196 356 300" stroke="#5FA8D3" stroke-width="3" fill="none" opacity=".8"/>
</svg>'''

TICK = '<span class="club__tick"><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'


def head(title, desc, current, extra=""):
    links = "".join(
        f'<a href="{h}"{" aria-current=\'page\'" if h == current else ""}>{t}</a>'
        for h, t in NAV)
    short = "".join(
        f'<a href="{h}"{" aria-current=\'page\'" if h == current else ""}>{t}</a>'
        for h, t in [("rooms.html", "Rooms"), ("find-us.html", "Find Us"), ("faq.html", "FAQ")])
    return f'''<!doctype html>
<html lang="en-NZ">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title} | Eden Park Motel Auckland</title>
<meta name="description" content="{desc}">
<link rel="canonical" href="https://www.edenparkmotel.co.nz/{current}">
<meta property="og:title" content="{title} | Eden Park Motel">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/img/sur-stadium.jpg">
<link rel="icon" href="assets/img/logo-navy.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
{extra}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<header class="masthead">
  <div class="wrap masthead__inner">
    <button class="navtoggle" aria-label="Open menu" aria-expanded="false" aria-controls="primary-nav">
      <span></span><span></span><span></span>
    </button>
    <a class="masthead__logo" href="index.html">
      <img src="assets/img/logo-white.png" alt="Eden Park Motel">
    </a>
    <div class="masthead__quick">{short}</div>
    <a class="btn btn--book" href="{BOOK}" rel="noopener">Book now</a>
    <nav id="primary-nav" class="nav" data-open="false" aria-label="Main">{links}</nav>
  </div>
</header>
<main id="main">
'''


FOOT = f'''</main>
<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div>
        <img src="assets/img/logo-white.png" alt="Eden Park Motel">
        <p>36 Sandringham Road (entrance)<br>or 57 Walters Road, Sandringham, Auckland</p>
        <p><a href="tel:0800283336">0800 AT EDEN (0800 283 336)</a><br>
           <a href="tel:+6498464919">+64 9 846 4919</a><br>
           <a href="mailto:reservations@edenparkmotel.co.nz">reservations@edenparkmotel.co.nz</a></p>
      </div>
      <div class="footer__links">
        <h2>Quick Links</h2>
        <div class="footer__cols">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="rooms.html">Rooms</a></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="find-us.html">Find Us</a></li>
          </ul>
          <ul>
            <li><a href="corporate.html">Corporate Bookings</a></li>
            <li><a href="self-check-in.html">Self Check-In</a></li>
            <li><a href="blog.html">Blog</a></li>
            <li><a href="{BOOK}" rel="noopener">Book Now</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h2>Book Direct</h2>
        <ul>
          <li>Best rate guaranteed</li>
          <li>Free on-site parking</li>
          <li>Guaranteed late check-out</li>
        </ul>
        <p style="margin-top:22px"><a class="btn btn--gold btn--sm" href="{BOOK}" rel="noopener">Book Now</a></p>
      </div>
    </div>
    <div class="footer__bar">
      <span>&copy; 2026 Eden Park Motel. Boutique heritage accommodation in Auckland, New Zealand.</span>
      <span>Designed &amp; developed by Marketinn</span>
    </div>
  </div>
</footer>
<script src="assets/js/main.js"></script>
</body>
</html>
'''


def banner(h1, sub, img="banner.jpg"):
    return f'''<section class="banner">
  <div class="banner__media"><img src="assets/img/{img}" alt="" aria-hidden="true"></div>
  <div class="banner__scrim"></div>
  {SWOOSH}
  {RIDGE}
  <div class="wrap banner__inner">
    <h1>{h1}</h1>
    <p>{sub}</p>
  </div>
</section>
'''


def chips(items, cls="chip"):
    return '<ul class="chips">' + "".join(f'<li class="{cls}">{i}</li>' for i in items) + '</ul>'


def write(name, body):
    with open(os.path.join(OUT, name), "w", encoding="utf-8") as f:
        f.write(body)
    print("wrote", name)


# =====================================================================
# ROOM DATA — matches Booking.com listing exactly (Guideline §14)
# =====================================================================
ROOMS = [
    dict(slug="queen", name="Queen Studio Room", flag="Our best seller", featured=True,
         tag="Boutique comfort tailored for corporate travellers and event-goers.",
         copy="Our signature and most popular room choice. Designed with an optimal layout for up to two adults, "
              "the Queen Studio blends modern functionality with heritage charm. A mobility-accessible room is "
              "available on request.",
         feats=["17 m&sup2;", "1 large double bed", "Private kitchenette", "Ensuite bathroom",
                "Sky TV &amp; free Wi-Fi", "Mobility room available"], rate="161"),
    dict(slug="apartment", name="One-Bedroom Apartment", flag="", featured=False,
         tag="Spacious multi-zone living for longer stays and families.",
         copy="Apartment-style convenience on the city fringe. Spanning a generous 27 m&sup2;, this layout features a "
              "separated master bedroom alongside a comfortable living zone with a flexible sofa bed. Ideal for "
              "families, small groups, or executives needing extra space.",
         feats=["27 m&sup2;", "1 XL double + sofa bed", "Separate living room", "Private kitchenette",
                "Air conditioning", "Free Wi-Fi"], rate="185"),
    dict(slug="superking", name="Superking Room", flag="", featured=False,
         tag="Premium comfort with a spacious superking bed.",
         copy="For guests who appreciate a little more breathing room without compromising on efficiency. A highly "
              "polished, comfortable space with a premium superking bed, custom styling and plenty of natural light.",
         feats=["20 m&sup2;", "1 superking bed", "Private kitchenette", "Dedicated bathroom",
                "Air conditioning", "Free Wi-Fi"], rate="180"),
    dict(slug="exec-studio", name="Executive Studio", flag="", featured=False,
         tag="Expansive studio living with premium bedding.",
         copy="An open-plan studio focused on comfort and space. An extra-large double bed and a generous 25 m&sup2; "
              "footprint make it the ideal retreat after a day in the CBD or an event at the stadium.",
         feats=["25 m&sup2;", "1 XL double bed", "Open-plan layout", "Kitchenette &amp; ensuite",
                "Landmark views", "Free Wi-Fi"], rate="180"),
    dict(slug="family", name="Large Twin / Family Room", flag="Largest layout", featured=False,
         tag="Flexible bedding for groups, concerts and sports travel.",
         copy="Our largest layout, designed for groups travelling together for major sporting events, festivals or "
              "family getaways. At 36 m&sup2; it adapts to your needs, with a superking bed or two singles on "
              "request, plus a built-in dishwasher.",
         feats=["36 m&sup2;", "1 superking or 2 singles", "Kitchen + dishwasher", "Private bathroom",
                "Air conditioning", "Free Wi-Fi"], rate="209"),
    dict(slug="small", name="Small Studio Room", flag="Best value", featured=False,
         tag="Compact, efficient and budget-conscious.",
         copy="Perfect for solo business travellers or weekend visitors who want a cosy, efficient place to rest right "
              "next to the action. Great value on the ground floor, without cutting corners on air conditioning or a "
              "private kitchenette.",
         feats=["15 m&sup2;", "1 large double bed", "Ground floor", "Kitchenette &amp; ensuite",
                "Ironing &amp; wardrobe", "Free Wi-Fi"], rate="151"),
]

SURROUNDINGS = [
    ("sur-stadium.jpg", "Eden Park Stadium, directly behind the motel", "lg"),
    ("sur-villa.jpg", "The 1910 villa frontage", "sm"),
    ("sur-sign-stadium.jpg", "Two minutes to the gates", "sm"),
    ("sur-gates.jpg", "Eden Park entry gates", "wide"),
    ("sur-kingsland.jpg", "Kingsland caf&eacute;s &middot; 5 min walk", "wide"),
    ("sur-signage.jpg", "Parkside signage, Sandringham Road", "wide"),
]

# =====================================================================
# 1. HOME
# =====================================================================
schema = '''<script type="application/ld+json">
{"@context":"https://schema.org","@type":"Hotel","name":"Eden Park Motel",
"description":"Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland.",
"address":{"@type":"PostalAddress","streetAddress":"36 Sandringham Road","addressLocality":"Sandringham","addressRegion":"Auckland","postalCode":"1024","addressCountry":"NZ"},
"telephone":"+64-9-846-4919","priceRange":"NZD 151-209",
"aggregateRating":{"@type":"AggregateRating","ratingValue":"8.9","bestRating":"10","reviewCount":"475"},
"amenityFeature":[{"@type":"LocationFeatureSpecification","name":"Free parking","value":true},
{"@type":"LocationFeatureSpecification","name":"Free Wi-Fi","value":true},
{"@type":"LocationFeatureSpecification","name":"Kitchenette","value":true}]}
</script>'''

body = head("Boutique Heritage. The Ultimate Event Hub.",
            "A fully renovated 1910 villa two minutes' walk from Eden Park Stadium. Free parking, kitchenettes and "
            "genuine Kiwi hospitality. Book direct for the best rate.", "index.html", schema)

body += f'''<section class="hero">
  <div class="hero__media"><img src="assets/img/hero-villa.jpg" alt="The Eden Park Motel villa on Sandringham Road" fetchpriority="high"></div>
  <div class="hero__scrim"></div>
  {SWOOSH}
  {RIDGE}
  <div class="wrap hero__inner">
    <div class="hero__body">
      <p class="eyebrow eyebrow-light">A fully renovated 1910 villa</p>
      <h1>Boutique Heritage.<br>The Ultimate Event Hub.</h1>
      <p class="hero__sub">Experience the charm of our historic 1910 Villa, sitting directly at the doorstep of Eden
      Park. Whether you are arriving for a midweek corporate stay or a weekend stadium event, discover premier
      Auckland accommodation tailored for seamless comfort.</p>
      <div class="hero__actions">
        <a class="btn btn--gold" href="{BOOK}" rel="noopener">Book Direct &amp; Save</a>
        <a class="btn btn--ghost" href="rooms.html">Explore Our Rooms</a>
      </div>
      <p class="hero__note">
        <span class="dots" aria-hidden="true"><i class="is-on"></i><i></i><i></i></span>
        Villa exterior &rarr; Queen Studio interior &rarr; Eden Park at dusk
      </p>
    </div>
    <div class="pricecard">
      <div>
        <span class="pricecard__label">From</span>
        <span class="pricecard__rate">NZD 151 <small>/ night</small></span>
      </div>
      <a class="btn btn--gold btn--sm" href="{BOOK}" rel="noopener">Book now</a>
    </div>
  </div>
</section>

<div class="wrap">
  <div class="trust roofed">
    <div class="trust__grid">
      <div class="trust__lead">
        <strong>8.9<small>/10</small></strong>
        <span><b>Excellent</b><br>based on 475+ reviews</span>
      </div>
      <div class="trust__item"><span>Booking.com</span><strong>8.9<small>/10</small></strong></div>
      <div class="trust__item"><span>Location score</span><strong>9.6<small>/10</small></strong></div>
      <div class="trust__item"><span>Staff / Hospitality</span><strong>9.6<small>/10</small></strong></div>
      <a class="btn btn--ghost btn--sm" href="https://www.booking.com/" rel="noopener nofollow">Read Reviews</a>
    </div>
  </div>
</div>

<section class="section section--tint">
  <div class="wrap">
    <p class="eyebrow">The direct booking club</p>
    <h2>The Eden Park Advantage: Book Direct &amp; Unlock More</h2>
    <p class="lede">Skip the third-party booking fees and secure the best rate guaranteed. Every direct booking includes:</p>
    <div class="club">
      <span class="club__perk">{TICK} Complimentary on-site parking</span>
      <span class="club__perk">{TICK} Guaranteed late check-out</span>
      <a class="btn btn--gold" href="{BOOK}" rel="noopener">Check availability</a>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head center">
      <p class="eyebrow">Featured room</p>
      <h2>Designed for Comfort. Crafted for Convenience.</h2>
      <p class="lede" style="margin-inline:auto">With a boutique portfolio featuring our highly popular
      configurations, we offer modern amenities wrapped in historic character.</p>
    </div>
    <div class="room room--featured">
      <div class="room__media">
        <img src="assets/img/room-queen.jpg" alt="Queen Studio Room with bay windows and a queen bed">
        <span class="room__flag">5 units available</span>
      </div>
      <div>
        <h3>Queen Studio Room</h3>
        <p class="room__tag">Boutique comfort tailored for corporate travellers and event-goers.</p>
        <p>{ROOMS[0]["copy"]}</p>
        {chips(ROOMS[0]["feats"])}
        <div class="room__foot">
          <p class="room__price"><em>From</em>NZD 161 <small>/ night, incl. taxes</small></p>
          <a class="btn btn--navy" href="{BOOK}" rel="noopener">Check availability</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    <div class="section__head center">
      <p class="eyebrow">Who we host</p>
      <h2>Two Stays, One Perfect Location</h2>
    </div>
    <div class="grid grid--2">
      <article class="card card--accent">
        <p class="split__label">The midweek corporate</p>
        <h3>Smart business stays</h3>
        <p>Trade the noisy high-rises of the CBD for a peaceful, productive base. On the city fringe you get
        stress-free transit, free dedicated parking, fast Wi-Fi and a quiet night's sleep behind double glazing.</p>
        <p><a href="corporate.html">Corporate bookings &rarr;</a></p>
      </article>
      <article class="card card--gold">
        <p class="split__label">The weekend event-goer</p>
        <h3>Entertainment &amp; family visits</h3>
        <p>Skip post-event traffic and transport queues. A stone's throw from Eden Park Stadium, we are the choice for
        sports and music fans &mdash; and the local base for Auckland families hosting visiting relatives.</p>
        <p><a href="blog.html">Event-day guide &rarr;</a></p>
      </article>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="eyebrow">Location &amp; the local vibe</p>
      <h2>Where heritage meets urban culture</h2>
      <p class="lede">On the border of Auckland's most vibrant city-fringe suburbs. Walk to the craft beer and caf&eacute;
      scene around Kingsland Station, or stroll to the hidden gems along Dominion Road.</p>
    </div>
    <div class="grid grid--4">
      <div class="stat"><strong>2 min</strong><span>walk to Eden Park gates</span><em>Directly across the road</em></div>
      <div class="stat"><strong>2 min</strong><span>walk to Kingsland Station</span><em>Direct rail to Britomart</em></div>
      <div class="stat"><strong>10 min</strong><span>drive to Auckland CBD</span><em>20 min to the airport</em></div>
      <div class="stat"><strong>15 min</strong><span>walk to Westfield St Lukes</span><em>Or a 5 min drive</em></div>
    </div>
    <p style="margin-top:32px"><a class="btn btn--outline" href="find-us.html">View our local guide</a></p>
  </div>
</section>

<section class="section section--navy roofed">
  <div class="wrap">
    <blockquote class="quote">
      <p class="eyebrow eyebrow-light">What our guests say</p>
      <span class="quote__mark">&ldquo;</span>
      <p>An absolute gem of a location. Literally walked across the road to the game, and the free parking saved us a
      fortune compared to staying in the city centre. The room was immaculately clean and full of character.</p>
      <cite>&mdash; Leisure guest &middot; verified review</cite>
    </blockquote>
  </div>
</section>
'''
write("index.html", body + FOOT)

# =====================================================================
# 2. ROOMS
# =====================================================================
body = head("Rooms", "Six room types at Eden Park Motel: Queen Studio, One-Bedroom Apartment, Superking, Executive "
            "Studio, Family Room and Small Studio. From NZD 151 per night.", "rooms.html")
body += banner("Boutique stays. Heritage charm.",
               "Modern, fully renovated spaces inside a historic 1910 villa &mdash; private kitchenettes, "
               "modern amenities and the ultimate city-fringe location.")

tiles = ""
for i, (img, cap, size) in enumerate(SURROUNDINGS):
    tile = f'<figure class="tile tile--{size}"><img src="assets/img/{img}" alt="{html.unescape(cap)}" loading="lazy"><figcaption>{cap}</figcaption></figure>'
    tiles += tile

body += f'''<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="eyebrow">Ambience &amp; surroundings</p>
      <h2>Right across from the action</h2>
      <p class="lede">A fully renovated 1910 villa on a quiet, tree-lined street &mdash; with Eden Park Stadium directly
      behind us, Kingsland's caf&eacute;s a five-minute walk away, and free parking at your door.</p>
    </div>
    <div class="mosaic">
      <figure class="tile tile--lg"><img src="assets/img/sur-stadium.jpg" alt="Eden Park Stadium rising directly behind the motel roofs"><figcaption>Eden Park Stadium, directly behind the motel</figcaption></figure>
      <div class="mosaic__side">
        <figure class="tile tile--sm"><img src="assets/img/sur-villa.jpg" alt="The 1910 villa frontage" loading="lazy"><figcaption>The 1910 villa frontage</figcaption></figure>
        <figure class="tile tile--sm"><img src="assets/img/sur-sign-stadium.jpg" alt="Motel signage with Eden Park behind" loading="lazy"><figcaption>Two minutes to the gates</figcaption></figure>
      </div>
      <div class="mosaic__row">
        <figure class="tile tile--wide"><img src="assets/img/sur-gates.jpg" alt="Eden Park stadium entry gates" loading="lazy"><figcaption>Eden Park entry gates</figcaption></figure>
        <figure class="tile tile--wide"><img src="assets/img/sur-kingsland.jpg" alt="Kingsland cafe and shop frontages" loading="lazy"><figcaption>Kingsland caf&eacute;s &middot; 5 min walk</figcaption></figure>
        <figure class="tile tile--wide"><img src="assets/img/sur-signage.jpg" alt="Eden Park Motel roadside sign" loading="lazy"><figcaption>Parkside signage, Sandringham Road</figcaption></figure>
      </div>
    </div>
  </div>
</section>

<section class="section section--tint">
  <div class="wrap">
    <div class="section__head">
      <p class="eyebrow">Our rooms</p>
      <h2>Six ways to stay</h2>
      <p class="lede"><strong>Book direct</strong> to receive complimentary on-site parking and a guaranteed late
      check-out.</p>
    </div>
'''
for r in ROOMS:
    flag = f'<span class="room__flag">{r["flag"]}</span>' if r["flag"] else ""
    body += f'''    <article class="room{' room--featured' if r['featured'] else ''}" id="{r['slug']}" style="margin-bottom:var(--card-gap)">
      <div class="room__media">
        <img src="assets/img/room-{r['slug']}.jpg" alt="{r['name']} at Eden Park Motel" loading="lazy">
        {flag}
      </div>
      <div>
        <h3>{r['name']}</h3>
        <p class="room__tag">{r['tag']}</p>
        <p>{r['copy']}</p>
        {chips(r['feats'])}
        <div class="room__foot">
          <p class="room__price"><em>From</em>NZD {r['rate']} <small>/ night, incl. taxes</small></p>
          <a class="btn btn--navy" href="{BOOK}" rel="noopener">View availability &amp; book direct</a>
        </div>
      </div>
    </article>
'''
body += '''  </div>
</section>
'''
write("rooms.html", body + FOOT)

# =====================================================================
# 3. FAQ
# =====================================================================
FAQ = [
    ("Arrival, parking &amp; logistics", [
        ("Do you offer guest parking, and what does it cost?",
         "Yes. Complimentary on-site parking is included in your nightly rate for every guest. Unlike CBD properties "
         "that charge premium daily fees, your vehicle has a secure, designated space right here on the city fringe."),
        ("What are your check-in and check-out times?",
         "Check-in is from 2:00 PM and check-out is by 10:00 AM. Book direct and you also get a guaranteed late "
         "check-out, subject to availability."),
        ("Can I store luggage before check-in or after check-out?",
         "Yes. Arrive early for a meeting or drop your bags before heading across the road to an event &mdash; our "
         "team will store your luggage safely."),
    ]),
    ("Eden Park events &amp; transit", [
        ("How close are you to Eden Park Stadium?",
         "Two minutes' walk from the stadium gates. No event-day traffic, no road closures to navigate and no "
         "rideshare surge pricing &mdash; you simply walk across the street."),
        ("How do I reach Spark Arena or the Auckland CBD?",
         "Kingsland Train Station is a two-minute walk from our front door, with a direct rail link into Britomart "
         "Station in the heart of the CBD and easy pedestrian access to Spark Arena."),
    ]),
    ("Rooms &amp; amenities", [
        ("Are the rooms quiet on busy event nights?",
         "Yes. While we have preserved the character of our 1910 villa, the rooms are fully modernised with double "
         "glazing and blackout curtains to minimise street noise and light."),
        ("What is included in the kitchenettes?",
         "Every room has a private kitchenette with a refrigerator, microwave, toaster, electric kettle and essential "
         "kitchenware. The Large Twin / Family Room also has a built-in dishwasher."),
        ("How does self check-in work?",
         "On the morning of arrival we send a code by email and SMS. Use it to open the key box, collect your room "
         "key, and return the key to the same box when you leave. See the "
         "<a href=\"self-check-in.html\">self check-in guide</a> for the full process."),
    ]),
]

faq_schema_items = []
for _, qs in FAQ:
    for q, a in qs:
        clean_q = html.unescape(q).replace('"', "'")
        clean_a = html.unescape(a.replace('<a href="self-check-in.html">', '').replace('</a>', '')).replace('"', "'")
        faq_schema_items.append(
            '{"@type":"Question","name":"%s","acceptedAnswer":{"@type":"Answer","text":"%s"}}' % (clean_q, clean_a))
faq_schema = ('<script type="application/ld+json">{"@context":"https://schema.org","@type":"FAQPage",'
              '"mainEntity":[' + ",".join(faq_schema_items) + ']}</script>')

body = head("FAQ", "Answers on parking, check-in times, Eden Park event access, transit to the CBD, kitchenettes and "
            "self check-in at Eden Park Motel.", "faq.html", faq_schema)
body += banner("Everything you need to know",
               "Plan your stay with ease. Find answers on event-day access, arrival logistics, parking and our "
               "direct booking perks.")
body += '<section class="section"><div class="wrap">'
first = True
for group, qs in FAQ:
    body += f'<h2 style="margin-top:44px">{group}</h2><div style="margin-top:22px">'
    for q, a in qs:
        op = "true" if first else "false"
        icon = "&minus;" if first else "+"
        body += f'''<div class="acc" data-open="{op}">
  <button class="acc__btn" aria-expanded="{op}">{q}<span class="acc__icon">{icon}</span></button>
  <div class="acc__panel"><p>{a}</p></div>
</div>'''
        first = False
    body += '</div>'
body += '''</div></section>
<section class="section section--tint"><div class="wrap center">
  <h2>Still have a question?</h2>
  <p class="lede" style="margin-inline:auto">Call the team on <a href="tel:0800283336">0800 AT EDEN</a> or read the
  self check-in guide.</p>
  <p><a class="btn btn--outline" href="self-check-in.html">Self check-in guide</a></p>
</div></section>
'''
write("faq.html", body + FOOT)

# =====================================================================
# 4. FIND US
# =====================================================================
TRANSIT = [
    ("Eden Park Stadium", "Directly across the road. Inside the gates before the crowds line up.", "2-minute walk"),
    ("Kingsland Train Station", "Traffic-free rail link straight to Britomart Station in the CBD.", "2-minute walk"),
    ("Westfield St Lukes", "Major retail, department stores, supermarkets and essential services.", "15-min walk / 5-min drive"),
    ("Auckland CBD", "Rapid connectivity &mdash; and 20 minutes direct to Auckland Airport.", "10-minute drive"),
    ("Mt Eden, SkyCity, Mission Bay", "Our central fringe location puts greater Auckland within reach.", "Within 30 minutes"),
]
GEMS = [
    ("Kingsland caf&eacute; &amp; craft beer", "5-minute walk",
     "Independent espresso bars, brunch spots and craft beer pubs &mdash; ideal for a pre-event drink or a weekday meeting.",
     "sur-kingsland.jpg"),
    ("Dominion Road dining trail", "10-minute walk",
     "Auckland's legendary international food strip. Skip the tourist spots and find the hidden dumpling houses.",
     "sur-signage.jpg"),
    ("Gribblehirst Park", "Short stroll",
     "A quiet green space minutes away, perfect for a morning walk or a run before the day starts.",
     "sur-villa.jpg"),
]
body = head("Find Us", "36 Sandringham Road, Sandringham, Auckland. Two minutes' walk to Eden Park Stadium and "
            "Kingsland Station, with free on-site parking.", "find-us.html")
body += banner("At the centre of the action",
               "Eden Park Motel bridges historic neighbourhood charm and seamless urban connectivity. "
               "Here are our entry details, transit links and insider guide.")
body += f'''<section class="section"><div class="wrap">
  <div class="grid grid--2">
    <div class="card">
      <p class="eyebrow">Physical address</p>
      <h3>36 Sandringham Road <span class="muted">(main entrance)</span></h3>
      <p>or 57 Walters Road, Sandringham, Auckland 1024</p>
      <p class="muted">Vehicles enter from Sandringham Road. Pedestrian access via Walters Road puts you steps from
      the stadium gates.</p>
    </div>
    <div class="card" style="background:var(--navy);border-color:var(--navy);color:#fff">
      <p class="eyebrow eyebrow-light">The arrival advantage</p>
      <h3 style="color:#fff;font-family:'Playfair Display',serif;font-size:1.6rem">Free on-site parking</h3>
      <p style="color:var(--tint)">No expensive public parking or tight city structures. Every guest gets secure,
      complimentary parking at the property &mdash; included in your rate, on event days too.</p>
    </div>
  </div>

  <h2 style="margin-top:64px">Connected to Auckland</h2>
  <ul class="transit" style="margin-top:24px">
'''
for name, desc, dist in TRANSIT:
    body += f'''    <li>
      <span class="transit__txt"><strong>{name}</strong><span>{desc}</span></span>
      <span class="chip chip--navy">{dist}</span>
    </li>
'''
body += '''  </ul>
</div></section>

<section class="section section--tint"><div class="wrap">
  <div class="section__head">
    <p class="eyebrow">Hidden gems</p>
    <h2>Neighbourhood insider guide</h2>
  </div>
  <div class="grid grid--3">
'''
for name, dist, desc, img in GEMS:
    body += f'''    <article class="card" style="padding:0;overflow:hidden">
      <figure class="tile tile--wide" style="border-radius:0"><img src="assets/img/{img}" alt="{html.unescape(name)}" loading="lazy"><figcaption>{dist}</figcaption></figure>
      <div style="padding:var(--pad)">
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </article>
'''
body += '''  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="mapbox">
    <h2>Find us on the map</h2>
    <p class="muted">Interactive map showing the motel, Eden Park Stadium and Kingsland Station.<br>
    <span style="font-size:.85rem;color:var(--sky)">Developer note: embed a custom-styled Google Map here, lazy-loaded for Core Web Vitals.</span></p>
    <p><a class="btn btn--outline" href="https://maps.google.com/?q=36+Sandringham+Road+Auckland" rel="noopener">Open in Google Maps</a></p>
  </div>
</div></section>
'''
write("find-us.html", body + FOOT)

# =====================================================================
# 5. CORPORATE
# =====================================================================
body = head("Corporate Bookings", "Midweek corporate accommodation on the Auckland city fringe. Free parking, fibre "
            "Wi-Fi, quiet double-glazed rooms and preferred corporate rates.", "corporate.html")
body += banner("Midweek corporate comfort on the city fringe",
               "Trade clinical central-city hotels for a productive, character-rich base minutes from the CBD.")
body += f'''<section class="section"><div class="wrap">
  <div class="section__head">
    <p class="eyebrow">The midweek business advantage</p>
    <h2>Built for working travellers</h2>
  </div>
  <div class="grid grid--3">
    <article class="card card--accent">
      <h3>Quiet productivity</h3>
      <p>Our modernised villa keeps its historic exterior but adds double-glazed windows and quiet interiors &mdash;
      a peaceful night's rest and a distraction-free space to work.</p>
    </article>
    <article class="card card--accent">
      <h3>Complimentary parking</h3>
      <p>Skip the $30&ndash;$50 daily valet fees charged by CBD hotels. Every room includes free on-site parking, so
      you can drive out to regional meetings whenever you need.</p>
    </article>
    <article class="card card--accent">
      <h3>Digital connectivity</h3>
      <p>High-speed fibre Wi-Fi and direct-dial telephones in every room keep you connected to your team and clients
      throughout your stay.</p>
    </article>
  </div>
</div></section>

<section class="section section--tint"><div class="wrap">
  <div class="section__head"><p class="eyebrow">Transit efficiency</p><h2>Strategic location</h2></div>
  <div class="grid grid--3">
    <div class="stat"><strong>10 min</strong><span>drive to the CBD commercial hub</span></div>
    <div class="stat"><strong>20 min</strong><span>direct drive to Auckland Airport</span></div>
    <div class="stat"><strong>2 min</strong><span>walk to Kingsland Station rail</span></div>
  </div>
</div></section>

<section class="section"><div class="wrap">
  <div class="section__head">
    <p class="eyebrow">Preferred rates &amp; accounts</p>
    <h2>Streamline your business travel</h2>
  </div>
  <div class="grid grid--2">
    <article class="card"><h3>Guaranteed preferred rates</h3><p>Fixed, competitive pricing to protect your travel budget year-round.</p></article>
    <article class="card"><h3>Priority room allocation</h3><p>First access to our top-selling Queen Studio Rooms and executive units.</p></article>
    <article class="card"><h3>Flexible cancellation terms</h3><p>Booking flexibility built around rapidly changing corporate schedules.</p></article>
    <article class="card"><h3>Simplified invoicing</h3><p>Direct billing options and streamlined expense reporting for approved accounts.</p></article>
  </div>
</div></section>

<section class="section section--navy roofed"><div class="wrap center">
  <h2>Set up your preferred corporate rate</h2>
  <p class="lede" style="margin-inline:auto;color:var(--tint)">Setting up an account is immediate. Contact our
  management team directly to unlock your custom rate.</p>
  <p><a class="btn btn--gold" href="mailto:reservations@edenparkmotel.co.nz?subject=Corporate%20Account%20Inquiry">Email us about a corporate account</a></p>
</div></section>
'''
write("corporate.html", body + FOOT)

# =====================================================================
# 6. SELF CHECK-IN
# =====================================================================
STEPS = [
    ("1", "Receive your code",
     "On the morning of your arrival we send a secure check-in email and SMS to the contact details on your "
     "reservation, containing your code and room allocation."),
    ("2", "Park with ease",
     "Drive straight into the main entrance at 36 Sandringham Road and park in any designated guest space. No permits "
     "or dashboard tickets required."),
    ("3", "Collect your key",
     "Use your code to open the key box and collect your room key. This is a self-service motel &mdash; there are no "
     "card-based door locks. Please return the key to the same box when you leave."),
]
body = head("Self Check-In", "Contactless self check-in at Eden Park Motel: receive your code, park on site, and "
            "collect your room key from the key box. Ideal for late arrivals.", "self-check-in.html")
body += banner("Seamless arrival. Your schedule, your pace.",
               "Arriving late after a concert, checking in between meetings, or beating the event crowds? "
               "Our contactless check-in gets you into your room without queues.")
body += '<section class="section"><div class="wrap"><div class="section__head"><p class="eyebrow">How it works</p><h2>The three-step process</h2></div><div class="grid grid--3">'
for num, name, copy in STEPS:
    body += f'''<article class="card"><div class="step__num">{num}</div><h3>{name}</h3><p>{copy}</p></article>'''
body += '''</div></div></section>

<section class="section section--tint"><div class="wrap">
  <p class="eyebrow">Proactive peace of mind</p>
  <h2>Secure, reliable and monitored</h2>
  <p class="lede">Our renovated 1910 villa has enhanced perimeter lighting and active security measures. While
  check-in is contactless, on-site management and support are always available &mdash; call
  <a href="tel:0800283336">0800 AT EDEN</a> if you need a hand.</p>
</div></section>

<section class="section"><div class="wrap">
  <div class="section__head"><p class="eyebrow">Before you arrive</p><h2>Pre-arrival checklist</h2></div>
  <ul class="checklist">
    <li><i></i><span>Complete any pre-arrival registration forms sent by email.</span></li>
    <li><i></i><span>Save your check-in code on your mobile device.</span></li>
    <li><i></i><span>Enter via the main driveway at 36 Sandringham Road.</span></li>
    <li><i></i><span>Return your key to the key box when you check out.</span></li>
  </ul>
</div></section>

<section class="section section--navy roofed"><div class="wrap center">
  <h2>Ready for your stay?</h2>
  <p class="lede" style="margin-inline:auto;color:var(--tint)">Questions about your arrival, or need to update your
  contact details so we can send your code?</p>
  <p><a class="btn btn--gold" href="find-us.html">Contact the front desk</a></p>
</div></section>
'''
write("self-check-in.html", body + FOOT)

# =====================================================================
# 7. BLOG
# =====================================================================
POSTS = [
    ("events", "Events", "The ultimate Eden Park event guide: stress-free match and concert days",
     "Road closures, surge pricing and hour-long taxi queues turn a great night into an ordeal. Staying across the "
     "road means you walk away from the crowds and are home in minutes.",
     "accommodation near Eden Park Stadium &middot; Auckland event accommodation &middot; motels near Eden Park",
     "sur-gates.jpg"),
    ("food", "Food &amp; drink", "The Dominion Road foodie trail: neighbourhood hidden gems",
     "Auckland's iconic international food strip is a 10-minute stroll away &mdash; hand-pulled noodles, legendary "
     "dumpling houses, clay-pot dishes, laksa and Sichuan hot pot.",
     "Dominion Road restaurants &middot; places to eat Sandringham &middot; best dumplings Auckland",
     "sur-kingsland.jpg"),
    ("business", "Business", "Corporate proximity: the midweek guide to Sandringham and Kingsland",
     "Why the city fringe beats the CBD for business travel: free parking that saves $30&ndash;$50 a day, "
     "double-glazed quiet, fibre Wi-Fi and a direct rail link to Britomart.",
     "Auckland corporate accommodation &middot; business motels Auckland fringe &middot; hotel with free parking",
     "sur-villa.jpg"),
    ("heritage", "Heritage", "Living history: the heritage charm of our 1910 villa",
     "Edwardian craftsmanship meets 2026 comfort &mdash; timber framing and classic porchways outside; ensuites, "
     "kitchenettes, heat pumps and blackout insulation within.",
     "boutique accommodation Auckland &middot; heritage villa motel New Zealand &middot; historic stays Auckland",
     "sur-signage.jpg"),
    ("transit", "Transit", "Transit made easy: reaching Spark Arena and the CBD from Kingsland",
     "Skip the gridlock. Walk to Kingsland Station, ride the western line to Britomart, then stroll the waterfront to "
     "Spark Arena, Commercial Bay and the Viaduct.",
     "how to get to Spark Arena &middot; transport Kingsland station to CBD &middot; motels near Britomart",
     "sur-sign-stadium.jpg"),
]
CATS = [("all", "All"), ("events", "Events"), ("food", "Food &amp; drink"), ("business", "Business"),
        ("heritage", "Heritage"), ("transit", "Transit")]

body = head("Blog", "The insider guide to Auckland and Eden Park: event-day tips, transit hacks, local dining and the "
            "history of our 1910 villa.", "blog.html")
body += banner("The insider guide to Auckland &amp; Eden Park",
               "Local hidden gems, event-day navigation, transit hacks and the history behind our neighbourhood.")
body += f'''<section class="section"><div class="wrap">
  <div class="toolbar">
    <label class="search">
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="2"/>
        <path d="M13.5 13.5L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
      <span class="skip">Search articles</span>
      <input id="post-search" type="search" placeholder="Search articles, tips and guides&hellip;">
    </label>
    <label>
      <span class="skip">Sort articles</span>
      <select class="sortby"><option>Most recent</option><option>Oldest first</option></select>
    </label>
    <span class="toolbar__count" id="post-count">Showing {len(POSTS)} of {len(POSTS)} articles</span>
  </div>
  <ul class="filters">
'''
for key, label in CATS:
    pressed = "true" if key == "all" else "false"
    body += f'    <li><button class="filter" data-filter="{key}" aria-pressed="{pressed}">{label}</button></li>\n'
body += '  </ul>\n'
for cat, label, title, excerpt, seo, img in POSTS:
    body += f'''  <article class="post card" data-category="{cat}">
    <div class="post__media"><img src="assets/img/{img}" alt="" loading="lazy"></div>
    <div>
      <span class="post__cat">{label}</span>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <p class="post__seo">SEO focus: {seo}</p>
      <div class="post__foot">
        <span class="muted" style="font-size:.85rem">5 min read</span>
        <a class="btn btn--navy btn--sm" href="#">Read article</a>
      </div>
    </div>
  </article>
'''
body += '''  <nav class="pager" aria-label="Article pages">
    <span class="muted">Page 1 of 3 &middot; 5 articles per page</span>
    <div class="pager__pages">
      <span class="pager__step muted">&larr; Previous</span>
      <a href="#" aria-current="page">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a class="pager__step pager__step--next" href="#">Next &rarr;</a>
    </div>
  </nav>
</div></section>
'''
write("blog.html", body + FOOT)
print("\nBuild complete.")
