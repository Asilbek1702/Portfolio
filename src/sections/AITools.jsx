import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Bot, Sparkles, Code, FileText, Bug, Wand2 } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

const TOOLS = [
  {
    icon: Bot,
    name: 'Claude (Anthropic)',
    color: '#CC785C',
    usage: 'Daily',
    desc: 'Primary AI for complex reasoning, architecture decisions, code reviews, and detailed documentation. Used throughout every project.',
  },
  {
    icon: Sparkles,
    name: 'ChatGPT / GPT-4',
    color: '#10A37F',
    usage: 'Daily',
    desc: 'Rapid prototyping, boilerplate generation, brainstorming approaches, and quick syntax lookups during active development.',
  },
  {
    icon: Code,
    name: 'GitHub Copilot',
    color: '#6E7681',
    usage: 'Constant',
    desc: 'Inline code completion across all editors. Accelerates repetitive patterns, test cases, and routine API integrations.',
  },
  {
    icon: Bug,
    name: 'AI Debugging',
    color: '#EF4444',
    usage: 'As needed',
    desc: 'Pasting stack traces and error logs into AI for root cause analysis. Reduced debugging time significantly on complex issues.',
  },
  {
    icon: FileText,
    name: 'AI Documentation',
    color: '#63B3ED',
    usage: 'Per project',
    desc: 'Generating README files, API docs, and inline comments. All AI output is manually reviewed and refined before committing.',
  },
  {
    icon: Wand2,
    name: 'Prompt Engineering',
    color: '#9F7AEA',
    usage: 'Always',
    desc: 'Structured system prompts, tool-calling flows, and multi-turn agent design. Applied in OpenClaw Gateway and Telegram bot projects.',
  },
]

export default function AITools() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="ai-tools" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-purple/[0.04] blur-[120px] pointer-events-none" />

      <div className="relative section-wrap">
        <SectionTitle eyebrow="AI Workflow" title="How I use" highlight="AI tools" />

        {/* Principle card */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="glass rounded-2xl p-5 mb-10 flex items-center gap-4 border border-purple/15 max-w-2xl"
        >
          <div className="w-10 h-10 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-purple" />
          </div>
          <p className="text-sm text-dim leading-relaxed">
            <span className="text-bright font-medium">Approach: </span>
            AI as a force multiplier, not a crutch. Every AI output is critically reviewed,
            manually tested, and refined. Errors from AI are fixed by hand — I document both what AI helped with
            and what required manual correction.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool, i) => (
            <AnimatedCard key={tool.name} delay={i * 0.08}>
              <div className="glass glass-hover rounded-2xl p-5 h-full relative overflow-hidden group">
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-15 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: tool.color }}
                />
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: `${tool.color}18` }}
                    >
                      <tool.icon className="w-5 h-5" style={{ color: tool.color }} />
                    </div>
                    <span
                      className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: `${tool.color}15`, color: tool.color }}
                    >
                      {tool.usage}
                    </span>
                  </div>
                  <h3 className="font-semibold text-bright text-sm mb-2">{tool.name}</h3>
                  <p className="text-xs text-muted leading-relaxed">{tool.desc}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}
