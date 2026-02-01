import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-xl font-bold">ShipLog</span>
            </div>
            <p className="text-text-secondary text-sm max-w-md mb-4">
              AI-powered changelog and release notes generator. Connect your GitHub repo and auto-generate beautiful changelogs in seconds.
            </p>
            <a
              href="https://deependventures.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-muted hover:text-text-secondary transition-colors text-sm"
            >
              <svg className="h-5 w-5" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="#1e40af"/>
                <path d="M25 30h50v10H35v10h30v10H35v10h40v10H25V30z" fill="white"/>
              </svg>
              Built by Deep End Ventures
            </a>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/changelog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Changelog</Link></li>
              <li><Link href="/pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Documentation</Link></li>
              <li><Link href="/blog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="https://deependventures.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Deep End Ventures</a></li>
              <li><a href="https://github.com/deep-end-ventures/shiplog" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-text-primary transition-colors">GitHub</a></li>
              <li><Link href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} ShipLog. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
            A{" "}
            <a href="https://deependventures.com" target="_blank" rel="noopener noreferrer" className="text-accent-light hover:underline">
              Deep End Ventures
            </a>{" "}
            product.
          </p>
        </div>
      </div>
    </footer>
  );
}
