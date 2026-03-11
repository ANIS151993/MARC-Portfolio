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
const projectCards = document.querySelectorAll("#projectGrid .portfolio-card");
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
const publicationFilters = document.getElementById("publicationFilters");
const publicationCards = document.querySelectorAll("#publicationGrid [data-pubcat]");
const orderPackage = document.getElementById("orderPackage");
const orderPayment = document.getElementById("orderPayment");
const orderSection = document.getElementById("order");
const checkoutHelp = document.getElementById("checkoutHelp");
const planTriggers = document.querySelectorAll(".plan-trigger");
const pricePlans = document.querySelectorAll(".price-plan");
let activeWorkFilter = "all";
let visibleWorkCards = [];
let workIndex = 0;
let workSliderTimer = null;

if (projectFilters && projectCards.length) {
  projectFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      projectFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      projectCards.forEach((card) => {
        const cat = card.getAttribute("data-cat") || "";
        const show = filter === "all" || cat.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
}

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
      const filter = button.getAttribute("data-filter");
      publicationFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      publicationCards.forEach((card) => {
        const cat = card.getAttribute("data-pubcat") || "";
        const show = filter === "all" || cat.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
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
