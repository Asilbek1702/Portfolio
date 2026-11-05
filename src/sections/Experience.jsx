import { motion } from 'framer-motion'
import { BriefcaseBusiness, GraduationCap } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import { useI18n } from '../i18n'

export default function Experience() {
  const { t } = useI18n()
  const entries = [
    { icon: BriefcaseBusiness, type: t.experience.contractLabel, role: t.experience.job.role, company: t.experience.job.company, period: t.experience.job.period, desc: t.experience.job.desc, responsibilities: t.experience.job.responsibilities, stack: t.experience.job.stack },
    { icon: GraduationCap, type: t.experience.educationLabel, role: t.experience.educationRole, company: 'Central Asian University', period: t.experience.educationPeriod, desc: t.experience.educationDesc },
  ]
  return <section id="experience" className="relative py-24 lg:py-32">
    <div className="section-wrap">
      <SectionTitle {...t.experience.title}/>
      <div className="grid md:grid-cols-2 gap-4 max-w-5xl">
        {entries.map(({ icon: Icon, type, role, company, period, desc, responsibilities, stack }, i) => <motion.article key={type} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="glass rounded-xl p-6">
          <div className="flex items-center justify-between gap-3 mb-6"><div className="w-10 h-10 rounded-md bg-blue/10 text-blue flex items-center justify-center"><Icon className="w-5 h-5"/></div><span className="section-kicker">{type}</span></div>
          <h3 className="text-lg font-bold mb-1">{role}</h3><p className="text-blue text-sm font-semibold mb-1">{company}</p><p className="font-mono text-[11px] text-muted mb-4">{period}</p><p className="text-sm text-dim leading-7">{desc}</p>{responsibilities?.length > 0 && <ul className="experience-points mt-4">{responsibilities.map(item => <li key={item}>{item}</li>)}</ul>}{stack?.length > 0 && <div className="flex flex-wrap gap-2 mt-5" aria-label="Technologies used">{stack.map(item => <span className="tag" key={item}>{item}</span>)}</div>}
        </motion.article>)}
      </div>
    </div>
  </section>
}
