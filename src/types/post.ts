/**
 * Blog post and category domain types.
 */

/** One block of article body copy — an optional heading plus paragraphs. */
export interface PostSection {
  heading?: string;
  paragraphs: string[];
}

export interface Post {
  slug: string;
  category: string;
  label: string;
  title: string;
  excerpt: string;
  seo: string;
  img: string;
  minutes: string;
  date?: string;
  content: PostSection[];
}

export interface Category {
  key: string;
  label: string;
}
