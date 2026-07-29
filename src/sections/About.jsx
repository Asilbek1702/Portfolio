import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Database, Globe, Layers, Shield, Zap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'
import { useI18n } from '../i18n'

const SKILL_ICONS = [Code2, Database, Globe, Zap, Layers, Shield]

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 })
  const { t } = useI18n()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle {...t.about.title} />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-dim leading-7 text-[0.95rem] mb-10">
              {t.about.bio.map(text => <p key={text}>{text}</p>)}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {t.about.stats.map((s, i) => (
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

          <div className="grid sm:grid-cols-2 gap-3">
            {t.about.skills.map((skill, i) => {
              const Icon = SKILL_ICONS[i]
              return (
                <AnimatedCard key={skill.title} delay={i * 0.07}>
                  <div className="glass glass-hover rounded-xl p-5 h-full">
                    <div className="w-10 h-10 rounded-lg bg-blue/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-blue" />
                    </div>
                    <h4 className="font-semibold text-bright text-sm mb-1.5">{skill.title}</h4>
                    <p className="text-xs text-muted leading-relaxed">{skill.desc}</p>
                  </div>
                </AnimatedCard>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
