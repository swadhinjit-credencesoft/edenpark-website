import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import { SITE_URL, SITE_METADATA } from "@/config/site";
import "../styles/globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eden Park Motel | Boutique Heritage Accommodation Auckland",
    template: "%s | Eden Park Motel Auckland",
  },
  description:
    "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, kitchenettes and genuine Kiwi hospitality. Book direct for the best rate.",
  icons: {
    icon: "/assets/img/logo-navy.png",
  },
  openGraph: {
    type: "website",
    siteName: "Eden Park Motel",
    images: ["/assets/img/sur-stadium.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ" className={`${inter.variable} ${playfair.variable}`}>
      {/* suppressHydrationWarning: browser extensions inject attributes onto <body> */}
      <body suppressHydrationWarning>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
