const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");
const sectionNavLinks = mainNav ? Array.from(mainNav.querySelectorAll('a[href^="#"]')) : [];

const setActiveNavLink = (sectionId) => {
  sectionNavLinks.forEach((link) => {
    const active = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("active", active);
    if (active) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      const target = link.getAttribute("href") || "";
      if (target.startsWith("#")) {
        setActiveNavLink(target.slice(1));
      }
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (siteHeader) {
  const syncHeaderState = () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 20);
  };

  window.addEventListener("scroll", syncHeaderState, { passive: true });
  syncHeaderState();
}

if (sectionNavLinks.length) {
  const trackedSections = sectionNavLinks
    .map((link) => {
      const target = link.getAttribute("href") || "";
      return document.querySelector(target);
    })
    .filter(Boolean);

  if (trackedSections.length) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveNavLink(visible.target.id);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0.2, 0.35, 0.55]
      }
    );

    trackedSections.forEach((section) => navObserver.observe(section));
    setActiveNavLink(trackedSections[0].id);
  }
}

const typedNode = document.getElementById("typedRoles");
if (typedNode) {
  const roles = [
    "Network Security Engineer",
    "Systems Administrator",
    "Cloud Infrastructure Engineer",
    "Cybersecurity Researcher",
    "IT Infrastructure Specialist"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const tick = () => {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      charIndex += 1;
      typedNode.textContent = currentRole.slice(0, charIndex);
      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      typedNode.textContent = currentRole.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 42 : 68);
  };

  tick();
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

const counterNodes = document.querySelectorAll("[data-counter]");
const animateCounter = (node) => {
  const target = Number(node.getAttribute("data-counter"));
  const decimals = Number(node.getAttribute("data-decimals") || "0");
  const duration = 1300;
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = target * progress;
    node.textContent = value.toFixed(decimals);
    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

counterNodes.forEach((node) => counterObserver.observe(node));

const skillFillNodes = document.querySelectorAll(".skill-fill[data-level]");
const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const level = entry.target.getAttribute("data-level") || "0";
        entry.target.style.width = `${level}%`;
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.35 }
);

skillFillNodes.forEach((node) => skillObserver.observe(node));

const projectFilters = document.getElementById("projectFilters");
const projectGrid = document.getElementById("projectGrid");
const projectCards = Array.from(document.querySelectorAll("#projectGrid .portfolio-card"));
const projectSliderShell = document.querySelector(".projects-slider-shell");
const projectPrevBtn = document.getElementById("projectPrev");
const projectNextBtn = document.getElementById("projectNext");
const projectSliderTitle = document.getElementById("projectSliderTitle");
const projectSliderMeta = document.getElementById("projectSliderMeta");
const projectSliderCount = document.getElementById("projectSliderCount");
const projectSliderCategory = document.getElementById("projectSliderCategory");
const projectProgressBar = document.getElementById("projectProgressBar");
const projectSliderThumbs = document.getElementById("projectSliderThumbs");
const publicationFilters = document.getElementById("publicationFilters");
const publicationGrid = document.getElementById("publicationGrid");
const publicationCards = Array.from(document.querySelectorAll("#publicationGrid > [data-pubcat]"));
const publicationSliderShell = document.querySelector(".publications-slider-shell");
const publicationPrevBtn = document.getElementById("publicationPrev");
const publicationNextBtn = document.getElementById("publicationNext");
const publicationSliderTitle = document.getElementById("publicationSliderTitle");
const publicationSliderMeta = document.getElementById("publicationSliderMeta");
const publicationSliderCount = document.getElementById("publicationSliderCount");
const publicationSliderCategory = document.getElementById("publicationSliderCategory");
const publicationProgressBar = document.getElementById("publicationProgressBar");
const publicationSliderThumbs = document.getElementById("publicationSliderThumbs");
const blogSliderGrid = document.getElementById("blogSliderGrid");
const blogCards = Array.from(document.querySelectorAll("#blogSliderGrid .blog-lane-card"));
const blogSliderShell = document.querySelector(".blog-slider-shell");
const blogPrevBtn = document.getElementById("blogPrev");
const blogNextBtn = document.getElementById("blogNext");
const blogSliderTitle = document.getElementById("blogSliderTitle");
const blogSliderMeta = document.getElementById("blogSliderMeta");
const blogSliderCount = document.getElementById("blogSliderCount");
const blogSliderCategory = document.getElementById("blogSliderCategory");
const blogProgressBar = document.getElementById("blogProgressBar");
const blogSliderThumbs = document.getElementById("blogSliderThumbs");
const workFilters = document.getElementById("workFilters");
const workGrid = document.getElementById("workGrid");
const workCards = Array.from(document.querySelectorAll("#workGrid .work-card"));
const workSliderShell = document.querySelector(".works-slider-shell");
const workPrevBtn = document.getElementById("workPrev");
const workNextBtn = document.getElementById("workNext");
const workSliderTitle = document.getElementById("workSliderTitle");
const workSliderMeta = document.getElementById("workSliderMeta");
const workSliderCount = document.getElementById("workSliderCount");
const workSliderCategory = document.getElementById("workSliderCategory");
const workProgressBar = document.getElementById("workProgressBar");
const workSliderThumbs = document.getElementById("workSliderThumbs");
const orderPackage = document.getElementById("orderPackage");
const orderPayment = document.getElementById("orderPayment");
const orderSection = document.getElementById("order");
const checkoutHelp = document.getElementById("checkoutHelp");
const planTriggers = document.querySelectorAll(".plan-trigger");
const pricePlans = document.querySelectorAll(".price-plan");
let activeProjectFilter = "all";
let visibleProjectCards = [];
let projectIndex = 0;
let projectSliderTimer = null;
let activePublicationFilter = "all";
let visiblePublicationCards = [];
let publicationIndex = 0;
let publicationSliderTimer = null;
let blogIndex = 0;
let blogSliderTimer = null;
let activeWorkFilter = "all";
let visibleWorkCards = [];
let workIndex = 0;
let workSliderTimer = null;

