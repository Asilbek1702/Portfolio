import { Code2, Database, Cloud, BrainCircuit } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'
import { useI18n } from '../i18n'

const groups = [
  { icon: Code2, title: 'Frontend', tools: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'] },
  { icon: Database, title: 'Backend & Data', tools: ['Python', 'FastAPI', 'Django', 'Node.js', 'PostgreSQL', 'Supabase'] },
  { icon: Cloud, title: 'Tools & Delivery', tools: ['Git / GitHub', 'Docker', 'Linux', 'REST API', 'Vercel', 'Nginx'] },
  { icon: BrainCircuit, title: 'AI & Quality', tools: ['LLM API integration', 'Prompt design', 'OpenAPI / Swagger', 'Jest', 'Pytest basics', 'AI-assisted workflow'] },
]

export default function TechStack() {
  const { t } = useI18n()
  return <section id="tech" className="relative py-24 lg:py-32">
    <div className="section-wrap">
      <SectionTitle {...t.tech.title}/>
      <p className="text-dim max-w-2xl text-sm leading-7 mb-9">{t.tech.intro || 'Tools I have used in projects. The list reflects practical exposure, not self-assigned proficiency percentages.'}</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {groups.map(({ icon: Icon, title, tools }, index) => <AnimatedCard key={title} delay={index * .07}>
          <div className="glass rounded-xl p-5 h-full">
            <div className="flex items-center gap-3 mb-5"><div className="w-9 h-9 rounded-md bg-blue/10 text-blue flex items-center justify-center"><Icon className="w-4 h-4"/></div><h3 className="font-bold text-sm">{title}</h3></div>
            <div className="flex flex-wrap gap-2">{tools.map(tool => <span key={tool} className="tag">{tool}</span>)}</div>
          </div>
        </AnimatedCard>)}
      </div>
    </div>
  </section>
}
