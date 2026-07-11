// Central service + checkout configuration for the MARC order system.
// paypalBase builds a dynamic PayPal.me link with the computed total amount.
window.MARC_PAYPAL_BASE = "https://paypal.me/MdAnisurRahmanC";

window.MARC_SERVICES = {
  "mail-server": { label: "Mail Server", price: 50, unit: "week" },
  "file-server": { label: "File Server", price: 50, unit: "week" },
  "web-development": { label: "Web Development", price: 70, unit: "week" },
  "ip-telephony": { label: "IP-Telephony", price: 50, unit: "week" },
  "system-architecture": { label: "System Architecture", price: 50, unit: "week" },
  "software-app-development": { label: "Software and App Development", price: 99, unit: "week" }
};

// Optional add-ons that can be attached to any order.
window.MARC_ADDONS = {
  "priority": { label: "Priority Delivery (faster turnaround)", type: "percent", value: 20 },
  "domain-hosting": { label: "Domain and Hosting Setup", type: "flat", value: 40 },
  "maintenance": { label: "Monthly Maintenance and Monitoring", type: "flat", value: 30 }
};

// Backwards-compatible direct checkout links (single-week PayPal).
window.MARC_CHECKOUT_LINKS = {
  "mail-server": { paypal: "https://paypal.me/MdAnisurRahmanC/50" },
  "file-server": { paypal: "https://paypal.me/MdAnisurRahmanC/50" },
  "web-development": { paypal: "https://paypal.me/MdAnisurRahmanC/70" },
  "ip-telephony": { paypal: "https://paypal.me/MdAnisurRahmanC/50" },
  "system-architecture": { paypal: "https://paypal.me/MdAnisurRahmanC/50" },
  "software-app-development": { paypal: "https://paypal.me/MdAnisurRahmanC/99" }
};
