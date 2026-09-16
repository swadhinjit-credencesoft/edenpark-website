"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { CATS, POSTS } from "@/data/posts";

/** Blog toolbar + posts — client-side search and category filter. */
export default function BlogFilter() {
  const [term, setTerm] = useState("");
  const [cat, setCat] = useState("all");

  const shown = useMemo(() => {
    const t = term.trim().toLowerCase();
    return POSTS.filter((post) => {
      const matchesCat = cat === "all" || post.category === cat;
      const haystack = `${post.title} ${post.excerpt} ${post.seo}`.toLowerCase();
      const matchesTerm = !t || haystack.includes(t);
      return matchesCat && matchesTerm;
    });
  }, [term, cat]);

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
          <select className="sortby" defaultValue="Most recent">
            <option>Most recent</option>
            <option>Oldest first</option>
          </select>
        </label>
        <span className="toolbar__count" id="post-count">
          Showing {shown.length} of {POSTS.length} articles
        </span>
      </div>
      <ul className="filters">
        {CATS.map((c) => (
          <li key={c.key}>
            <button
              className="filter"
              data-filter={c.key}
              aria-pressed={cat === c.key}
              onClick={() => setCat(c.key)}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
      {shown.map((post) => (
        <article className="post card" data-category={post.category} key={post.title}>
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
            <p className="post__seo">SEO focus: {post.seo}</p>
            <div className="post__foot">
              <span className="muted" style={{ fontSize: ".85rem" }}>
                {post.date ? `${post.date} · ` : ""}
                {post.minutes}
              </span>
              <a className="btn btn--navy btn--sm" href="#">
                Read article
              </a>
            </div>
          </div>
        </article>
      ))}
      <nav className="pager" aria-label="Article pages">
        <span className="muted">Page 1 of 3 · 5 articles per page</span>
        <div className="pager__pages">
          <span className="pager__step muted">← Previous</span>
          <a href="#" aria-current="page">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a className="pager__step pager__step--next" href="#">
            Next →
          </a>
        </div>
      </nav>
    </>
  );
}
