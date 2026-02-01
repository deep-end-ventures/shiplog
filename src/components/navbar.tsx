"use client";

import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
              <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-text-primary">ShipLog</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/changelog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Changelog
            </Link>
            <Link href="/pricing" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Blog
            </Link>
            <Link href="/docs" className="text-sm text-text-secondary hover:text-text-primary transition-colors">
              Docs
            </Link>
            <Link
              href="/dashboard"
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-light transition-colors"
            >
              Dashboard
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-text-secondary"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            <Link href="/changelog" className="block text-sm text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
              Changelog
            </Link>
            <Link href="/pricing" className="block text-sm text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
              Pricing
            </Link>
            <Link href="/blog" className="block text-sm text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
              Blog
            </Link>
            <Link href="/docs" className="block text-sm text-text-secondary hover:text-text-primary" onClick={() => setMobileOpen(false)}>
              Docs
            </Link>
            <Link
              href="/dashboard"
              className="block rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white text-center"
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
