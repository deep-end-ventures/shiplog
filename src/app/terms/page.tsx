import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "ShipLog terms of service.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
      <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
        <p>Last updated: January 31, 2026</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">1. Acceptance of Terms</h2>
        <p>By using ShipLog, you agree to these Terms of Service. ShipLog is operated by Deep End Ventures.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">2. Service Description</h2>
        <p>ShipLog is an AI-powered changelog and release notes generator that connects to your GitHub repositories to create structured changelog entries.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">3. User Responsibilities</h2>
        <p>You are responsible for maintaining the security of your account, the content of your changelogs, and compliance with applicable laws.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">4. Subscription & Billing</h2>
        <p>Paid plans are billed monthly. You may cancel at any time. Refunds are provided on a case-by-case basis for the current billing period.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">5. Limitation of Liability</h2>
        <p>ShipLog is provided &ldquo;as is&rdquo; without warranties. Deep End Ventures is not liable for any damages arising from your use of the service.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">6. Contact</h2>
        <p>For questions about these terms, contact us at legal@deependventures.com or visit <a href="https://deependventures.com" className="text-accent-light hover:underline">deependventures.com</a>.</p>
      </div>
    </div>
  );
}
