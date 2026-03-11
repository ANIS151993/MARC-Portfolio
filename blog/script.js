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
    description: "This part of my pipeline is about sharing security intelligence across cloud environments without giving away too much sensitive information. I care about this theme because real cloud defense has to deal with distribution, coordination, and privacy together.",
    visual: "linear-gradient(145deg, #10263a, #112031 46%, #253249 100%)",
    links: [
      { label: "Read Related Note", href: "/blog/posts/cross-cloud-firewall-paper/", internal: true, variant: "note" },
      { label: "Open Advanced Build", href: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/", variant: "live" }
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
    text: "Read the related note that best connects to the multi-cloud and distributed defense direction behind this theme.",
    href: "/blog/posts/cross-cloud-firewall-paper/"
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
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-1.git",
    story: "I built this project because I wanted the firewall research to be visible as a system, not only as a paper title. It shows how I think about adaptive cloud security, Zero Trust enforcement, and a security architecture that can still be discussed in practical terms.",
    points: [
      "The build connects serverless design, cloud security, and Zero Trust ideas in one research prototype.",
      "It helped me test how the research direction could be communicated more clearly through implementation.",
      "For me, this project is one of the best examples of how I like to connect papers and systems."
    ]
  },
  {
    label: "Cross-Cloud Security Research",
    title: "Towards a Serverless Intelligent Firewall: Cross-Cloud Adaptation",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-2.git",
    story: "The first firewall build gave me a base. This one pushed the same idea into a more distributed cloud setting, because real systems often span more than one environment and the defense model has to adapt with them.",
    points: [
      "This build focuses on cross-cloud adaptation and stronger policy-aware security behavior.",
      "It reflects my interest in research problems that become harder when infrastructure is distributed.",
      "It also shows that I like to study architecture and defense logic together, not separately."
    ]
  },
  {
    label: "Autonomous Security Systems",
    title: "Autonomous Self-Learning Serverless Intelligent Firewall",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-3.git",
    story: "This version moves the firewall agenda toward a more ambitious question: can a cloud defense system learn from new intelligence and become more adaptive over time instead of staying mostly static?",
    points: [
      "It combines threat intelligence, machine learning, and Zero Trust ideas in one evolving architecture.",
      "The project is closely connected to the next-stage paper and journal direction I am working toward.",
      "It represents the more long-range side of the security research path I want to keep building."
    ]
  },
  {
    label: "Research Workflow Tool",
    title: "DataMentor / Notebook Studio",
    browserLabel: "anis151993.github.io/Notebook-Studio/",
    demo: "https://anis151993.github.io/Notebook-Studio/",
    repo: "https://github.com/ANIS151993/Notebook-Studio.git",
    story: "DataMentor matters to me because good research should be reproducible. I built this project to make notebook and data workflows cleaner, easier to repeat, and easier to explain to someone else later.",
    points: [
      "It focuses on CSV intelligence, notebook execution, and research-ready workflow support.",
      "It supports the kind of analysis and technical reporting that should not depend on one-time manual steps.",
      "It shows that I care about process quality as much as final results."
    ]
  },
  {
    label: "Distributed AI Systems",
    title: "A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving",
    browserLabel: "anis151993.github.io/Distributed-AI/",
    demo: "https://anis151993.github.io/Distributed-AI/",
    repo: "https://github.com/ANIS151993/Distributed-AI.git",
    story: "This project explores what happens when several local agents work together instead of relying on one model only. I use it to study coordination, role structure, and how systems thinking changes the way AI can solve harder tasks.",
    points: [
      "It focuses on orchestration, task splitting, and collaborative reasoning between local agents.",
      "I like this project because it mixes AI experimentation with distributed systems thinking.",
      "It fits my broader interest in practical AI architectures rather than isolated model demos."
    ]
  },
  {
    label: "LLM Reliability",
    title: "Teaching Large Language Models to Think Twice",
    browserLabel: "anis151993.github.io/Self-Correcting-LLM-localhost/",
    demo: "https://anis151993.github.io/Self-Correcting-LLM-localhost/",
    repo: "https://github.com/ANIS151993/Self-Correcting-LLM-localhost.git",
    story: "This project asks a simple but important question: can a model become more reliable if it checks its own reasoning before giving a final answer? I like this work because it is really about trust, carefulness, and responsible AI behavior.",
    points: [
      "The project follows a staged self-correction framework for more dependable reasoning.",
      "It matters most in tasks where mistakes are costly, like mathematical or structured reasoning.",
      "For me, it is one of the clearest ways to study reliability instead of surface fluency."
    ]
  }
];

