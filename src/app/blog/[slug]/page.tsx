import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { EmailCapture } from "@/components/email-capture";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function renderMarkdown(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];
  let codeLanguage = "";

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre key={i} className="rounded-lg bg-bg-primary border border-border p-4 overflow-x-auto mb-4">
            <code className="text-sm text-text-secondary">{codeContent.join("\n")}</code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLanguage = line.slice(3);
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl font-semibold mt-8 mb-3">
          {line.slice(4)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="text-text-secondary leading-relaxed ml-4 mb-1 list-disc">
          {formatInlineText(line.slice(2))}
        </li>
      );
    } else if (line.startsWith("1. ") || /^\d+\.\s/.test(line)) {
      elements.push(
        <li key={i} className="text-text-secondary leading-relaxed ml-4 mb-1 list-decimal">
          {formatInlineText(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else if (line.startsWith("|")) {
      // Skip table lines - render as text
      if (line.includes("---")) continue;
      const cells = line.split("|").filter(Boolean).map((c) => c.trim());
      elements.push(
        <div key={i} className="flex gap-4 text-sm text-text-secondary py-1">
          {cells.map((cell, j) => (
            <span key={j} className="flex-1">{cell}</span>
          ))}
        </div>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-2" />);
    } else {
      elements.push(
        <p key={i} className="text-text-secondary leading-relaxed mb-4">
          {formatInlineText(line)}
        </p>
      );
    }
  }

  return elements;
}

function formatInlineText(text: string): React.ReactNode {
  // Simple inline formatting
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Code
    const codeMatch = remaining.match(/`(.+?)`/);
    // Link
    const linkMatch = remaining.match(/\[(.+?)\]\((.+?)\)/);

    const matches = [
      boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
      codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
      linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
    ].filter(Boolean).sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === "bold") {
      parts.push(<strong key={key++} className="text-text-primary font-semibold">{first.match[1]}</strong>);
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "code") {
      parts.push(
        <code key={key++} className="rounded bg-bg-secondary px-1.5 py-0.5 text-sm text-accent-light">
          {first.match[1]}
        </code>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "link") {
      parts.push(
        <Link key={key++} href={first.match[2]} className="text-accent-light hover:underline">
          {first.match[1]}
        </Link>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : <>{parts}</>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-secondary transition-colors mb-8"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to blog
      </Link>

      <article>
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="text-sm text-text-muted">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">{post.readTime}</span>
            <span className="text-text-muted">·</span>
            <span className="text-sm text-text-muted">{post.author}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-text-secondary text-lg">{post.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent-light">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose-custom">{renderMarkdown(post.content)}</div>

        <EmailCapture
          variant="inline"
          title="Liked this post?"
          description="Get more changelog and release note tips delivered to your inbox."
          source={`blog-${post.slug}`}
        />

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-accent/20 bg-accent/5 p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Ready to automate your changelogs?</h3>
          <p className="text-text-secondary text-sm mb-6">
            ShipLog generates beautiful changelogs from your GitHub activity. Free for public repos.
          </p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-light transition-colors"
          >
            Get Started Free
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </article>
    </div>
  );
}
