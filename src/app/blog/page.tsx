import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on changelog automation, release notes best practices, and developer tools from the ShipLog team.",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Insights on changelog automation, release notes, and developer tools.
        </p>
      </div>

      <EmailCapture
        variant="card"
        title="Get Developer Productivity Tips"
        description="Changelog automation insights and release note strategies, delivered to your inbox."
        source="blog-listing"
      />

      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <article className="rounded-xl border border-border bg-bg-card p-6 sm:p-8 group-hover:border-border-light group-hover:bg-bg-card-hover transition-all duration-300">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <time className="text-sm text-text-muted">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span className="text-text-muted">·</span>
                <span className="text-sm text-text-muted">{post.readTime}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-accent-light transition-colors">
                {post.title}
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                {post.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
