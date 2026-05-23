import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Zap, Layers, Shield } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

const STATS = [
  { n: '1+',  label: 'Year coding' },
  { n: '8+',  label: 'Projects built' },
  { n: '10+', label: 'Technologies' },
  { n: 'CAU', label: 'University' },
]

const SKILLS = [
  { icon: Code2,    title: 'Frontend',     desc: 'React, Next.js, TypeScript, TailwindCSS' },
  { icon: Database, title: 'Backend',      desc: 'FastAPI, Python, PostgreSQL, Node.js' },
  { icon: Globe,    title: 'DevOps',       desc: 'Docker, CI/CD, Render, Vercel, AWS' },
  { icon: Zap,      title: 'AI / ML',      desc: 'OpenAI API, Anthropic, LangChain' },
  { icon: Layers,   title: 'Architecture', desc: 'REST, JWT Auth, Clean Architecture' },
  { icon: Shield,   title: 'Testing',      desc: 'Jest, Pytest, Swagger, Error handling' },
]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle eyebrow="About me" title="Building digital" highlight="experiences" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Bio */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-dim leading-7 text-[0.95rem] mb-10">
              <p>
                I'm a full-stack developer and CS student at Central Asian University (Tashkent),
                focused on the full delivery cycle: React frontends, containerized backends, and real deployments.
              </p>
              <p>
                Over the past year I've completed multiple employer-assigned technical evaluations —
                a Django + Stripe e-commerce app, a Node.js/TypeScript REST API with full test coverage,
                and a Go task management service — all with Docker, real deployments, and full README documentation.
              </p>
              <p>
                Currently integrating LLM APIs into real projects and using AI tooling daily to ship faster.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                  className="glass rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold grad-text-cool mb-1">{s.n}</div>
                  <div className="text-[11px] text-muted leading-tight">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {SKILLS.map((sk, i) => (
              <AnimatedCard key={sk.title} delay={i * 0.07}>
                <div className="glass glass-hover rounded-xl p-5 h-full">
                  <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                    <sk.icon className="w-5 h-5 text-blue" />
                  </div>
                  <h4 className="font-semibold text-bright text-sm mb-1.5">{sk.title}</h4>
                  <p className="text-xs text-muted leading-relaxed">{sk.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
