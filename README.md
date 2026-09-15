# MARC Portfolio (Job + PhD)

This repository contains two portfolio sites:
- `https://marcbd.site/` -> Job Market Portfolio
- `https://marcbd.site/phd/` -> PhD Portfolio

## Site Structure

- `index.html` -> Job-focused portfolio
- `styles.css` -> Job site design and responsive UI
- `script.js` -> Job site interactions (typed text, counters, filters, slider)
- `checkout-links.js` -> direct PayPal checkout link config for service packages
- `phd/index.html` -> PhD-focused portfolio
- `phd/styles.css` -> PhD site design
- `phd/script.js` -> PhD interactions
- `assets/data/portfolio-data.js` -> single source of truth for Works, Projects, Publications, Scholar metrics (both sites)
- `assets/js/portfolio-ui.js` + `assets/css/portfolio-ui.css` -> renders those as filterable grids, charts, and stat tiles
- `Job-Resume/MARC-Resume.pdf` -> Job resume
- `PhD-Resume/MARC-PhD-CV.pdf` -> PhD CV

## Features Implemented

- Marcbd-inspired visual style and section structure
- Separate Job and PhD portfolio experiences
- Full publication section with IEEE links and pipeline status
- GitHub highlights with repo + live project links
- Professional services packages and order workflow
- Payment-ready PayPal checkout buttons with form fallback
- Resume center (read online + download)
- Contact forms via FormSubmit
- Mobile responsive and animated interactions

## Local Preview

```bash
python3 -m http.server 8080
```

Open:
- `http://localhost:8080/`
- `http://localhost:8080/phd/`

## GitHub Actions Auto-Deploy to Cloudflare

Workflow file:
- `.github/workflows/deploy-cloudflare-pages.yml`

It deploys on every push to `main`.

### Required GitHub Repository Secrets

Set these in GitHub -> Repository -> Settings -> Secrets and variables -> Actions:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `CLOUDFLARE_PROJECT_NAME`

### Cloudflare Setup

1. Create (or use) a Cloudflare Pages project connected to this repo.
2. Ensure the project name matches `CLOUDFLARE_PROJECT_NAME`.
3. Add custom domain `marcbd.site` in Pages settings.
4. SSL will be managed by Cloudflare.

## Contact Form Activation

Forms use FormSubmit:
- First submission sends an activation email.
- Click activation link once to enable delivery.

## Direct Checkout Setup

Direct package checkout is configured in:
- `checkout-links.js`

Add or update your real payment links there:
- `mail-server.paypal`
- `file-server.paypal`
- `web-development.paypal`
- `ip-telephony.paypal`
- `system-architecture.paypal`
- `software-app-development.paypal`

If a link is empty, the site automatically falls back to the order form.

## Updating Content

- Works, projects, publications, citation counts: `assets/data/portfolio-data.js` (all counters and charts update automatically)
- Job portfolio page copy: `index.html`
- PhD portfolio page copy: `phd/index.html`
- Styling updates: `styles.css`, `phd/styles.css`

Push to `main` to trigger automatic deployment.
