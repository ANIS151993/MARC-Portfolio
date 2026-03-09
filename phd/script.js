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
    "Serverless Security and Intelligent Firewall Research",
    "Physical and Cloud Network Infrastructure Security",
    "Federated Threat Intelligence for Multi-Cloud Systems",
    "Zero-Trust Security Automation and Continuous Verification"
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
  const decimals = Number(node.getAttribute("data-decimals") || "0");
  const duration = 1250;
  const start = performance.now();

  const frame = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const value = target * progress;
    node.textContent = value.toFixed(decimals);
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
