const expertiseNotes = [
  {
    label: "Physical Network Infrastructure",
    title: "I know how live networks behave in the real world.",
    text: "A lot of my industry experience comes from networks that had to work every day for real users. I worked with routing, switching, VPN, failover, and enterprise connectivity in environments where downtime was a real business problem.",
    points: [
      "I supported enterprise and ISP-style networking using Cisco, MikroTik, Juniper, Fortinet, and Cyberoam devices.",
      "I worked on routing, switching, NAT, ACLs, VPN tunnels, and connectivity troubleshooting for business networks.",
      "I understand that a good network is not only fast. It also has to be stable, secure, and easy to maintain."
    ]
  },
  {
    label: "Security Engineering",
    title: "My security work is practical, not only theoretical.",
    text: "I enjoy security work because it sits at the center of trust. In industry, I worked on firewall policies, segmented access, secure remote connectivity, and incident support. In research, I kept pushing deeper into Zero Trust and intelligent defense.",
    points: [
      "I worked on firewall rule management, secure access control, and operational hardening in enterprise environments.",
      "I care about defense-in-depth, not single-point security. Good security needs layers, monitoring, and good operational habits.",
      "My research on serverless firewalls, federated intelligence, and secure automation comes from this same mindset."
    ]
  },
  {
    label: "Hybrid Infrastructure Operations",
    title: "I am comfortable with both system administration and service delivery.",
    text: "My background includes Linux and Windows server work, Active Directory, mail systems, IP-PBX, and business-critical infrastructure support. I like work where systems, users, and operations all connect together.",
    points: [
      "I supported Linux and Windows Server environments, identity management, enterprise messaging, and service continuity.",
      "I worked with mail platforms, VoIP systems, monitoring tools, and infrastructure used by large teams.",
      "This gives me a balanced view: not only how to build a system, but also how to run it well after deployment."
    ]
  },
  {
    label: "Research and Automation",
    title: "I try to connect research ideas with useful engineering.",
    text: "Research matters more when it can become something practical. That is why many of my papers and GitHub projects focus on cloud security, serverless systems, threat intelligence, reproducibility, and AI-supported workflows that can turn into usable tools.",
    points: [
      "My research focus is physical and cloud network infrastructure security.",
      "I build with Python, Java, JavaScript, C++, SQL, PL/SQL, and JSON when the problem needs them.",
      "I like reproducible work because it makes results easier to trust, explain, and improve."
    ]
  }
];

