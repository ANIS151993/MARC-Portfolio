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
  const customRoles = (typedNode.getAttribute("data-typed-items") || "")
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
  const roles = customRoles.length ? customRoles : [
    "Network Security Engineer",
    "Systems Administrator",
    "Cloud Infrastructure Engineer",
    "Cybersecurity Researcher",
    "AI Automation Engineer",
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

const getShowcaseItemsPerView = () => (window.innerWidth <= 900 ? 1 : 2);

const getShowcaseLaneCount = (cards) => {
  if (!cards.length) {
    return 0;
  }
  return Math.ceil(cards.length / getShowcaseItemsPerView());
};

const getShowcaseLaneCards = (cards, laneIndex) => {
  const itemsPerView = getShowcaseItemsPerView();
  const start = laneIndex * itemsPerView;
  return cards.slice(start, start + itemsPerView);
};

const getShowcaseRangeText = (laneIndex, total) => {
  if (!total) {
    return "0 / 0";
  }

  const itemsPerView = getShowcaseItemsPerView();
  const start = laneIndex * itemsPerView + 1;
  const end = Math.min(total, start + itemsPerView - 1);
  return start === end ? `${start} / ${total}` : `${start}-${end} / ${total}`;
};

const buildLaneTitle = (laneCards, selector, fallback, maxLength = 86) => {
  const titles = laneCards
    .map((card) => card.querySelector(selector)?.textContent?.trim())
    .filter(Boolean);

  if (!titles.length) {
    return fallback;
  }

  const combined = titles.join(" + ");
  return titles.length > 1 && combined.length <= maxLength ? combined : titles[0];
};

const getPairingText = (secondaryText) => (secondaryText ? `Paired with ${secondaryText}` : "");

const markActiveLaneCards = (allCards, visibleCards, activeLaneCards) => {
  allCards.forEach((card) => {
    const visible = visibleCards.includes(card);
    const lanePosition = activeLaneCards.indexOf(card);
    const active = lanePosition !== -1;

    card.classList.toggle("active-slide", active);
    card.classList.toggle("active-slide-primary", lanePosition === 0);
    card.classList.toggle("active-slide-secondary", lanePosition === 1);
    card.classList.remove("is-solo");
    card.setAttribute("aria-hidden", String(!active));

    if (!visible) {
      card.setAttribute("aria-hidden", "true");
    }
  });

  if (getShowcaseItemsPerView() === 2 && visibleCards.length % 2 === 1) {
    visibleCards[visibleCards.length - 1]?.classList.add("is-solo");
  }
};

const renderProjectThumbnails = () => {
  if (!projectSliderThumbs) {
    return;
  }

  projectSliderThumbs.innerHTML = "";

  const laneCount = getShowcaseLaneCount(visibleProjectCards);

  if (!laneCount) {
    return;
  }

  const fragment = document.createDocumentFragment();

  Array.from({ length: laneCount }).forEach((_, laneIndex) => {
    const laneCards = getShowcaseLaneCards(visibleProjectCards, laneIndex);
    const thumb = document.createElement("button");
    const shortNames = laneCards
      .map((card) => card.querySelector(".project-short-name")?.textContent?.trim())
      .filter(Boolean);
    const title = laneCards
      .map((card) => card.querySelector("h3")?.textContent?.trim())
      .filter(Boolean)
      .join(" + ");
    const fallbackLabel = getShowcaseRangeText(laneIndex, visibleProjectCards.length).split(" / ")[0];
    const label = shortNames.length > 1 && shortNames.join(" + ").length <= 18
      ? shortNames.join(" + ")
      : (shortNames[0] || fallbackLabel);
    const active = laneIndex === projectIndex;

    thumb.type = "button";
    thumb.className = "project-thumb";
    thumb.setAttribute("aria-label", `Show ${title || `Project lane ${laneIndex + 1}`}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${label}</span>`;

    thumb.addEventListener("click", () => {
      projectIndex = laneIndex;
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

  if (strip.scrollWidth <= strip.clientWidth + 4) {
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

  const laneCount = getShowcaseLaneCount(visiblePublicationCards);

  if (!laneCount) {
    return;
  }

  const fragment = document.createDocumentFragment();

  Array.from({ length: laneCount }).forEach((_, laneIndex) => {
    const laneCards = getShowcaseLaneCards(visiblePublicationCards, laneIndex);
    const thumb = document.createElement("button");
    const title = laneCards
      .map((card) => card.querySelector("h3")?.textContent?.trim())
      .filter(Boolean)
      .join(" + ");
    const active = laneIndex === publicationIndex;
    const label = getShowcaseRangeText(laneIndex, visiblePublicationCards.length).split(" / ")[0];

    thumb.type = "button";
    thumb.className = "publication-thumb";
    thumb.setAttribute("aria-label", `Show ${title || `Publication lane ${laneIndex + 1}`}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${label}</span>`;

    thumb.addEventListener("click", () => {
      publicationIndex = laneIndex;
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

  const laneCount = getShowcaseLaneCount(blogCards);

  if (!laneCount) {
    return;
  }

  const fragment = document.createDocumentFragment();

  Array.from({ length: laneCount }).forEach((_, laneIndex) => {
    const laneCards = getShowcaseLaneCards(blogCards, laneIndex);
    const thumb = document.createElement("button");
    const laneLabels = laneCards
      .map((card) => card.querySelector(".blog-lane-label")?.textContent?.trim().split(/\s+/)[0])
      .filter(Boolean);
    const title = laneCards
      .map((card) => card.querySelector("h3")?.textContent?.trim())
      .filter(Boolean)
      .join(" + ");
    const fallbackLabel = getShowcaseRangeText(laneIndex, blogCards.length).split(" / ")[0];
    const label = laneLabels.length > 1 && laneLabels.join(" + ").length <= 18
      ? laneLabels.join(" + ")
      : (laneLabels[0] || fallbackLabel);
    const active = laneIndex === blogIndex;

    thumb.type = "button";
    thumb.className = "blog-thumb";
    thumb.setAttribute("aria-label", `Show ${title || `Blog lane ${laneIndex + 1}`}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${label}</span>`;

    thumb.addEventListener("click", () => {
      blogIndex = laneIndex;
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

  const laneCount = getShowcaseLaneCount(visibleWorkCards);

  if (!laneCount) {
    return;
  }

  const fragment = document.createDocumentFragment();

  Array.from({ length: laneCount }).forEach((_, laneIndex) => {
    const laneCards = getShowcaseLaneCards(visibleWorkCards, laneIndex);
    const thumb = document.createElement("button");
    const primaryCard = laneCards[0];
    const image = primaryCard?.style.getPropertyValue("--work-image");
    const title = laneCards
      .map((card) => card.querySelector("h3")?.textContent?.trim())
      .filter(Boolean)
      .join(" + ");
    const active = laneIndex === workIndex;
    const label = getShowcaseRangeText(laneIndex, visibleWorkCards.length).split(" / ")[0];

    thumb.type = "button";
    thumb.className = "work-thumb";
    thumb.style.setProperty("--thumb-image", image);
    thumb.setAttribute("aria-label", `Show ${title || `Work lane ${laneIndex + 1}`}`);
    thumb.setAttribute("title", title);
    thumb.setAttribute("aria-pressed", String(active));
    thumb.classList.toggle("active", active);
    thumb.innerHTML = `<span>${label}</span>`;

    thumb.addEventListener("click", () => {
      workIndex = laneIndex;
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

  const laneCount = getShowcaseLaneCount(visibleProjectCards);

  if (projectIndex >= laneCount) {
    projectIndex = 0;
  }

  const activeLaneCards = getShowcaseLaneCards(visibleProjectCards, projectIndex);
  const primaryCard = activeLaneCards[0];
  const secondaryTitle = activeLaneCards[1]?.querySelector("h3")?.textContent?.trim() || "";
  projectGrid.style.transform = `translateX(-${projectIndex * 100}%)`;
  markActiveLaneCards(projectCards, visibleProjectCards, activeLaneCards);

  const title = buildLaneTitle(activeLaneCards, "h3", "Featured Project");
  const role = primaryCard?.querySelector(".project-role")?.textContent || "Portfolio Project";
  const summary = primaryCard?.querySelector(".project-content > p:not(.project-role)")?.textContent || "";
  const category = activeProjectFilter === "all"
    ? "Portfolio Projects"
    : (projectFilters?.querySelector("button.active")?.textContent || "Portfolio Projects");

  if (projectSliderTitle) {
    projectSliderTitle.textContent = title;
  }
  if (projectSliderMeta) {
    projectSliderMeta.textContent = secondaryTitle
      ? `${role} | Paired with ${secondaryTitle}`
      : (summary ? `${role} | ${summary}` : role);
  }
  if (projectSliderCount) {
    projectSliderCount.textContent = getShowcaseRangeText(projectIndex, visibleProjectCards.length);
  }
  if (projectSliderCategory) {
    projectSliderCategory.textContent = category;
  }
  if (projectProgressBar) {
    projectProgressBar.style.width = `${((projectIndex + 1) / laneCount) * 100}%`;
  }
  if (projectPrevBtn) {
    projectPrevBtn.disabled = laneCount <= 1;
  }
  if (projectNextBtn) {
    projectNextBtn.disabled = laneCount <= 1;
  }

  renderProjectThumbnails();

  const activeThumb = projectSliderThumbs?.querySelector(".project-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(projectSliderThumbs, activeThumb);
  }
};

const cycleProjectSlider = (direction) => {
  const laneCount = getShowcaseLaneCount(visibleProjectCards);
  if (!laneCount) {
    return;
  }
  projectIndex = (projectIndex + direction + laneCount) % laneCount;
  syncProjectSlider();
};

const restartProjectSliderTimer = () => {
  if (projectSliderTimer) {
    clearInterval(projectSliderTimer);
  }

  if (getShowcaseLaneCount(visibleProjectCards) > 1) {
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

  const laneCount = getShowcaseLaneCount(visiblePublicationCards);

  if (publicationIndex >= laneCount) {
    publicationIndex = 0;
  }

  const activeLaneCards = getShowcaseLaneCards(visiblePublicationCards, publicationIndex);
  const primaryCard = activeLaneCards[0];
  const secondaryTitle = activeLaneCards[1]?.querySelector("h3")?.textContent?.trim() || "";
  publicationGrid.style.transform = `translateX(-${publicationIndex * 100}%)`;
  markActiveLaneCards(publicationCards, visiblePublicationCards, activeLaneCards);

  const title = buildLaneTitle(activeLaneCards, "h3", "Featured Publication", 110);
  const meta = primaryCard?.classList.contains("publication-pipeline")
    ? (primaryCard.querySelector(".pill")?.textContent || "Research Pipeline")
    : (primaryCard?.querySelector(".publication-meta")?.textContent || "Research Publication");
  const summary = primaryCard?.classList.contains("publication-pipeline")
    ? (primaryCard.querySelector(".publication-pipeline-head p:last-child")?.textContent || "")
    : (primaryCard?.querySelector("p:not(.publication-meta)")?.textContent || "");
  const category = activePublicationFilter === "all"
    ? "Research Publications"
    : (publicationFilters?.querySelector("button.active")?.textContent || "Research Publications");

  if (publicationSliderTitle) {
    publicationSliderTitle.textContent = title;
  }
  if (publicationSliderMeta) {
    publicationSliderMeta.textContent = secondaryTitle
      ? `${meta} | Paired with ${secondaryTitle}`
      : (summary ? `${meta} | ${summary}` : meta);
  }
  if (publicationSliderCount) {
    publicationSliderCount.textContent = getShowcaseRangeText(publicationIndex, visiblePublicationCards.length);
  }
  if (publicationSliderCategory) {
    publicationSliderCategory.textContent = category;
  }
  if (publicationProgressBar) {
    publicationProgressBar.style.width = `${((publicationIndex + 1) / laneCount) * 100}%`;
  }
  if (publicationPrevBtn) {
    publicationPrevBtn.disabled = laneCount <= 1;
  }
  if (publicationNextBtn) {
    publicationNextBtn.disabled = laneCount <= 1;
  }

  renderPublicationThumbnails();

  const activeThumb = publicationSliderThumbs?.querySelector(".publication-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(publicationSliderThumbs, activeThumb);
  }
};

const cyclePublicationSlider = (direction) => {
  const laneCount = getShowcaseLaneCount(visiblePublicationCards);
  if (!laneCount) {
    return;
  }
  publicationIndex = (publicationIndex + direction + laneCount) % laneCount;
  syncPublicationSlider();
};

const restartPublicationSliderTimer = () => {
  if (publicationSliderTimer) {
    clearInterval(publicationSliderTimer);
  }

  if (getShowcaseLaneCount(visiblePublicationCards) > 1) {
    publicationSliderTimer = setInterval(() => cyclePublicationSlider(1), 7600);
  }
};

const syncBlogSlider = () => {
  if (!blogSliderGrid || !blogCards.length) {
    return;
  }

  const laneCount = getShowcaseLaneCount(blogCards);

  if (blogIndex >= laneCount) {
    blogIndex = 0;
  }

  const activeLaneCards = getShowcaseLaneCards(blogCards, blogIndex);
  const primaryCard = activeLaneCards[0];
  const secondaryLabel = activeLaneCards[1]?.querySelector(".blog-lane-label")?.textContent?.trim() || "";
  blogSliderGrid.style.transform = `translateX(-${blogIndex * 100}%)`;
  markActiveLaneCards(blogCards, blogCards, activeLaneCards);

  const label = primaryCard?.querySelector(".blog-lane-label")?.textContent || "Blog and Insights";
  const title = buildLaneTitle(activeLaneCards, "h3", "Featured Reading Lane");
  const summary = primaryCard?.querySelector(".blog-lane-body > p:not(.blog-lane-label)")?.textContent || "";

  if (blogSliderTitle) {
    blogSliderTitle.textContent = title;
  }
  if (blogSliderMeta) {
    blogSliderMeta.textContent = secondaryLabel
      ? `${label} | Paired with ${secondaryLabel}`
      : (summary ? `${label} | ${summary}` : label);
  }
  if (blogSliderCount) {
    blogSliderCount.textContent = getShowcaseRangeText(blogIndex, blogCards.length);
  }
  if (blogSliderCategory) {
    blogSliderCategory.textContent = label;
  }
  if (blogProgressBar) {
    blogProgressBar.style.width = `${((blogIndex + 1) / laneCount) * 100}%`;
  }
  if (blogPrevBtn) {
    blogPrevBtn.disabled = laneCount <= 1;
  }
  if (blogNextBtn) {
    blogNextBtn.disabled = laneCount <= 1;
  }

  renderBlogThumbnails();

  const activeThumb = blogSliderThumbs?.querySelector(".blog-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(blogSliderThumbs, activeThumb);
  }
};

const cycleBlogSlider = (direction) => {
  const laneCount = getShowcaseLaneCount(blogCards);
  if (!laneCount) {
    return;
  }
  blogIndex = (blogIndex + direction + laneCount) % laneCount;
  syncBlogSlider();
};

const restartBlogSliderTimer = () => {
  if (blogSliderTimer) {
    clearInterval(blogSliderTimer);
  }

  if (getShowcaseLaneCount(blogCards) > 1) {
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

  const laneCount = getShowcaseLaneCount(visibleWorkCards);

  if (workIndex >= laneCount) {
    workIndex = 0;
  }

  const activeLaneCards = getShowcaseLaneCards(visibleWorkCards, workIndex);
  const primaryCard = activeLaneCards[0];
  const secondaryTitle = activeLaneCards[1]?.querySelector("h3")?.textContent?.trim() || "";
  workGrid.style.transform = `translateX(-${workIndex * 100}%)`;
  markActiveLaneCards(workCards, visibleWorkCards, activeLaneCards);

  const title = buildLaneTitle(activeLaneCards, "h3", "Latest Delivery");
  const category = primaryCard?.querySelector(".work-category")?.textContent || "Latest Works";
  const summary = primaryCard?.querySelector(".work-card-content p:not(.work-category)")?.textContent || "";

  if (workSliderTitle) {
    workSliderTitle.textContent = title;
  }
  if (workSliderMeta) {
    workSliderMeta.textContent = secondaryTitle ? `Paired with ${secondaryTitle}` : summary;
  }
  if (workSliderCount) {
    workSliderCount.textContent = getShowcaseRangeText(workIndex, visibleWorkCards.length);
  }
  if (workSliderCategory) {
    workSliderCategory.textContent = category;
  }
  if (workProgressBar) {
    workProgressBar.style.width = `${((workIndex + 1) / laneCount) * 100}%`;
  }
  if (workPrevBtn) {
    workPrevBtn.disabled = laneCount <= 1;
  }
  if (workNextBtn) {
    workNextBtn.disabled = laneCount <= 1;
  }
  renderWorkThumbnails();

  const activeThumb = workSliderThumbs?.querySelector(".work-thumb.active");
  if (activeThumb) {
    scrollThumbStrip(workSliderThumbs, activeThumb);
  }
};

const cycleWorkSlider = (direction) => {
  const laneCount = getShowcaseLaneCount(visibleWorkCards);
  if (!laneCount) {
    return;
  }
  workIndex = (workIndex + direction + laneCount) % laneCount;
  syncWorkSlider();
};

const restartWorkSliderTimer = () => {
  if (workSliderTimer) {
    clearInterval(workSliderTimer);
  }

  if (getShowcaseLaneCount(visibleWorkCards) > 1) {
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

let showcaseResizeFrame = null;
window.addEventListener("resize", () => {
  if (showcaseResizeFrame) {
    cancelAnimationFrame(showcaseResizeFrame);
  }

  showcaseResizeFrame = requestAnimationFrame(() => {
    if (workCards.length) {
      syncWorkSlider();
    }
    if (projectCards.length) {
      syncProjectSlider();
    }
    if (publicationCards.length) {
      syncPublicationSlider();
    }
    if (blogCards.length) {
      syncBlogSlider();
    }
  });
});

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
