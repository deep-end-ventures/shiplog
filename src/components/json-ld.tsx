export function JsonLd() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ShipLog",
    url: "https://shiplog.deependventures.com",
    description: "AI-powered changelog and release notes generator for developers",
    creator: {
      "@type": "Organization",
      name: "Deep End Ventures",
      url: "https://deependventures.com",
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ShipLog",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
      },
      {
        "@type": "Offer",
        price: "19",
        priceCurrency: "USD",
        name: "Pro",
        billingPeriod: "Monthly",
      },
      {
        "@type": "Offer",
        price: "39",
        priceCurrency: "USD",
        name: "Team",
        billingPeriod: "Monthly",
      },
    ],
    description: "Auto-generate beautiful changelogs from GitHub commits and PRs with AI.",
    creator: {
      "@type": "Organization",
      name: "Deep End Ventures",
      url: "https://deependventures.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
