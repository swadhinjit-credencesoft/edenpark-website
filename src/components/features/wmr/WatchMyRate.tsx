"use client";

import Script from "next/script";
import { WMR_CONFIG } from "@/config/wmr";

/**
 * WatchMyRate (WMR) Rate Comparison Widget
 * Integrates the official STAAH WatchMyRate rate comparison widget tab for Eden Park Motel.
 */
declare global {
  interface Window {
    getChannelRates?: () => void;
  }
}

export default function WatchMyRate() {
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
      <link rel="stylesheet" href={WMR_CONFIG.styleUrl} />

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
