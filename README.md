# MARC Portfolio Website

Portfolio website for **Md Anisur Rahman Chowdhury** with two variants:
- Main professional portfolio (`/`)
- PhD-focused academic portfolio (`/phd/`)

## Files

- `index.html` - main professional portfolio
- `styles.css` - main portfolio styles
- `script.js` - main portfolio interactions
- `phd/index.html` - PhD-focused portfolio
- `phd/styles.css` - PhD page styles
- `phd/script.js` - PhD page interactions
- `Job-Resume/Resume.pdf` - industry resume
- `PhD-Resume/Resume of MARC.pdf` - academic/PhD resume

## Run Locally

```bash
python3 -m http.server 8080
```

Visit:
- `http://localhost:8080/`
- `http://localhost:8080/phd/`

## Contact Form Setup

Both pages use FormSubmit:
- Main page form -> sends to `engr.aanis@gmail.com`
- PhD page form -> sends to `engr.aanis@gmail.com`

FormSubmit sends an activation email the first time. Open that activation email once to enable form delivery.

## Deploy Main Site to Cloudflare Pages

1. Push this repository to GitHub:
   - `https://github.com/ANIS151993/MARC-Portfolio.git`
2. Cloudflare dashboard -> **Workers & Pages** -> **Create application** -> **Pages** -> **Connect to Git**
3. Select `ANIS151993/MARC-Portfolio`
4. Build settings:
   - Framework preset: **None**
   - Build command: *(empty)*
   - Build output directory: `/`
5. Deploy.
6. Add custom domain: `resume.marcbd.site`

Live URLs:
- `https://resume.marcbd.site/` (main)
- `https://resume.marcbd.site/phd/` (PhD variant)

## Optional Dedicated PhD Subdomain

If you want PhD page as its own root site (for example `phd.marcbd.site`), create a second Pages project from the same repo:

1. Create another Cloudflare Pages project linked to this same GitHub repo.
2. Use build settings:
   - Framework preset: **None**
   - Build command:

```bash
mkdir -p dist && cp -r phd/* dist/ && cp -r PhD-Resume dist/
```

   - Build output directory: `dist`
3. Add custom domain for this second project:
   - `phd.marcbd.site` (or any subdomain you prefer)

This publishes the PhD page at the root of that subdomain.

## Updating Content

- Main profile content: `index.html`
- PhD profile content: `phd/index.html`
- Main styles: `styles.css`
- PhD styles: `phd/styles.css`

Push changes to GitHub and Cloudflare Pages redeploys automatically.
