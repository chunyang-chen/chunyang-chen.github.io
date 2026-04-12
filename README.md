# Chunyang Chen Homepage

This repository contains a static GitHub Pages website for Chunyang Chen.

## Structure

Main pages:

- `index.html`: homepage
- `publications.html`: full publication archive
- `LLMpublications.html`: LLM publications page
- `tool.html`: software and tools page

Main support files:

- `stylesheets/site-refresh.css`: active styling layer
- `stylesheets/stylesheet.css`: legacy/base styling
- `javascripts/main.js`: navbar interaction
- `robots.txt` and `sitemap.xml`: crawl/index support

Main asset folders:

- `picture/`: headshot and icon assets
- `publication/`: local PDFs
- `images/`, `slides/`, `bib/`, `webfonts/`: supporting assets

## Local Preview

From the repo root:

```powershell
python -m http.server 4173
```

Then open the pages in a browser through `http://127.0.0.1:4173/`.

## Where To Edit

Common homepage content:

- biography and hero: `index.html`
- news: `index.html` under `#news`
- awards: `index.html` under `#award`
- selected publications: `index.html` under `#selected-publications`
- supervision: `index.html` under `#team`
- teaching: `index.html` under `#teach`
- service: `index.html` under `#service`

Publication content:

- full archive: `publications.html`
- LLM subset: `LLMpublications.html`

Software/tool content:

- `tool.html`

Styling:

- prefer `stylesheets/site-refresh.css`
- only touch `stylesheets/stylesheet.css` if the change truly belongs in the legacy/base layer

Navigation behavior:

- `javascripts/main.js`

Metadata:

- each HTML page contains its own title, description, canonical URL, OG/Twitter tags, and JSON-LD
- update those directly in the page you change

## Maintenance Notes

- This site does not use a build system or template engine.
- Repeated nav/footer/meta content is copied across pages and must be kept in sync manually.
- Keep publication `PDF` labels for real full-text access only.
- If a publication does not have a verified public full-text source, keep `To appear`.
- Homepage width/layout overrides should stay scoped to `body.page-home`.

## QA Expectations

After edits, check:

- desktop and mobile rendering
- no horizontal overflow
- navbar toggle on mobile
- publication link labels still match real destinations
- metadata remains present and page-specific

See `AGENTS.md` and `docs/content-maintenance.md` for maintenance rules and content conventions.