const renderProjectThumbnails = () => {
  if (!projectSliderThumbs) {
    return;
  }

  projectSliderThumbs.innerHTML = "";

  if (!visibleProjectCards.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  visibleProjectCards.forEach((card, index) => {
    const thumb = document.createElement("button");
    const shortName = card.querySelector(".project-short-name")?.textContent?.trim() || `P-${index + 1}`;
    const title = card.querySelector("h3")?.textContent || `Project ${index + 1}`;
    const active = index === projectIndex;

    thumb.type = "button";
    thumb.className = "project-thumb";
    thumb.setAttribute("aria-label", `Show ${title}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${shortName}</span>`;

    thumb.addEventListener("click", () => {
      projectIndex = index;
      syncProjectSlider();
      restartProjectSliderTimer();
    });

    fragment.appendChild(thumb);
  });

  projectSliderThumbs.appendChild(fragment);
};

const scrollThumbStrip = (strip, thumb) => {
  if (!strip || !thumb) {
    return;
  }

  const targetLeft = thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2;
  const maxLeft = Math.max(0, strip.scrollWidth - strip.clientWidth);
  const left = Math.min(Math.max(0, targetLeft), maxLeft);

  strip.scrollTo({ left, behavior: "smooth" });
};

const renderPublicationThumbnails = () => {
  if (!publicationSliderThumbs) {
    return;
  }

  publicationSliderThumbs.innerHTML = "";

  if (!visiblePublicationCards.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  visiblePublicationCards.forEach((card, index) => {
    const thumb = document.createElement("button");
    const tagLabel = card.classList.contains("publication-pipeline")
      ? "Pipeline"
      : (card.querySelector(".publication-tags span")?.textContent || `Pub ${index + 1}`);
    const title = card.querySelector("h3")?.textContent || `Publication ${index + 1}`;
    const active = index === publicationIndex;

    thumb.type = "button";
    thumb.className = "publication-thumb";
    thumb.setAttribute("aria-label", `Show ${title}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${tagLabel.slice(0, 8)}</span>`;

    thumb.addEventListener("click", () => {
      publicationIndex = index;
      syncPublicationSlider();
      restartPublicationSliderTimer();
    });

    fragment.appendChild(thumb);
  });

  publicationSliderThumbs.appendChild(fragment);
};

const renderBlogThumbnails = () => {
  if (!blogSliderThumbs) {
    return;
  }

  blogSliderThumbs.innerHTML = "";

  if (!blogCards.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  blogCards.forEach((card, index) => {
    const thumb = document.createElement("button");
    const label = card.querySelector(".blog-lane-label")?.textContent || `Blog ${index + 1}`;
    const active = index === blogIndex;

    thumb.type = "button";
    thumb.className = "blog-thumb";
    thumb.setAttribute("aria-label", `Show ${label}`);
    thumb.setAttribute("title", label);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${label.slice(0, 8)}</span>`;

    thumb.addEventListener("click", () => {
      blogIndex = index;
      syncBlogSlider();
      restartBlogSliderTimer();
    });

    fragment.appendChild(thumb);
  });

  blogSliderThumbs.appendChild(fragment);
};

const renderWorkThumbnails = () => {
  if (!workSliderThumbs) {
    return;
  }

  workSliderThumbs.innerHTML = "";

  if (!visibleWorkCards.length) {
    return;
  }

  const fragment = document.createDocumentFragment();

  visibleWorkCards.forEach((card, index) => {
    const thumb = document.createElement("button");
    const image = card.style.getPropertyValue("--work-image");
    const title = card.querySelector("h3")?.textContent || `Work ${index + 1}`;
    const category = card.querySelector(".work-category")?.textContent || "Latest Works";
    const active = index === workIndex;

    thumb.type = "button";
    thumb.className = "work-thumb";
    thumb.style.setProperty("--thumb-image", image);
    thumb.setAttribute("aria-label", `Show ${title}`);
    thumb.setAttribute("title", `${title} (${category})`);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${index + 1}</span>`;

    thumb.addEventListener("click", () => {
      workIndex = index;
      syncWorkSlider();
      restartWorkSliderTimer();
    });

    fragment.appendChild(thumb);
  });

  workSliderThumbs.appendChild(fragment);
};

const syncProjectSlider = () => {
  if (!projectGrid || !projectCards.length) {
    return;
  }

  visibleProjectCards = projectCards.filter((card) => {
    const cat = card.getAttribute("data-cat") || "";
    return activeProjectFilter === "all" || cat.includes(activeProjectFilter);
  });

  projectCards.forEach((card) => {
    const visible = visibleProjectCards.includes(card);
    card.classList.toggle("hidden-card", !visible);
  });

  if (!visibleProjectCards.length) {
    projectGrid.style.transform = "translateX(0)";
    if (projectSliderTitle) {
      projectSliderTitle.textContent = "No project found";
    }
    if (projectSliderMeta) {
      projectSliderMeta.textContent = "Try another filter to load a different project set.";
    }
    if (projectSliderCount) {
      projectSliderCount.textContent = "0 / 0";
    }
    if (projectSliderCategory) {
      projectSliderCategory.textContent = "Portfolio Projects";
    }
    if (projectProgressBar) {
      projectProgressBar.style.width = "0%";
    }
    if (projectPrevBtn) {
      projectPrevBtn.disabled = true;
    }
    if (projectNextBtn) {
      projectNextBtn.disabled = true;
    }
    renderProjectThumbnails();
    return;
  }

  if (projectIndex >= visibleProjectCards.length) {
    projectIndex = 0;
  }

  const activeCard = visibleProjectCards[projectIndex];
  projectGrid.style.transform = `translateX(-${projectIndex * 100}%)`;

  projectCards.forEach((card) => {
    const active = card === activeCard;
    card.classList.toggle("active-slide", active);
    card.setAttribute("aria-hidden", String(!active));
  });

  const title = activeCard.querySelector("h3")?.textContent || "Featured Project";
  const role = activeCard.querySelector(".project-role")?.textContent || "Portfolio Project";
  const summary = activeCard.querySelector(".project-content > p:not(.project-role)")?.textContent || "";
  const category = activeProjectFilter === "all"
    ? "Portfolio Projects"
    : (projectFilters?.querySelector("button.active")?.textContent || "Portfolio Projects");

  if (projectSliderTitle) {
    projectSliderTitle.textContent = title;
  }
  if (projectSliderMeta) {
    projectSliderMeta.textContent = summary ? `${role} | ${summary}` : role;
  }
  if (projectSliderCount) {
    projectSliderCount.textContent = `${projectIndex + 1} / ${visibleProjectCards.length}`;
  }
  if (projectSliderCategory) {
    projectSliderCategory.textContent = category;
  }
  if (projectProgressBar) {
    projectProgressBar.style.width = `${((projectIndex + 1) / visibleProjectCards.length) * 100}%`;
  }
  if (projectPrevBtn) {
    projectPrevBtn.disabled = visibleProjectCards.length <= 1;
  }
  if (projectNextBtn) {
    projectNextBtn.disabled = visibleProjectCards.length <= 1;
  }

  renderProjectThumbnails();

  const activeThumb = projectSliderThumbs?.querySelector(".project-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(projectSliderThumbs, activeThumb);
  }
};

const cycleProjectSlider = (direction) => {
  if (!visibleProjectCards.length) {
    return;
  }
  projectIndex = (projectIndex + direction + visibleProjectCards.length) % visibleProjectCards.length;
  syncProjectSlider();
};

const restartProjectSliderTimer = () => {
  if (projectSliderTimer) {
    clearInterval(projectSliderTimer);
  }

  if (visibleProjectCards.length > 1) {
    projectSliderTimer = setInterval(() => cycleProjectSlider(1), 7500);
  }
};

if (projectFilters && projectCards.length) {
  projectFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      activeProjectFilter = filter;
      projectIndex = 0;
      projectFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      syncProjectSlider();
      restartProjectSliderTimer();
    });
  });

  syncProjectSlider();
  restartProjectSliderTimer();
}

if (projectPrevBtn) {
  projectPrevBtn.addEventListener("click", () => {
    cycleProjectSlider(-1);
    restartProjectSliderTimer();
  });
}

if (projectNextBtn) {
  projectNextBtn.addEventListener("click", () => {
    cycleProjectSlider(1);
    restartProjectSliderTimer();
  });
}

if (projectSliderShell) {
  projectSliderShell.addEventListener("mouseenter", () => {
    if (projectSliderTimer) {
      clearInterval(projectSliderTimer);
    }
  });

  projectSliderShell.addEventListener("mouseleave", () => {
    restartProjectSliderTimer();
  });
}

const syncPublicationSlider = () => {
  if (!publicationGrid || !publicationCards.length) {
    return;
  }

  visiblePublicationCards = publicationCards.filter((card) => {
    const cat = card.getAttribute("data-pubcat") || "";
    return activePublicationFilter === "all" || cat.includes(activePublicationFilter);
  });

  publicationCards.forEach((card) => {
    const visible = visiblePublicationCards.includes(card);
    card.classList.toggle("hidden-card", !visible);
  });

  if (!visiblePublicationCards.length) {
    publicationGrid.style.transform = "translateX(0)";
    if (publicationSliderTitle) {
      publicationSliderTitle.textContent = "No publication found";
    }
    if (publicationSliderMeta) {
      publicationSliderMeta.textContent = "Try another filter to load a different part of the research portfolio.";
    }
    if (publicationSliderCount) {
      publicationSliderCount.textContent = "0 / 0";
    }
    if (publicationSliderCategory) {
      publicationSliderCategory.textContent = "Research Publications";
    }
    if (publicationProgressBar) {
      publicationProgressBar.style.width = "0%";
    }
    if (publicationPrevBtn) {
      publicationPrevBtn.disabled = true;
    }
    if (publicationNextBtn) {
      publicationNextBtn.disabled = true;
    }
    renderPublicationThumbnails();
    return;
  }

  if (publicationIndex >= visiblePublicationCards.length) {
    publicationIndex = 0;
  }

  const activeCard = visiblePublicationCards[publicationIndex];
  publicationGrid.style.transform = `translateX(-${publicationIndex * 100}%)`;

  publicationCards.forEach((card) => {
    const active = card === activeCard;
    card.classList.toggle("active-slide", active);
    card.setAttribute("aria-hidden", String(!active));
  });

  const title = activeCard.querySelector("h3")?.textContent || "Featured Publication";
  const meta = activeCard.classList.contains("publication-pipeline")
    ? (activeCard.querySelector(".pill")?.textContent || "Research Pipeline")
    : (activeCard.querySelector(".publication-meta")?.textContent || "Research Publication");
  const summary = activeCard.classList.contains("publication-pipeline")
    ? (activeCard.querySelector(".publication-pipeline-head p:last-child")?.textContent || "")
    : (activeCard.querySelector("p:not(.publication-meta)")?.textContent || "");
  const category = activePublicationFilter === "all"
    ? "Research Publications"
    : (publicationFilters?.querySelector("button.active")?.textContent || "Research Publications");

  if (publicationSliderTitle) {
    publicationSliderTitle.textContent = title;
  }
  if (publicationSliderMeta) {
    publicationSliderMeta.textContent = summary ? `${meta} | ${summary}` : meta;
  }
  if (publicationSliderCount) {
    publicationSliderCount.textContent = `${publicationIndex + 1} / ${visiblePublicationCards.length}`;
  }
  if (publicationSliderCategory) {
    publicationSliderCategory.textContent = category;
  }
  if (publicationProgressBar) {
    publicationProgressBar.style.width = `${((publicationIndex + 1) / visiblePublicationCards.length) * 100}%`;
  }
  if (publicationPrevBtn) {
    publicationPrevBtn.disabled = visiblePublicationCards.length <= 1;
  }
  if (publicationNextBtn) {
    publicationNextBtn.disabled = visiblePublicationCards.length <= 1;
  }

  renderPublicationThumbnails();

  const activeThumb = publicationSliderThumbs?.querySelector(".publication-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(publicationSliderThumbs, activeThumb);
  }
};

const cyclePublicationSlider = (direction) => {
  if (!visiblePublicationCards.length) {
    return;
  }
  publicationIndex = (publicationIndex + direction + visiblePublicationCards.length) % visiblePublicationCards.length;
  syncPublicationSlider();
};

const restartPublicationSliderTimer = () => {
  if (publicationSliderTimer) {
    clearInterval(publicationSliderTimer);
  }

  if (visiblePublicationCards.length > 1) {
    publicationSliderTimer = setInterval(() => cyclePublicationSlider(1), 7600);
  }
};

const syncBlogSlider = () => {
  if (!blogSliderGrid || !blogCards.length) {
    return;
  }

  if (blogIndex >= blogCards.length) {
    blogIndex = 0;
  }

  const activeCard = blogCards[blogIndex];
  blogSliderGrid.style.transform = `translateX(-${blogIndex * 100}%)`;

  blogCards.forEach((card, index) => {
    const active = index === blogIndex;
    card.classList.toggle("active-slide", active);
    card.setAttribute("aria-hidden", String(!active));
  });

  const label = activeCard.querySelector(".blog-lane-label")?.textContent || "Blog and Insights";
  const title = activeCard.querySelector("h3")?.textContent || "Featured Reading Lane";
  const summary = activeCard.querySelector(".blog-lane-body > p:not(.blog-lane-label)")?.textContent || "";

  if (blogSliderTitle) {
    blogSliderTitle.textContent = title;
  }
  if (blogSliderMeta) {
    blogSliderMeta.textContent = summary ? `${label} | ${summary}` : label;
  }
  if (blogSliderCount) {
    blogSliderCount.textContent = `${blogIndex + 1} / ${blogCards.length}`;
  }
  if (blogSliderCategory) {
    blogSliderCategory.textContent = label;
  }
  if (blogProgressBar) {
    blogProgressBar.style.width = `${((blogIndex + 1) / blogCards.length) * 100}%`;
  }
  if (blogPrevBtn) {
    blogPrevBtn.disabled = blogCards.length <= 1;
  }
  if (blogNextBtn) {
    blogNextBtn.disabled = blogCards.length <= 1;
  }

  renderBlogThumbnails();

  const activeThumb = blogSliderThumbs?.querySelector(".blog-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(blogSliderThumbs, activeThumb);
  }
};

const cycleBlogSlider = (direction) => {
  if (!blogCards.length) {
    return;
  }
  blogIndex = (blogIndex + direction + blogCards.length) % blogCards.length;
  syncBlogSlider();
};

const restartBlogSliderTimer = () => {
  if (blogSliderTimer) {
    clearInterval(blogSliderTimer);
  }

  if (blogCards.length > 1) {
    blogSliderTimer = setInterval(() => cycleBlogSlider(1), 7800);
  }
};

const syncWorkSlider = () => {
  if (!workGrid || !workCards.length) {
    return;
  }

  visibleWorkCards = workCards.filter((card) => {
    const cat = card.getAttribute("data-workcat") || "";
    return activeWorkFilter === "all" || cat.includes(activeWorkFilter);
  });

  workCards.forEach((card) => {
    const visible = visibleWorkCards.includes(card);
    card.classList.toggle("hidden-card", !visible);
  });

  if (!visibleWorkCards.length) {
    if (workGrid) {
      workGrid.style.transform = "translateX(0)";
    }
    if (workSliderTitle) {
      workSliderTitle.textContent = "No work found";
    }
    if (workSliderMeta) {
      workSliderMeta.textContent = "Try another category filter.";
    }
    if (workSliderCount) {
      workSliderCount.textContent = "0 / 0";
    }
    if (workSliderCategory) {
      workSliderCategory.textContent = "Latest Works";
    }
    if (workProgressBar) {
      workProgressBar.style.width = "0%";
    }
    renderWorkThumbnails();
    return;
  }

  if (workIndex >= visibleWorkCards.length) {
    workIndex = 0;
  }

  const activeCard = visibleWorkCards[workIndex];
  workGrid.style.transform = `translateX(-${workIndex * 100}%)`;

  workCards.forEach((card) => {
    const active = card === activeCard;
    card.classList.toggle("active-slide", active);
    card.setAttribute("aria-hidden", String(!active));
  });

  const title = activeCard.querySelector("h3")?.textContent || "Latest Delivery";
  const category = activeCard.querySelector(".work-category")?.textContent || "Latest Works";
  const summary = activeCard.querySelector(".work-card-content p:not(.work-category)")?.textContent || "";

  if (workSliderTitle) {
    workSliderTitle.textContent = title;
  }
  if (workSliderMeta) {
    workSliderMeta.textContent = summary;
  }
  if (workSliderCount) {
    workSliderCount.textContent = `${workIndex + 1} / ${visibleWorkCards.length}`;
  }
  if (workSliderCategory) {
    workSliderCategory.textContent = category;
  }
  if (workProgressBar) {
    workProgressBar.style.width = `${((workIndex + 1) / visibleWorkCards.length) * 100}%`;
  }
  if (workPrevBtn) {
    workPrevBtn.disabled = visibleWorkCards.length <= 1;
  }
  if (workNextBtn) {
    workNextBtn.disabled = visibleWorkCards.length <= 1;
  }
  renderWorkThumbnails();

  const activeThumb = workSliderThumbs?.querySelector(".work-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(workSliderThumbs, activeThumb);
  }
};

const cycleWorkSlider = (direction) => {
  if (!visibleWorkCards.length) {
    return;
  }
  workIndex = (workIndex + direction + visibleWorkCards.length) % visibleWorkCards.length;
  syncWorkSlider();
};

const restartWorkSliderTimer = () => {
  if (workSliderTimer) {
    clearInterval(workSliderTimer);
  }

  if (visibleWorkCards.length > 1) {
    workSliderTimer = setInterval(() => cycleWorkSlider(1), 7000);
  }
};

if (workFilters && workCards.length) {
  workFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      activeWorkFilter = filter;
      workIndex = 0;
      workFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      syncWorkSlider();
      restartWorkSliderTimer();
    });
  });

  syncWorkSlider();
  restartWorkSliderTimer();
}

