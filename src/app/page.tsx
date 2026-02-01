import Link from "next/link";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    title: "AI-Powered Generation",
    description: "Our AI reads your commits and PRs, then writes clear, human-friendly changelog entries automatically.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "GitHub Integration",
    description: "Connect your repo in one click. ShipLog watches for merges and releases, then auto-generates notes.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
      </svg>
    ),
    title: "Embeddable Widget",
    description: "Drop a single script tag into your site. Your changelog shows up beautifully, branded to match.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v-3.75m3 3.75v-2.25m3 2.25V9" />
      </svg>
    ),
    title: "Beautiful Timeline",
    description: "Gorgeous public changelog page with version numbers, dates, and categorized changes your users love.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Customization",
    description: "Categories, labels, colors, and grouping — make your changelog match your brand perfectly.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Save Hours Weekly",
    description: "Stop writing changelogs by hand. ShipLog does it in seconds, saving your team hours every sprint.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent-light mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-light opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-light"></span>
              </span>
              Now in public beta
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6">
              Beautiful changelogs,{" "}
              <span className="bg-gradient-to-r from-accent-light to-accent-glow bg-clip-text text-transparent">
                powered by AI
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
              Connect your GitHub repo and auto-generate stunning, human-readable release notes. 
              Your users deserve better than raw commit messages.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/dashboard"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light hover:shadow-accent/40 transition-all animate-glow"
              >
                Start for Free
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/changelog"
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-border-light px-8 py-3.5 text-base font-medium text-text-primary hover:bg-bg-secondary transition-all"
              >
                See Live Demo
              </Link>
            </div>
            
            <p className="mt-6 text-sm text-text-muted">
              Free forever for public repos • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* Preview */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-8 mb-24">
        <div className="relative rounded-2xl border border-border bg-bg-secondary p-1 shadow-2xl shadow-accent/5">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="h-3 w-3 rounded-full bg-error/60" />
            <div className="h-3 w-3 rounded-full bg-warning/60" />
            <div className="h-3 w-3 rounded-full bg-success/60" />
            <span className="ml-3 text-xs text-text-muted">shiplog.dev/changelog</span>
          </div>
          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent-light text-sm font-bold">2.1</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-text-primary">Version 2.1.0</h3>
                    <span className="text-xs text-text-muted">Jan 28, 2025</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-medium">Added</span>
                      <span className="text-sm text-text-secondary">AI-powered commit message summarization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-info/20 px-2 py-0.5 text-xs text-info font-medium">Improved</span>
                      <span className="text-sm text-text-secondary">Changelog timeline rendering performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-error/20 px-2 py-0.5 text-xs text-error font-medium">Fixed</span>
                      <span className="text-sm text-text-secondary">Widget embed not loading on Safari</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4 opacity-60">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent-light text-sm font-bold">2.0</span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-text-primary">Version 2.0.0</h3>
                    <span className="text-xs text-text-muted">Jan 15, 2025</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded-full bg-success/20 px-2 py-0.5 text-xs text-success font-medium">Added</span>
                      <span className="text-sm text-text-secondary">Embeddable changelog widget for any website</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Everything you need to ship{" "}
            <span className="text-accent-light">beautiful changelogs</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            From AI generation to embeddable widgets, ShipLog handles your entire release communication pipeline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-bg-card p-6 hover:bg-bg-card-hover hover:border-border-light transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light mb-4 group-hover:bg-accent/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative rounded-2xl bg-gradient-to-r from-accent/20 to-accent-light/10 border border-accent/20 p-12 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent pointer-events-none" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to automate your changelogs?
            </h2>
            <p className="text-text-secondary max-w-xl mx-auto mb-8">
              Join hundreds of developers who save hours every release with AI-powered changelog generation.
            </p>
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent/25 hover:bg-accent-light transition-all"
            >
              Get Started — It&apos;s Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
