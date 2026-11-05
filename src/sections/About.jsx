import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })
  const { t, language } = useI18n()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle {...t.about.title} />
        <div className="about-editorial-grid">
          <motion.div ref={ref} initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.55 }}>
            <p className="section-kicker mb-5">{language === 'ru' ? 'КОРОТКО ОБО МНЕ' : 'A SHORT INTRODUCTION'}</p>
            <div className="space-y-4 text-dim leading-8 text-[0.95rem] mb-10">
              {t.about.bio.map(text => <p key={text}>{text}</p>)}
            </div>
            <div className="about-facts">
              {t.about.stats.map((stat, index) => (
                <div key={stat.label}>
                  <span>0{index + 1}</span>
                  <strong>{stat.n}</strong>
                  <small>{stat.label}</small>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="about-capabilities">
            <p className="section-kicker mb-3">{language === 'ru' ? 'С ЧЕМ РАБОТАЮ' : 'AREAS I WORK IN'}</p>
            {t.about.skills.map((skill, index) => (
              <div className="about-capability" key={skill.title}>
                <span className="about-capability-index">0{index + 1}</span>
                <div><h4>{skill.title}</h4><p>{skill.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
