import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for ShipLog. Free forever for public repos, Pro for teams.",
};

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for open source projects and personal repos.",
    features: [
      "1 public repository",
      "AI changelog generation",
      "Public changelog page",
      "Basic embeddable widget",
      "Community support",
      "5 changelog entries/month",
    ],
    cta: "Get Started",
    ctaLink: "/dashboard",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For professional developers and growing startups.",
    features: [
      "Unlimited repositories",
      "Advanced AI summarization",
      "Custom domain support",
      "Branded widget themes",
      "API access",
      "Unlimited changelog entries",
      "Priority email support",
      "RSS/Atom feeds",
      "Webhook notifications",
    ],
    cta: "Start Free Trial",
    ctaLink: "/dashboard",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$39",
    period: "/month",
    description: "For teams who ship fast and communicate better.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Role-based access control",
      "Team changelog workspace",
      "Slack & Discord integrations",
      "Custom categories & labels",
      "Audit log",
      "Priority support with SLA",
      "SSO (coming soon)",
    ],
    cta: "Start Free Trial",
    ctaLink: "/dashboard",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Simple, transparent pricing
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Start free, upgrade when you need more power. 75% cheaper than alternatives like Beamer.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative rounded-2xl border p-8 flex flex-col transition-all duration-300 ${
              plan.highlighted
                ? "border-accent bg-gradient-to-b from-accent/10 to-bg-card scale-105 shadow-2xl shadow-accent/10"
                : "border-border bg-bg-card hover:border-border-light hover:bg-bg-card-hover"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="rounded-full bg-accent px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-text-muted text-sm">{plan.period}</span>
              </div>
              <p className="text-text-secondary text-sm">{plan.description}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <svg
                    className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? "text-accent-light" : "text-text-muted"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-text-secondary">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href={plan.ctaLink}
              className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                plan.highlighted
                  ? "bg-accent text-white shadow-lg shadow-accent/25 hover:bg-accent-light"
                  : "bg-bg-secondary text-text-primary border border-border hover:bg-bg-card-hover"
              }`}
            >
              {plan.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <div className="mt-24 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[
            {
              q: "Can I use ShipLog for free?",
              a: "Absolutely! The Free plan includes 1 public repository with AI-powered changelog generation, a public changelog page, and a basic embeddable widget. Perfect for open source projects.",
            },
            {
              q: "How does the AI changelog generation work?",
              a: "ShipLog connects to your GitHub repo and analyzes your commits, pull requests, and release tags. Our AI then summarizes the changes into clear, categorized entries that your users can actually understand.",
            },
            {
              q: "Can I try Pro features before paying?",
              a: "Yes! Both Pro and Team plans come with a 14-day free trial. No credit card required to start.",
            },
            {
              q: "How is ShipLog different from Beamer?",
              a: "ShipLog is built specifically for developers with deep GitHub integration and AI-powered generation. We're 75% cheaper than Beamer's Pro plan while offering more automation and a developer-first experience.",
            },
            {
              q: "Do you support private repositories?",
              a: "Yes, private repository support is included in the Pro and Team plans. Free plan supports public repos only.",
            },
          ].map((faq) => (
            <div key={faq.q} className="rounded-xl border border-border bg-bg-card p-6">
              <h3 className="font-semibold mb-2">{faq.q}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
