/**
 * WatchMyRate (WMR) STAAH rate comparison widget configuration.
 */

export const WMR_CONFIG = {
  accessKey:
    process.env.NEXT_PUBLIC_WMR_ACCESS_KEY ||
    "NzZiNjU3MWJiYTVkYTgyZDVlYjJkM2NhNzQyNmY2Yzg6fEA3NDk2",
  domainName: process.env.NEXT_PUBLIC_WMR_DOMAIN_NAME || "homes",
  currency: process.env.NEXT_PUBLIC_WMR_CURRENCY || "NZD",
  popupStatus: "Y",
  minNights: "",
  bgColorCode: "#24bc2e",
  fontColorCode: "#000000",
  colorCodeData: "#24bc2e,#000000",
  scriptUrl: "https://watchmyrate.com/watchMyRateStaahMax/watch-my-rate-widget-tab.js",
  styleUrl: "https://watchmyrate.com/watchMyRateStaahMax/watch-my-rate-widget-tab.css",
} as const;
