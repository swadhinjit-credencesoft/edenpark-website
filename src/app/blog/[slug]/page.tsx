import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Banner } from "@/components/common";
import { SITE_URL } from "@/config";
import { POSTS } from "@/data/posts";
import {
  generateBreadcrumbSchema,
  generatePostSchema,
} from "@/lib/schema";

export const dynamicParams = false;

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Article not found" };
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const title = `${post.title} | Eden Park Motel`;
  const description = post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Eden Park Motel",
      images: [
        {
          url: `${SITE_URL}/assets/img/${post.img}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_NZ",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/assets/img/${post.img}`],
    },
  };
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
    return null;
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const relativePosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.title, url },
  ]);
  const postSchema = generatePostSchema({ post, url });

  return (
    <>
      <Banner
        h1="Insider Guide & Local Auckland Blog"
        sub="One neighbourhood, endless stories — tips, guides and local perspective from Eden Park Motel."
      />

      <section className="section">
        <div className="wrap article">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>

          <span className="post__cat">{post.label}</span>
          <h1 className="article__title">{post.title}</h1>
          <p className="article__meta">
            {post.date ? `${post.date} · ` : ""}
            {post.minutes}
          </p>

          <div className="article__hero">
            <Image
              src={`/assets/img/${post.img}`}
              alt={post.title}
              fill
              priority
              sizes="(max-width: 900px) 100vw, 900px"
            />
          </div>

          <div className="article__body">
            {post.content.map((section, index) => (
              <section className="article__block" key={index}>
                {section.heading ? <h2>{section.heading}</h2> : null}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>

          <div className="article__foot">
            <a className="btn btn--navy btn--sm" href="#post-search">
              ← Back to all articles
            </a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <h2 className="section__head">More from the blog</h2>
          <div className="grid grid--3">
            {relativePosts.map((p) => (
              <Link key={p.slug} className="post card post--link" href={`/blog/${p.slug}`}>
                <div className="post__media">
                  <Image
                    src={`/assets/img/${p.img}`}
                    alt=""
                    fill
                    sizes="(max-width: 900px) 100vw, 300px"
                  />
                </div>
                <div>
                  <span className="post__cat">{p.label}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <div className="post__foot">
                    <span className="muted" style={{ fontSize: ".85rem" }}>
                      {p.date ? `${p.date} · ` : ""}
                      {p.minutes}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}