if (workPrevBtn) {
  workPrevBtn.addEventListener("click", () => {
    cycleWorkSlider(-1);
    restartWorkSliderTimer();
  });
}

if (workNextBtn) {
  workNextBtn.addEventListener("click", () => {
    cycleWorkSlider(1);
    restartWorkSliderTimer();
  });
}

if (workSliderShell) {
  workSliderShell.addEventListener("mouseenter", () => {
    if (workSliderTimer) {
      clearInterval(workSliderTimer);
    }
  });

  workSliderShell.addEventListener("mouseleave", () => {
    restartWorkSliderTimer();
  });
}

if (publicationFilters && publicationCards.length) {
  publicationFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      activePublicationFilter = filter;
      publicationIndex = 0;
      publicationFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
      syncPublicationSlider();
      restartPublicationSliderTimer();
    });
  });

  syncPublicationSlider();
  restartPublicationSliderTimer();
}

if (publicationPrevBtn) {
  publicationPrevBtn.addEventListener("click", () => {
    cyclePublicationSlider(-1);
    restartPublicationSliderTimer();
  });
}

if (publicationNextBtn) {
  publicationNextBtn.addEventListener("click", () => {
    cyclePublicationSlider(1);
    restartPublicationSliderTimer();
  });
}

if (publicationSliderShell) {
  publicationSliderShell.addEventListener("mouseenter", () => {
    if (publicationSliderTimer) {
      clearInterval(publicationSliderTimer);
    }
  });

  publicationSliderShell.addEventListener("mouseleave", () => {
    restartPublicationSliderTimer();
  });
}

