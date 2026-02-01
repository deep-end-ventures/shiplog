import type { Metadata } from "next";
import Link from "next/link";
import { EmailCapture } from "@/components/email-capture";

export const metadata: Metadata = {
  title: "Embeddable Changelog Widget — One Script Tag | ShipLog",
  description: "Add a beautiful changelog widget to your website with a single script tag. Auto-updates with every release. Customizable, fast-loading, and mobile-responsive.",
  keywords: ["changelog widget", "embeddable changelog", "changelog embed", "in-app changelog", "what's new widget"],
  openGraph: {
    title: "Embeddable Changelog Widget | ShipLog",
    description: "Add a beautiful changelog to your site with one script tag. Auto-updates on every release.",
    url: "https://shiplog.deependventures.com/changelog-widget",
  },
  alternates: {
    canonical: "https://shiplog.deependventures.com/changelog-widget",
  },
};

const faqs = [
  {
    question: "How do I embed the changelog widget?",
    answer: "Add a single script tag to your HTML. The widget renders inside a container element you specify. It auto-loads your latest changelog entries with zero configuration.",
  },
  {
    question: "Does the widget slow down my site?",
    answer: "No. The widget script is under 5KB gzipped, loads asynchronously, and doesn't block page rendering. It's faster than most analytics scripts.",
  },
  {
    question: "Can I customize the widget appearance?",
    answer: "Yes. Customize colors, fonts, categories, number of entries shown, and more via data attributes or the JavaScript API. Match it to your brand perfectly.",
  },
  {
    question: "Does it work with React, Vue, and Next.js?",
    answer: "Yes. The widget works with any framework — it's a plain JavaScript embed. We also provide React and Vue wrapper components for cleaner integration.",
  },
  {
    question: "Is the widget free?",
    answer: "The widget is included in all plans, including Free. Show unlimited changelog entries on your site at no cost.",
  },
  {
    question: "How does the widget stay updated?",
    answer: "The widget fetches your latest changelog entries from ShipLog's CDN on each page load. When you publish new release notes, the widget updates automatically — no code changes needed.",
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
  name: "ShipLog — Changelog Widget",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description: "Embeddable changelog widget that auto-updates with every release. One script tag.",
  url: "https://shiplog.deependventures.com/changelog-widget",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

export default function ChangelogWidget() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light mb-8">
            📦 One Script Tag — Works Everywhere
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-4xl mx-auto">
            Embed a{" "}
            <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
              beautiful changelog
            </span>{" "}
            on your site
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto">
            Drop one script tag into your website and get a gorgeous, auto-updating changelog widget. Works with any framework.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard" className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
              Get Your Widget Code →
            </Link>
            <Link href="/changelog" className="inline-flex items-center justify-center rounded-xl border border-border-light px-8 py-3.5 text-base font-medium text-text-primary hover:bg-bg-secondary transition-all">
              See Widget in Action
            </Link>
          </div>
          <p className="mt-4 text-sm text-text-muted">Free on all plans · Under 5KB · Zero dependencies</p>
        </div>
      </section>

      {/* Code Example */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Add in 30 seconds</h2>
          <p className="text-text-secondary text-lg">Copy, paste, done. That&apos;s it.</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-error/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
            <span className="ml-3 text-xs text-text-muted">index.html</span>
          </div>
          <pre className="font-mono text-sm text-text-secondary overflow-x-auto">
{`<!-- Add this where you want the changelog to appear -->
<div id="shiplog-changelog"></div>

<!-- Add this before </body> -->
<script
  src="https://shiplog.deependventures.com/api/widget"
  data-project="your-project-id"
  data-target="#shiplog-changelog"
  data-theme="dark"
  async
></script>`}
          </pre>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-bg-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-3 w-3 rounded-full bg-error/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
            <span className="ml-3 text-xs text-text-muted">React / Next.js</span>
          </div>
          <pre className="font-mono text-sm text-text-secondary overflow-x-auto">
{`import { ShipLogWidget } from '@shiplog/react';

export function Changelog() {
  return (
    <ShipLogWidget
      projectId="your-project-id"
      theme="dark"
      entries={5}
    />
  );
}`}
          </pre>
        </div>
      </section>

      {/* Widget Preview */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What the widget looks like</h2>
          <p className="text-text-secondary text-lg">Branded, responsive, and always up-to-date.</p>
        </div>
        <div className="rounded-2xl border border-border bg-bg-secondary p-1 shadow-2xl shadow-accent/5">
          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold">What&apos;s New</h3>
              <span className="text-xs text-text-muted">Powered by ShipLog</span>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent-light text-xs font-bold">2.1</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-text-primary text-sm">v2.1.0</h4>
                    <span className="text-xs text-text-muted">2 days ago</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-medium">Added</span>
                      <span className="text-text-secondary">Dark mode support across all pages</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="rounded-full bg-error/20 px-2 py-0.5 text-xs text-error font-medium">Fixed</span>
                      <span className="text-text-secondary">Widget not loading on Safari 17</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 opacity-60">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent-light text-xs font-bold">2.0</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-semibold text-text-primary text-sm">v2.0.0</h4>
                    <span className="text-xs text-text-muted">1 week ago</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-medium">Added</span>
                    <span className="text-text-secondary">Embeddable changelog widget</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-border text-center">
              <span className="text-xs text-accent-light hover:underline cursor-pointer">View full changelog →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Widget features</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: "⚡", title: "Ultra-Lightweight", desc: "Under 5KB gzipped. Loads async so it never blocks your page." },
            { icon: "🎨", title: "Fully Customizable", desc: "Match your brand with custom colors, fonts, and layout options." },
            { icon: "📱", title: "Responsive", desc: "Looks great on desktop, tablet, and mobile. No extra CSS needed." },
            { icon: "🔄", title: "Auto-Updates", desc: "Widget pulls latest entries from ShipLog CDN. Publish once, updated everywhere." },
            { icon: "🌙", title: "Dark & Light Themes", desc: "Built-in dark and light themes. Or use your own custom theme." },
            { icon: "🔧", title: "Framework Agnostic", desc: "Works with React, Vue, Svelte, Next.js, plain HTML — anything." },
          ].map((f) => (
            <div key={f.title} className="group rounded-xl border border-border bg-bg-card p-6 hover:bg-bg-card-hover hover:border-border-light transition-all">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customization Options */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customize everything</h2>
          <p className="text-text-secondary text-lg">Make the widget yours with data attributes.</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-6 font-mono text-sm overflow-x-auto">
          <pre className="text-text-secondary">
{`<script
  src="https://shiplog.deependventures.com/api/widget"
  data-project="your-project-id"
  data-target="#changelog"
  data-theme="dark"           <!-- "dark" | "light" | "auto" -->
  data-entries="5"            <!-- Number of entries to show -->
  data-categories="added,fixed,improved"
  data-accent-color="#3b82f6" <!-- Your brand color -->
  data-show-dates="true"
  data-show-badges="true"
  data-link-text="View all updates"
  async
></script>`}
          </pre>
        </div>
      </section>

      {/* Email Capture */}
      <EmailCapture
        title="Get Widget Integration Tips"
        description="Best practices for embedding changelogs, in-app announcements, and keeping users informed."
        source="changelog-widget"
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
          <Link href="/automated-release-notes" className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors group">
            <h3 className="text-lg font-semibold text-text-primary group-hover:text-accent-light transition-colors">Automated Release Notes →</h3>
            <p className="text-text-secondary text-sm mt-2">Release notes that generate automatically on every deploy.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">Get your changelog widget today</h2>
        <p className="mt-4 text-lg text-text-secondary max-w-xl mx-auto">One script tag. Auto-updating. Free on all plans.</p>
        <Link href="/dashboard" className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all">
          Get Started — It&apos;s Free
        </Link>
      </section>
    </>
  );
}
