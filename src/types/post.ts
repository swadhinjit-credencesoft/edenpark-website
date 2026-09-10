/**
 * Blog post and category domain types.
 */

export interface Post {
  category: string;
  label: string;
  title: string;
  excerpt: string;
  seo: string;
  img: string;
  minutes: string;
}

export interface Category {
  key: string;
  label: string;
}