if (blogCards.length) {
  syncBlogSlider();
  restartBlogSliderTimer();
}

if (blogPrevBtn) {
  blogPrevBtn.addEventListener("click", () => {
    cycleBlogSlider(-1);
    restartBlogSliderTimer();
  });
}

if (blogNextBtn) {
  blogNextBtn.addEventListener("click", () => {
    cycleBlogSlider(1);
    restartBlogSliderTimer();
  });
}

if (blogSliderShell) {
  blogSliderShell.addEventListener("mouseenter", () => {
    if (blogSliderTimer) {
      clearInterval(blogSliderTimer);
    }
  });

  blogSliderShell.addEventListener("mouseleave", () => {
    restartBlogSliderTimer();
  });
}

planTriggers.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const pkg = trigger.getAttribute("data-package");
    if (orderPackage && pkg) {
      orderPackage.value = pkg;
    }

    if (orderPayment) {
      orderPayment.value = "paypal";
    }
  });
});

const attachPointerGlow = (card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    card.style.setProperty("--my", `${event.clientY - rect.top}px`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.removeProperty("--mx");
    card.style.removeProperty("--my");
  });
};

pricePlans.forEach(attachPointerGlow);

const checkoutLinks = window.MARC_CHECKOUT_LINKS || {};
const checkoutButtons = document.querySelectorAll(".checkout-btn");
let configuredCheckoutCount = 0;

