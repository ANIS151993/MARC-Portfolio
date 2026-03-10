const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
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
const workCards = document.querySelectorAll("#workGrid .work-card");
const publicationFilters = document.getElementById("publicationFilters");
const publicationCards = document.querySelectorAll("#publicationGrid [data-pubcat]");
const orderPackage = document.getElementById("orderPackage");
const orderPayment = document.getElementById("orderPayment");
const orderSection = document.getElementById("order");
const checkoutHelp = document.getElementById("checkoutHelp");
const planTriggers = document.querySelectorAll(".plan-trigger");
const pricePlans = document.querySelectorAll(".price-plan");

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

if (workFilters && workCards.length) {
  workFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      workFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      workCards.forEach((card) => {
        const cat = card.getAttribute("data-workcat") || "";
        const show = filter === "all" || cat.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
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
