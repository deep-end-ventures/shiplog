import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "ShipLog privacy policy — how we handle your data.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-text-secondary text-sm leading-relaxed">
        <p>Last updated: January 31, 2026</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">1. Information We Collect</h2>
        <p>When you use ShipLog, we collect information you provide directly, including your GitHub account details (username, email, repository data), changelog entries you create, and usage analytics.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">2. How We Use Your Information</h2>
        <p>We use the information to provide and improve ShipLog services, generate changelogs from your repository data, communicate with you about your account, and analyze usage to improve the product.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">3. Data Sharing</h2>
        <p>We do not sell your personal information. We share data only with service providers who help operate ShipLog (hosting, analytics) and when required by law.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">4. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data. Repository access tokens are encrypted at rest and in transit.</p>
        <h2 className="text-xl font-semibold text-text-primary mt-8">5. Contact</h2>
        <p>For privacy inquiries, contact us at privacy@deependventures.com or visit <a href="https://deependventures.com" className="text-accent-light hover:underline">deependventures.com</a>.</p>
      </div>
    </div>
  );
}
