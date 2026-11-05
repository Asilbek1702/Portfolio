# Uztransformator case study — v2.4

## Purpose
Present Uztransformator as the portfolio's primary, verifiable project using the seven screenshots supplied by the developer.

## What the page communicates
- A multilingual company website for an electrical equipment manufacturer.
- The developer's role as the solo website implementer.
- The visible product surface: homepage, catalog, company information, quality/guarantees, contacts, enquiry form and admin interface.
- The production setup: React frontend, Supabase for production data/authentication/RLS, Vercel deployment.
- A separate FastAPI + SQLAlchemy backend prototype, explicitly distinguished from the live site's production stack.

## Interaction
The screenshot gallery opens an accessible overlay with close, previous and next controls. Keyboard support: Escape, Left Arrow and Right Arrow.

## Design decisions
- Replaced generic decorative project placeholders with actual product screenshots.
- Added a concise project brief, role, deliverables and architecture explanation.
- Added an explicit architecture note to avoid implying that the FastAPI prototype serves the live website.
- Reworked the About section into a simpler editorial layout rather than a grid of generic glass cards.
- Rewrote the hero copy to focus on practical product development and the actual portfolio evidence.

## Validation
All 16 JavaScript/JSX source files passed TypeScript's JSX syntax transpilation check. A Vite production build was not completed in this environment because npm dependency installation did not finish; run `npm ci` and `npm run build` locally before deployment.