checkoutButtons.forEach((button) => {
  const pkg = button.getAttribute("data-package");
  const provider = button.getAttribute("data-provider");
  const link = checkoutLinks[pkg]?.[provider];

  if (link) {
    configuredCheckoutCount += 1;
  }

  button.addEventListener("click", () => {
    if (orderPackage && pkg) {
      orderPackage.value = pkg;
    }

    if (orderPayment && provider) {
      orderPayment.value = provider;
    }

    if (link) {
      window.open(link, "_blank", "noopener");
      return;
    }

    if (checkoutHelp) {
      checkoutHelp.textContent = "Direct checkout is not configured yet for this package. The order form below has been prefilled instead.";
    }

    if (orderSection) {
      orderSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

if (checkoutHelp && configuredCheckoutCount > 0) {
  checkoutHelp.textContent = "PayPal checkout is active for the configured weekly plans. If you need a bundled scope, use the order form below.";
}

const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const prevBtn = document.getElementById("testimonialPrev");
const nextBtn = document.getElementById("testimonialNext");
let testimonialIndex = 0;
let testimonialTimer = null;

const showTestimonial = (index) => {
  testimonials.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
};

const cycleTestimonials = (direction) => {
  if (!testimonials.length) {
    return;
  }
  testimonialIndex = (testimonialIndex + direction + testimonials.length) % testimonials.length;
  showTestimonial(testimonialIndex);
};

const restartTestimonialTimer = () => {
  if (testimonialTimer) {
    clearInterval(testimonialTimer);
  }
  testimonialTimer = setInterval(() => cycleTestimonials(1), 8000);
};

if (testimonials.length) {
  showTestimonial(testimonialIndex);
  restartTestimonialTimer();
}

if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    cycleTestimonials(-1);
    restartTestimonialTimer();
  });
}

if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    cycleTestimonials(1);
    restartTestimonialTimer();
  });
}

const dynamicNextNodes = document.querySelectorAll(".dynamic-next");
if (dynamicNextNodes.length) {
  let path = window.location.pathname;
  if (path.endsWith(".html")) {
    path = path.slice(0, path.lastIndexOf("/") + 1);
  }
  if (!path.endsWith("/")) {
    path += "/";
  }

  dynamicNextNodes.forEach((node) => {
    const anchor = node.getAttribute("data-anchor") || "contact";
    node.value = `${window.location.origin}${path}?sent=1#${anchor}`;
  });
}

const autoSuccessNodes = document.querySelectorAll(".auto-success");
if (autoSuccessNodes.length) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    autoSuccessNodes.forEach((node) => {
      node.hidden = false;
    });
  }
}

const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
