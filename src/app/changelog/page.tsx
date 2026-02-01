import type { Metadata } from "next";
import { sampleReleases, categoryConfig } from "@/lib/changelog-data";

export const metadata: Metadata = {
  title: "Changelog",
  description: "See what's new in ShipLog. All the latest features, fixes, and improvements.",
};

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Changelog</h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          All the latest updates, improvements, and fixes to ShipLog. We ship fast and document everything.
        </p>
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-success" />
            <span className="text-sm text-text-muted">Added</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-info" />
            <span className="text-sm text-text-muted">Improved</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-error" />
            <span className="text-sm text-text-muted">Fixed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-warning" />
            <span className="text-sm text-text-muted">Removed</span>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/40 to-transparent hidden sm:block" />

        <div className="space-y-12">
          {sampleReleases.map((release, index) => (
            <article key={release.id} className="relative group">
              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-shrink-0 relative z-10">
                  <div className="h-12 w-12 rounded-full bg-bg-card border-2 border-accent/40 flex items-center justify-center group-hover:border-accent-light group-hover:bg-accent/10 transition-all duration-300">
                    <span className="text-accent-light text-xs font-bold">
                      {release.version.split(".").slice(0, 2).join(".")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 rounded-xl border border-border bg-bg-card p-6 sm:p-8 group-hover:border-border-light group-hover:bg-bg-card-hover transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-light">
                      v{release.version}
                    </span>
                    <time className="text-sm text-text-muted">
                      {new Date(release.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    {index === 0 && (
                      <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium text-success">
                        Latest
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold mb-2">{release.title}</h2>
                  {release.description && (
                    <p className="text-text-secondary text-sm mb-6">{release.description}</p>
                  )}

                  <div className="space-y-3">
                    {release.changes.map((change, changeIndex) => {
                      const config = categoryConfig[change.category];
                      return (
                        <div key={changeIndex} className="flex items-start gap-3">
                          <span
                            className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${config.bgColor} ${config.color} mt-0.5`}
                          >
                            {config.label}
                          </span>
                          <span className="text-sm text-text-secondary leading-relaxed">
                            {change.text}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Subscribe CTA */}
      <div className="mt-20 rounded-xl border border-border bg-bg-card p-8 text-center">
        <h3 className="text-xl font-bold mb-2">Stay in the loop</h3>
        <p className="text-text-secondary text-sm mb-6">
          Get notified when we ship new features. No spam, just product updates.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full sm:flex-1 rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
          />
          <button className="w-full sm:w-auto rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-light transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
