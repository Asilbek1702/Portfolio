import { motion } from 'framer-motion'
import { ExternalLink, Github, Star } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

const PROJECTS = [
  {
    title: 'IDS/IPS — Anomaly Detection System',
    subtitle: 'Graduation Research Project',
    desc: 'Final academic project: Intrusion Detection & Prevention System for university networks with a Fast API backend, REST API endpoints, and React interface. Conducted full Systematic Literature Review (PRISMA methodology, 15+ peer-reviewed sources). Identified a novel research gap — adaptive IPS threshold tuning. Presented at oral defense.',
    tags: ['Python', 'Rest API', 'React', 'Fast API', 'PRISMA', 'PostgreSQL'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#F687B3',
    featured: true,
  },
  {
    title: 'E-Commerce + Stripe',
    desc: 'Django full-stack e-commerce with Stripe payment integration, product catalog, cart, and order management. Dockerized with Render deployment, ENV-based config, and CI pipeline. Built as employer test assignment.',
    tags: ['Django', 'Stripe', 'PostgreSQL', 'Docker', 'Render'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#63B3ED',
  },
  {
    title: 'REST API — Node.js / TypeScript',
    desc: 'JWT-authenticated REST API with Zod validation, Swagger/OpenAPI docs, and full Jest test suite (unit + integration). Clean layered architecture. Built as employer test assignment.',
    tags: ['Node.js', 'TypeScript', 'JWT', 'Zod', 'Jest', 'Swagger'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#9F7AEA',
  },
  {
    title: 'Wishlist Mobile App',
    desc: 'React Native (Expo) mobile app backed by Next.js + Prisma API. Railway PostgreSQL, full auth flow, wishlist CRUD. Fixed Prisma relation bug (`user` → `owner`) and pushed to GitHub.',
    tags: ['React Native', 'Expo', 'Next.js', 'Prisma', 'Railway'],
    github: 'https://github.com/Asilbek1702/Wishlist-for-IOS',
    demo: null,
    accent: '#68D391',
  },
  {
    title: 'Go Task Manager API',
    desc: 'Extended an existing Go REST API with a task recurrence feature: 5 recurrence types, PostgreSQL migrations, 4 new endpoints. Used clean architecture. Debugged nil/SQL NULL edge cases, tested via Docker + PowerShell.',
    tags: ['Go', 'PostgreSQL', 'Docker', 'Clean Architecture', 'REST'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#76E4F7',
  },
  {
    title: 'OpenClaw AI Gateway + Telegram Bot',
    desc: 'Job application task: set up OpenClaw Gateway on WSL2 + Telegram bot integration. Resolved cascading AI provider auth failures (Anthropic credits, Gemini rate limits), switched to OpenRouter free tier. Configured systemd user service.',
    tags: ['Python', 'Telegram', 'OpenClaw', 'OpenRouter', 'WSL2', 'systemd'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#FBD38D',
  },
]

export default function Projects() {
  const featured = PROJECTS.find(p => p.featured)
  const rest     = PROJECTS.filter(p => !p.featured)

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle eyebrow="My work" title="Featured" highlight="projects" />

        {/* Featured graduation project — full width */}
        <AnimatedCard className="mb-5">
          <div
            className="glass rounded-2xl overflow-hidden group"
            style={{ borderColor: `${featured.accent}25`, borderWidth: 1 }}
          >
            {/* Top accent bar */}
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${featured.accent}, ${featured.accent}30)` }} />

            <div className="p-7 lg:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  {/* Featured badge */}
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-3.5 h-3.5" style={{ color: featured.accent }} fill="currentColor" />
                    <span className="text-[11px] font-semibold uppercase tracking-widest" style={{ color: featured.accent }}>
                      {featured.subtitle}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-bright">{featured.title}</h3>
                </div>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost py-2 px-4 text-xs shrink-0"
                >
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>

              <p className="text-sm text-dim leading-relaxed mb-6 max-w-3xl">{featured.desc}</p>

              <div className="flex flex-wrap gap-2">
                {featured.tags.map(t => (
                  <span
                    key={t}
                    className="tag"
                    style={{ borderColor: `${featured.accent}25`, color: featured.accent, background: `${featured.accent}10` }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>

        {/* Regular projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((p, i) => (
            <AnimatedCard key={p.title} delay={i * 0.07}>
              <div className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col group min-w-0">
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${p.accent}70, ${p.accent}15)` }} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-bright text-sm leading-snug pr-3">{p.title}</h3>
                    <div className="flex gap-1.5 shrink-0 mt-0.5">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-muted hover:text-blue transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {p.demo && (
                        <a
                          href={p.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg glass flex items-center justify-center text-muted hover:text-blue transition-colors"
                          aria-label="Live demo"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[0.78rem] text-muted leading-relaxed flex-1 mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map(t => (
                      <span key={t} className="tag" style={{ borderColor: `${p.accent}22`, color: p.accent, background: `${p.accent}0d` }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
