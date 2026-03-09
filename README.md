# MARC Portfolio (Job + PhD)

This repository contains two portfolio sites:
- `https://resume.marcbd.site/` -> Job Market Portfolio
- `https://resume.marcbd.site/phd/` -> PhD Portfolio

## Site Structure

- `index.html` -> Job-focused portfolio
- `styles.css` -> Job site design and responsive UI
- `script.js` -> Job site interactions (typed text, counters, filters, slider)
- `checkout-links.js` -> direct Stripe/PayPal checkout link config for service packages
- `phd/index.html` -> PhD-focused portfolio
- `phd/styles.css` -> PhD site design
- `phd/script.js` -> PhD interactions
- `Job-Resume/Resume.pdf` -> Job resume
- `PhD-Resume/Resume of MARC.pdf` -> PhD resume

## Features Implemented

- Marcbd-inspired visual style and section structure
- Separate Job and PhD portfolio experiences
- Full publication section with IEEE links and pipeline status
- GitHub highlights with repo + live project links
- Professional services packages and order workflow
- Payment-ready direct checkout buttons with form fallback
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
3. Add custom domain `resume.marcbd.site` in Pages settings.
4. SSL will be managed by Cloudflare.

## Contact Form Activation

Forms use FormSubmit:
- First submission sends an activation email.
- Click activation link once to enable delivery.

## Direct Checkout Setup

Direct package checkout is configured in:
- `checkout-links.js`

Add your real payment links there:
- `starter.stripe`
- `starter.paypal`
- `professional.stripe`
- `professional.paypal`

If a link is empty, the site automatically falls back to the order form.

## Updating Content

- Job portfolio content: `index.html`
- PhD portfolio content: `phd/index.html`
- Styling updates: `styles.css`, `phd/styles.css`

Push to `main` to trigger automatic deployment.