const works = [
  {
    category: "mail",
    label: "Mail Server",
    title: "ARF Mail Server",
    description: "I set up a business email environment for ARF Group so the team could use a stable company mail system with proper administration and day-to-day reliability.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/ARFGroupbd.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/ARFGroupbd.png" },
      { label: "Open Work", href: "http://mail.arfgroupbd.com" }
    ]
  },
  {
    category: "file",
    label: "File Server",
    title: "ARF File Server",
    description: "This work focused on central file access for ARF Group, making storage and sharing easier for business teams while keeping the system structured and manageable.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Arf-File-Server.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Arf-File-Server.png" },
      { label: "Open Work", href: "http://file.arfgroupbd.com" }
    ]
  },
  {
    category: "mail",
    label: "Mail Server",
    title: "TD Mail Server",
    description: "For TD Group, I worked on a company mail setup that gave the organization a more professional and controlled email platform for daily communication.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Screenshot-2024-03-22-121540.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Screenshot-2024-03-22-121540.png" },
      { label: "Open Work", href: "http://mail.turkishdoc.com.bd" }
    ]
  },
  {
    category: "file",
    label: "File Server",
    title: "TD File Server",
    description: "This file server work for TD Group was about giving people one place to store, access, and organize important business files with less confusion.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Screenshot-2024-03-22-163028.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Screenshot-2024-03-22-163028.png" },
      { label: "Open Work", href: "http://Cloud.turkishdoc.com.bd" }
    ]
  },
  {
    category: "mail",
    label: "Mail Server",
    title: "S Alam Company Mail Server",
    description: "Here I delivered a managed business email setup for S Alam Company, helping the organization use company-branded email in a cleaner and more reliable way.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/sAlamcompanybd-Admin-portal.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/sAlamcompanybd-Admin-portal.png" },
      { label: "Open Work", href: "http://mail.s.alamcompanybd.com" }
    ]
  },
  {
    category: "file",
    label: "File Server",
    title: "S Alam Company File Server",
    description: "This was a file services setup for S Alam Company, designed to support internal sharing, structured access, and more organized digital work.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Cloud-SAlamgroup-file-server.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Cloud-SAlamgroup-file-server.png" },
      { label: "Open Work", href: "http://cloud.s.alamcompanybd.com" }
    ]
  },
  {
    category: "file",
    label: "File Server",
    title: "S Alam Group File Server",
    description: "For S Alam Group, this work supported centralized file handling so teams could access shared documents in a more controlled and dependable way.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/SAlamgroup-file-server.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/SAlamgroup-file-server.png" },
      { label: "Open Work", href: "http://file.s.alamgroupbd.com" }
    ]
  },
  {
    category: "mail",
    label: "Mail Server",
    title: "S Alam Group Mail Server",
    description: "This mail setup helped S Alam Group use a dedicated business email system for day-to-day communication, identity, and communication flow.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/mail-salamgroup.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/mail-salamgroup.png" },
      { label: "Open Work", href: "http://mail.s.alamgroupbd.com" }
    ]
  },
  {
    category: "voice",
    label: "IP-Telephony",
    title: "S Alam Group IP-Telephony",
    description: "This work focused on voice communication through IP telephony so teams could communicate more easily inside the organization.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/hq720.jpg",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/hq720.jpg" }
    ]
  },
  {
    category: "voice",
    label: "IP-Telephony",
    title: "ARF Group IP-Telephony",
    description: "For ARF Group, this project was about improving internal voice communication with an IP-based telephony setup that could support business operations better.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Issabel1.avif",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Issabel1.avif" }
    ]
  },
  {
    category: "voice",
    label: "IP-Telephony",
    title: "TD Group IP-Telephony",
    description: "This telephony work for TD Group shows another side of my infrastructure background: not only data systems, but also voice systems used in real business settings.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/IP-Phone.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/IP-Phone.png" }
    ]
  },
  {
    category: "network",
    label: "Network Architecture",
    title: "S. ALAM Group Network Architecture",
    description: "This architecture work was about designing network structure clearly so the organization could support secure connectivity, traffic flow, and future growth.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/SAG-Agrabad-Corporate-Office-Network-Topology.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/SAG-Agrabad-Corporate-Office-Network-Topology.png" }
    ]
  },
  {
    category: "network",
    label: "Network Architecture",
    title: "ARF Group Network Architecture",
    description: "This topology design shows how I think about structure first. A good network map helps everything else become easier to build, secure, and maintain.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/ARF-Group-Factory-Network-Topology.jpg",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/ARF-Group-Factory-Network-Topology.jpg" }
    ]
  },
  {
    category: "network",
    label: "Network Architecture",
    title: "SAG Factory Network Architecture",
    description: "Factory environments need reliable communication too. This work focused on a network design that fits operational needs in an industrial setup.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/SAG-Factory.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/SAG-Factory.png" }
    ]
  },
  {
    category: "cloud",
    label: "Cloud Architecture",
    title: "S. Alam Group Cloud Architecture",
    description: "This architecture plan shows my cloud-side thinking: how services connect, how they scale, and how organizations can move forward in a more structured way.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Cloud-Architechture.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Cloud-Architechture.png" }
    ]
  },
  {
    category: "cloud",
    label: "Cloud Architecture",
    title: "Serverless, Real-Time Threat Detection and Protection System in AWS",
    description: "This one is especially close to my research direction. It shows how cloud design and real-time security thinking can work together in one system.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/AWS-Cloud-Architechture.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/AWS-Cloud-Architechture.png" }
    ]
  },
  {
    category: "web",
    label: "Web Development",
    title: "Steelhead Inn",
    description: "This website project shows my ability to present a business clearly online with a clean public-facing web experience.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Steelhead-Inn.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Steelhead-Inn.png" },
      { label: "Open Work", href: "http://steelheadinn.us" }
    ]
  },
  {
    category: "web",
    label: "Web Development",
    title: "Inherentbd",
    description: "For this site, the goal was simple: build a clear web presence that helps people understand the brand and its services quickly.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Inherentbd.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Inherentbd.png" },
      { label: "Open Work", href: "http://inherentbd.com" }
    ]
  },
  {
    category: "web",
    label: "Web Development",
    title: "Savolabd",
    description: "This work shows another business website where layout, identity, and clear presentation mattered more than visual noise.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Savolabd.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Savolabd.png" },
      { label: "Open Work", href: "http://savolabd.com" }
    ]
  },
  {
    category: "web",
    label: "Web Development",
    title: "Deltaorlbd",
    description: "This project focused on giving a business a clean digital front door that people can visit, understand, and trust.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/Deltaorlbd.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/Deltaorlbd.png" },
      { label: "Open Work", href: "http://deltaorlbd.com" }
    ]
  },
  {
    category: "web",
    label: "Web Development",
    title: "MARCBD",
    description: "My old portfolio website brought my services and work together in one place. It also helped me learn how to present technical work to different kinds of visitors.",
    image: "https://marcbd.com/wp-content/uploads/2025/07/MARCbd.png",
    links: [
      { label: "Snapshot", href: "https://marcbd.com/wp-content/uploads/2025/07/MARCbd.png" },
      { label: "Open Work", href: "http://marcbd.com" }
    ]
  }
];

