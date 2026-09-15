import type { Metadata } from "next";
import { Banner } from "@/components/common";
import { BlogFilter } from "@/components/features/blog";
import { SITE_URL } from "@/config";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Insider Guide & Local Auckland Blog",
  description:
    "The insider guide to Auckland and Eden Park: event-day tips, transit hacks, Kingsland dining spots, and the heritage history of our 1910 villa.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Insider Guide & Local Auckland Blog | Eden Park Motel",
    description:
      "Local hidden gems, event-day navigation, transit hacks and the history behind our Auckland neighbourhood.",
    url: `${SITE_URL}/blog`,
    siteName: "Eden Park Motel",
    images: [
      {
        url: "/assets/img/sur-kingsland.jpg",
        width: 1200,
        height: 630,
        alt: "Kingsland Auckland dining guide near Eden Park Motel",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Insider Guide & Blog | Eden Park Motel Auckland",
    description:
      "Insider guide to Eden Park events, Kingsland cafes, Dominion Rd food & transit tips.",
    images: ["/assets/img/sur-kingsland.jpg"],
  },
};

export default function Blog() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: `${SITE_URL}/blog` },
  ]);

  return (
    <>
      <Banner
        h1="The insider guide to Auckland & Eden Park"
        sub="Local hidden gems, event-day navigation, transit hacks and the history behind our neighbourhood."
      />

      <section className="section">
        <div className="wrap">
          <BlogFilter />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
