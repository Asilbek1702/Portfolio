# Portfolio Design Concept v2.0

## Positioning
A project-led portfolio for broad IT opportunities: frontend, backend, full-stack and practical AI integration. The site should demonstrate delivery and technical reasoning without claiming seniority or unsupported commercial experience.

## Visual direction
**Premium Editorial × Technical Futurism**
- Editorial hierarchy: oversized typography, restrained layout, generous spacing.
- Technical details: monospace labels, small metadata, system-like project previews.
- One accent color: lime, used for actions, active states and section labels.
- Minimal motion: short entrance transitions and subtle hover feedback; no particle field or decorative gradient overload.

## Themes
Dark (default): background `#0B0B0D`, surface `#141418`, text `#F5F5F5`, muted `#92929B`, accent `#A3E635`.
Light: background `#F7F7F5`, surface `#FFFFFF`, text `#18181B`, muted `#71717A`, accent `#65A30D`.
Theme selection persists locally and is available from the navigation bar.

## Typography
- Manrope: interface and body copy.
- DM Mono: technical labels, metadata and small annotations.
- Fluid hero title; readable body line-height; no skill percentage bars.

## Information architecture
1. Hero: name, clear role, location/status, concise capability statement, primary project CTA, contact CTA, social links.
2. Selected work: Uztransformator first; academic IDS/IPS and technical assignments clearly labelled by context.
3. About: education, practical approach and concise profile.
4. Technical expertise: grouped technologies without arbitrary percentages.
5. Experience: Energomax contract web development and CAU education, with dates and scope.
6. AI workflow: how AI is used and validated, not a badge wall of vendors.
7. Contact: direct email, Telegram and message form.

## Project presentation rules
- Distinguish production/personal work, academic work, test assignments and code contributions.
- Never label an academic or test assignment as commercial production experience.
- Each project should explain the problem/context, personal contribution, stack and evidence (live demo or repository).
- Do not invent metrics, users, revenue, uptime or performance improvements.

## Responsive and accessibility
- Mobile-first layout, no horizontal overflow, clear tap targets.
- Semantic headings and descriptive link labels.
- Respect `prefers-reduced-motion`.
- Theme contrast must remain readable; theme toggle has an accessible label.

## Implementation notes
React 18 + Vite + Tailwind CSS + Framer Motion retained. Theme variables are CSS custom properties. No paid AI coding subscription or additional UI library is required.
