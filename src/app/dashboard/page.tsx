"use client";

import { useState } from "react";
import type { ChangeCategory, ChangeEntry, Release } from "@/lib/changelog-data";
import { categoryConfig, sampleReleases } from "@/lib/changelog-data";

export default function DashboardPage() {
  const [releases, setReleases] = useState<Release[]>(sampleReleases);
  const [showForm, setShowForm] = useState(false);
  const [version, setVersion] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [changes, setChanges] = useState<ChangeEntry[]>([
    { category: "added", text: "" },
  ]);

  const addChange = () => {
    setChanges([...changes, { category: "added", text: "" }]);
  };

  const removeChange = (index: number) => {
    setChanges(changes.filter((_, i) => i !== index));
  };

  const updateChange = (index: number, field: keyof ChangeEntry, value: string) => {
    const updated = [...changes];
    if (field === "category") {
      updated[index] = { ...updated[index], category: value as ChangeCategory };
    } else {
      updated[index] = { ...updated[index], text: value };
    }
    setChanges(updated);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRelease: Release = {
      id: `v${version}`,
      version,
      date: new Date().toISOString().split("T")[0],
      title,
      description: description || undefined,
      changes: changes.filter((c) => c.text.trim()),
    };
    setReleases([newRelease, ...releases]);
    setShowForm(false);
    setVersion("");
    setTitle("");
    setDescription("");
    setChanges([{ category: "added", text: "" }]);
  };

  const deleteRelease = (id: string) => {
    setReleases(releases.filter((r) => r.id !== id));
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-text-secondary text-sm mt-1">
            Manage your changelog entries. Create, edit, and publish releases.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-light transition-colors"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Release
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="rounded-xl border border-border bg-bg-card p-5">
          <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Total Releases</p>
          <p className="text-2xl font-bold">{releases.length}</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5">
          <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Total Changes</p>
          <p className="text-2xl font-bold">{releases.reduce((acc, r) => acc + r.changes.length, 0)}</p>
        </div>
        <div className="rounded-xl border border-border bg-bg-card p-5">
          <p className="text-text-muted text-xs uppercase tracking-wider mb-1">Latest Version</p>
          <p className="text-2xl font-bold">v{releases[0]?.version || "—"}</p>
        </div>
      </div>

      {/* Create Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="rounded-xl border border-accent/30 bg-bg-card p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-bold mb-6">Create New Release</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Version</label>
              <input
                type="text"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                placeholder="3.0.0"
                required
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-1.5">Title</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What's new in this release?"
                required
                className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-text-secondary mb-1.5">Description (optional)</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary of this release..."
              rows={2}
              className="w-full rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent resize-none"
            />
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm font-medium text-text-secondary">Changes</label>
              <button
                type="button"
                onClick={addChange}
                className="text-xs text-accent-light hover:text-accent-glow transition-colors"
              >
                + Add change
              </button>
            </div>
            <div className="space-y-3">
              {changes.map((change, index) => (
                <div key={index} className="flex items-start gap-3">
                  <select
                    value={change.category}
                    onChange={(e) => updateChange(index, "category", e.target.value)}
                    className="rounded-lg border border-border bg-bg-primary px-3 py-2.5 text-sm text-text-primary focus:outline-none focus:border-accent"
                  >
                    <option value="added">Added</option>
                    <option value="improved">Improved</option>
                    <option value="fixed">Fixed</option>
                    <option value="removed">Removed</option>
                  </select>
                  <input
                    type="text"
                    value={change.text}
                    onChange={(e) => updateChange(index, "text", e.target.value)}
                    placeholder="Describe the change..."
                    className="flex-1 rounded-lg border border-border bg-bg-primary px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent"
                  />
                  {changes.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeChange(index)}
                      className="p-2.5 text-text-muted hover:text-error transition-colors"
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-xl bg-accent px-6 py-2.5 text-sm font-medium text-white hover:bg-accent-light transition-colors"
            >
              Publish Release
            </button>
            <button
              type="button"
              onClick={() => setShowForm(false)}
              className="rounded-xl border border-border px-6 py-2.5 text-sm font-medium text-text-secondary hover:bg-bg-secondary transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      {/* Releases List */}
      <div className="space-y-4">
        {releases.map((release) => (
          <div key={release.id} className="rounded-xl border border-border bg-bg-card p-6 hover:border-border-light transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent-light">
                  v{release.version}
                </span>
                <h3 className="font-semibold">{release.title}</h3>
                <span className="text-xs text-text-muted">
                  {new Date(release.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                </span>
              </div>
              <button
                onClick={() => deleteRelease(release.id)}
                className="p-1.5 text-text-muted hover:text-error transition-colors rounded-lg hover:bg-error/10"
                title="Delete release"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
            {release.description && (
              <p className="text-text-secondary text-sm mb-3">{release.description}</p>
            )}
            <div className="flex flex-wrap gap-2">
              {release.changes.map((change, i) => {
                const config = categoryConfig[change.category];
                return (
                  <span
                    key={i}
                    className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs ${config.bgColor} ${config.color}`}
                  >
                    {config.label}: {change.text.length > 40 ? change.text.substring(0, 40) + "..." : change.text}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
