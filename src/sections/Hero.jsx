import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'

const socials = [
  { icon: Github, href: 'https://github.com/Asilbek1702', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/asilbek1702/', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/notdead3', label: 'Telegram' },
  { icon: Mail, href: 'mailto:asilbektashpulatov687@gmail.com', label: 'Email' },
]

export default function Hero() {
  const { t } = useI18n()
  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center pt-24 pb-16">
      <div className="section-wrap w-full">
        <div className="grid lg:grid-cols-[1.25fr_.75fr] gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue" aria-hidden="true"/>
              <span className="section-kicker">{t.hero.status} · Tashkent, Uzbekistan</span>
            </div>
            <p className="font-mono text-xs text-muted mb-4">COMPUTER SCIENCE · CAU 2026</p>
            <h1 className="text-hero font-extrabold tracking-[-.065em] leading-[.98] mb-7">
              <span className="block">{t.hero.intro}</span>
              <span className="block text-blue">Asilbek.</span>
              <span className="block text-dim text-[clamp(1.35rem,3.4vw,2.65rem)] tracking-[-.04em] mt-4">{t.hero.role}</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg leading-8 text-dim mb-9">{t.hero.text}</p>
            <div className="flex flex-wrap gap-3 mb-9">
              <a href="#projects" className="btn-primary">{t.hero.viewWork}<ArrowUpRight className="w-4 h-4"/></a>
              <a href="#contact" className="btn-ghost">{t.hero.contact}</a>
            </div>
            <div className="flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label }) => <a key={label} href={href} target={label === 'Email' ? undefined : '_blank'} rel="noreferrer" aria-label={label} className="w-10 h-10 inline-flex items-center justify-center border border-border rounded-md text-dim hover:text-blue hover:border-blue transition-colors"><Icon className="w-4 h-4"/></a>)}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .15 }} className="relative max-w-md w-full mx-auto lg:ml-auto">
            <div className="absolute -inset-5 border border-border rounded-2xl translate-x-3 translate-y-3"/>
            <div className="relative overflow-hidden rounded-xl border border-border bg-surface aspect-[4/5] max-h-[520px]">
              <img src="/images/asilbek-hero.jpg" alt="Asilbek Tashpulatov" className="w-full h-full object-cover object-top grayscale-[18%]" loading="eager"/>
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/80 to-transparent text-white">
                <p className="font-mono text-[10px] tracking-widest text-white/60 mb-1">DEVELOPER PROFILE</p>
                <p className="text-xl font-bold">Asilbek Tashpulatov</p>
                <p className="text-sm text-white/70">Web · Backend · AI integrations</p>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="mt-16 pt-5 border-t border-border flex flex-wrap items-center justify-between gap-4">
          <div><span className="font-mono text-[10px] tracking-widest text-muted block mb-2">CURRENT FOCUS</span><span className="text-sm text-dim">React · Python · PostgreSQL · AI integrations</span></div>
          <a href="#projects" className="inline-flex items-center gap-2 font-mono text-[10px] text-muted hover:text-blue">SCROLL TO PROJECTS <ArrowDown className="w-3 h-3"/></a>
        </div>
      </div>
    </section>
  )
}
