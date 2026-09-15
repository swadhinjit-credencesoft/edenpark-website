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
    "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, kitchenettes, double glazing and genuine Kiwi hospitality. Book direct for the best rate.",
  applicationName: "Eden Park Motel",
  authors: [{ name: "Eden Park Motel", url: SITE_URL }],
  creator: "Eden Park Motel",
  publisher: "Eden Park Motel",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  icons: {
    icon: "/assets/img/logo-navy.png",
    apple: "/assets/img/logo-navy.png",
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: SITE_URL,
    siteName: "Eden Park Motel",
    title: "Eden Park Motel | Boutique Heritage Accommodation Auckland",
    description:
      "Boutique heritage motel in a renovated 1910 villa, two minutes' walk from Eden Park Stadium, Auckland. Free parking, kitchenettes and genuine Kiwi hospitality.",
    images: [
      {
        url: "/assets/img/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Park Motel historic 1910 villa in Auckland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Park Motel | Boutique Accommodation Auckland",
    description:
      "Boutique heritage motel 2 minutes' walk from Eden Park Stadium, Auckland. Free parking and kitchenettes.",
    images: ["/assets/img/hero-villa.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
