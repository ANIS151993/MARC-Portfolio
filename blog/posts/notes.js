const notesGrid = document.getElementById("notesGrid");
const metricStrip = document.getElementById("metricStrip");
const filterBar = document.getElementById("noteFilters");
const tagFilterBar = document.getElementById("tagFilters");
const noteSearch = document.getElementById("noteSearch");
const clearSearch = document.getElementById("clearSearch");
const resultSummary = document.getElementById("resultSummary");
const yearNode = document.getElementById("currentYear");
const progressBar = document.getElementById("pageProgress");

const notes = Object.entries(window.blogPostCatalog || {}).map(([slug, note]) => ({
  slug,
  ...note
}));

const state = {
  group: "all",
  tag: "all",
  query: ""
};

let revealObserver;

const getGroup = (note) => {
  if (note.type.includes("Project")) return "project";
  if (note.type.includes("Paper")) return "paper";
  return "work";
};

const normalize = (value) => String(value || "").trim().toLowerCase();

const getSearchText = (note) =>
  normalize([
    note.type,
    note.kicker,
    note.title,
    note.summary,
    ...(note.tags || []),
    ...(note.facts || []).map((fact) => `${fact.label} ${fact.value}`),
    ...(note.sections || []).flatMap((section) => [section.heading, section.text, ...(section.bullets || [])])
  ].join(" "));

const notesWithSearch = notes.map((note) => ({
  ...note,
  group: getGroup(note),
  searchText: getSearchText(note)
}));

const orderedNotes = notesWithSearch.sort((a, b) => {
  const order = { project: 0, paper: 1, work: 2 };
  return order[a.group] - order[b.group] || a.title.localeCompare(b.title);
});

const tagCounts = orderedNotes.reduce((acc, note) => {
  note.tags.forEach((tag) => {
    acc.set(tag, (acc.get(tag) || 0) + 1);
  });
  return acc;
}, new Map());

const popularTags = Array.from(tagCounts.entries())
  .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  .slice(0, 14)
  .map(([tag]) => tag);

const escapeHtml = (value) =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

const renderMetrics = () => {
  const projectCount = orderedNotes.filter((note) => note.group === "project").length;
  const paperCount = orderedNotes.filter((note) => note.group === "paper").length;
  const workCount = orderedNotes.filter((note) => note.group === "work").length;

  metricStrip.innerHTML = `
    <article class="reveal"><strong>${orderedNotes.length}</strong><span>Total detailed notes</span></article>
    <article class="reveal"><strong>${projectCount}</strong><span>Project notes</span></article>
    <article class="reveal"><strong>${paperCount}</strong><span>Paper notes</span></article>
    <article class="reveal"><strong>${workCount}</strong><span>Latest works notes</span></article>
  `;
};

const renderTagFilters = () => {
  if (!tagFilterBar) {
    return;
  }

  tagFilterBar.innerHTML = `
    <button class="${state.tag === "all" ? "active" : ""}" data-tag="all" type="button">All Tags</button>
    ${popularTags
      .map(
        (tag) => `
          <button class="${state.tag === tag ? "active" : ""}" data-tag="${escapeHtml(tag)}" type="button">
            ${escapeHtml(tag)}
          </button>
        `
      )
      .join("")}
  `;
};

const getFilteredNotes = () =>
  orderedNotes.filter((note) => {
    const matchesGroup = state.group === "all" || note.group === state.group;
    const matchesTag = state.tag === "all" || note.tags.includes(state.tag);
    const matchesQuery = !state.query || note.searchText.includes(state.query);
    return matchesGroup && matchesTag && matchesQuery;
  });

const renderNotes = () => {
  const filteredNotes = getFilteredNotes();

  if (!filteredNotes.length) {
    notesGrid.innerHTML = `
      <article class="empty-state reveal">
        <p class="section-kicker">No exact match</p>
        <h3>No notes match the current search and filters.</h3>
        <p>Try a broader keyword like cloud, network, security, research, serverless, or Zero Trust.</p>
      </article>
    `;
  } else {
    notesGrid.innerHTML = filteredNotes
      .map(
        (note) => `
          <article class="note-card reveal" data-notegroup="${note.group}">
            <p class="section-kicker">${note.type}</p>
            <h3>${note.title}</h3>
            <p>${note.summary}</p>
            <div class="note-meta">
              <span>${note.kicker}</span>
              <span>${note.facts[0].value}</span>
            </div>
            <div class="tag-cloud">
              ${note.tags.slice(0, 5).map((tag) => `<span>${tag}</span>`).join("")}
            </div>
            <div class="note-actions">
              <a class="note-link" href="/blog/posts/${note.slug}/">Open Note</a>
              <a class="blog-link" href="/blog/">Back to Blog Hub</a>
            </div>
          </article>
        `
      )
      .join("");
  }

  if (resultSummary) {
    const parts = [];
    if (state.group !== "all") parts.push(state.group);
    if (state.tag !== "all") parts.push(state.tag);
    if (state.query) parts.push(`search "${state.query}"`);
    resultSummary.textContent = parts.length
      ? `Showing ${filteredNotes.length} matching notes for ${parts.join(" + ")}.`
      : `Showing all ${orderedNotes.length} notes.`;
  }

  observeReveals();
};

const observeReveals = () => {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
  }

  document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
};

const setupFilters = () => {
  if (filterBar) {
    filterBar.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        state.group = button.getAttribute("data-filter") || "all";
        filterBar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        renderNotes();
      });
    });
  }

  if (tagFilterBar) {
    tagFilterBar.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-tag]");
      if (!button) {
        return;
      }

      state.tag = button.getAttribute("data-tag") || "all";
      renderTagFilters();
      renderNotes();
    });
  }

  if (noteSearch) {
    noteSearch.addEventListener("input", () => {
      state.query = normalize(noteSearch.value);
      renderNotes();
    });
  }

  if (clearSearch) {
    clearSearch.addEventListener("click", () => {
      state.query = "";
      state.tag = "all";
      state.group = "all";

      if (noteSearch) {
        noteSearch.value = "";
      }

      filterBar?.querySelectorAll("button").forEach((button) => {
        button.classList.toggle("active", button.getAttribute("data-filter") === "all");
      });

      renderTagFilters();
      renderNotes();
    });
  }
};

const setupProgress = () => {
  const update = () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    if (progressBar) {
      progressBar.style.transform = `scaleX(${progress})`;
    }
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
};

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

renderMetrics();
renderTagFilters();
renderNotes();
setupFilters();
setupProgress();
