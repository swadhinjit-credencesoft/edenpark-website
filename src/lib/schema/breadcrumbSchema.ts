import { SITE_URL } from "@/config/site";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generate Schema.org BreadcrumbList structured data.
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const fullItems: BreadcrumbItem[] = [
    { name: "Home", url: `${SITE_URL}/` },
    ...items,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
