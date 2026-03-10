const postSlug = document.body.dataset.postSlug || "";
const post = window.blogPostCatalog?.[postSlug];

const yearNode = document.getElementById("currentYear");
const progressBar = document.getElementById("pageProgress");
const heroKicker = document.getElementById("heroKicker");
const postTitle = document.getElementById("postTitle");
const postSummary = document.getElementById("postSummary");
const tagCloud = document.getElementById("tagCloud");
const heroActions = document.getElementById("heroActions");
const previewLabel = document.getElementById("previewLabel");
const previewCard = document.getElementById("previewCard");
const factGrid = document.getElementById("factGrid");
const sectionNav = document.getElementById("sectionNav");
const sidebarLabel = document.getElementById("sidebarLabel");
const sidebarTitle = document.getElementById("sidebarTitle");
const sidebarSummary = document.getElementById("sidebarSummary");
const sidebarMeta = document.getElementById("sidebarMeta");
const contentSections = document.getElementById("contentSections");
const resourceLinks = document.getElementById("resourceLinks");
const relatedGrid = document.getElementById("relatedGrid");

const getActionClass = (label, href = "") => {
  const text = `${label} ${href}`.toLowerCase();

  if (!href.startsWith("http") || text.includes("note") || text.includes("blog hub") || text.includes("portfolio")) {
    return "link-note";
  }

  if (text.includes("demo") || text.includes("live") || text.includes("ieee") || text.includes("venue")) {
    return "link-live";
  }

  return "link-source";
};

const renderNotFound = () => {
  document.title = "MARC | Note Not Found";
  if (postTitle) {
    postTitle.textContent = "I could not find this note.";
  }
  if (postSummary) {
    postSummary.textContent = "The link does not match one of my published notes. Please go back to the blog and open another note from there.";
  }
  if (heroActions) {
    heroActions.innerHTML = '<a class="btn btn-primary" href="/blog/">Back to My Blog</a>';
  }
};

const createLinks = (links) =>
  links
    .map(
      (link) =>
        `<a class="${getActionClass(link.label, link.href)}" href="${link.href}"${link.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${link.label}</a>`
    )
    .join("");

const renderPreview = (preview) => {
  if (!previewCard || !preview) {
    return;
  }

  if (preview.type === "iframe") {
    previewCard.innerHTML = `
      <article class="preview-card reveal">
        <div class="browser-bar" aria-hidden="true">
          <span></span><span></span><span></span>
          <p>${preview.browserLabel}</p>
        </div>
        <iframe class="preview-frame" src="${preview.url}" title="Live preview of ${post.title}" loading="lazy"></iframe>
      </article>
    `;
    return;
  }

  if (preview.type === "image") {
    previewCard.innerHTML = `
      <article class="preview-card preview-image-card reveal">
        <div class="preview-image-frame">
          <img src="${preview.src}" alt="${preview.alt || post.title}">
        </div>
        <div class="preview-image-copy">
          <p class="preview-label">${preview.label}</p>
          <h2>${preview.title}</h2>
          <p>${preview.note}</p>
        </div>
      </article>
    `;
    return;
  }

  previewCard.innerHTML = `
    <article class="preview-card preview-citation reveal">
      <p class="preview-label">${preview.label}</p>
      <h2>${preview.title}</h2>
      <p>${preview.note}</p>
      <div class="fact-pills">
        ${preview.pills.map((pill) => `<span>${pill}</span>`).join("")}
      </div>
    </article>
  `;
};

