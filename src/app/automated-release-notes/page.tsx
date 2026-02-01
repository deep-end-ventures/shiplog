import type { Metadata } from "next";
import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Automated Release Notes — CI/CD Integration | ShipLog",
  description: "Auto-generate release notes on every deploy. ShipLog integrates with GitHub releases, tags, and CI/CD pipelines to create human-readable release notes automatically.",
  keywords: ["automated release notes", "release notes generator", "CI/CD release notes", "automatic release notes GitHub", "release notes automation"],
  openGraph: {
    title: "Automated Release Notes — CI/CD Integration | ShipLog",
    description: "Auto-generate release notes on every deploy. Integrates with GitHub and CI/CD pipelines.",
    url: "https://shiplog.deependventures.com/automated-release-notes",
  },
  alternates: {
    canonical: "https://shiplog.deependventures.com/automated-release-notes",
  },
};

const faqs = [
  {
    question: "How do automated release notes work?",
    answer: "ShipLog watches your GitHub repo for new releases, tags, or merges to main. When triggered, our AI analyzes the commits since the last release and generates categorized, human-readable notes automatically.",
  },
  {
    question: "Can I integrate with my CI/CD pipeline?",
    answer: "Yes. ShipLog provides a REST API and GitHub App webhooks. Trigger changelog generation from GitHub Actions, CircleCI, GitLab CI, or any pipeline that can make HTTP requests.",
  },
  {
    question: "What triggers release note generation?",
    answer: "Three triggers: (1) New GitHub release published, (2) New git tag pushed, (3) Manual trigger via dashboard or API. You choose which works for your workflow.",
  },
  {
    question: "Can I review notes before publishing?",
    answer: "Absolutely. By default, generated notes land in your dashboard as drafts. Review, edit, and publish when ready. Or enable auto-publish for fully hands-free operation.",
  },
  {
    question: "Do I need to change my commit message format?",
    answer: "No. ShipLog AI works with any commit style. That said, Conventional Commits (feat:, fix:, etc.) give the AI more signal and produce better results.",
  },
  {
    question: "How much time does this actually save?",
    answer: "Teams report saving 30-60 minutes per release. For bi-weekly releases, that's 26-52 hours per year — over a full work week saved annually.",
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
  name: "ShipLog — Automated Release Notes",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description: "Automatically generate release notes from GitHub commits and PRs with AI.",
  url: "https://shiplog.deependventures.com/automated-release-notes",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function AutomatedReleaseNotes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light mb-8">
            🚀 Ship Faster — Release Notes on Autopilot
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Release notes that{" "}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              write themselves
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Every merge, every tag, every release — ShipLog generates polished release notes automatically. Zero manual effort.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
              Automate Release Notes →
            </Link>
            <Link href="/changelog" className="inline-flex items-center justify-center rounded-xl border border-border-light px-8 py-3.5 text-base font-medium text-text-primary hover:bg-bg-secondary transition-all">
              See Example
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-muted">Free for public repos · Works with any commit style</p>
        </div>
      </section>

      {/* Pipeline Flow */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Fits your existing workflow</h2>
          <p className="text-text-secondary text-lg">No changes to how you code. ShipLog sits at the end of your pipeline.</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-6 font-mono text-sm">
          <div className="text-text-muted mb-4"># Your workflow stays the same:</div>
          <div className="space-y-2">
            <div><span className="text-text-muted">1.</span> <span className="text-accent-light">git commit</span> <span className="text-text-secondary">-m &quot;feat: add dark mode support&quot;</span></div>
            <div><span className="text-text-muted">2.</span> <span className="text-accent-light">git push origin main</span></div>
            <div><span className="text-text-muted">3.</span> <span className="text-accent-light">gh release create v2.1.0</span></div>
            <div className="text-text-muted">   ↓</div>
            <div><span className="text-text-muted">4.</span> <span className="text-success">✨ ShipLog auto-generates release notes</span></div>
            <div><span className="text-text-muted">5.</span> <span className="text-success">📄 Published to your changelog page</span></div>
            <div><span className="text-text-muted">6.</span> <span className="text-success">🔔 Subscribers notified</span></div>
          </div>
        </div>
      </section>

      {/* Time Savings */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Save hours every sprint</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { stat: "0 min", label: "Time writing release notes", desc: "AI generates them instantly on every release" },
            { stat: "100%", label: "Changes captured", desc: "Every commit and PR is accounted for — nothing missed" },
            { stat: "52 hrs", label: "Saved per year", desc: "For teams shipping bi-weekly releases" },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border bg-bg-card p-6 text-center">
              <div className="text-4xl font-bold text-accent-light mb-2">{item.stat}</div>
              <div className="text-text-primary font-semibold mb-1">{item.label}</div>
              <p className="text-text-secondary text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Automation features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "🔄", title: "Auto-Trigger on Release", desc: "Generate notes automatically when you publish a GitHub release or push a tag." },
            { icon: "🤖", title: "AI Categorization", desc: "Commits sorted into Added, Fixed, Improved, and Removed automatically." },
            { icon: "✏️", title: "Review Before Publishing", desc: "Notes appear as drafts. Edit and publish when ready, or enable auto-publish." },
            { icon: "📡", title: "REST API", desc: "Trigger generation from any CI/CD pipeline via API. GitHub Actions template included." },
            { icon: "📧", title: "Subscriber Notifications", desc: "Email your users automatically when new release notes are published." },
            { icon: "📝", title: "Markdown Export", desc: "Export release notes as Markdown for your GitHub releases, docs, or README." },
          ].map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-bg-card p-6 hover:bg-bg-card-hover hover:border-border-light transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GitHub Actions Example */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">Works with GitHub Actions</h2>
          <p className="text-text-secondary text-lg">Add one step to your workflow. Done.</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-6 font-mono text-xs overflow-x-auto">
          <pre className="text-text-secondary">
{`# .github/workflows/release.yml
name: Release
on:
  release:
    types: [published]

jobs:
  changelog:
    runs-on: ubuntu-latest
    steps:
      - name: Generate Release Notes
        run: |
          curl -X POST https://shiplog.deependventures.com/api/releases \\
            -H "Authorization: Bearer \${{ secrets.SHIPLOG_API_KEY }}" \\
            -H "Content-Type: application/json" \\
            -d '{"repo": "\${{ github.repository }}", "tag": "\${{ github.ref_name }}"}'`}
          </pre>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get Release Automation Tips"
        description="CI/CD best practices, release note templates, and developer productivity insights."
        source="automated-release-notes"
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
          <Link href="/ai-changelog-generator" className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors group">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">AI Changelog Generator →</h3>
            <p className="text-text-secondary text-sm mt-2">Generate beautiful changelogs from GitHub commits using AI.</p>
          </Link>
          <Link href="/changelog-widget" className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors group">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">Changelog Widget →</h3>
            <p className="text-text-secondary text-sm mt-2">Embed a beautiful changelog widget on your site with one script tag.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Stop writing release notes by hand</h2>
        <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">Set up automated release notes in 5 minutes. Free for public repos.</p>
        <Link href="/dashboard" className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
          Get Started — It&apos;s Free
        </Link>
      </section>
    </>
  );
}
