const notesGrid = document.getElementById("notesGrid");
const metricStrip = document.getElementById("metricStrip");
const filterBar = document.getElementById("noteFilters");
const yearNode = document.getElementById("currentYear");
const progressBar = document.getElementById("pageProgress");

const notes = Object.entries(window.blogPostCatalog || {}).map(([slug, note]) => ({ slug, ...note }));

const getGroup = (note) => {
  if (note.type.includes("Project")) return "project";
  if (note.type.includes("Paper")) return "paper";
  return "work";
};

const orderedNotes = notes.sort((a, b) => {
  const order = { project: 0, paper: 1, work: 2 };
  return order[getGroup(a)] - order[getGroup(b)] || a.title.localeCompare(b.title);
});

const renderMetrics = () => {
  const projectCount = orderedNotes.filter((note) => getGroup(note) === "project").length;
  const paperCount = orderedNotes.filter((note) => getGroup(note) === "paper").length;
  const workCount = orderedNotes.filter((note) => getGroup(note) === "work").length;

  metricStrip.innerHTML = `
    <article class="reveal"><strong>${orderedNotes.length}</strong><span>Total detailed notes</span></article>
    <article class="reveal"><strong>${projectCount}</strong><span>Project notes</span></article>
    <article class="reveal"><strong>${paperCount}</strong><span>Paper notes</span></article>
    <article class="reveal"><strong>${workCount}</strong><span>Latest works notes</span></article>
  `;
};

const renderNotes = () => {
  notesGrid.innerHTML = orderedNotes
    .map(
      (note) => `
        <article class="note-card reveal" data-notegroup="${getGroup(note)}">
          <p class="section-kicker">${note.type}</p>
          <h3>${note.title}</h3>
          <p>${note.summary}</p>
          <div class="note-meta">
            <span>${note.kicker}</span>
            <span>${note.facts[0].value}</span>
          </div>
          <div class="tag-cloud">
            ${note.tags.slice(0, 4).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <div class="note-actions">
            <a class="note-link" href="./${note.slug}/">Open Note</a>
            <a class="blog-link" href="../">Back to Blog Hub</a>
          </div>
        </article>
      `
    )
    .join("");
};

const setupFilters = () => {
  if (!filterBar) return;
  const cards = () => document.querySelectorAll("#notesGrid .note-card");

  filterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      filterBar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards().forEach((card) => {
        const group = card.getAttribute("data-notegroup") || "";
        const show = filter === "all" || group === filter;
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
};

const setupReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
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
renderNotes();
setupFilters();
setupReveal();
setupProgress();
