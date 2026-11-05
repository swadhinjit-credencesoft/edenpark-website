"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Session-scoped notice shown when online bookings are unavailable. */
const STORAGE_KEY = "epm-booking-notice-dismissed";

const FREEPHONE_LABEL = "0800 283 336";
const FREEPHONE_HREF = "tel:0800283336";
const INTL_LABEL = "+64 9 846 4619";
const INTL_HREF = "tel:+6498464619";

function CallIcon() {
  return (
    <svg
      className="notice__phone-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

/** Modal explaining that online bookings are temporarily unavailable, with call CTAs. */
export default function BookingNotice() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const dismiss = useCallback(() => {
    setOpen(false);
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* Storage may be blocked (private mode); the notice still closes. */
    }
  }, []);

  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (dismissed) return;
    const timer = window.setTimeout(() => setOpen(true), 700);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    document.body.classList.add("notice-open");
    document.documentElement.classList.add("notice-open");
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.classList.remove("notice-open");
      document.documentElement.classList.remove("notice-open");
      previouslyFocused?.focus?.();
    };
  }, [open, dismiss]);

  if (!open) return null;

  return (
    <div
      className="notice"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) dismiss();
      }}
    >
      <div
        ref={dialogRef}
        className="notice__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-notice-title"
        aria-describedby="booking-notice-body"
      >
        <button
          ref={closeRef}
          type="button"
          className="notice__close"
          aria-label="Close booking notice"
          onClick={dismiss}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="notice__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </div>
        <h2 id="booking-notice-title">Online Bookings Temporarily Unavailable</h2>
        <p id="booking-notice-body">
          We are currently experiencing technical difficulties with our online booking system.
          Don&apos;t worry, your room is still a phone call away!
        </p>
        <p>To secure your booking and keep our Best Rate Guarantee, please call us directly:</p>
        <div className="notice__phones">
          <a className="btn btn--navy" href={FREEPHONE_HREF}>
            <CallIcon />
            {FREEPHONE_LABEL}
          </a>
          <span className="notice__or" aria-hidden="true">
            or
          </span>
          <a className="btn btn--outline" href={INTL_HREF}>
            <CallIcon />
            {INTL_LABEL}
          </a>
        </div>
        <p className="notice__signoff">Our team is ready to help you reserve your stay.</p>
      </div>
    </div>
  );
}