const renderGallery = (gallery) => {
  const currentGallery = document.getElementById("galleryShell");
  if (currentGallery) {
    currentGallery.remove();
  }

  if (!gallery?.length || !resourceLinks) {
    return;
  }

  const resourceSection = resourceLinks.closest("section");
  if (!resourceSection) {
    return;
  }

  const gallerySection = document.createElement("section");
  gallerySection.className = "gallery-shell reveal";
  gallerySection.id = "galleryShell";
  gallerySection.innerHTML = `
    <div class="gallery-head">
      <p class="section-kicker">Visual Walkthrough</p>
      <h2>Images and supporting visuals</h2>
      <p>I added a small visual gallery here so you can understand the project, work sample, or research direction faster.</p>
    </div>
    <div class="mini-gallery">
      ${gallery
        .map(
          (item) => `
            <article class="gallery-card">
              ${item.href ? `<a class="gallery-media-link" href="${item.href}" target="_blank" rel="noopener">` : ""}
                <div class="gallery-media">
                  <img src="${item.src}" alt="${item.alt || item.title}">
                </div>
              ${item.href ? "</a>" : ""}
              <div class="gallery-copy">
                <h3>${item.title}</h3>
                <p>${item.caption}</p>
                ${
                  item.href
                    ? `<a class="inline-link link-live" href="${item.href}" target="_blank" rel="noopener">Open Visual</a>`
                    : ""
                }
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;

  resourceSection.parentNode.insertBefore(gallerySection, resourceSection);
};

const renderPost = () => {
  if (!post) {
    renderNotFound();
    return;
  }

  document.title = `MARC | ${post.title}`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && post.metaDescription) {
    metaDescription.setAttribute("content", post.metaDescription);
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }

  sidebarLabel.textContent = post.type;
  sidebarTitle.textContent = post.title;
  sidebarSummary.textContent = post.summary;
  heroKicker.textContent = post.kicker;
  postTitle.textContent = post.title;
  postSummary.textContent = post.summary;
  previewLabel.textContent = post.preview?.label || "A quick look";

  tagCloud.innerHTML = post.tags.map((tag) => `<span>${tag}</span>`).join("");

  const primaryLink = post.resources?.[0];
  heroActions.innerHTML = `
    ${primaryLink ? `<a class="btn btn-primary" href="${primaryLink.href}"${primaryLink.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${primaryLink.label}</a>` : ""}
    <a class="btn btn-secondary" href="/blog/posts/">All My Notes</a>
    <a class="btn btn-secondary" href="/blog/">Back to My Blog</a>
    <a class="btn btn-secondary" href="/">Main Portfolio</a>
  `;

  renderPreview(post.preview);
  renderGallery(post.gallery);

  factGrid.innerHTML = post.facts
    .map(
      (fact) => `
        <article class="fact-card reveal">
          <p class="fact-label">${fact.label}</p>
          <strong>${fact.value}</strong>
        </article>
      `
    )
    .join("");

  sidebarMeta.innerHTML = post.sidebarStats
    .map(
      (item) => `
        <article>
          <strong>${item.value}</strong>
          <span>${item.label}</span>
        </article>
      `
    )
    .join("");

  sectionNav.innerHTML = post.sections
    .map(
      (section, index) => `<a href="#section-${index + 1}" data-section-link="section-${index + 1}">${section.heading}</a>`
    )
    .join("");

  contentSections.innerHTML = post.sections
    .map(
      (section, index) => `
        <section class="section-card reveal" id="section-${index + 1}">
          <p class="section-kicker">${post.kicker}</p>
          <h2>${section.heading}</h2>
          <p>${section.text}</p>
          <ul>
            ${section.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </section>
      `
    )
    .join("");

  resourceLinks.innerHTML = createLinks(post.resources || []);

  relatedGrid.innerHTML = (post.related || [])
    .map((slug) => {
      const related = window.blogPostCatalog?.[slug];
      if (!related) {
        return "";
      }

      return `
        <article class="related-card reveal">
          <p class="section-kicker">${related.type}</p>
          <h3>${related.title}</h3>
          <p>${related.summary}</p>
          <div class="related-tags">
            ${related.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <a class="link-note" href="/blog/posts/${slug}/">Read My Note</a>
        </article>
      `;
    })
    .join("");
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

const setupSectionSpy = () => {
  const links = document.querySelectorAll("[data-section-link]");
  const sections = document.querySelectorAll("[id^='section-']");
  if (!links.length || !sections.length) {
    return;
  }

  const map = new Map(Array.from(links).map((link) => [link.getAttribute("data-section-link"), link]));
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => link.classList.remove("active"));
          map.get(entry.target.id)?.classList.add("active");
        }
      });
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0.1
    }
  );

  sections.forEach((section) => observer.observe(section));
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

renderPost();
setupReveal();
setupSectionSpy();
setupProgress();
