"use client";

import { useEffect } from "react";
import Script from "next/script";
import { WMR_CONFIG } from "@/config/wmr";
import { BOOKING_CONFIG } from "@/config/booking";

/**
 * WatchMyRate (WMR) Rate Comparison Widget
 * Integrates the official STAAH WatchMyRate rate comparison widget tab for Eden Park Motel.
 */
declare global {
  interface Window {
    getChannelRates?: () => void;
  }
}

function formatIsoDate(dStr?: string | null): string | null {
  if (!dStr) return null;
  const trimmed = decodeURIComponent(dStr).trim();
  // If already YYYY-MM-DD
  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) return trimmed;
  // Match "20 Nov 2026"
  const parts = trimmed.split(/\s+/);
  if (parts.length === 3) {
    const [d, m, y] = parts;
    const months: Record<string, string> = {
      Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06",
      Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12",
    };
    const mm = months[m.slice(0, 3)];
    if (mm && /^\d+$/.test(d) && /^\d{4}$/.test(y)) {
      return `${y}-${mm}-${d.padStart(2, "0")}`;
    }
  }
  return null;
}

function resolveBookingUrl(rawHref?: string | null): string {
  const base = BOOKING_CONFIG.baseUrl;
  if (!rawHref) return base;
  try {
    const parsed = new URL(rawHref, window.location.href);
    const checkIn = formatIsoDate(parsed.searchParams.get("checkIn"));
    const checkOut = formatIsoDate(parsed.searchParams.get("checkOut"));
    if (checkIn && checkOut) {
      return `${base}&checkIn=${checkIn}&checkOut=${checkOut}`;
    }
  } catch {
    // fallback to canonical base
  }
  return base;
}

export default function WatchMyRate() {
  useEffect(() => {
    // 1. Synchronize case-sensitive vendor data attribute
    const input = document.getElementById("access_key");
    if (input) {
      input.setAttribute("data-WMR-colorCode", WMR_CONFIG.colorCodeData);
    }

    // 2. Proxy window.open to redirect broken staahmax 503 links to Eden Park SwiftBook
    const originalOpen = window.open;
    window.open = function (url?: string | URL, target?: string, features?: string) {
      if (
        typeof url === "string" &&
        (url.includes("staahmax.staah.net") || url.includes("propertyId=NzQ5Ng=="))
      ) {
        const resolved = resolveBookingUrl(url);
        return originalOpen.call(window, resolved, target || "_blank", features || "noopener,noreferrer");
      }
      return originalOpen.apply(window, [url, target, features] as [string | URL | undefined, string | undefined, string | undefined]);
    };

    // 3. Rewrite any anchor tags rendered by STAAH script inside #watchMyRate
    const rewriteVendorLinks = () => {
      const modal = document.getElementById("watchMyRate");
      if (!modal) return;
      const links = modal.querySelectorAll<HTMLAnchorElement>("a");
      links.forEach((a) => {
        const href = a.getAttribute("href") || "";
        if (href.includes("staahmax.staah.net") || href.includes("propertyId=NzQ5Ng==")) {
          a.href = resolveBookingUrl(href);
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        }
      });
    };

    // 4. MutationObserver to automatically rewrite "BOOK DIRECT & SAVE >" when modal renders
    const modal = document.getElementById("watchMyRate");
    let observer: MutationObserver | null = null;
    if (modal) {
      observer = new MutationObserver(() => rewriteVendorLinks());
      observer.observe(modal, { childList: true, subtree: true, attributes: true });
    }

    // 5. Global capture click listener as foolproof safety net
    const handleCaptureClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a, button");
      if (!target) return;
      const href = target.getAttribute("href") || target.getAttribute("data-href") || "";
      const text = target.textContent || "";
      if (
        href.includes("staahmax.staah.net") ||
        href.includes("propertyId=NzQ5Ng==") ||
        (text.toLowerCase().includes("book direct") && modal && modal.contains(target))
      ) {
        e.preventDefault();
        e.stopPropagation();
        const targetUrl = resolveBookingUrl(href);
        originalOpen.call(window, targetUrl, "_blank", "noopener,noreferrer");
      }
    };

    document.addEventListener("click", handleCaptureClick, true);

    return () => {
      window.open = originalOpen;
      if (observer) observer.disconnect();
      document.removeEventListener("click", handleCaptureClick, true);
    };
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  const openModal = () => {
    const modal = document.getElementById("watchMyRate");
    if (!modal) return;

    // Already open (vendor handler may run first) — re-open after close only.
    if (modal.style.display === "block" && modal.style.visibility === "visible") return;

    // Fetch rates via the vendor script if it has loaded.
    if (typeof window.getChannelRates === "function") {
      window.getChannelRates();
    }

    if (!document.getElementById("fadeBackground")) {
      const backDrop = document.createElement("div");
      backDrop.className = "rateBackDrop rateModalFade";
      backDrop.id = "fadeBackground";
      document.body.appendChild(backDrop);
    }
    if (!modal.classList.contains("rateModalFadein")) {
      setTimeout(() => modal.classList.add("rateModalFadein"), 50);
    }
    modal.style.visibility = "visible";
    modal.style.display = "block";
    const back = document.getElementById("fadeBackground");
    if (back) back.className = "rateBackDrop rateModalFade rateModalFadein";
    document.body.classList.add("wmrwidgetmodal");
  };

  return (
    <>
      {/* Official WatchMyRate Widget Stylesheet */}
      {/* eslint-disable-next-line @next/next/no-css-tags */}
      <link rel="stylesheet" type="text/css" href={WMR_CONFIG.styleUrl} />

      {/* Trigger Button */}
      <a
        id="rateModalBtn"
        className="rateModalBtn"
        data-modal-target="watchMyRate"
        role="button"
        tabIndex={0}
        aria-label="Your Deal Today — Compare Direct Rates"
        onKeyDown={handleKeyDown}
        onClick={openModal}
        style={{ cursor: "pointer" }}
      >
        Your Deal Today
      </a>

      {/* Modal Container */}
      <div className="rateModal rateModalFade" id="watchMyRate" />

      {/* Configuration hidden inputs required by WatchMyRate vendor script */}
      <input
        type="hidden"
        name="access_key"
        id="access_key"
        value={WMR_CONFIG.accessKey}
        data-wmr-colorcode={WMR_CONFIG.colorCodeData}
      />

      <input
        type="hidden"
        name="wmr_currency"
        id="wmr_currency"
        value=""
      />

      <input
        type="hidden"
        name="currency"
        id="currency"
        value={WMR_CONFIG.currency}
      />

      <input
        type="hidden"
        name="wmr_popup_status"
        id="wmr_popup_status"
        value={WMR_CONFIG.popupStatus}
      />

      <input
        type="hidden"
        name="wmr_min_nights"
        id="wmr_min_nights"
        value={WMR_CONFIG.minNights}
      />

      <input
        type="hidden"
        name="wmrbgcolorcode1"
        id="wmrbgcolorcode1"
        value={WMR_CONFIG.bgColorCode}
      />

      <input
        type="hidden"
        name="wmrfontcolorcode1"
        id="wmrfontcolorcode1"
        value={WMR_CONFIG.fontColorCode}
      />

      <input
        type="hidden"
        name="domain_name"
        id="domain_name"
        value={WMR_CONFIG.domainName}
      />

      {/* Official WatchMyRate Script */}
      <Script
        src={WMR_CONFIG.scriptUrl}
        strategy="afterInteractive"
      />
    </>
  );
}
