import type { Metadata } from "next";
import Banner from "@/components/Banner";
import FaqAccordion from "@/components/FaqAccordion";
import { FAQ, faqAnswerText } from "@/data/faq";
import { PHONE, PHONE_HREF, SITE_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers on parking, check-in times, Eden Park event access, transit to the CBD, kitchenettes and self check-in at Eden Park Motel.",
  alternates: { canonical: SITE_URL + "/faq" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.flatMap((g) => g.items).map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
  })),
};

export default function Faq() {
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
    </>
  );
}
