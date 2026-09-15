import type { Metadata } from "next";
import { Banner } from "@/components/common";
import { FaqAccordion } from "@/components/features/faq";
import { FAQ } from "@/data/faq";
import { PHONE, PHONE_HREF, SITE_URL } from "@/config";
import { generateFaqSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers on free parking, check-in times, Eden Park event access, transport to Auckland CBD, kitchenettes and contactless self check-in.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Frequently Asked Questions | Eden Park Motel Auckland",
    description:
      "All your questions answered: free parking, event-day access, transit to CBD, and contactless arrival.",
    url: `${SITE_URL}/faq`,
    siteName: "Eden Park Motel",
    images: [
      {
        url: "/assets/img/hero-villa.jpg",
        width: 1200,
        height: 630,
        alt: "Eden Park Motel FAQ Auckland",
      },
    ],
    locale: "en_NZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Eden Park Motel Auckland",
    description:
      "Frequently asked questions about Eden Park Motel: free parking, check-in, event access & kitchenettes.",
    images: ["/assets/img/hero-villa.jpg"],
  },
};

export default function Faq() {
  const faqSchema = generateFaqSchema(FAQ);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "FAQ", url: `${SITE_URL}/faq` },
  ]);
  return (
    <>
      <Banner
        h1="Everything you need to know"
        sub="Plan your stay with ease. Find answers on event-day access, arrival logistics, parking and our direct booking perks."
      />

      <section className="section">
        <div className="wrap">
          <FaqAccordion groups={FAQ} />
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap center">
          <h2>Still have a question?</h2>
          <p className="lede" style={{ marginInline: "auto" }}>
            Call the team on <a href={PHONE_HREF}>{PHONE}</a> or read the self check-in guide.
          </p>
          <p>
            <a className="btn btn--outline" href="/self-check-in">
              Self check-in guide
            </a>
          </p>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </>
  );
}
