# Content Maintenance Guide

## Homepage Sections

The homepage is maintained directly in `index.html`.

Important section anchors:

- `#research-focus`
- `#news`
- `#open-positions`
- `#award`
- `#selected-publications`
- `#team`
- `#teach`
- `#service`

The right profile card is also inside `index.html`, in the sidebar area near the end of the file.

## Homepage Editing Rules

- Keep homepage-only layout changes scoped to `body.page-home` in `stylesheets/site-refresh.css`.
- The homepage is intentionally wider than archive pages. Do not copy homepage width overrides to publications or tools pages.
- Do not shrink profile icon buttons unless explicitly requested.
- If adjusting sidebar density, prefer tightening text spacing and margins before changing icon sizing.

## Publication Maintenance Policy

Publication content is split across:

- `publications.html`: full archive
- `LLMpublications.html`: LLM-related subset
- `index.html`: selected recent publications only

### Entry Conventions

Use this general order inside an entry:

1. shorthand label and title
2. venue line
3. author line
4. artifact/action links
5. optional acceptance-rate or award metadata

### Link Labels

- `PDF`: only for real public full-text access
- `Code`: verified public repository
- `Dataset`: verified public dataset
- `Tool`: verified public website or interactive tool
- `Video`: verified public video/demo

If no public full text is verified, keep:

- `To appear`

Do not replace `To appear` with a DOI or abstract page while still labeling it `PDF`.

### Mirrored Entry Rule

If a paper appears in more than one place, keep title, venue, and link targets consistent across:

- `publications.html`
- `LLMpublications.html`
- homepage selected-publication entries in `index.html`

This especially matters for:

- recent flagship papers
- LLM papers
- award labels
- corrected publication titles

## Examples

### Add a news item

Insert a new `<li>` in the homepage `#news` section near the top of the list, using the same date-first style as existing items.

### Add a publication with PDF and Code

Follow the existing publication markup pattern:

- title in `<strong>`
- venue in `<p><i>...</i></p>`
- authors in a separate `<p>`
- then `PDF` and `Code` links using the existing `refs-link` classes

### Keep `To appear`

If there is no verified public full-text source:

- keep the placeholder text as `To appear`
- do not label a DOI or metadata page as `PDF`

### Update `sitemap.xml`

Update `sitemap.xml` when:

- a major page changes materially
- an intentionally indexable local PDF is added or removed

Also update the relevant `lastmod` date for changed HTML pages.

## SEO / GEO Maintenance

Each entry page carries its own metadata and structured data.

When changing page purpose or major content, verify:

- `<title>`
- `<meta name="description">`
- canonical URL
- Open Graph tags
- Twitter tags
- JSON-LD content

These must remain unique per page and should match visible page content.

## Visual Guardrails

- Homepage layout can be wider than archives.
- Archive pages should remain narrower and more list-focused.
- Preserve the current academic visual style unless a task explicitly requests redesign.
- Prefer adjusting spacing and width in `stylesheets/site-refresh.css` instead of rewriting page structure unless necessary.
