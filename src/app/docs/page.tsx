import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Learn how to use ShipLog — setup guides, API reference, and widget documentation.",
};

export default function DocsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Documentation</h1>
      <p className="text-text-secondary text-lg mb-12">
        Everything you need to set up and use ShipLog for your projects.
      </p>

      <div className="space-y-12">
        {/* Quick Start */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
          <div className="rounded-xl border border-border bg-bg-card p-6 space-y-4">
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-sm font-bold">1</span>
              <div>
                <h3 className="font-semibold mb-1">Create your account</h3>
                <p className="text-text-secondary text-sm">Sign up with GitHub OAuth. We&apos;ll automatically detect your repositories.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-sm font-bold">2</span>
              <div>
                <h3 className="font-semibold mb-1">Connect a repository</h3>
                <p className="text-text-secondary text-sm">Select which repos to generate changelogs for. ShipLog installs as a GitHub App.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-sm font-bold">3</span>
              <div>
                <h3 className="font-semibold mb-1">Generate your first changelog</h3>
                <p className="text-text-secondary text-sm">Create a release or tag, and ShipLog generates entries automatically. Or use the dashboard to create entries manually.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="flex-shrink-0 h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center text-accent-light text-sm font-bold">4</span>
              <div>
                <h3 className="font-semibold mb-1">Share with your users</h3>
                <p className="text-text-secondary text-sm">Your public changelog page is live. Embed the widget on your site for in-app updates.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Embeddable Widget */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Embeddable Widget</h2>
          <p className="text-text-secondary mb-4">
            Add the ShipLog changelog widget to any website with a single script tag:
          </p>
          <pre className="rounded-xl border border-border bg-bg-primary p-6 overflow-x-auto mb-4">
            <code className="text-sm text-accent-light">
{`<!-- ShipLog Changelog Widget -->
<div id="shiplog-widget"></div>
<script
  src="https://shiplog.dev/widget.js"
  data-project="your-project-id"
  data-theme="dark"
  data-limit="5"
  async
></script>`}
            </code>
          </pre>
          <h3 className="text-lg font-semibold mt-6 mb-3">Widget Options</h3>
          <div className="rounded-xl border border-border bg-bg-card overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-border text-sm font-medium text-text-muted">
              <span>Attribute</span>
              <span>Default</span>
              <span>Description</span>
            </div>
            {[
              ["data-project", "required", "Your ShipLog project ID"],
              ["data-theme", '"dark"', '"dark", "light", or "auto"'],
              ["data-limit", '"5"', "Number of releases to show"],
              ["data-compact", '"false"', "Compact mode (true/false)"],
              ["data-categories", '"all"', "Filter by category"],
            ].map(([attr, def, desc]) => (
              <div key={attr} className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-0 text-sm">
                <code className="text-accent-light">{attr}</code>
                <span className="text-text-muted">{def}</span>
                <span className="text-text-secondary">{desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* API Reference */}
        <section>
          <h2 className="text-2xl font-bold mb-4">API Reference</h2>
          <p className="text-text-secondary mb-6">
            Access your changelog data programmatically with the ShipLog REST API.
          </p>

          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded bg-success/20 px-2 py-0.5 text-xs font-mono text-success">GET</span>
                <code className="text-sm text-text-primary">/api/v1/releases</code>
              </div>
              <p className="text-text-secondary text-sm mb-3">List all releases for a project.</p>
              <pre className="rounded-lg bg-bg-primary border border-border p-4 text-sm text-text-secondary overflow-x-auto">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://shiplog.dev/api/v1/releases?project=your-project-id`}
              </pre>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded bg-success/20 px-2 py-0.5 text-xs font-mono text-success">GET</span>
                <code className="text-sm text-text-primary">/api/v1/releases/:version</code>
              </div>
              <p className="text-text-secondary text-sm mb-3">Get a specific release by version.</p>
              <pre className="rounded-lg bg-bg-primary border border-border p-4 text-sm text-text-secondary overflow-x-auto">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://shiplog.dev/api/v1/releases/2.3.0`}
              </pre>
            </div>

            <div className="rounded-xl border border-border bg-bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="rounded bg-accent/20 px-2 py-0.5 text-xs font-mono text-accent-light">POST</span>
                <code className="text-sm text-text-primary">/api/v1/releases</code>
              </div>
              <p className="text-text-secondary text-sm mb-3">Create a new release entry.</p>
              <pre className="rounded-lg bg-bg-primary border border-border p-4 text-sm text-text-secondary overflow-x-auto">
{`curl -X POST -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"version":"2.4.0","title":"New Release","changes":[...]}' \\
  https://shiplog.dev/api/v1/releases`}
              </pre>
            </div>
          </div>
        </section>

        {/* Webhooks */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Webhooks</h2>
          <p className="text-text-secondary mb-4">
            Receive notifications when new releases are published. Configure webhooks in your project settings.
          </p>
          <pre className="rounded-xl border border-border bg-bg-primary p-6 overflow-x-auto text-sm text-text-secondary">
{`// Webhook payload
{
  "event": "release.published",
  "project": "your-project-id",
  "release": {
    "version": "2.4.0",
    "title": "New Features & Fixes",
    "date": "2025-01-31",
    "changes": [
      { "category": "added", "text": "New dashboard analytics" },
      { "category": "fixed", "text": "Widget loading performance" }
    ]
  }
}`}
          </pre>
        </section>
      </div>
    </div>
  );
}
