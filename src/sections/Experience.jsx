import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const { t } = useI18n()
  const job = t.experience.job

  return (
    <section id="experience" className="relative py-24 lg:py-32">
      <div className="section-wrap">
        <SectionTitle {...t.experience.title} />

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="glass rounded-2xl p-6 lg:p-8 max-w-3xl border border-blue/15"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5 text-blue" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-bright text-base">{job.role}</h3>
                <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-500/15 text-green-400">
                  {job.current}
                </span>
              </div>
              <p className="text-sm text-blue mb-1">{job.company}</p>
              <p className="text-xs text-muted mb-4">{job.period}</p>
              <p className="text-sm text-dim leading-relaxed">{job.desc}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}