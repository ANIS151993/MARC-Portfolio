const expertiseNotes = [
  {
    label: "Cloud Security Focus",
    title: "Cloud security is the center of the research path I want to keep building.",
    text: "A lot of my current work comes back to one question: how do we protect cloud systems in a way that is technically strong, operationally realistic, and not limited to static security models? That is why cloud security keeps appearing across both my papers and my projects.",
    points: [
      "I keep working on cloud-native defense ideas because they fit both research depth and real operational need.",
      "The firewall research, threat intelligence direction, and distributed infrastructure work all connect back to this same interest.",
      "I care most about systems that can actually be studied, implemented, evaluated, and improved over time."
    ]
  },
  {
    label: "Serverless and Zero Trust",
    title: "Serverless defense and Zero Trust security became one of my strongest first-author directions.",
    text: "I care about these two areas together because they force a system to make careful trust decisions in environments that change quickly. That makes them a good place to study both architecture and defense logic at the same time.",
    points: [
      "My firewall papers and builds explore how Zero Trust ideas can be enforced more actively in cloud-native systems.",
      "I am interested in continuous verification, policy-aware security, and security behavior that adapts to changing conditions.",
      "This direction stays close to the kind of security engineering problems I want to study in a PhD."
    ]
  },
  {
    label: "Distributed Systems and AI",
    title: "I am also interested in dependable AI when it behaves like part of a larger system.",
    text: "My AI-related work is not only about model output. I care about what happens when models have to coordinate, review themselves, or operate as part of a broader architecture. That is why I keep returning to distributed agents, reliability, and evaluation quality.",
    points: [
      "The distributed AI and self-correcting LLM work both come from this systems-oriented view of AI.",
      "I want AI work that is careful, testable, and honest about trust and failure.",
      "This interest fits naturally with my larger background in networks, systems, and infrastructure protection."
    ]
  },
  {
    label: "Research Style",
    title: "I like research that moves from idea to implementation instead of staying abstract.",
    text: "I care about papers, but I also care about what happens after a paper idea starts taking shape. That is why I build demos, prototype systems, and reproducible workflows. They help me understand the problem better and explain the work more clearly to other people.",
    points: [
      "My first-author work usually includes methodology design, implementation, experimentation, and writing.",
      "I try to keep the systems visible so the ideas are easier to evaluate and discuss.",
      "That implementation habit is one of the main things I want to carry into PhD work."
    ]
  }
];

