import { ExternalLink, Github, Star } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'
import { useI18n } from '../i18n'

const PROJECT_META = [
  {
    tags: ['Python', 'Rest API', 'React', 'Fast API', 'PRISMA', 'PostgreSQL'],
    github: 'https://github.com/Asilbek1702/Graduation-Project/tree/master',
    demo: null,
    accent: '#F687B3',
    featured: true,
  },
  {
    tags: ['Django', 'Stripe', 'PostgreSQL', 'Docker', 'Render'],
    github: 'https://github.com/Asilbek1702/E-Commerce-Stripehttps://github.com/Asilbek1702/online-shop-backend',
    demo: null,
    accent: '#63B3ED',
  },
  {
    tags: ['Node.js', 'TypeScript', 'JWT', 'Zod', 'Jest', 'Swagger'],
    github: 'https://github.com/Asilbek1702/Node.js-test-job',
    demo: null,
    accent: '#9F7AEA',
  },
  {
    tags: ['React Native', 'Expo', 'Next.js', 'Prisma', 'Railway'],
    github: 'https://github.com/Asilbek1702/Wishlist-for-IOS',
    demo: null,
    accent: '#68D391',
  },
  {
    tags: ['Go', 'PostgreSQL', 'Docker', 'Clean Architecture', 'REST'],
    github: 'https://github.com/Asilbek1702/Job_testing',
    demo: null,
    accent: '#76E4F7',
  },
  {
    tags: ['Python', 'Telegram', 'OpenClaw', 'OpenRouter', 'WSL2', 'systemd'],
    github: 'https://github.com/Asilbek1702',
    demo: null,
    accent: '#FBD38D',
  },
]

export default function Projects() {
  const { t } = useI18n()
  const projects = PROJECT_META.map((meta, index) => ({ ...meta, ...t.projects.items[index] }))
  const featured = projects.find(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle {...t.projects.title} />

        <AnimatedCard className="mb-5">
          <div
            className="glass rounded-2xl overflow-hidden group"
            style={{ borderColor: `${featured.accent}25`, borderWidth: 1 }}
          >
            <div className="h-1" style={{ background: `linear-gradient(90deg, ${featured.accent}, ${featured.accent}30)` }} />

            <div className="p-7 lg:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
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
                {featured.tags.map(tag => (
                  <span
                    key={tag}
                    className="tag"
                    style={{ borderColor: `${featured.accent}25`, color: featured.accent, background: `${featured.accent}10` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedCard>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest.map((project, i) => (
            <AnimatedCard key={project.title} delay={i * 0.07}>
              <div className="glass glass-hover rounded-2xl overflow-hidden h-full flex flex-col group min-w-0">
                <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${project.accent}70, ${project.accent}15)` }} />
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-semibold text-bright text-sm leading-snug pr-3">{project.title}</h3>
                    <div className="flex gap-1.5 shrink-0 mt-0.5">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 rounded-lg glass flex items-center justify-center text-muted hover:text-blue transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-7 h-7 rounded-lg glass flex items-center justify-center text-muted hover:text-blue transition-colors"
                          aria-label={t.projects.liveDemo}
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[0.78rem] text-muted leading-relaxed flex-1 mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag" style={{ borderColor: `${project.accent}22`, color: project.accent, background: `${project.accent}0d` }}>
                        {tag}
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
