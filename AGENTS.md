# AGENTS.md

## Purpose

This repository hosts the personal academic website for Chunyang Chen on GitHub Pages.

The site is a static website:

- hand-edited HTML pages
- CSS stylesheets layered on top of each other
- one local JavaScript file for navbar behavior
- no build system
- no CMS
- no templating pipeline

Future AI agents and human maintainers should treat this repo as a direct-edit static site.

## Source Of Truth

The main entry pages are:

- `index.html`: homepage, biography, news, awards, selected publications, supervision, teaching, service
- `publications.html`: full publication archive
- `LLMpublications.html`: LLM-focused publication subset
- `tool.html`: software, tools, datasets, demos

The main supporting files are:

- `stylesheets/site-refresh.css`: active layout, spacing, typography, homepage width overrides, archive styling
- `stylesheets/stylesheet.css`: legacy/base stylesheet; keep as compatibility layer and prefer overrides in `site-refresh.css`
- `javascripts/main.js`: local vanilla JS for mobile navbar toggle/collapse behavior
- `robots.txt`: crawl policy
- `sitemap.xml`: canonical HTML and selected PDF URLs for indexing

Other important asset folders:

- `picture/`: headshot, icons, profile assets
- `publication/`: local PDF files
- `slides/`, `bib/`, `images/`, `webfonts/`: supplementary assets

## Important Maintenance Rules

- Preserve existing public URLs unless a task explicitly requires a URL change.
- Prefer editing HTML content directly. Do not introduce frameworks, generators, or build tooling unless explicitly requested.
- Keep page-specific layout changes scoped carefully:
  - homepage-only width/layout overrides belong under `body.page-home`
  - archive pages should remain narrower than the homepage
- Keep publication link labels accurate:
  - `PDF` only for real public full-text access
  - `Code`, `Dataset`, `Tool`, `Video` only for verified public artifacts
  - if no public full text exists, keep `To appear`
- Preserve the current visual style unless a task explicitly asks for redesign.
- Keep metadata consistent across pages:
  - `lang`
  - canonical
  - title/description
  - Open Graph and Twitter tags
  - JSON-LD
- The navigation, footer, and some metadata are duplicated across pages. When updating them, check all four entry pages.

## Legacy Notes

- `params.json` is a legacy GitHub Pages artifact. Do not use it as a source of truth for content or maintenance decisions.
- `stylesheets/stylesheet.css` contains older base/theme rules. New maintenance work should prefer `stylesheets/site-refresh.css` unless the change must happen at the base layer.

## Validation Checklist

After any meaningful change, verify:

- no empty or broken placeholder links remain
- no incorrect `PDF` labels point to non-full-text pages
- homepage and archive pages keep valid `lang`, canonical, OG/Twitter, and JSON-LD metadata
- mobile navbar still works via `javascripts/main.js`
- no horizontal overflow on desktop or mobile
- homepage-only width changes do not leak into archive pages

## Local Preview

Use a simple static server from the repo root, for example:

```powershell
python -m http.server 4173
```

Then open:

- `http://127.0.0.1:4173/index.html`
- `http://127.0.0.1:4173/publications.html`
- `http://127.0.0.1:4173/LLMpublications.html`
- `http://127.0.0.1:4173/tool.html`

## What To Check Before Editing

- If the task touches homepage layout, inspect `body.page-home` rules in `stylesheets/site-refresh.css`.
- If the task touches publication accuracy, inspect both `publications.html` and `LLMpublications.html`, plus any duplicated homepage selected-publication entries.
- If the task touches metadata, update each affected page individually because there is no shared layout system.
