import type { FaqGroup } from "@/types/faq";
import { faqAnswerText } from "@/data/faq";

/**
 * Generate Schema.org FAQPage JSON-LD object.
 *
 * @param groups - Array of FAQ categories and questions
 * @returns FAQPage schema object
 */
export function generateFaqSchema(groups: FaqGroup[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: groups.flatMap((g) => g.items).map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item),
      },
    })),
  };
}
