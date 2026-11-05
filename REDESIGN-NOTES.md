# Redesign notes — v2.0

## Implemented
- Replaced the blue/purple glass-heavy visual system with an editorial layout, graphite surfaces, lime accent and monospace metadata.
- Added persistent dark/light theme toggle in the navbar.
- Reworked the hero section and moved selected projects immediately after it.
- Put Uztransformator first as the live, independently built project.
- Added explicit project context labels (live project, academic project, test assignment, personal project, code contribution, AI integration).
- Removed arbitrary skill proficiency percentages and replaced them with grouped technology lists.
- Reframed AI section around development, integrations and validation rather than a list of vendor logos.
- Reframed Energomax as a completed contract web-development role and added CAU education separately.
- Corrected the malformed e-commerce repository URL and updated page metadata.
- Added reduced-motion support and retained responsive layouts.

## Before publishing
- Verify the exact Energomax end date and wording against the contract / actual work performed.
- Confirm every project repository URL is public and points to the intended repository.
- Add real project screenshots in place of the typographic project-preview panels when suitable screenshots are available.
- Review all technology tags and remove anything you cannot discuss in an interview.
- Configure the contact form environment variables in Vercel and test a real submission.
- Run `npm ci`, `npm run build`, and `npm run lint` in an environment with npm registry access.

## Validation
The JavaScript/JSX files passed a TypeScript transpilation syntax parse. A full Vite production build could not be run in this environment because dependencies were not installed and npm registry requests timed out.

## Navigation and mobile theme fixes

- Navigation links now follow the page order: Projects, About, Stack, Experience, AI, Contact.
- The current section is detected while scrolling and highlighted in desktop and mobile navigation (`aria-current="location"`).
- The mobile navigation drawer now uses an opaque, theme-aware surface instead of a translucent glass layer that could look dark in light mode.
- Light mode explicitly updates the browser theme-color and mobile page surfaces; footer separators now use the theme border token.
- Added subtle active-link styling and reduced ambient grid intensity in light mode.

## v2.2 follow-up fixes

- Mobile Light Mode now uses a pure white page canvas (`#FFFFFF`) and disables the ambient grid/noise overlay on small screens so the background no longer reads as grey.
- Browser `theme-color` now matches the white mobile canvas.
- Corrected Energomax contract period to June–August 2026 in English and Russian.
- Replaced generic About heading with a more direct label and rewrote the Hero summary to point to actual work types.
- Removed floating decorative code labels from the Hero and the ornamental circles / generic “CASE STUDY” label from project previews.

## Remaining work to make the portfolio feel personal

- Replace typographic project placeholders with real screenshots from Uztransformator and the IDS/IPS interface. Do not use AI-generated fake product screenshots.
- Add 2–3 concrete implementation details to each main project: the problem, the user's contribution, and a technical decision or issue solved.
- Keep the AI section focused on specific tasks and verification examples rather than a generic list of AI capabilities.
- Confirm the exact Energomax dates and role description before publishing.

## v2.2 validation

- Source edits applied. A production build could not be run because the extracted environment does not contain the Vite executable (`vite: not found`).


## v2.3 — Uztransformator case study

- Added seven supplied screenshots of the actual Uztransformator website and admin interface.
- Optimized screenshots to WebP and placed them in `public/images/projects/`.
- Replaced the decorative terminal-style featured-project placeholder with a real screenshot gallery.
- Added a project facts row, a clear contribution statement, and direct links to the live site and repository.
- Removed fake terminal preview panels from the other project cards; they now use a simpler editorial text-first layout.
- Gallery screenshots open at full size when selected.
- No new runtime dependencies were introduced.

Before publishing, verify every project description and the current live demo/repository links. The screenshots document the interface; they do not independently prove backend or security claims.
