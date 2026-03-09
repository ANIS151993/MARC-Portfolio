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

const typedNode = document.getElementById("phdTyped");
if (typedNode) {
  const phrases = [
    "Serverless Security and Intelligent Firewalls",
    "Zero-Trust Automation and Continuous Verification",
    "Federated Threat Intelligence for Multi-Cloud Systems",
    "AI-Driven Intrusion Detection and Cloud Defense"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let deleting = false;

  const step = () => {
    const phrase = phrases[phraseIndex];

    if (!deleting) {
      charIndex += 1;
      typedNode.textContent = phrase.slice(0, charIndex);
      if (charIndex === phrase.length) {
        deleting = true;
        setTimeout(step, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      typedNode.textContent = phrase.slice(0, charIndex);
      if (charIndex === 0) {
        deleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    setTimeout(step, deleting ? 35 : 62);
  };

  step();
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
  const duration = 1250;
  const start = performance.now();

  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = Math.round(progress * target);
    if (target === 393) {
      node.textContent = value === 393 ? "3.93" : (value / 100).toFixed(2);
    } else {
      node.textContent = String(value);
    }
    if (progress < 1) {
      requestAnimationFrame(frame);
    }
  };

  requestAnimationFrame(frame);
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

const filterWrap = document.getElementById("pubFilters");
const pubCards = document.querySelectorAll("#pubGrid .pub-card");

if (filterWrap && pubCards.length) {
  filterWrap.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("data-status");
      filterWrap.querySelectorAll("button").forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      pubCards.forEach((card) => {
        const cardStatus = card.getAttribute("data-status");
        const show = status === "all" || cardStatus === status;
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
}

const nextField = document.getElementById("phdFormNext");
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

const successNode = document.getElementById("phdFormSuccess");
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