const projectDetailMap = new Map([
  ["Serverless Intelligent Firewall", "/blog/posts/serverless-intelligent-firewall/"],
  ["Towards a Serverless Intelligent Firewall: Cross-Cloud Adaptation", "/blog/posts/cross-cloud-firewall/"],
  ["Autonomous Self-Learning Serverless Intelligent Firewall", "/blog/posts/autonomous-firewall/"],
  ["DataMentor / Notebook Studio", "/blog/posts/datamentor-notebook-studio/"],
  ["A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving", "/blog/posts/distributed-ai-ensemble/"],
  ["Teaching Large Language Models to Think Twice", "/blog/posts/self-correcting-llm/"]
]);

const publications = [
  {
    categories: ["published", "first-author"],
    pill: "Published | First Author",
    title: "Towards a Serverless Intelligent Firewall: AI-Driven Security, and Zero-Trust Architectures",
    meta: ["IEEE CSCloud 2025", "Nov 7, 2025", "First Author"],
    text: "In simple words, this paper asks how we can build a smarter cloud firewall that does not trust every request by default. I focused on using intelligent security logic and Zero Trust thinking to protect cloud-native systems better.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11261452/" }
    ]
  },
  {
    categories: ["published", "first-author"],
    pill: "Published | First Author",
    title: "Auction-Based Dynamic Resource Allocation for Optimized Edge Computing in Distributed Networks",
    meta: ["IEEE CSITSS 2025", "Nov 20, 2025", "First Author"],
    text: "This paper studies a practical problem in edge computing: many devices want service at the same time, but resources are limited. I explored a smarter way to allocate those resources so the system can work more fairly and efficiently.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11294238/" }
    ]
  },
  {
    categories: ["published", "first-author"],
    pill: "Published | First Author",
    title: "AI and Cloud Computing in Business Systems: A Hybrid Model for Enhancing Enterprise Resource Planning",
    meta: ["IEEE CSITSS 2025", "Nov 20, 2025", "First Author"],
    text: "Here I looked at how AI and cloud systems can improve ERP platforms. The main idea was to make enterprise systems more adaptive, more useful, and better at supporting business decisions.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11295090/" }
    ]
  },
  {
    categories: ["published", "first-author"],
    pill: "Published | First Author",
    title: "Deepfake Detection in MIS: Leveraging DenseNet and Multi-Scale Information for Enhanced Digital Forensics",
    meta: ["IEEE COMPAS 2025", "Oct 23, 2025", "First Author"],
    text: "This paper deals with a growing digital problem: fake and manipulated media. I worked on a deep-learning-based approach that helps improve detection and supports stronger digital forensics work.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11381812/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Cloud-Based CRM Systems Enhanced by AI and Graph Theory: A Hybrid Model for Optimizing Customer Engagement",
    meta: ["IEEE ISAECT 2025", "Dec 18, 2025", "Co-Authored"],
    text: "This work explores how AI and graph theory can help CRM platforms understand customer relationships and engagement more clearly. It connects business systems thinking with cloud-based intelligence.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11318795/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Enhancing Signature-Based Intrusive Detection System (IDS) for IoT Networks Using Machine Learning Algorithm",
    meta: ["IEEE QPAIN 2025", "Jul 31, 2025", "Co-Authored"],
    text: "This paper improves IDS thinking for IoT environments. The basic idea is to make traditional detection more useful by adding machine learning support in networks that face many changing threats.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11172064/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "AI-Enhanced Adaptive Network Security for 6G and Edge Computing",
    meta: ["IEEE QPAIN 2025", "Jul 31, 2025", "Co-Authored"],
    text: "In this paper, the focus is future-ready network security. We looked at how AI can help protect new environments like 6G and edge systems where speed and adaptability matter a lot.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11172162/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Detecting misinformation with multimodal AI: leveraging vision and NLP for fact-checking",
    meta: ["IEEE QPAIN 2025", "Jul 31, 2025", "Co-Authored"],
    text: "This paper looks at misinformation from a practical angle. Instead of depending on text only, it brings together image understanding and language processing to improve fact-checking.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11171663/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Driving Industry 4.0 with Digital Twins: Enhancing Predictive Maintenance and Operational Performance Through IoT and Machine Learning",
    meta: ["IEEE QPAIN 2025", "Jul 31, 2025", "Co-Authored"],
    text: "This work explores how digital twins, IoT data, and machine learning can help organizations predict issues earlier and improve operations before problems become expensive.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11172010/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Leveraging Machine Learning and NLP for Adaptive Education Systems: A Personalized Approach for Children",
    meta: ["IEEE QPAIN 2025", "Jul 31, 2025", "Co-Authored"],
    text: "This paper is about adaptive education. The goal was to use machine learning and NLP to make learning systems more personal and more useful for children.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11172258/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Attention-Enhanced U-Net Models for Breast Cancer Image Analysis: A Comparative Study",
    meta: ["IEEE ECCE 2025", "Feb 13, 2025", "Co-Authored"],
    text: "This medical imaging paper compares deep-learning approaches for breast cancer image analysis. The main goal was to improve detection quality through stronger model design.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11013847/" }
    ]
  },
  {
    categories: ["published", "co-authored"],
    pill: "Published | Co-Authored",
    title: "Enhanced Brain Tumor Detection Using Finetuned Transfer Learning Models: Achieving Superior Accuracy with Xception",
    meta: ["IEEE ECCE 2025", "Feb 13, 2025", "Co-Authored"],
    text: "This work uses transfer learning for brain tumor detection. In plain terms, it studies how we can fine-tune strong existing models to get better accuracy in medical image tasks.",
    links: [
      { label: "IEEE Xplore", href: "https://ieeexplore.ieee.org/abstract/document/11012947/" }
    ]
  },
  {
    categories: ["under-review", "first-author"],
    pill: "Under Review | First Author",
    title: "Towards a Serverless Intelligent Firewall: Integrating Cross-Cloud Adaptation, AI-Driven Security, and Zero-Trust Architectures",
    meta: ["IEEE SmartCloud 2026", "Under Review", "First Author"],
    text: "This paper extends my firewall research into cross-cloud environments. The question is simple: how can a smart firewall stay useful when systems are spread across different cloud settings?",
    links: [
      { label: "Repo", href: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-2.git" },
      { label: "Webpage", href: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/" }
    ]
  },
  {
    categories: ["under-review", "first-author"],
    pill: "Under Review | First Author",
    title: "Federated Threat Intelligence for Multi-Cloud Security: A Privacy-Preserving AI Approach",
    meta: ["IEEE IC3ECSBHI 2026", "Under Review", "First Author"],
    text: "This paper studies how threat intelligence can be shared across multiple cloud environments without giving away more sensitive information than necessary. The privacy side is an important part of the idea.",
    links: []
  },
  {
    categories: ["under-review", "first-author"],
    pill: "Under Review | First Author",
    title: "Continuous Verification in Zero Trust Security: A Model for Secure Automation",
    meta: ["IEEE IC3ECSBHI 2026", "Under Review", "First Author"],
    text: "This paper is about keeping trust active instead of assuming it forever. It explores how continuous verification can support safer automation in Zero Trust environments.",
    links: []
  },
  {
    categories: ["under-review", "first-author"],
    pill: "Under Review | First Author",
    title: "Teaching Large Language Models to Think Twice: A Three-Stage Framework for Self-Correcting Mathematical Reasoning",
    meta: ["CAC'26", "American CSE Draft Submission", "First Author"],
    text: "This paper asks whether a model can become more reliable by checking its own reasoning before giving a final answer. I like this work because it is really about trust, accuracy, and careful AI behavior.",
    links: [
      { label: "Venue", href: "https://american-cse.org/drafts" },
      { label: "Repo", href: "https://github.com/ANIS151993/Self-Correcting-LLM-localhost.git" },
      { label: "Webpage", href: "https://anis151993.github.io/Self-Correcting-LLM-localhost/" }
    ]
  },
  {
    categories: ["under-review", "first-author"],
    pill: "Under Review | First Author",
    title: "A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving",
    meta: ["Under Review", "Distributed AI Systems", "First Author"],
    text: "This work explores how multiple local agents can work together on harder tasks. It is part of my interest in distributed systems, coordination, and practical AI architecture.",
    links: [
      { label: "Repo", href: "https://github.com/ANIS151993/Distributed-AI.git" },
      { label: "Webpage", href: "https://anis151993.github.io/Distributed-AI/" }
    ]
  },
  {
    categories: ["in-preparation", "first-author"],
    pill: "In Preparation | First Author",
    title: "Autonomous Self-Learning Serverless Intelligent Firewall: Integrating REST API-Driven Open-Source Threat Intelligence, Multi-Paradigm Machine Learning, and Federated Zero-Trust Architectures",
    meta: ["Target: Q1 Journal", "In Preparation", "First Author"],
    text: "This is one of my larger ongoing ideas. The goal is to bring together self-learning behavior, open-source threat intelligence, and federated Zero Trust thinking in one stronger serverless defense model.",
    links: [
      { label: "Repo", href: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-3.git" },
      { label: "Webpage", href: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/" }
    ]
  },
  {
    categories: ["in-preparation", "first-author"],
    pill: "In Preparation | First Author",
    title: "Building a Team of AI Models: A Literature Review on Distributed Agent Networks",
    meta: ["Target: Conference Submission", "In Preparation", "First Author"],
    text: "This planned paper steps back and looks at the bigger picture. I want to study how teams of AI models are designed, why they work, and where distributed agent systems are going next.",
    links: []
  }
];

const publicationDetailMap = new Map([
  ["Towards a Serverless Intelligent Firewall: AI-Driven Security, and Zero-Trust Architectures", "/blog/posts/firewall-zero-trust-paper/"],
  ["Auction-Based Dynamic Resource Allocation for Optimized Edge Computing in Distributed Networks", "/blog/posts/edge-resource-allocation-paper/"],
  ["AI and Cloud Computing in Business Systems: A Hybrid Model for Enhancing Enterprise Resource Planning", "/blog/posts/enterprise-ai-erp-paper/"],
  ["Deepfake Detection in MIS: Leveraging DenseNet and Multi-Scale Information for Enhanced Digital Forensics", "/blog/posts/deepfake-detection-paper/"],
  ["Towards a Serverless Intelligent Firewall: Integrating Cross-Cloud Adaptation, AI-Driven Security, and Zero-Trust Architectures", "/blog/posts/cross-cloud-firewall-paper/"],
  ["Teaching Large Language Models to Think Twice: A Three-Stage Framework for Self-Correcting Mathematical Reasoning", "/blog/posts/self-correcting-math-paper/"],
  ["A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving", "/blog/posts/distributed-ai-paper/"]
]);

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
              <p>${item.browserLabel}</p>
            </div>
            <iframe class="project-frame" src="${item.demo}" title="Live preview of ${item.title}" loading="lazy"></iframe>
          </div>
          <div class="project-story-copy">
            <p class="project-pill">${item.label}</p>
            <h3>${item.title}</h3>
            <p>${item.story}</p>
            <ul class="project-points">
              ${item.points.map((point) => `<li>${point}</li>`).join("")}
            </ul>
            <div class="project-links">
              ${renderExternalAction("View Repo", item.repo, "link-source")}
              ${renderExternalAction("Open Live Demo", item.demo, "link-live")}
              ${projectDetailMap.get(item.title) ? renderInternalAction("Read Full Note", projectDetailMap.get(item.title), "link-note") : ""}
            </div>
          </div>
        </article>
      `
    )
    .join("");
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
                        link.label === "IEEE Xplore" || link.label === "Venue" || link.label === "Webpage" ? "link-live" : "link-source"
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
