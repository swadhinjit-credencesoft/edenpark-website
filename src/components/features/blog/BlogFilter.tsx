"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CATS, POSTS } from "@/data/posts";

/** Sort orders for the list view. */
const ORDERS: { key: "new" | "old"; label: string }[] = [
  { key: "new", label: "Most recent" },
  { key: "old", label: "Oldest first" },
];

/** Blog toolbar + posts — client-side search, category filter and sort. */
export default function BlogFilter() {
  const [term, setTerm] = useState("");
  const [cat, setCat] = useState("all");
  const [order, setOrder] = useState<"new" | "old">("new");

  const shown = useMemo(() => {
    const t = term.trim().toLowerCase();
    const posts = POSTS.filter((post) => {
      const matchesCat = cat === "all" || post.category === cat;
      const body = post.content
        .map((block) => `${block.heading ?? ""} ${block.paragraphs.join(" ")}`)
        .join(" ");
      const haystack = `${post.title} ${post.excerpt} ${post.seo} ${body}`.toLowerCase();
      const matchesTerm = !t || haystack.includes(t);
      return matchesCat && matchesTerm;
    });
    return [...posts].sort((a, b) => {
      const da = a.date ? new Date(a.date).getTime() : 0;
      const db = b.date ? new Date(b.date).getTime() : 0;
      return order === "new" ? db - da : da - db;
    });
  }, [term, cat, order]);

  if (shown.length === 0) {
    return (
      <div className="toolbar__empty">
        <p className="lede">No articles match your search.</p>
        <button type="button" className="btn btn--navy" onClick={() => { setTerm(""); setCat("all"); }}>
          Clear filters
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="toolbar">
        <label className="search">
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="2" />
            <path d="M13.5 13.5L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span className="skip">Search articles</span>
          <input
            id="post-search"
            type="search"
            placeholder="Search articles, tips and guides…"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
        <label>
          <span className="skip">Sort articles</span>
          <select
            className="sortby"
            value={order}
            onChange={(e) => setOrder(e.target.value as "new" | "old")}
          >
            {ORDERS.map((orderOption) => (
              <option key={orderOption.key} value={orderOption.key}>
                {orderOption.label}
              </option>
            ))}
          </select>
        </label>
        <span className="toolbar__count" id="post-count">
          Showing {shown.length} of {POSTS.length} articles
        </span>
      </div>
      <ul className="filters">
        {CATS.map((category) => (
          <li key={category.key}>
            <button
              className="filter"
              data-filter={category.key}
              aria-pressed={cat === category.key}
              onClick={() => setCat(category.key)}
            >
              {category.label}
            </button>
          </li>
        ))}
      </ul>
      {shown.map((post) => (
        <article className="post card" data-category={post.category} key={post.slug}>
          <div className="post__media">
            <Image
              src={`/assets/img/${post.img}`}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 300px"
            />
          </div>
          <div>
            <span className="post__cat">{post.label}</span>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <div className="post__foot">
              <span className="muted" style={{ fontSize: ".85rem" }}>
                {post.date ? `${post.date} · ` : ""}
                {post.minutes}
              </span>
              <Link className="btn btn--navy btn--sm" href={`/blog/${post.slug}`}>
                Read article
              </Link>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