const workDetailMap = new Map([
  ["mail", "posts/mail-server-works/"],
  ["file", "posts/file-server-works/"],
  ["voice", "posts/ip-telephony-works/"],
  ["web", "posts/web-development-works/"],
  ["network", "posts/network-architecture-works/"],
  ["cloud", "posts/cloud-architecture-works/"]
]);

const workCategoryNotes = [
  {
    category: "mail",
    label: "Mail Server",
    title: "Business Email Infrastructure",
    text: "Read the longer note about production mail systems, domain-based communication, and operational administration.",
    href: "posts/mail-server-works/"
  },
  {
    category: "file",
    label: "File Server",
    title: "Shared Storage and Access Control",
    text: "Read the note about structured storage, file access, and dependable collaboration support for business teams.",
    href: "posts/file-server-works/"
  },
  {
    category: "voice",
    label: "IP-Telephony",
    title: "Voice Infrastructure and VoIP",
    text: "Read the note about business voice communication systems and practical telephony support work.",
    href: "posts/ip-telephony-works/"
  },
  {
    category: "web",
    label: "Web Development",
    title: "Business Website Delivery",
    text: "Read the note about public-facing websites, brand clarity, and practical web delivery for businesses.",
    href: "posts/web-development-works/"
  },
  {
    category: "network",
    label: "Network Architecture",
    title: "Topology Planning and Design",
    text: "Read the note about enterprise network structure, planning discipline, and topology design thinking.",
    href: "posts/network-architecture-works/"
  },
  {
    category: "cloud",
    label: "Cloud Architecture",
    title: "Security-Oriented Cloud Planning",
    text: "Read the note about scalable cloud design, service structure, and security-aware architecture planning.",
    href: "posts/cloud-architecture-works/"
  }
];

const projects = [
  {
    label: "Cloud Security Engineering",
    title: "Serverless Intelligent Firewall",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-1/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-1/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-1.git",
    story: "This project shows one of my core interests very clearly: how to make cloud security smarter. I built it around the idea that security systems should not trust traffic too quickly and should make better decisions using intelligent logic.",
    points: [
      "The project combines serverless design, Zero Trust thinking, and practical cloud protection ideas.",
      "It reflects how I try to connect research with something people can actually inspect and understand.",
      "For me, this project is a good example of cloud security work that is both academic and practical."
    ]
  },
  {
    label: "Multi-Cloud Security Research",
    title: "Towards a Serverless Intelligent Firewall: Cross-Cloud Adaptation",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-2/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-2.git",
    story: "The first firewall project gave me a base. This second one pushed the idea further into multi-cloud thinking. Real organizations often use more than one cloud environment, so security needs to adapt instead of staying fixed in one place.",
    points: [
      "This project focuses on cross-cloud adaptation and stronger policy-aware security behavior.",
      "It reflects my interest in cloud environments that are distributed and not simple to protect.",
      "It also shows how I think in layers: not only threat detection, but also architecture and policy."
    ]
  },
  {
    label: "Autonomous Security Systems",
    title: "Autonomous Self-Learning Serverless Intelligent Firewall",
    browserLabel: "anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/",
    demo: "https://anis151993.github.io/Serverless-Intelligent-Firewall-Research-3/",
    repo: "https://github.com/ANIS151993/Serverless-Intelligent-Firewall-Research-3.git",
    story: "This project moves toward a more ambitious question: can a security system learn from new threat information and become better over time? That is the main idea behind this version.",
    points: [
      "It connects threat intelligence, machine learning, and Zero Trust ideas in one story.",
      "The goal is to make cloud defense more adaptive instead of only rule-based.",
      "It is closely connected to my long-term research direction in infrastructure security."
    ]
  },
  {
    label: "Reproducible Data Workflows",
    title: "DataMentor / Notebook Studio",
    browserLabel: "anis151993.github.io/Notebook-Studio/",
    demo: "https://anis151993.github.io/Notebook-Studio/",
    repo: "https://github.com/ANIS151993/Notebook-Studio.git",
    story: "DataMentor is a different kind of project, but it matters a lot to me. Good technical work should be reproducible. This project helps make data and notebook workflows cleaner, easier to repeat, and easier to explain.",
    points: [
      "It focuses on CSV intelligence, notebook execution, and automated workflow support.",
      "It supports the kind of research and technical reporting that should be easy to repeat later.",
      "It shows that my work is not only about security. It is also about useful engineering process."
    ]
  },
  {
    label: "Distributed AI Systems",
    title: "A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving",
    browserLabel: "anis151993.github.io/Distributed-AI/",
    demo: "https://anis151993.github.io/Distributed-AI/",
    repo: "https://github.com/ANIS151993/Distributed-AI.git",
    story: "This project explores what happens when more than one model or agent works together. I wanted to study how a local distributed AI setup can solve harder problems through collaboration instead of a single model doing everything alone.",
    points: [
      "It focuses on orchestration, task splitting, and collaborative reasoning between local agents.",
      "I like this project because it mixes systems thinking with AI experimentation.",
      "It also fits my broader interest in distributed systems and practical AI architecture."
    ]
  },
  {
    label: "LLM Reliability",
    title: "Teaching Large Language Models to Think Twice",
    browserLabel: "anis151993.github.io/Self-Correcting-LLM-localhost/",
    demo: "https://anis151993.github.io/Self-Correcting-LLM-localhost/",
    repo: "https://github.com/ANIS151993/Self-Correcting-LLM-localhost.git",
    story: "Large language models can sound confident even when they are wrong. This project explores a simpler and more careful idea: can a model review its own reasoning and improve the answer before giving it to the user?",
    points: [
      "The project follows a three-stage self-correction framework for more reliable reasoning.",
      "It is especially useful for tasks where mistakes matter, like mathematics and structured logic.",
      "I like this work because it focuses on trust, quality, and responsible AI behavior."
    ]
  }
];

