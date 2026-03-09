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
    "Network Administrator",
    "Cloud and Server Architect",
    "Cybersecurity Researcher",
    "System and Infrastructure Engineer"
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
  const duration = 1300;
  const startTime = performance.now();

  const step = (time) => {
    const progress = Math.min((time - startTime) / duration, 1);
    const value = Math.round(progress * target);
    node.textContent = value.toString();
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

const portfolioFilters = document.getElementById("portfolioFilters");
const portfolioCards = document.querySelectorAll("#portfolioGrid .portfolio-card");

if (portfolioFilters && portfolioCards.length) {
  portfolioFilters.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      portfolioFilters.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      portfolioCards.forEach((card) => {
        const cat = card.getAttribute("data-cat") || "";
        const show = filter === "all" || cat.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
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

const nextField = document.getElementById("jobFormNext");
if (nextField) {
  let path = window.location.pathname;
  if (path.endsWith(".html")) {
    path = path.slice(0, path.lastIndexOf("/") + 1);
  }
  if (!path.endsWith("/")) {
    path += "/";
  }
  nextField.value = `${window.location.origin}${path}?sent=1#contact`;
}

const successNode = document.getElementById("jobFormSuccess");
if (successNode) {
  const params = new URLSearchParams(window.location.search);
  if (params.get("sent") === "1") {
    successNode.hidden = false;
  }
}

const yearNode = document.getElementById("currentYear");
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
