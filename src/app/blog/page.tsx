import type { Metadata } from "next";
import { Banner } from "@/components/common";
import { BlogFilter } from "@/components/features/blog";
import { SITE_URL } from "@/config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "The insider guide to Auckland and Eden Park: event-day tips, transit hacks, local dining and the history of our 1910 villa.",
  alternates: { canonical: SITE_URL + "/blog" },
};

export default function Blog() {
  return (
    <>
      <Banner
        h1="The insider guide to Auckland & Eden Park"
        sub="Local hidden gems, event-day navigation, transit hacks and the history behind our neighbourhood."
      />

      <section className="section">
        <div className="wrap">
          <BlogFilter />
        </div>
      </section>
    </>
  );
}