const projectDetailMap = new Map([
  ["Serverless Intelligent Firewall", "posts/serverless-intelligent-firewall/"],
  ["Towards a Serverless Intelligent Firewall: Cross-Cloud Adaptation", "posts/cross-cloud-firewall/"],
  ["Autonomous Self-Learning Serverless Intelligent Firewall", "posts/autonomous-firewall/"],
  ["DataMentor / Notebook Studio", "posts/datamentor-notebook-studio/"],
  ["A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving", "posts/distributed-ai-ensemble/"],
  ["Teaching Large Language Models to Think Twice", "posts/self-correcting-llm/"]
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
  ["Towards a Serverless Intelligent Firewall: AI-Driven Security, and Zero-Trust Architectures", "posts/firewall-zero-trust-paper/"],
  ["Auction-Based Dynamic Resource Allocation for Optimized Edge Computing in Distributed Networks", "posts/edge-resource-allocation-paper/"],
  ["AI and Cloud Computing in Business Systems: A Hybrid Model for Enhancing Enterprise Resource Planning", "posts/enterprise-ai-erp-paper/"],
  ["Deepfake Detection in MIS: Leveraging DenseNet and Multi-Scale Information for Enhanced Digital Forensics", "posts/deepfake-detection-paper/"],
  ["Towards a Serverless Intelligent Firewall: Integrating Cross-Cloud Adaptation, AI-Driven Security, and Zero-Trust Architectures", "posts/cross-cloud-firewall-paper/"],
  ["Teaching Large Language Models to Think Twice: A Three-Stage Framework for Self-Correcting Mathematical Reasoning", "posts/self-correcting-math-paper/"],
  ["A Local Distributed Multi-Agent LLM Ensemble System for Complex Problem Solving", "posts/distributed-ai-paper/"]
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
  worksGrid.innerHTML = works
    .map(
      (item) => `
        <article class="work-note reveal" data-workcat="${item.category}" style="--work-image: url('${item.image}');">
          <div class="work-note-card">
            <div class="work-note-copy">
              <p class="work-chip">${item.label}</p>
              <h3>${item.title}</h3>
              <p>${item.description}</p>
              <div class="work-links">
                ${item.links
                  .map((link) =>
                    renderExternalAction(
                      link.label,
                      link.href,
                      link.label.includes("Open") ? "link-live" : "link-soft"
                    )
                  )
                  .join("")}
                ${workDetailMap.get(item.category) ? renderInternalAction("Read Category Note", workDetailMap.get(item.category), "link-note") : ""}
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
            <a class="link-note" href="${item.href}">Read Full Category Note</a>
          </div>
        </article>
      `
    )
    .join("");
};

const renderProjects = () => {
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
                        link.label === "IEEE Xplore" || link.label === "Venue" ? "link-live" : "link-source"
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
