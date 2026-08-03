"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BOOK, NAV, QUICK_LINKS } from "@/data/site";

/** Masthead with sticky gradient, quick links and mobile nav toggle. */
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const current = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href;

  const toggle = () => setOpen((o) => !o);
  const close = () => setOpen(false);

  return (
    <header className="masthead">
      <div className="wrap masthead__inner">
        <button
          className="navtoggle"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={toggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link className="masthead__logo" href="/" onClick={close} aria-label="Eden Park Motel home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/img/logo-white.png" alt="Eden Park Motel" />
        </Link>
        <div className="masthead__quick">
          {QUICK_LINKS.map((l) => (
            <Link key={l.href} href={l.href} aria-current={current(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </div>
        <nav id="primary-nav" className="nav" data-open={open ? "true" : "false"} aria-label="Main">
          {NAV.map((l) => (
            <Link key={l.href} href={l.href} onClick={close} aria-current={current(l.href) ? "page" : undefined}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a className="btn btn--book" href={BOOK} rel="noopener" target="_blank">
          Book now
        </a>
      </div>
    </header>
  );
}
