/**
 * FAQ Q&A entity and group models.
 */

export interface FaqLink {
  href: string;
  label: string;
}

export interface FaqItem {
  q: string;
  /** Answer text, optionally split around an inline link. */
  a: string;
  /** Optional inline link rendered after `a`. */
  link?: FaqLink;
  /** Optional text rendered after the inline link. */
  after?: string;
}

export interface FaqGroup {
  title: string;
  items: FaqItem[];
}
