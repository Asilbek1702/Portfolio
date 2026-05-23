# Asilbek — Developer Portfolio

A modern developer portfolio landing page built as a test assignment.
Live: _deploy to Vercel (see instructions below)_
GitHub: https://github.com/Asilbek1702

---

## Stack

| Layer    | Technology                                      |
| -------- | ----------------------------------------------- |
| Frontend | React 18, Vite, TailwindCSS 3, Framer Motion    |
| Styling  | Sora + JetBrains Mono (Google Fonts), CSS vars  |
| Icons    | Lucide React                                    |
| API      | Vercel Serverless Function (Node.js)            |
| Email    | Nodemailer + SMTP (Gmail App Password)          |
| Deploy   | Vercel (frontend + API in one repo)             |

---

## Quick start

```bash
# 1. Clone
git clone https://github.com/Asilbek1702/portfolio
cd portfolio

# 2. Install
npm install

# 3. Env vars (copy and fill in)
cp .env.example .env.local

# 4. Dev server
npm run dev

# 5. Build
npm run build
```

---

## Environment variables

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password   # Google → Security → App passwords
OWNER_EMAIL=your@gmail.com
```

For Gmail: enable 2FA → Google Account → Security → App passwords → generate password.

---

## How the contact form works

1. User fills name, email (required), phone (optional), message (required).
2. Frontend validates client-side (required fields, email regex).
3. `POST /api/contact` hits the Vercel serverless function.
4. Function validates server-side → sends two emails via Nodemailer:
   - Email to site owner with submission details.
   - Confirmation copy to the sender.
5. Frontend shows loading → success / error state accordingly.

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
# Set env vars in Vercel dashboard → Project → Settings → Environment Variables
```

---

## AI tools used during development

| Tool              | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| Claude (Sonnet)   | Architecture decisions, component structure, code review       |
| ChatGPT           | Rapid prototyping, Tailwind class lookups, animation patterns  |
| GitHub Copilot    | Inline completion while writing boilerplate and form logic     |

### What AI helped with
- Initial component scaffolding and folder structure
- Framer Motion animation variants and staggerChildren patterns
- TailwindCSS utility combinations for glassmorphism cards
- Serverless function email logic with Nodemailer

### What was corrected manually
- AI suggested `@tailwindcss/forms` conflicting with custom input styles — removed plugin override
- AI-generated particle canvas had memory leak (missing `cancelAnimationFrame`) — fixed manually
- AI used `terser` minifier which isn't bundled in Vite v5 — switched to `esbuild`
- AI generated `Alex Chen` placeholder content — replaced with real data throughout
- Contact form API initially used simulated timeout — replaced with real fetch to `/api/contact`

---

## Project structure

```
src/
├── components/
│   ├── AnimatedCard.jsx      # Reusable scroll-triggered card wrapper
│   ├── Navbar.jsx            # Sticky nav with mobile drawer
│   ├── ParticlesBackground.jsx
│   └── SectionTitle.jsx      # Eyebrow + heading component
├── sections/
│   ├── Hero.jsx              # Landing hero with code window
│   ├── About.jsx             # Bio + stats + skills grid
│   ├── TechStack.jsx         # Animated skill bars by category
│   ├── Projects.jsx          # 6 real projects with tags + links
│   ├── AITools.jsx           # AI tools showcase
│   ├── Contact.jsx           # Contact form with full states
│   └── Footer.jsx
├── App.jsx
├── index.css                 # Design system, glass utilities
└── main.jsx
api/
└── contact.js                # Vercel serverless email handler
```
