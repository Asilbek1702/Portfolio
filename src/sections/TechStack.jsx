import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

const TECH = [
  {
    category: 'Frontend',
    color: '#63B3ED',
    items: [
      { name: 'React',       level: 90 },
      { name: 'TypeScript',  level: 75 },
      { name: 'TailwindCSS', level: 92 },
      { name: 'Next.js',     level: 70 },
    ],
  },
  {
    category: 'Backend',
    color: '#68D391',
    items: [
      { name: 'Python / FastAPI', level: 88 },
      { name: 'Node.js',          level: 80 },
      { name: 'PostgreSQL',       level: 82 },
      { name: 'Go (basics)',      level: 55 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#9F7AEA',
    items: [
      { name: 'Docker',    level: 85 },
      { name: 'GitHub CI', level: 75 },
      { name: 'Linux/WSL', level: 78 },
      { name: 'AWS',       level: 60 },
    ],
  },
  {
    category: 'AI & Testing',
    color: '#F687B3',
    items: [
      { name: 'OpenAI / Anthropic', level: 80 },
      { name: 'LangChain',          level: 65 },
      { name: 'Jest / Pytest',      level: 78 },
      { name: 'Swagger / OpenAPI',  level: 82 },
    ],
  },
]

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="tech" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(59,130,246,0.03), transparent)' }}
      />
      <div className="relative section-wrap">
        <SectionTitle eyebrow="Tech Stack" title="My" highlight="toolkit" />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TECH.map((group, gi) => (
            <AnimatedCard key={group.category} delay={gi * 0.12}>
              <div className="glass rounded-2xl p-6 h-full">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.color }} />
                  <h3 className="text-sm font-semibold text-bright">{group.category}</h3>
                </div>
                <div className="space-y-5">
                  {group.items.map((item, ii) => (
                    <div key={item.name}>
                      <div className="flex justify-between text-xs mb-2">
                        <span className="text-dim">{item.name}</span>
                        <span className="text-muted">{item.level}%</span>
                      </div>
                      <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${item.level}%` } : {}}
                          transition={{ duration: 1.1, delay: 0.4 + gi * 0.1 + ii * 0.08, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ backgroundColor: group.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
