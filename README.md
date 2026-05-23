# Asilbek Tashpulatov — Developer Portfolio

**Live demo:** https://asilbek-portfolio.vercel.app  
**GitHub:** https://github.com/Asilbek1702/portfolio

---

## Stack

| Layer    | Technology |
|----------|-----------|
| Frontend | React 18, Vite, TailwindCSS 3, Framer Motion |
| Icons    | Lucide React |
| Fonts    | Sora + JetBrains Mono (Google Fonts) |
| API      | Vercel Serverless Function (Node.js) |
| Email    | Nodemailer + Gmail SMTP |
| Deploy   | Vercel |

---

## Quick start

```bash
git clone https://github.com/Asilbek1702/portfolio
cd portfolio
npm install
cp .env.example .env.local   # fill in SMTP credentials
npm run dev
```

---

## Environment variables

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your@gmail.com
SMTP_PASS=your_gmail_app_password
OWNER_EMAIL=your@gmail.com
```

**Gmail App Password:** Google Account → Security → 2-Step Verification → App passwords → generate.

---

## Deploy to Vercel

```bash
npm i -g vercel
vercel --prod
```

Then add env vars: Vercel Dashboard → Project → Settings → Environment Variables.

---

## Contact form — how it works

1. Client validates: required fields + email regex.
2. `POST /api/contact` hits the serverless function.
3. Server re-validates and sanitizes all input.
4. Sends two emails via Nodemailer:
   - Owner notification with full submission.
   - Confirmation copy to the sender.
5. Returns `200 { ok: true }` or `4xx/5xx` with error message.
6. Frontend shows: `idle → loading → success / error` states.

---

## AI tools used

| Tool | Purpose |
|------|---------|
| Claude (Anthropic) | Architecture decisions, code review, component structure |
| ChatGPT | Rapid prototyping, animation patterns |
| GitHub Copilot | Inline completion for boilerplate and test cases |

### What AI helped with
- Initial scaffolding and folder structure
- Framer Motion stagger animation variants
- Tailwind glassmorphism utility combinations
- Serverless function email logic

### What was corrected manually
- AI used wrong project data (fake names, wrong tech stack) — replaced with real info
- `cancelAnimationFrame` missing in ParticlesBackground — fixed manually
- Terser minifier not available in Vite v5 — switched to esbuild
- `@tailwindcss/forms` conflicting with custom input styles — resolved override
- API needed OPTIONS preflight handler for CORS — added manually
- Input font-size needed `16px` to prevent iOS zoom — added to CSS

---

## Project structure

```
src/
├── components/
│   ├── AnimatedCard.jsx        # Scroll-triggered card wrapper
│   ├── Navbar.jsx              # Sticky nav with mobile drawer
│   ├── ParticlesBackground.jsx # Canvas particle animation
│   └── SectionTitle.jsx        # Eyebrow + heading
├── sections/
│   ├── Hero.jsx                # Landing with photo
│   ├── About.jsx               # Bio + stats + skills grid
│   ├── TechStack.jsx           # Animated skill bars
│   ├── Projects.jsx            # 6 projects, graduation project featured
│   ├── AITools.jsx             # AI tools & workflow
│   ├── Contact.jsx             # Form with full states + API
│   └── Footer.jsx
├── App.jsx
├── index.css
└── main.jsx
api/
└── contact.js                  # Vercel serverless — sends emails
```
