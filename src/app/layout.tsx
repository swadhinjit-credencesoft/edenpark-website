import type { Metadata, Viewport } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/data/site";
import "../styles/globals.scss";

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
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning: browser extensions inject attributes (e.g. cz-shortcut-listen) onto <body>; silence the resulting one-level-deep hydration warning */}
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
