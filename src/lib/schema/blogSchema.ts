import { SITE_URL } from "@/config/site";
import type { Post } from "@/types/post";

/**
 * Generate Schema.org ItemList of BlogPosting entities for the Blog page.
 * datePublished is required for Google to display Article/BlogPosting rich results.
 */
export function generateBlogSchema(posts: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Eden Park Motel — Insider Guide & Local Auckland Blog",
    description:
      "Local hidden gems, event-day navigation, transit hacks and the history behind our Auckland neighbourhood.",
    numberOfItems: posts.length,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        "@id": `${SITE_URL}/blog#${post.category}`,
        headline: post.title,
        description: post.excerpt,
        keywords: post.seo,
        image: `${SITE_URL}/assets/img/${post.img}`,
        datePublished: post.date,
        dateModified: post.date,
        inLanguage: "en-NZ",
        author: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Eden Park Motel",
        },
        publisher: {
          "@type": "Organization",
          "@id": `${SITE_URL}/#organization`,
          name: "Eden Park Motel",
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog` },
      },
    })),
  };
}