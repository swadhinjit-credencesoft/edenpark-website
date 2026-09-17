import { SITE_URL } from "@/config/site";
import type { Post } from "@/types/post";

interface PostSchemaArgs {
  post: Post;
  url: string;
}

/**
 * Generate a single Schema.org BlogPosting entity for an individual article page.
 */
export function generatePostSchema({ post, url }: PostSchemaArgs) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
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
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

/**
 * Generate Schema.org ItemList of BlogPosting entities for the Blog index page.
 * Each entry points at the individual article URL on the same site.
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
    itemListElement: posts.map((post, index) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "BlogPosting",
          "@id": url,
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
          mainEntityOfPage: { "@type": "WebPage", "@id": url },
        },
      };
    }),
  };
}