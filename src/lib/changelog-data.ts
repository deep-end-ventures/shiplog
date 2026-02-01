export type ChangeCategory = "added" | "fixed" | "improved" | "removed";

export interface ChangeEntry {
  category: ChangeCategory;
  text: string;
}

export interface Release {
  id: string;
  version: string;
  date: string;
  title: string;
  description?: string;
  changes: ChangeEntry[];
}

export const categoryConfig: Record<ChangeCategory, { label: string; color: string; bgColor: string }> = {
  added: { label: "Added", color: "text-success", bgColor: "bg-success/20" },
  fixed: { label: "Fixed", color: "text-error", bgColor: "bg-error/20" },
  improved: { label: "Improved", color: "text-info", bgColor: "bg-info/20" },
  removed: { label: "Removed", color: "text-warning", bgColor: "bg-warning/20" },
};

export const sampleReleases: Release[] = [
  {
    id: "v2.3.0",
    version: "2.3.0",
    date: "2025-01-31",
    title: "AI Summarization & Widget Themes",
    description: "Major update with AI-powered commit summarization and customizable widget themes.",
    changes: [
      { category: "added", text: "AI-powered commit message summarization using GPT-4o" },
      { category: "added", text: "Custom widget themes — light, dark, and auto modes" },
      { category: "added", text: "Webhook notifications for new releases" },
      { category: "improved", text: "Changelog timeline now loads 3x faster with virtualized rendering" },
      { category: "improved", text: "Better categorization accuracy for auto-generated entries" },
      { category: "fixed", text: "Widget embed script not loading on Safari 17" },
      { category: "fixed", text: "Duplicate entries appearing when force-pushing tags" },
    ],
  },
  {
    id: "v2.2.0",
    version: "2.2.0",
    date: "2025-01-22",
    title: "Embeddable Widget & API",
    description: "Launch of the embeddable changelog widget and public REST API.",
    changes: [
      { category: "added", text: "Embeddable changelog widget — single script tag for any website" },
      { category: "added", text: "Public REST API for programmatic changelog access" },
      { category: "added", text: "RSS/Atom feed for changelog subscriptions" },
      { category: "improved", text: "Dashboard UI refresh with better entry editing" },
      { category: "fixed", text: "Markdown rendering issues in changelog descriptions" },
      { category: "fixed", text: "Date picker timezone handling in dashboard" },
    ],
  },
  {
    id: "v2.1.0",
    version: "2.1.0",
    date: "2025-01-15",
    title: "GitHub App & Auto-Detection",
    description: "Seamless GitHub App integration with automatic release detection.",
    changes: [
      { category: "added", text: "GitHub App integration — install once, auto-detect releases" },
      { category: "added", text: "Support for monorepo changelog generation" },
      { category: "improved", text: "Release detection now supports tag patterns and branch conventions" },
      { category: "improved", text: "Entry categorization AI accuracy improved by 40%" },
      { category: "fixed", text: "OAuth callback redirect loop on Firefox" },
    ],
  },
  {
    id: "v2.0.0",
    version: "2.0.0",
    date: "2025-01-08",
    title: "ShipLog 2.0 — Complete Rewrite",
    description: "Ground-up rewrite with new AI engine, beautiful timeline UI, and team features.",
    changes: [
      { category: "added", text: "Brand new changelog timeline UI with smooth animations" },
      { category: "added", text: "Team workspaces with role-based access control" },
      { category: "added", text: "New AI engine for smarter, more human-readable changelog entries" },
      { category: "added", text: "Public changelog pages with custom domains" },
      { category: "added", text: "Email digest notifications for changelog subscribers" },
      { category: "improved", text: "Complete redesign of the dashboard experience" },
      { category: "improved", text: "Performance improvements across the board — 60% faster page loads" },
      { category: "removed", text: "Legacy v1 API endpoints (deprecated since 1.8)" },
      { category: "removed", text: "Old webhook format (migrated to v2 format)" },
    ],
  },
  {
    id: "v1.5.0",
    version: "1.5.0",
    date: "2024-12-20",
    title: "Markdown Support & Export",
    description: "Full markdown support and changelog export in multiple formats.",
    changes: [
      { category: "added", text: "Full markdown support in changelog entries" },
      { category: "added", text: "Export changelogs as Markdown, JSON, or HTML" },
      { category: "added", text: "Changelog search and filtering" },
      { category: "improved", text: "Better PR description parsing for auto-generation" },
      { category: "fixed", text: "Memory leak in real-time preview component" },
      { category: "fixed", text: "Incorrect version sorting for pre-release tags" },
    ],
  },
  {
    id: "v1.0.0",
    version: "1.0.0",
    date: "2024-12-01",
    title: "Initial Release",
    description: "The first public release of ShipLog — AI-powered changelogs for developers.",
    changes: [
      { category: "added", text: "GitHub repository connection via OAuth" },
      { category: "added", text: "AI-powered changelog generation from commits" },
      { category: "added", text: "Public changelog page with permanent URLs" },
      { category: "added", text: "Dashboard for manual changelog entry creation" },
      { category: "added", text: "Basic categorization (Added, Fixed, Improved, Removed)" },
      { category: "added", text: "Email + password authentication" },
    ],
  },
];
