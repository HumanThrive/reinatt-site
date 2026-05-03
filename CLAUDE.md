# Lead Dev Venture: rei-site
# PM Venture: rei-site

This is the source code directory for `rei-site` — Founder's personal site (portfolio + blog).

## Quick orientation

- **Project root** (context docs — vision, spec, handoff): `/Users/rei/Space/people/rei/site/`
- **Source code:** this directory.
- **Stack:** Astro 4+ + TypeScript strict + Tailwind CSS + MDX + Cloudflare Pages.
- **Repo:** `git@github.com:HumanThrive/reinatt-site.git` (public).
- **Type:** Founder infrastructure — not a business. **No `# CEO Venture:` tag** — CEO is engaged on editorial direction only (post-angle review, brand-alignment) on assignment.

## What active personas read on activation

1. `../vision.md` — locked editorial spine, voice, hard requirements
2. `../phase-1-spec.md` — full Phase 1 product spec
3. `../handoff-2026-05-03.md` — current session handoff (PM-canonical Active Tasks)

## Conventions

- Markdown for `/writing` posts; MDX for `/work` portfolio entries.
- Inter font self-hosted at `/public/fonts/`. **No Google Fonts.**
- Cloudflare Web Analytics — cookieless, no banner.
- Public repo, but env vars never committed; secrets live in Cloudflare Pages env settings.
- Zero-JS by default — every client-side script is a deliberate decision per page.
