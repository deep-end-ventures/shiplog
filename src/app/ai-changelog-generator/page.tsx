import type { Metadata } from "next";
import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Free AI Changelog Generator — GitHub Commits to Release Notes | ShipLog",
  description: "Generate beautiful changelogs from your GitHub commits and PRs using AI. Free for public repos. Save hours every release with automated, human-readable release notes.",
  keywords: ["AI changelog generator", "automated changelog", "changelog from commits", "GitHub changelog generator", "free changelog tool"],
  openGraph: {
    title: "Free AI Changelog Generator | ShipLog",
    description: "Generate beautiful changelogs from GitHub commits using AI. Free for public repos.",
    url: "https://shiplog.deependventures.com/ai-changelog-generator",
  },
  alternates: {
    canonical: "https://shiplog.deependventures.com/ai-changelog-generator",
  },
};

const faqs = [
  {
    question: "How does the AI changelog generator work?",
    answer: "ShipLog connects to your GitHub repo, reads your commits, pull requests, and release tags, then uses AI to generate clear, categorized changelog entries. It understands context — not just commit messages.",
  },
  {
    question: "Is it really free?",
    answer: "Yes. ShipLog is free forever for public repos with unlimited changelog generation. Pro ($19/mo) adds private repos, team features, and API access.",
  },
  {
    question: "What makes AI changelogs better than manual ones?",
    answer: "AI changelogs are consistent, complete, and instant. Manual changelogs take 30-60 min, miss changes, and vary by author. AI generates them in seconds with every commit accounted for.",
  },
  {
    question: "Can I customize the AI output?",
    answer: "Absolutely. Choose categories (Added/Fixed/Improved/Removed), adjust tone and detail level, filter out noise (chore commits, dependency bumps), and export in Markdown or HTML.",
  },
  {
    question: "Does ShipLog support GitLab or Bitbucket?",
    answer: "Currently GitHub only. GitLab support is coming Q2 2026, with Bitbucket following in Q3.",
  },
  {
    question: "How does this compare to Release Drafter?",
    answer: "Release Drafter requires label management and generates basic lists. ShipLog uses AI to write human-friendly descriptions, categorize automatically, and provides a hosted changelog page and embeddable widget.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ShipLog — AI Changelog Generator",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description: "AI-powered changelog generator that turns GitHub commits into beautiful release notes.",
  url: "https://shiplog.deependventures.com/ai-changelog-generator",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const competitors = [
  { name: "Release Drafter", ai: "❌", hostedPage: "❌", widget: "❌", price: "Free" },
  { name: "Beamer", ai: "❌", hostedPage: "✅", widget: "✅", price: "$79/mo" },
  { name: "Changelogfy", ai: "⚠️ Basic", hostedPage: "✅", widget: "✅", price: "$49/mo" },
  { name: "ShipLog", ai: "✅ GPT-4o", hostedPage: "✅", widget: "✅", price: "Free / $19/mo" },
];

export default function AIChangelogGenerator() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light mb-8">
            ✨ AI-Powered — Free for Public Repos
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Turn GitHub commits into{" "}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              beautiful changelogs
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            ShipLog&apos;s AI reads your commits and PRs, then writes clear, categorized release notes automatically. Save hours every release.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
              Generate Changelog Free →
            </Link>
            <Link href="/changelog" className="inline-flex items-center justify-center rounded-xl border border-border-light px-8 py-3.5 text-base font-medium text-text-primary hover:bg-bg-secondary transition-all">
              See Example Output
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-muted">Free forever for public repos · No credit card required</p>
        </div>
      </section>

      {/* Before/After */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Before vs. after AI changelogs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-bg-card p-6">
            <div className="text-sm font-semibold text-error mb-4">❌ Raw Git Log</div>
            <div className="font-mono text-xs text-text-secondary space-y-1.5">
              <div>fix: resolve issue #234</div>
              <div>chore: update deps</div>
              <div>feat: add thing</div>
              <div>Merge branch &apos;feature/auth&apos;</div>
              <div>wip</div>
              <div>fix typo</div>
              <div>refactor: move utils</div>
            </div>
          </div>
          <div className="rounded-xl border border-accent/30 bg-bg-card p-6 ring-1 ring-accent/10">
            <div className="text-sm font-semibold text-success mb-4">✅ ShipLog AI Output</div>
            <div className="text-sm text-text-secondary space-y-3">
              <div>
                <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-medium mr-2">Added</span>
                OAuth authentication with GitHub and Google SSO
              </div>
              <div>
                <span className="rounded-full bg-info/20 px-2 py-0.5 text-xs text-info font-medium mr-2">Improved</span>
                Code organization with shared utility modules
              </div>
              <div>
                <span className="rounded-full bg-error/20 px-2 py-0.5 text-xs text-error font-medium mr-2">Fixed</span>
                Login timeout on slow connections (#234)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How the AI changelog generator works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Connect GitHub", desc: "Install the ShipLog app on your repo. One click, no config files." },
            { step: "2", title: "AI Analyzes", desc: "Our AI reads commits, PR descriptions, and diffs to understand each change." },
            { step: "3", title: "Generates Notes", desc: "Clear, categorized entries written in plain English. Not raw commit messages." },
            { step: "4", title: "Publish", desc: "Review, edit if needed, and publish to your hosted changelog page or widget." },
          ].map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-xl font-bold mx-auto mb-4">{item.step}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Compared to other changelog tools</h2>
        </div>
        <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
          <div className="grid grid-cols-5 gap-0 text-sm">
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-bg-secondary">Tool</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-bg-secondary">AI Generation</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-bg-secondary">Hosted Page</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-bg-secondary">Widget</div>
            <div className="p-4 font-semibold text-text-muted border-b border-border bg-bg-secondary">Price</div>
            {competitors.map((c) => (
              <>
                <div key={`${c.name}-n`} className={`p-4 border-b border-border ${c.name === "ShipLog" ? "text-accent-light font-semibold" : "text-text-primary"}`}>{c.name}</div>
                <div key={`${c.name}-a`} className="p-4 border-b border-border text-text-secondary">{c.ai}</div>
                <div key={`${c.name}-h`} className="p-4 border-b border-border text-text-secondary">{c.hostedPage}</div>
                <div key={`${c.name}-w`} className="p-4 border-b border-border text-text-secondary">{c.widget}</div>
                <div key={`${c.name}-p`} className={`p-4 border-b border-border ${c.name === "ShipLog" ? "text-success font-medium" : "text-text-secondary"}`}>{c.price}</div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get AI Changelog Tips"
        description="Best practices for changelog automation, release notes, and keeping users informed."
        source="ai-changelog-generator"
      />

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2">{faq.question}</h3>
              <p className="text-text-secondary leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* More Tools */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-center mb-8">More Free Tools from ShipLog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <Link href="/automated-release-notes" className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors group">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">Automated Release Notes →</h3>
            <p className="text-text-secondary text-sm mt-2">Set up CI/CD-powered release notes that generate on every deploy.</p>
          </Link>
          <Link href="/changelog-widget" className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors group">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">Changelog Widget →</h3>
            <p className="text-text-secondary text-sm mt-2">Embed a beautiful changelog widget on your site with one script tag.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Ready to automate your changelogs?</h2>
        <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">Free forever for public repos. Generate your first changelog in under 5 minutes.</p>
        <Link href="/dashboard" className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
          Get Started — It&apos;s Free
        </Link>
      </section>
    </>
  );
}
