(function () {
  "use strict";

  const script = document.currentScript;
  const projectId = script?.getAttribute("data-project") || "demo";
  const theme = script?.getAttribute("data-theme") || "dark";
  const limit = parseInt(script?.getAttribute("data-limit") || "5", 10);
  const container = document.getElementById("shiplog-widget");

  if (!container) {
    console.warn("ShipLog: #shiplog-widget container not found");
    return;
  }

  const isDark = theme === "dark" || (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const colors = isDark
    ? { bg: "#0a1628", card: "#131f38", border: "#1e293b", text: "#f1f5f9", muted: "#94a3b8", accent: "#3b82f6" }
    : { bg: "#ffffff", card: "#f8fafc", border: "#e2e8f0", text: "#0f172a", muted: "#64748b", accent: "#1e40af" };

  const categoryColors = {
    added: { bg: isDark ? "rgba(34,197,94,0.15)" : "rgba(34,197,94,0.1)", text: "#22c55e" },
    fixed: { bg: isDark ? "rgba(239,68,68,0.15)" : "rgba(239,68,68,0.1)", text: "#ef4444" },
    improved: { bg: isDark ? "rgba(59,130,246,0.15)" : "rgba(59,130,246,0.1)", text: "#3b82f6" },
    removed: { bg: isDark ? "rgba(245,158,11,0.15)" : "rgba(245,158,11,0.1)", text: "#f59e0b" },
  };

  function render(releases) {
    let html = '<div style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;background:' + colors.bg + ';border:1px solid ' + colors.border + ';border-radius:12px;padding:20px;max-width:600px;">';
    html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">';
    html += '<h3 style="margin:0;color:' + colors.text + ';font-size:16px;font-weight:600;">What\'s New</h3>';
    html += '<a href="https://shiplog.dev/changelog" target="_blank" style="color:' + colors.accent + ';font-size:12px;text-decoration:none;">View all →</a>';
    html += '</div>';

    releases.forEach(function (release) {
      html += '<div style="background:' + colors.card + ';border:1px solid ' + colors.border + ';border-radius:8px;padding:16px;margin-bottom:12px;">';
      html += '<div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">';
      html += '<span style="background:rgba(30,64,175,0.15);color:' + colors.accent + ';font-size:12px;font-weight:600;padding:2px 8px;border-radius:9999px;">v' + release.version + '</span>';
      html += '<span style="color:' + colors.muted + ';font-size:12px;">' + new Date(release.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) + '</span>';
      html += '</div>';
      html += '<h4 style="margin:0 0 8px;color:' + colors.text + ';font-size:14px;font-weight:600;">' + release.title + '</h4>';

      release.changes.slice(0, 4).forEach(function (change) {
        var cat = categoryColors[change.category] || categoryColors.added;
        var label = change.category.charAt(0).toUpperCase() + change.category.slice(1);
        html += '<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:4px;">';
        html += '<span style="background:' + cat.bg + ';color:' + cat.text + ';font-size:10px;font-weight:500;padding:1px 6px;border-radius:9999px;white-space:nowrap;">' + label + '</span>';
        html += '<span style="color:' + colors.muted + ';font-size:13px;line-height:1.4;">' + change.text + '</span>';
        html += '</div>';
      });

      if (release.changes.length > 4) {
        html += '<span style="color:' + colors.muted + ';font-size:11px;">+ ' + (release.changes.length - 4) + ' more changes</span>';
      }

      html += '</div>';
    });

    html += '<div style="text-align:center;padding-top:4px;"><a href="https://shiplog.dev" target="_blank" style="color:' + colors.muted + ';font-size:10px;text-decoration:none;">Powered by ShipLog</a></div>';
    html += '</div>';

    container.innerHTML = html;
  }

  // Fetch releases from API
  fetch("https://shiplog.dev/api/widget?limit=" + limit + "&theme=" + theme)
    .then(function (res) { return res.json(); })
    .then(function (data) { render(data.releases); })
    .catch(function () {
      // Fallback with sample data
      container.innerHTML = '<div style="font-family:sans-serif;padding:20px;text-align:center;color:' + colors.muted + ';font-size:13px;">Unable to load changelog. Visit <a href="https://shiplog.dev/changelog" style="color:' + colors.accent + '">shiplog.dev/changelog</a></div>';
    });
})();