const works = [
  {
    category: "firewall",
    label: "Research Track",
    title: "Serverless Intelligent Firewall Agenda",
    description: "This is the longest-running first-author thread in my work. I use it to study how adaptive cloud defense, Zero Trust principles, and intelligent firewall behavior can be connected in one practical security architecture.",
    visual: "linear-gradient(145deg, #1b2d45, #0f1726 48%, #122135 100%)",
    links: [
      { label: "Read Paper Note", href: "/blog/posts/firewall-zero-trust-paper/", internal: true, variant: "note" },
      { label: "Open Demo", href: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-1/", variant: "live" }
    ]
  },
  {
    category: "trust",
    label: "Research Track",
    title: "Zero Trust and Continuous Verification",
    description: "I keep coming back to Zero Trust because I do not think trust should be treated as a one-time decision. I want to study how verification can stay active in a system that is still usable, not only restrictive.",
    visual: "linear-gradient(145deg, #3a1f15, #1c1720 44%, #112031 100%)",
    links: [
      { label: "Read Related Note", href: "/blog/posts/cross-cloud-firewall-paper/", internal: true, variant: "note" },
      { label: "Open Research Build", href: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/", variant: "live" }
    ]
  },
  {
    category: "federated",
    label: "Research Track",
    title: "Federated Threat Intelligence for Multi-Cloud Security",
    description: "This published line of work is about sharing security intelligence across cloud environments without giving away too much sensitive information. I care about this theme because real cloud defense has to deal with distribution, coordination, and privacy together.",
    visual: "linear-gradient(145deg, #10263a, #112031 46%, #253249 100%)",
    links: [
      { label: "Read Paper Note", href: "/blog/posts/fedthreatx-paper/", internal: true, variant: "note" },
      { label: "Open Project Page", href: "https://anis151993.github.io/FedThreat-X/", variant: "live" }
    ]
  },
  {
    category: "llm",
    label: "Research Track",
    title: "LLM Reliability and Self-Correction",
    description: "I am interested in what makes an AI system more dependable, especially when it has to reason carefully. That is why I built and wrote about self-correcting LLM workflows instead of treating model output as trustworthy by default.",
    visual: "linear-gradient(145deg, #2c1637, #161929 46%, #1b2d45 100%)",
    links: [
      { label: "Read Paper Note", href: "/blog/posts/self-correcting-math-paper/", internal: true, variant: "note" },
      { label: "Open Demo", href: "https://anis151993.github.io/Self-Correcting-LLM-localhost/", variant: "live" }
    ]
  },
  {
    category: "agents",
    label: "Research Track",
    title: "Distributed Multi-Agent AI Systems",
    description: "This theme comes from a systems question I care about: what happens when several models work together instead of one model working alone? I use this area to think about coordination, task structure, and local distributed AI behavior.",
    visual: "linear-gradient(145deg, #152332, #12283a 40%, #233c4f 100%)",
    links: [
      { label: "Read Project Note", href: "/blog/posts/distributed-ai-ensemble/", internal: true, variant: "note" },
      { label: "Open Demo", href: "https://anis151993.github.io/Distributed-AI/", variant: "live" }
    ]
  },
  {
    category: "workflow",
    label: "Research Track",
    title: "Reproducible Research Workflow",
    description: "I care about reproducibility because research becomes stronger when someone can inspect the process instead of trusting a final claim only. That is why I built workflow tools that help make data and notebook-based work easier to repeat and explain.",
    visual: "linear-gradient(145deg, #2a2a18, #1a2532 45%, #2a3544 100%)",
    links: [
      { label: "Read Project Note", href: "/blog/posts/datamentor-notebook-studio/", internal: true, variant: "note" },
      { label: "Open Demo", href: "https://anis151993.github.io/Notebook-Studio/", variant: "live" }
    ]
  }
];

const workCategoryNotes = [
  {
    category: "firewall",
    label: "Firewall Research",
    title: "First-Author Serverless Defense Path",
    text: "Read the longer note about the main firewall paper and how that idea turned into a visible research system.",
    href: "/blog/posts/firewall-zero-trust-paper/"
  },
  {
    category: "trust",
    label: "Zero Trust",
    title: "Cross-Cloud Adaptation and Continuous Trust",
    text: "Read the note about how the firewall agenda expanded into cross-cloud adaptation and stronger trust enforcement.",
    href: "/blog/posts/cross-cloud-firewall-paper/"
  },
  {
    category: "federated",
    label: "Federated Defense",
    title: "Threat Intelligence Across Cloud Environments",
    text: "Read the note on FedThreat-X, my published first-author paper on privacy-preserving threat intelligence across clouds.",
    href: "/blog/posts/fedthreatx-paper/"
  },
  {
    category: "llm",
    label: "LLM Reliability",
    title: "Self-Correcting Reasoning Systems",
    text: "Read the note about staged self-review and why I think reliability matters more than confident output alone.",
    href: "/blog/posts/self-correcting-math-paper/"
  },
  {
    category: "agents",
    label: "Agent Systems",
    title: "Distributed AI Collaboration",
    text: "Read the note about local multi-agent coordination and why I keep exploring AI as a system instead of one model only.",
    href: "/blog/posts/distributed-ai-paper/"
  },
  {
    category: "workflow",
    label: "Research Workflow",
    title: "Reproducible Notebook and Data Flow",
    text: "Read the note about DataMentor and why reproducibility is part of research quality for me.",
    href: "/blog/posts/datamentor-notebook-studio/"
  }
];

const projects = [
  {
    label: "Firewall Research Build",
    title: "Serverless Intelligent Firewall",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-1/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-1/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-1",
    note: "/blog/posts/serverless-intelligent-firewall/",
    metrics: [["98%", "detection accuracy"], ["0.990", "ROC-AUC"], ["135 ms", "avg. response"]],
    story: "I built this so the firewall research would be visible as a system, not only a paper title: AWS Lambda, WAF, IAM, and S3 with LSTM, BiGRU, and XGBoost detection and Zero Trust enforcement.",
    points: [
      "Published as my first-author IEEE CSCloud 2025 paper.",
      "Five attack categories on the CICIDS2017 benchmark.",
      "The base for the cross-cloud and self-learning versions."
    ]
  },
  {
    label: "Cross-Cloud Security Research",
    title: "Towards a Serverless Intelligent Firewall: Cross-Cloud Adaptation",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-2",
    note: "/blog/posts/cross-cloud-firewall/",
    story: "This version pushes the firewall into a distributed, multi-cloud setting where policy has to adapt as trust boundaries move between providers.",
    points: [
      "Published at IEEE SmartCloud 2026.",
      "Cross-cloud adaptation with policy-aware security behavior.",
      "Architecture and defense logic studied together."
    ]
  },
  {
    label: "Autonomous Security Systems",
    title: "Autonomous Self-Learning Serverless Intelligent Firewall",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-3",
    note: "/blog/posts/autonomous-firewall/",
    story: "The third generation asks whether a cloud defense can keep learning from new threat intelligence instead of staying static.",
    points: [
      "REST API threat intelligence + multi-paradigm ML + federated Zero Trust.",
      "Target: Q1 journal (in preparation).",
      "Builds on the published FedThreat-X federated work."
    ]
  },
  {
    label: "LLM Security Automation",
    title: "PentAI Pro: LLM-Powered Automated Penetration Testing",
    browserLabel: "apts.marcbd.site",
    demo: "https://apts.marcbd.site/",
    repo: "https://github.com/ANIS151993/Automated-Penetration-Testing-system",
    note: "/blog/posts/pentai-pro/",
    metrics: [["3×", "scope checks"], ["108", "tests < 44 s"], ["SHA-256", "audit chain"]],
    story: "Self-hosted LLM agents run a full penetration-testing sequence across three isolated VMs without sending data to any outside service.",
    points: [
      "Scope is verified at three layers before any tool runs.",
      "Every step is signed into a tamper-evident audit chain.",
      "IEEE paper in preparation."
    ]
  },
  {
    label: "LLM Reliability",
    title: "Teaching Large Language Models to Think Twice",
    browserLabel: "anis151993.github.io/Self-Correcting-LLM-localhost/",
    demo: "https://anis151993.github.io/Self-Correcting-LLM-localhost/",
    repo: "https://github.com/ANIS151993/Self-Correcting-LLM-localhost",
    note: "/blog/posts/self-correcting-llm/",
    metrics: [["31→50%", "GSM8K accuracy"], ["+60%", "relative gain"], ["78%", "errors corrected"]],
    story: "A Generator, Critic, Synthesizer pipeline that separates producing an answer from reviewing it, then reconciles both.",
    points: [
      "Accepted at AIR-RES/CAC 2026.",
      "Reliability measured, not assumed.",
      "Runs on local models."
    ]
  },
  {
    label: "Distributed AI Systems",
    title: "A Local Distributed Multi-Agent LLM Ensemble System",
    browserLabel: "anis151993.github.io/Distributed-AI/",
    demo: "https://anis151993.github.io/Distributed-AI/",
    repo: "https://github.com/ANIS151993/Distributed-AI",
    note: "/blog/posts/distributed-ai-ensemble/",
    metrics: [["4", "local agents"], ["5", "strategies"], ["3", "benchmarks"]],
    story: "Four local agents combined through majority voting, weighted voting, and two-round debate, validated with paired t-tests and Wilcoxon tests.",
    points: [
      "MMLU, GSM8K, and TruthfulQA evaluation.",
      "IEEE paper in preparation.",
      "Distributed systems thinking applied to LLMs."
    ]
  },
  {
    label: "Research Workflow Tool",
    title: "DataMentor / Notebook Studio",
    browserLabel: "datamentor.marcbd.site",
    demo: "https://datamentor.marcbd.site/",
    repo: "https://github.com/ANIS151993/DataMentor",
    note: "/blog/posts/datamentor-notebook-studio/",
    story: "Serverless CSV intelligence with notebook automation and deterministic runtime repair, so analysis is easy to repeat and inspect.",
    points: [
      "Under review at IEEE ISAIA 2026.",
      "Reproducibility treated as part of research quality.",
      "Live public app."
    ]
  }
];

/* Plain-language explanations keyed by paper title. Status, venue, dates and
   links come from the shared /assets/data/portfolio-data.js file. */
const publicationStories = {
  "Towards a Serverless Intelligent Firewall: AI-Driven Security, and Zero-Trust Architectures": "In simple words, this paper asks how we can build a smarter cloud firewall that does not trust every request by default, using intelligent security logic and Zero Trust thinking.",
  "Towards a Serverless Intelligent Firewall: Integrating Cross-Cloud Adaptation, AI-Driven Security, and Zero-Trust Architectures": "This paper extends the firewall into cross-cloud environments: how does a smart firewall stay useful when systems are spread across different cloud providers?",
  "FedThreat-X: A Privacy-Preserving Federated Threat Intelligence Framework for Multi-Cloud Cybersecurity": "Cloud tenants train one shared threat-detection model without exposing their own traffic to each other, so defense improves without giving up privacy.",
  "Auction-Based Dynamic Resource Allocation for Optimized Edge Computing in Distributed Networks": "Many devices want edge resources at the same time, but resources are limited. This paper uses an auction model to allocate them more fairly and efficiently.",
  "AI and Cloud Computing in Business Systems: A Hybrid Model for Enhancing Enterprise Resource Planning": "How AI and cloud systems can make ERP platforms more adaptive and better at supporting business decisions.",
  "Deepfake Detection in MIS: Leveraging DenseNet and Multi-Scale Information for Enhanced Digital Forensics": "A deep-learning approach using DenseNet and multi-scale features to detect manipulated media and support digital forensics.",
  "Enhancing Signature-Based Intrusive Detection System (IDS) for IoT Networks Using Machine Learning Algorithm": "Makes traditional signature-based detection more useful for IoT networks by adding machine learning support. My most-cited paper.",
  "Cloud-Based CRM Systems Enhanced by AI and Graph Theory: A Hybrid Model for Optimizing Customer Engagement": "Uses AI and graph theory so cloud CRM platforms can understand customer relationships and engagement more clearly.",
  "Attention-Enhanced U-Net Models for Breast Cancer Image Analysis: A Comparative Study": "Compares attention-enhanced U-Net models for breast cancer image analysis to improve detection quality.",
  "Fed-ZTA-Transformer: A Privacy-Preserving Federated Framework for Continuous Verification in Zero Trust Architectures": "A transformer-based federated model that keeps verifying trust continuously across distributed systems while preserving privacy.",
  "Detecting Misinformation with Multimodal AI: Leveraging Vision and NLP for Fact-Checking": "Brings together image understanding and language processing to improve automated fact-checking.",
  "A Collaborative Hybrid CNN–LSTM Framework for Real-Time Multichannel Retail Demand Forecasting Using Edge–Cloud Computing": "Combines CNN and LSTM models with edge and cloud computing to forecast retail demand in real time.",
  "AI-Enhanced Adaptive Network Security for 6G and Edge Computing": "How AI can protect fast-changing 6G and edge environments where speed and adaptability matter.",
  "Leveraging Machine Learning and NLP for Adaptive Education Systems: A Personalized Approach for Children": "Uses machine learning and NLP to make learning systems more personal for children.",
  "Enhanced Brain Tumor Detection Using Finetuned Transfer Learning Models: Achieving Superior Accuracy with Xception": "Fine-tunes strong pretrained models such as Xception for more accurate brain tumor detection.",
  "Driving Industry 4.0 with Digital Twins: Enhancing Predictive Maintenance and Operational Performance Through IoT and Machine Learning": "Digital twins, IoT data, and machine learning help organizations predict equipment issues before they become expensive.",
  "Teaching Large Language Models to Think Twice: A Three-Stage Framework for Self-Correcting Mathematical Reasoning": "Can a model become more reliable by checking its own reasoning first? On GSM8K, accuracy rose from 31.2% to 49.9% with a 78% error-correction rate.",
  "DataMentor: A Practical Framework for Serverless CSV Intelligence with Interactive Notebook Automation and Deterministic Runtime Repair": "A serverless framework that analyzes CSV data through automated notebooks and repairs runtime failures deterministically.",
  "Autonomous Self-Learning Serverless Intelligent Firewall: Integrating REST API-Driven Open-Source Threat Intelligence, Multi-Paradigm Machine Learning, and Federated Zero-Trust Architectures": "One of my larger ongoing ideas: a serverless defense that keeps learning from open-source threat intelligence with federated Zero Trust.",
  "A Local Distributed Multi-Agent LLM Ensemble System: Design, Optimization, Reproducibility, and Statistical Evaluation": "How several local LLM agents can check and improve on each other's work, with a statistically rigorous evaluation.",
  "Self-Hosted LLM Orchestration for Autonomous Penetration Testing with Three-Layer Scope Enforcement and Tamper-Evident Cryptographic Audit Chains": "The paper behind PentAI Pro: autonomous penetration testing that stays in scope and leaves a tamper-evident trail.",
  "A Hybrid AI/Machine Learning Approach for Real-Time Anomaly Detection in IoT Networks": "Combining AI and classic machine learning to spot anomalies in IoT traffic as they happen.",
  "AI-Based Intrusion Detection for IoT Networks": "AI-based intrusion detection tailored to the constraints of IoT networks.",
  "Open-Source Web Application Firewall Implementation Using ModSecurity Engine: A Performance and Security Evaluation Framework": "A reproducible benchmark of how ModSecurity rule sets trade detection coverage against latency and throughput.",
  "Trust-Based Video Management Framework for Social Multimedia Networks": "A trust-scoring framework for managing video in social multimedia networks."
};

const publicationDetailMap = new Map([
  ["Towards a Serverless Intelligent Firewall: AI-Driven Security, and Zero-Trust Architectures", "/blog/posts/firewall-zero-trust-paper/"],
  ["Auction-Based Dynamic Resource Allocation for Optimized Edge Computing in Distributed Networks", "/blog/posts/edge-resource-allocation-paper/"],
  ["AI and Cloud Computing in Business Systems: A Hybrid Model for Enhancing Enterprise Resource Planning", "/blog/posts/enterprise-ai-erp-paper/"],
  ["Deepfake Detection in MIS: Leveraging DenseNet and Multi-Scale Information for Enhanced Digital Forensics", "/blog/posts/deepfake-detection-paper/"],
  ["Towards a Serverless Intelligent Firewall: Integrating Cross-Cloud Adaptation, AI-Driven Security, and Zero-Trust Architectures", "/blog/posts/cross-cloud-firewall-paper/"],
  ["FedThreat-X: A Privacy-Preserving Federated Threat Intelligence Framework for Multi-Cloud Cybersecurity", "/blog/posts/fedthreatx-paper/"],
  ["Teaching Large Language Models to Think Twice: A Three-Stage Framework for Self-Correcting Mathematical Reasoning", "/blog/posts/self-correcting-math-paper/"],
  ["A Local Distributed Multi-Agent LLM Ensemble System: Design, Optimization, Reproducibility, and Statistical Evaluation", "/blog/posts/distributed-ai-paper/"],
  ["Self-Hosted LLM Orchestration for Autonomous Penetration Testing with Three-Layer Scope Enforcement and Tamper-Evident Cryptographic Audit Chains", "/blog/posts/pentai-pro/"],
  ["DataMentor: A Practical Framework for Serverless CSV Intelligence with Interactive Notebook Automation and Deterministic Runtime Repair", "/blog/posts/datamentor-notebook-studio/"]
]);

const PUB_STATUS = {
  published: ["published", "Published"],
  accepted: ["accepted", "Accepted"],
  review: ["under-review", "Under Review"],
  prep: ["in-preparation", "In Preparation"]
};
const ordinal = (n) => `${n}${n === 1 ? "st" : n === 2 ? "nd" : n === 3 ? "rd" : "th"}`;
const sharedData = window.MARC_DATA || { publications: [], scholar: {} };
const statusOrder = { published: 0, accepted: 1, review: 2, prep: 3 };

const publications = sharedData.publications
  .slice()
  .sort((a, b) => statusOrder[a.status] - statusOrder[b.status] || a.pos - b.pos || b.date.localeCompare(a.date))
  .map((p) => {
    const [statusKey, statusLabel] = PUB_STATUS[p.status];
    const authorship = p.pos === 1 ? "First Author" : `${ordinal(p.pos)} Author`;
    const date = p.status === "published"
      ? new Date(`${p.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
      : statusLabel;
    const meta = [p.venue, date, authorship];
    if (p.cites) meta.push(`${p.cites} citations`);
    return {
      categories: [statusKey, p.pos === 1 ? "first-author" : "co-authored"],
      pill: `${statusLabel} | ${p.pos === 1 ? "First Author" : "Co-Authored"}`,
      title: p.title,
      meta,
      text: publicationStories[p.title] || "",
      links: [
        p.ieee ? { label: "IEEE Xplore", href: p.ieee } : null,
        p.page ? { label: "Webpage", href: p.page } : null
      ].filter(Boolean)
    };
  });

/* Blog-wide counters: <strong data-blog-stat="key"> */
const blogStats = {
  published: sharedData.publications.filter((p) => p.status === "published").length,
  pipeline: sharedData.publications.filter((p) => p.status !== "published").length,
  firstPublished: sharedData.publications.filter((p) => p.status === "published" && p.pos === 1).length,
  citations: sharedData.scholar.citations,
  projects: projects.length
};
document.querySelectorAll("[data-blog-stat]").forEach((node) => {
  const value = blogStats[node.getAttribute("data-blog-stat")];
  if (value !== undefined) node.textContent = String(value);
});

const expertiseGrid = document.getElementById("expertiseGrid");
const worksGrid = document.getElementById("worksGrid");
const workCategoryNoteGrid = document.getElementById("workCategoryNoteGrid");
const projectStoryGrid = document.getElementById("projectStoryGrid");
const publicationStack = document.getElementById("publicationStack");
const workFilterBar = document.getElementById("workFilterBar");
const publicationFilterBar = document.getElementById("publicationFilterBar");
const progressBar = document.getElementById("pageProgress");
const yearNode = document.getElementById("currentYear");

const renderExternalAction = (label, href, className = "") =>
  `<a${className ? ` class="${className}"` : ""} href="${href}" target="_blank" rel="noopener">${label}</a>`;

const renderInternalAction = (label, href, className = "") =>
  `<a${className ? ` class="${className}"` : ""} href="${href}">${label}</a>`;

const renderExpertise = () => {
  if (!expertiseGrid) {
    return;
  }

  expertiseGrid.innerHTML = expertiseNotes
    .map(
      (item) => `
        <article class="expertise-note reveal">
          <p class="section-tag">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <ul class="note-list">
            ${item.points.map((point) => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
};

const renderWorks = () => {
  if (!worksGrid) {
    return;
  }

  worksGrid.innerHTML = works
    .map(
      (item) => `
        <article class="work-note reveal" data-workcat="${item.category}" style="--work-image:${item.visual};">
          <div class="work-note-card">
            <div class="work-note-copy">
              <p class="work-chip">${item.label}</p>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="work-links">
                ${item.links
                  .map((link) => {
                    if (link.internal) {
                      return renderInternalAction(link.label, link.href, link.variant === "note" ? "link-note" : "link-source");
                    }
                    return renderExternalAction(
                      link.label,
                      link.href,
                      link.variant === "live" ? "link-live" : "link-source"
                    );
                  })
                  .join("")}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderWorkCategoryNotes = () => {
  if (!workCategoryNoteGrid) {
    return;
  }

  workCategoryNoteGrid.innerHTML = workCategoryNotes
    .map(
      (item) => `
        <article class="work-category-note reveal" data-worknote="${item.category}">
          <p class="section-tag">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
          <div class="category-note-actions">
            <a class="link-note" href="${item.href}">Read Full Theme Note</a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
  if (!projectStoryGrid) {
    return;
  }

  projectStoryGrid.innerHTML = projects
    .map(
      (item) => `
        <article class="project-story reveal">
          <div class="browser-shell">
            <div class="browser-bar" aria-hidden="true">
              <span></span><span></span><span></span>
              <p>${item.browserLabel || "github.com/ANIS151993"}</p>
            </div>
            ${item.demo
              ? `<button class="project-frame project-frame-load" type="button" data-src="${item.demo}" data-title="Live preview of ${item.title}">
                  <span class="project-frame-play" aria-hidden="true">&#9654;</span>
                  <span>Load live preview</span>
                </button>`
              : `<div class="project-frame project-frame-load project-frame-static"><span>Code-only research build</span></div>`}
          </div>
          <div class="project-story-copy">
            <p class="project-pill">${item.label}</p>
            <h3>${item.title}</h3>
            ${item.metrics ? `<div class="project-metrics">${item.metrics.map(([v, k]) => `<div><strong>${v}</strong><span>${k}</span></div>`).join("")}</div>` : ""}
            <p>${item.story}</p>
            <ul class="project-points">
              ${item.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
            <div class="project-links">
              ${renderExternalAction("View Repo", item.repo, "link-source")}
              ${item.demo ? renderExternalAction("Open Live Demo", item.demo, "link-live") : ""}
              ${item.note ? renderInternalAction("Read Full Note", item.note, "link-note") : ""}
            </div>
          </div>
        </article>
      `
    )
    .join("");

  projectStoryGrid.addEventListener("click", (event) => {
    const button = event.target.closest("button.project-frame-load");
    if (!button) {
      return;
    }
    const frame = document.createElement("iframe");
    frame.className = "project-frame";
    frame.src = button.dataset.src;
    frame.title = button.dataset.title;
    button.replaceWith(frame);
  });
};

const renderPublications = () => {
  if (!publicationStack) {
    return;
  }

  publicationStack.innerHTML = publications
    .map(
      (item, index) => `
        <details class="publication-note reveal" data-pubcat="${item.categories.join(" ")}" ${index === 0 ? "open" : ""}>
          <summary>
            <div class="publication-summary">
              <p class="pub-pill">${item.pill}</p>
              <h3>${item.title}</h3>
              <div class="publication-meta">
                ${item.meta.map((meta) => `<span>${meta}</span>`).join("")}
              </div>
            </div>
          </summary>
          <div class="publication-body">
            <p>${item.text}</p>
            ${item.links.length || publicationDetailMap.get(item.title)
              ? `<div class="publication-links">
                  ${item.links
                    .map((link) =>
                      renderExternalAction(
                        link.label,
                        link.href,
                        link.label === "IEEE Xplore" || link.label === "Webpage" ? "link-live" : "link-source"
                      )
                    )
                    .join("")}
                  ${publicationDetailMap.get(item.title) ? renderInternalAction("Read Full Note", publicationDetailMap.get(item.title), "link-note") : ""}
                </div>`
              : ""}
          </div>
        </details>
      `
    )
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

const setupWorkFilters = () => {
  const cards = () => document.querySelectorAll("#worksGrid .work-note");
  const noteCards = () => document.querySelectorAll("#workCategoryNoteGrid .work-category-note");
  if (!workFilterBar) {
    return;
  }

  workFilterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      workFilterBar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards().forEach((card) => {
        const category = card.getAttribute("data-workcat") || "";
        const show = filter === "all" || category.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });

      noteCards().forEach((card) => {
        const category = card.getAttribute("data-worknote") || "";
        const show = filter === "all" || category.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
};

const setupPublicationFilters = () => {
  const cards = () => document.querySelectorAll("#publicationStack .publication-note");
  if (!publicationFilterBar) {
    return;
  }

  publicationFilterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter") || "all";
      publicationFilterBar.querySelectorAll("button").forEach((item) => item.classList.remove("active"));
      button.classList.add("active");

      cards().forEach((card) => {
        const category = card.getAttribute("data-pubcat") || "";
        const show = filter === "all" || category.includes(filter);
        card.classList.toggle("hidden-card", !show);
      });
    });
  });
};

const setupChapterSpy = () => {
  const links = document.querySelectorAll("[data-chapter-link]");
  const sections = document.querySelectorAll("[id]");
  if (!links.length || !sections.length) {
    return;
  }

  const map = new Map(Array.from(links).map((link) => [link.getAttribute("data-chapter-link"), link]));
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

  sections.forEach((section) => {
    if (map.has(section.id)) {
      observer.observe(section);
    }
  });
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

renderExpertise();
renderWorkCategoryNotes();
renderWorks();
renderProjects();
renderPublications();
setupReveal();
setupWorkFilters();
setupPublicationFilters();
setupChapterSpy();
setupProgress();
