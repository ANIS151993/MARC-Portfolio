/* ---------------------------------------------------------------
   MARC portfolio UI — renders Works, Projects, Publications and the
   visual summaries (charts, stat tiles) from window.MARC_DATA.

   Load order: portfolio-data.js → portfolio-ui.js → script.js
   (script.js then animates [data-counter] and .reveal nodes created here)
   --------------------------------------------------------------- */
(function () {
  const DATA = window.MARC_DATA;
  if (!DATA) return;

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const $all = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const ordinal = (n) => n + (["th", "st", "nd", "rd"][(n % 100 - 20) % 10] || ["th", "st", "nd", "rd"][n % 100] || "th");
  const ext = 'target="_blank" rel="noopener"';

  const ICONS = {
    web: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.9 6h-3a15.7 15.7 0 0 0-1.4-4A8 8 0 0 1 18.9 8ZM12 4c.8 1.1 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.9 1.9-4ZM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3Zm.8 2h3a15.7 15.7 0 0 0 1.4 4A8 8 0 0 1 5.1 16Zm3-8h-3a8 8 0 0 1 4.4-4 15.7 15.7 0 0 0-1.4 4ZM12 20c-.8-1.1-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.9-1.9 4Zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4Zm.3 6a15.7 15.7 0 0 0 1.4-4h3a8 8 0 0 1-4.4 4Zm1.7-6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4Z"/>',
    system: '<path d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6v2h3v2H7v-2h3v-2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 2v9h16V6H4Zm2 2h5v2H6V8Zm0 3h8v2H6v-2Z"/>',
    mail: '<path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l8 5 8-5V7H4Zm16 2.9-8 5-8-5V17h16V9.9Z"/>',
    file: '<path d="M3 5a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm2 0v13h14V7h-7.8l-2-2H5Z"/>',
    voice: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1l-2.2 2.23Z"/>',
    network: '<path d="M10 2h4v4h-1v3h6a1 1 0 0 1 1 1v3h1v4h-4v-4h1v-2h-5v2h1v4h-4v-4h1v-2H6v2h1v4H3v-4h1v-3a1 1 0 0 1 1-1h6V6h-1V2Z"/>',
    cloud: '<path d="M6.5 19A5.5 5.5 0 0 1 5.8 8.04 7 7 0 0 1 19.3 9.6 4.75 4.75 0 0 1 18.25 19H6.5Zm0-2h11.75a2.75 2.75 0 0 0 .2-5.5l-1.64-.12-.2-1.63a5 5 0 0 0-9.64-1.12l-.47 1.2-1.28.14A3.5 3.5 0 0 0 6.5 17Z"/>',
    security: '<path d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Zm0 2.2 6 2.25V11c0 3.9-2.5 7.6-6 8.9-3.5-1.3-6-5-6-8.9V6.45l6-2.25Zm-1 10.3-2.5-2.5 1.4-1.4 1.1 1.1 3.6-3.6 1.4 1.4-5 5Z"/>',
    ai: '<path d="M9 2h6v2h2a2 2 0 0 1 2 2v2h2v2h-2v4h2v2h-2v2a2 2 0 0 1-2 2h-2v2H9v-2H7a2 2 0 0 1-2-2v-2H3v-2h2v-4H3V8h2V6a2 2 0 0 1 2-2h2V2ZM7 6v12h10V6H7Zm2 2h6v8H9V8Zm2 2v4h2v-4h-2Z"/>',
    automation: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    external: '<path d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H5v12h12v-6h2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.46-1.1-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/>',
    doc: '<path d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm7 1.5V9h5.5L13 3.5ZM8 13h8v2H8v-2Zm0 4h8v2H8v-2Z"/>',
    play: '<path d="M8 5v14l11-7L8 5Z"/>'
  };
  const icon = (name, cls = "pf-icon") => `<svg class="${cls}" viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">${ICONS[name] || ICONS.web}</svg>`;

  const WORK_CATS = { web: "Web", system: "Systems", mail: "Mail Server", file: "File Server", voice: "IP-Telephony", network: "Network Architecture", cloud: "Cloud Architecture" };
  const PROJECT_CATS = { security: "Security", ai: "AI & LLM", cloud: "Cloud & Edge", automation: "Automation", web: "Web & API" };
  const STATUS = { published: "Published", accepted: "Accepted", review: "Under Review", prep: "In Preparation" };
  const WORK_STATUS = { live: "Live", private: "Private network", archived: "Delivered · retired" };

  const pubs = DATA.publications;
  const published = pubs.filter((p) => p.status === "published");
  const stats = {
    pubTotal: pubs.length,
    pubPublished: published.length,
    pubAccepted: pubs.filter((p) => p.status === "accepted").length,
    pubReview: pubs.filter((p) => p.status === "review").length,
    pubPrep: pubs.filter((p) => p.status === "prep").length,
    pubPipeline: pubs.filter((p) => p.status !== "published").length,
    pubFirst: pubs.filter((p) => p.pos === 1).length,
    pubFirstPublished: published.filter((p) => p.pos === 1).length,
    citations: DATA.scholar.citations,
    hIndex: DATA.scholar.hIndex,
    i10Index: DATA.scholar.i10Index,
    worksTotal: DATA.works.length,
    worksLive: DATA.works.filter((w) => w.status === "live").length,
    clientsTotal: new Set(DATA.works.map((w) => w.client)).size,
    projectsJob: DATA.projects.filter((p) => p.sites.includes("job")).length,
    projectsPhd: DATA.projects.filter((p) => p.sites.includes("phd")).length
  };

  /* ---------- [data-stat] fills (animated later by script.js) ---------- */
  $all("[data-stat]").forEach((node) => {
    const value = stats[node.getAttribute("data-stat")];
    if (value === undefined) return;
    if (node.hasAttribute("data-animate")) {
      node.setAttribute("data-counter", String(value));
      node.textContent = "0";
    } else {
      node.textContent = String(value);
    }
  });

  /* ---------- shared filter chip helper ---------- */
  const buildFilters = (host, options, onChange) => {
    host.innerHTML = options.map(([key, label, count], i) =>
      `<button type="button" class="pf-chip${i === 0 ? " is-active" : ""}" data-key="${esc(key)}" aria-pressed="${i === 0}">${esc(label)}${count !== undefined ? ` <span>${count}</span>` : ""}</button>`
    ).join("");
    host.addEventListener("click", (e) => {
      const btn = e.target.closest(".pf-chip");
      if (!btn) return;
      $all(".pf-chip", host).forEach((b) => { const on = b === btn; b.classList.toggle("is-active", on); b.setAttribute("aria-pressed", String(on)); });
      onChange(btn.getAttribute("data-key"));
    });
  };

  const barChart = (rows, { max, unit = "" } = {}) => {
    const top = max || Math.max(...rows.map((r) => r.value), 1);
    return `<ul class="pf-bars">${rows.map((r) => `
      <li>
        <span class="pf-bar-label">${r.icon ? icon(r.icon, "pf-icon pf-icon-sm") : ""}${esc(r.label)}</span>
        <span class="pf-bar-track"><span class="pf-bar-fill" style="--pct:${Math.max(4, (r.value / top) * 100).toFixed(1)}%"></span></span>
        <strong class="pf-bar-value">${r.value}${unit}</strong>
      </li>`).join("")}</ul>`;
  };

  /* ---------- Works ---------- */
  $all('[data-render="works"]').forEach((host) => {
    const works = DATA.works;
    const catCounts = Object.keys(WORK_CATS).map((k) => [k, WORK_CATS[k], works.filter((w) => w.cat.includes(k)).length]).filter((c) => c[2]);

    host.innerHTML = `
      <div class="pf-works-top reveal">
        <div class="pf-panel pf-works-chart">
          <p class="pf-kicker">Delivery mix</p>
          ${barChart(catCounts.map(([k, label, value]) => ({ label, value, icon: k })))}
        </div>
        <div class="pf-panel pf-works-status">
          <p class="pf-kicker">Where they stand</p>
          <div class="pf-status-tiles">
            <div><strong>${stats.worksLive}</strong><span><i class="pf-dot pf-dot-live"></i>Live, public link</span></div>
            <div><strong>${works.filter((w) => w.status === "private").length}</strong><span><i class="pf-dot pf-dot-private"></i>Private network</span></div>
            <div><strong>${works.filter((w) => w.status === "archived").length}</strong><span><i class="pf-dot pf-dot-archived"></i>Delivered, domain retired</span></div>
          </div>
          <p class="pf-kicker">Clients served</p>
          <div class="pf-client-cloud">${[...new Set(works.map((w) => w.client))].map((c) => `<span>${esc(c)}</span>`).join("")}</div>
        </div>
      </div>
      <div class="pf-filters reveal" role="toolbar" aria-label="Filter completed works"></div>
      <div class="pf-grid pf-work-grid"></div>
      <button type="button" class="btn btn-ghost pf-more">Show all ${works.length} works</button>`;

    const grid = host.querySelector(".pf-work-grid");
    grid.innerHTML = works.map((w) => {
      const primary = w.cat[0];
      const links = (w.links || []).map((l, i) => `<a class="pf-link${i === 0 ? " pf-link-primary" : ""}" href="${esc(l.url)}" ${ext}>${icon(l.label === "Repo" ? "github" : "external", "pf-icon pf-icon-sm")}${esc(l.label)}</a>`).join("");
      return `
        <article class="pf-work pf-cat-${primary}" data-cat="${w.cat.join(" ")}">
          <div class="pf-work-head">
            <span class="pf-work-icon">${icon(primary)}</span>
            <span class="pf-status pf-status-${w.status}"><i class="pf-dot pf-dot-${w.status}"></i>${WORK_STATUS[w.status]}</span>
          </div>
          <p class="pf-work-client">${esc(w.client)}${w.year ? ` · ${w.year}` : ""}</p>
          <h3>${esc(w.name)}</h3>
          <p class="pf-work-summary">${esc(w.summary)}</p>
          <div class="pf-work-foot"><span class="pf-tag">${esc(WORK_CATS[primary])}</span>${links ? `<div class="pf-links">${links}</div>` : ""}</div>
        </article>`;
    }).join("");

    const more = host.querySelector(".pf-more");
    let workFilter = "all";
    let expanded = false;
    const syncWorks = () => {
      $all(".pf-work", grid).forEach((card, i) => {
        const match = workFilter === "all" || card.dataset.cat.split(" ").includes(workFilter);
        card.hidden = !match || (workFilter === "all" && !expanded && i >= 8);
      });
      more.hidden = expanded || workFilter !== "all";
    };
    buildFilters(host.querySelector(".pf-filters"), [["all", "All", works.length], ...catCounts], (key) => { workFilter = key; syncWorks(); });
    more.addEventListener("click", () => { expanded = true; syncWorks(); });
    syncWorks();
  });

  /* ---------- Projects ---------- */
  const modal = (() => {
    let el = null;
    const close = () => { if (!el) return; el.hidden = true; el.querySelector("iframe").src = "about:blank"; document.body.classList.remove("pf-modal-open"); };
    const open = (title, url) => {
      if (!el) {
        el = document.createElement("div");
        el.className = "pf-modal";
        el.hidden = true;
        el.innerHTML = `
          <div class="pf-modal-backdrop" data-close></div>
          <div class="pf-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="pfModalTitle">
            <div class="pf-modal-bar">
              <strong id="pfModalTitle"></strong>
              <a class="pf-link pf-link-primary" ${ext}>${icon("external", "pf-icon pf-icon-sm")}Open in new tab</a>
              <button type="button" class="pf-modal-close" data-close aria-label="Close preview">&times;</button>
            </div>
            <iframe title="Live project preview" loading="lazy" referrerpolicy="no-referrer"></iframe>
          </div>`;
        document.body.appendChild(el);
        el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) close(); });
        document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
      }
      el.querySelector("#pfModalTitle").textContent = title;
      el.querySelector(".pf-modal-bar a").href = url;
      el.querySelector("iframe").src = url;
      el.hidden = false;
      document.body.classList.add("pf-modal-open");
      el.querySelector(".pf-modal-close").focus();
    };
    return { open };
  })();

  $all('[data-render="projects"]').forEach((host) => {
    const site = host.getAttribute("data-site") || "job";
    const list = DATA.projects.filter((p) => p.sites.includes(site));
    const featured = list.filter((p) => p.featured);
    const rest = list.filter((p) => !p.featured);
    const catCounts = Object.keys(PROJECT_CATS).map((k) => [k, PROJECT_CATS[k], list.filter((p) => p.cat.includes(k)).length]).filter((c) => c[2]);

    const actions = (p) => [
      p.live || p.page ? `<button type="button" class="pf-link pf-link-primary" data-preview="${esc(p.live || p.page)}" data-title="${esc(p.name)}">${icon("play", "pf-icon pf-icon-sm")}Preview</button>` : "",
      p.live ? `<a class="pf-link" href="${esc(p.live)}" ${ext}>${icon("external", "pf-icon pf-icon-sm")}Live</a>` : "",
      p.page ? `<a class="pf-link" href="${esc(p.page)}" ${ext}>${icon("doc", "pf-icon pf-icon-sm")}Project page</a>` : "",
      p.repo ? `<a class="pf-link" href="${esc(p.repo)}" ${ext}>${icon("github", "pf-icon pf-icon-sm")}Code</a>` : ""
    ].join("");

    const card = (p, big) => `
      <article class="pf-project${big ? " pf-project-featured" : ""} pf-cat-${p.cat[0]}" data-cat="${p.cat.join(" ")}">
        <div class="pf-project-cover" aria-hidden="true">
          <span class="pf-project-glyph">${icon(p.cat[0])}</span>
          <span class="pf-project-short">${esc(p.short)}</span>
        </div>
        <div class="pf-project-body">
          <div class="pf-tags">${p.cat.map((c) => `<span class="pf-tag">${esc(PROJECT_CATS[c])}</span>`).join("")}${p.paper ? `<span class="pf-tag pf-tag-paper">${esc(p.paper)}</span>` : ""}</div>
          <h3>${esc(p.name)}</h3>
          <p>${esc(p.summary)}</p>
          ${p.metrics ? `<div class="pf-metrics">${p.metrics.map((m) => `<div><strong>${esc(m.v)}</strong><span>${esc(m.k)}</span></div>`).join("")}</div>` : ""}
          <div class="pf-links">${actions(p)}</div>
        </div>
      </article>`;

    host.innerHTML = `
      ${featured.length ? `<div class="pf-featured reveal">${featured.map((p) => card(p, true)).join("")}</div>` : ""}
      <div class="pf-filters reveal" role="toolbar" aria-label="Filter projects"></div>
      <div class="pf-grid pf-project-grid">${list.map((p) => card(p, false)).join("")}</div>`;

    const grid = host.querySelector(".pf-project-grid");
    // featured projects appear once up top; the grid shows everything when filtered
    const syncGrid = (key) => {
      $all(".pf-project", grid).forEach((c, i) => {
        const p = list[i];
        c.hidden = key === "all" ? p.featured : !p.cat.includes(key);
      });
    };
    buildFilters(host.querySelector(".pf-filters"), [["all", featured.length ? "More projects" : "All", featured.length ? rest.length : list.length], ...catCounts], syncGrid);
    syncGrid("all");

    host.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-preview]");
      if (btn) modal.open(btn.dataset.title, btn.dataset.preview);
    });
  });

  /* ---------- Publication charts ---------- */
  const donut = (segments, centerTop, centerBottom) => {
    const total = segments.reduce((s, x) => s + x.value, 0) || 1;
    const r = 42, c = 2 * Math.PI * r;
    let offset = 0;
    const arcs = segments.map((s) => {
      const len = (s.value / total) * c;
      const arc = `<circle r="${r}" cx="60" cy="60" fill="none" stroke-width="16" class="pf-seg pf-seg-${s.key}" stroke-dasharray="${len.toFixed(2)} ${(c - len).toFixed(2)}" stroke-dashoffset="${(-offset).toFixed(2)}"><title>${esc(s.label)}: ${s.value}</title></circle>`;
      offset += len;
      return arc;
    }).join("");
    return `
      <div class="pf-donut">
        <svg viewBox="0 0 120 120" role="img" aria-label="${segments.map((s) => `${s.label} ${s.value}`).join(", ")}">
          <circle r="${r}" cx="60" cy="60" fill="none" stroke-width="16" class="pf-seg-track"></circle>
          <g transform="rotate(-90 60 60)">${arcs}</g>
          <text x="60" y="58" text-anchor="middle" class="pf-donut-num">${esc(centerTop)}</text>
          <text x="60" y="74" text-anchor="middle" class="pf-donut-cap">${esc(centerBottom)}</text>
        </svg>
        <ul class="pf-legend">${segments.map((s) => `<li><i class="pf-swatch pf-seg-${s.key}"></i>${esc(s.label)}<strong>${s.value}</strong></li>`).join("")}</ul>
      </div>`;
  };

  $all('[data-chart="pub-status"]').forEach((host) => {
    host.innerHTML = donut([
      { key: "published", label: "Published", value: stats.pubPublished },
      { key: "accepted", label: "Accepted", value: stats.pubAccepted },
      { key: "review", label: "Under review", value: stats.pubReview },
      { key: "prep", label: "In preparation", value: stats.pubPrep }
    ], String(stats.pubTotal), "papers");
  });

  $all('[data-chart="pub-authorship"]').forEach((host) => {
    host.innerHTML = donut([
      { key: "first", label: "First author", value: stats.pubFirst },
      { key: "co", label: "Co-author", value: stats.pubTotal - stats.pubFirst }
    ], String(stats.pubFirst), "first-author");
  });

  $all('[data-chart="pub-timeline"]').forEach((host) => {
    const cols = [
      { label: "2025", items: published.filter((p) => p.date.startsWith("2025")) },
      { label: "2026", items: published.filter((p) => p.date.startsWith("2026")) },
      { label: "Pipeline", items: pubs.filter((p) => p.status !== "published"), pipeline: true }
    ];
    const max = Math.max(...cols.map((c) => c.items.length));
    host.innerHTML = `<div class="pf-columns">${cols.map((c) => {
      const first = c.items.filter((p) => p.pos === 1).length;
      const co = c.items.length - first;
      return `<div class="pf-col${c.pipeline ? " pf-col-pipeline" : ""}">
        <strong>${c.items.length}</strong>
        <div class="pf-col-stack" style="--h:${Math.round((c.items.length / max) * 100)}">
          <span class="pf-col-co" style="flex:${co}" title="${co} co-authored"></span>
          <span class="pf-col-first" style="flex:${first}" title="${first} first-author"></span>
        </div>
        <span>${c.label}</span>
      </div>`;
    }).join("")}</div>
    <ul class="pf-legend pf-legend-inline"><li><i class="pf-swatch pf-seg-first"></i>First author</li><li><i class="pf-swatch pf-seg-co"></i>Co-author</li></ul>`;
  });

  $all('[data-chart="pub-topics"]').forEach((host) => {
    const topics = {};
    pubs.forEach((p) => { topics[p.topic] = (topics[p.topic] || 0) + 1; });
    host.innerHTML = barChart(Object.entries(topics).sort((a, b) => b[1] - a[1]).map(([label, value]) => ({ label, value })));
  });

  $all('[data-chart="top-cited"]').forEach((host) => {
    const limit = Number(host.getAttribute("data-limit") || 6);
    const rows = published.filter((p) => p.cites > 0).sort((a, b) => b.cites - a.cites).slice(0, limit);
    host.innerHTML = barChart(rows.map((p) => ({ label: p.title.split(":")[0], value: p.cites })));
  });

  /* ---------- Publication list ---------- */
  $all('[data-render="publications"]').forEach((host) => {
    const limitFirst = host.getAttribute("data-mode") === "compact";
    const order = { published: 0, accepted: 1, review: 2, prep: 3 };
    const list = pubs.slice().sort((a, b) => order[a.status] - order[b.status] || a.pos - b.pos || b.date.localeCompare(a.date));

    const row = (p) => {
      const date = p.status === "published" ? new Date(p.date + "T00:00:00").toLocaleDateString("en-US", { month: "short", year: "numeric" }) : "";
      const links = [
        p.ieee ? `<a class="pf-link pf-link-primary" href="${esc(p.ieee)}" ${ext}>${icon("doc", "pf-icon pf-icon-sm")}IEEE Xplore</a>` : "",
        p.page ? `<a class="pf-link" href="${esc(p.page)}" ${ext}>${icon("web", "pf-icon pf-icon-sm")}Project page</a>` : ""
      ].join("");
      return `
        <article class="pf-pub pf-pub-${p.status}" data-status="${p.status}" data-first="${p.pos === 1}" data-search="${esc((p.title + " " + p.venue + " " + p.topic + " " + (p.collab || "")).toLowerCase())}">
          <div class="pf-pub-rail">
            <span class="pf-status pf-status-${p.status}">${STATUS[p.status]}</span>
            <span class="pf-pos${p.pos === 1 ? " pf-pos-first" : ""}" title="Author position">${ordinal(p.pos)} author</span>
          </div>
          <div class="pf-pub-main">
            <h3>${esc(p.title)}</h3>
            <p class="pf-pub-meta"><span title="${esc(p.venueFull || p.venue)}">${esc(p.venue)}</span>${date ? ` · ${date}` : ""} · ${esc(p.topic)}${p.collab ? ` · with ${esc(p.collab)}` : ""}</p>
            ${links ? `<div class="pf-links">${links}</div>` : ""}
          </div>
          ${p.cites ? `<div class="pf-cites" title="Google Scholar citations"><strong>${p.cites}</strong><span>cites</span></div>` : ""}
        </article>`;
    };

    host.innerHTML = `
      <div class="pf-pub-toolbar reveal">
        <div class="pf-filters" role="toolbar" aria-label="Filter publications"></div>
        <label class="pf-search"><span class="sr-only">Search publications</span><input type="search" placeholder="Search title, venue, topic…"></label>
      </div>
      <div class="pf-pub-list">${list.map(row).join("")}</div>
      <p class="pf-empty" hidden>No papers match that search.</p>
      ${limitFirst ? `<button type="button" class="btn btn-ghost pf-more">Show all ${list.length} papers</button>` : ""}`;

    const listEl = host.querySelector(".pf-pub-list");
    const cards = $all(".pf-pub", listEl);
    const input = host.querySelector("input");
    const empty = host.querySelector(".pf-empty");
    const more = host.querySelector(".pf-more");
    let filter = "all";
    let expanded = !limitFirst;

    const apply = () => {
      const q = input.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach((c) => {
        const match =
          (filter === "all" ||
            (filter === "first" && c.dataset.first === "true") ||
            (filter === "co" && c.dataset.first === "false") ||
            (filter === "pipeline" && c.dataset.status !== "published") ||
            c.dataset.status === filter) &&
          (!q || c.dataset.search.includes(q));
        const within = expanded || filter !== "all" || q || shown < 6;
        c.hidden = !(match && within);
        if (match) shown += 1;
      });
      empty.hidden = cards.some((c) => !c.hidden);
      if (more) more.hidden = expanded || filter !== "all" || !!q;
    };

    buildFilters(host.querySelector(".pf-filters"), [
      ["all", "All", stats.pubTotal],
      ["published", "Published", stats.pubPublished],
      ["first", "First author", stats.pubFirst],
      ["co", "Co-author", stats.pubTotal - stats.pubFirst],
      ["pipeline", "In pipeline", stats.pubPipeline]
    ], (key) => { filter = key; apply(); });
    input.addEventListener("input", apply);
    if (more) more.addEventListener("click", () => { expanded = true; apply(); });
    apply();
  });

  /* ---------- Animate bar fills when visible ---------- */
  const bars = $all(".pf-bars, .pf-columns, .pf-donut");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-drawn"); obs.unobserve(en.target); } });
    }, { threshold: 0.3 });
    bars.forEach((b) => io.observe(b));
  } else {
    bars.forEach((b) => b.classList.add("is-drawn"));
  }
})();
