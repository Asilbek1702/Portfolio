import { BrainCircuit, Code2, ShieldCheck } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'
import { useI18n } from '../i18n'

export default function AITools() {
  const { language, t } = useI18n()
  const cards = language === 'ru' ? [
    { icon: Code2, title: 'Разработка с AI', desc: 'Использую AI для изучения незнакомого кода, генерации черновых решений и ускорения рутинных задач. Архитектуру и итоговый код проверяю самостоятельно.' },
    { icon: BrainCircuit, title: 'Интеграции', desc: 'Работал с LLM-инструментами, API-провайдерами и интеграцией Telegram-бота. Понимаю базовый цикл: запрос, контекст, ответ модели и обработка результата.' },
    { icon: ShieldCheck, title: 'Проверка результата', desc: 'Проверяю AI-ответы через документацию, запуск кода и тестирование. Не считаю сгенерированный код готовым решением без проверки.' },
  ] : [
    { icon: Code2, title: 'AI-assisted development', desc: 'Use AI to explore unfamiliar code, draft implementation options and reduce repetitive work. I review the architecture and final code myself.' },
    { icon: BrainCircuit, title: 'Integrations', desc: 'Worked with LLM tools, provider APIs and Telegram bot integration. I understand the basic flow: request, context, model response and result handling.' },
    { icon: ShieldCheck, title: 'Validation', desc: 'Validate AI output against documentation, by running the code and testing behaviour. Generated code is a draft until it has been checked.' },
  ]
  return <section id="ai-tools" className="relative py-24 lg:py-32">
    <div className="section-wrap">
      <SectionTitle {...t.ai.title}/>
      <div className="glass rounded-xl p-5 sm:p-6 mb-5 max-w-3xl"><p className="text-sm text-dim leading-7"><span className="font-semibold text-bright">{t.ai.approachLabel}</span>{t.ai.approach}</p></div>
      <div className="grid md:grid-cols-3 gap-4">{cards.map(({ icon: Icon, title, desc }, i) => <AnimatedCard key={title} delay={i * .07}><article className="glass glass-hover rounded-xl p-5 h-full"><div className="w-10 h-10 rounded-md bg-blue/10 text-blue flex items-center justify-center mb-5"><Icon className="w-5 h-5"/></div><h3 className="font-bold text-base mb-3">{title}</h3><p className="text-sm text-dim leading-7">{desc}</p></article></AnimatedCard>)}</div>
    </div>
  </section>
}
