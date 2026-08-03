import Link from "next/link";
import { BOOK, EMAIL, EMAIL_HREF, PHONE, PHONE_HREF, PHONE_INTL, PHONE_INTL_HREF } from "@/data/site";

/** Site-wide footer with quick links, contact and booking CTA. */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__grid">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo-white.png" alt="Eden Park Motel" />
            <p>
              36 Sandringham Road (entrance)
              <br />
              or 57 Walters Road, Sandringham, Auckland
            </p>
            <p>
              <a href={PHONE_HREF}>{PHONE}</a>
              <br />
              <a href={PHONE_INTL_HREF}>{PHONE_INTL}</a>
              <br />
              <a href={EMAIL_HREF}>{EMAIL}</a>
            </p>
          </div>
          <div className="footer__links">
            <h2>Quick Links</h2>
            <div className="footer__cols">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/rooms">Rooms</Link></li>
                <li><Link href="/faq">FAQ</Link></li>
                <li><Link href="/find-us">Find Us</Link></li>
              </ul>
              <ul>
                <li><Link href="/corporate">Corporate Bookings</Link></li>
                <li><Link href="/self-check-in">Self Check-In</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li>
                  <a href={BOOK} rel="noopener">
                    Book Now
                  </a>
                </li>
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
            <p style={{ marginTop: 22 }}>
              <a className="btn btn--gold btn--sm" href={BOOK} rel="noopener">
                Book Now
              </a>
            </p>
          </div>
        </div>
        <div className="footer__bar">
          <span>&copy; 2026 Eden Park Motel. Boutique heritage accommodation in Auckland, New Zealand.</span>
          <span>Designed &amp; developed by Marketinn</span>
        </div>
      </div>
    </footer>
  );
}
