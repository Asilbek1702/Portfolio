import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const SOCIALS = [
  { icon: Github,        href: 'https://github.com/Asilbek1702',             label: 'GitHub' },
  { icon: Linkedin,      href: 'https://www.linkedin.com/in/asilbek1702/',   label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/notdead3',                      label: 'Telegram' },
  { icon: Mail,          href: 'mailto:asilbektashpulatov687@gmail.com',     label: 'Email' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Backdrops */}
      <div className="absolute inset-0 bg-grad-hero pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />
      <div className="absolute top-1/4 left-[5%] w-72 sm:w-[420px] h-72 sm:h-[420px] rounded-full bg-blue/[0.06] blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[5%] w-60 sm:w-[320px] h-60 sm:h-[320px] rounded-full bg-purple/[0.07] blur-[80px] animate-float-med pointer-events-none" style={{ animationDelay: '2.5s' }} />

      <div className="relative z-10 section-wrap w-full py-16 sm:py-20">
        {/* Stack vertically on mobile, side-by-side on lg */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">

          {/* ── Left — text ── */}
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div variants={item} className="mb-6 sm:mb-8">
              <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full glass border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow shrink-0" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-bold tracking-tight leading-[1.05] mb-5 sm:mb-6"
              style={{ fontSize: 'clamp(2.2rem, 8vw, 4.5rem)' }}
            >
              <span className="text-bright">Hi, I'm</span>
              <br />
              <span className="grad-text">Asilbek</span>
              <br />
              <span className="text-dim font-semibold" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)' }}>
                Full-Stack Developer
              </span>
            </motion.h1>

            <motion.p variants={item} className="text-sm sm:text-base lg:text-lg text-dim max-w-xl leading-relaxed mb-8 sm:mb-10">
              Building web applications with React, FastAPI, and AI integrations.
              CS student at Central Asian University, Tashkent.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 mb-8 sm:mb-10">
              <a
                href="#projects"
                onClick={e => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-primary"
              >
                View my work
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="btn-ghost"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={item} className="flex gap-2">
              {SOCIALS.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl glass flex items-center justify-center text-muted hover:text-blue hover:border-blue/30 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right — photo (shown on md+, hidden on mobile) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-blue/20 blur-3xl scale-110 pointer-events-none" />
              {/* Gradient border */}
              <div
                className="relative p-[2px] rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(99,179,237,0.5), rgba(159,122,234,0.3), rgba(99,179,237,0.1))' }}
              >
                <div className="rounded-[calc(1.5rem-2px)] overflow-hidden w-72 h-72 lg:w-80 lg:h-80 bg-surface">
                  <img
                    src="/images/asilbek-hero.jpg"
                    alt="Asilbek Tashpulatov"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>
              </div>
              {/* Floating badges — positioned to never overflow on tablet */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 lg:-right-5 glass px-3 py-1.5 rounded-xl text-xs font-semibold text-blue border border-blue/20 shadow-card whitespace-nowrap"
              >
                React
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-3 -left-3 lg:-left-8 glass px-3 py-1.5 rounded-xl text-xs font-semibold text-purple border border-purple/20 shadow-card whitespace-nowrap"
              >
                FastAPI
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-10 glass px-3 py-1.5 rounded-xl text-xs font-semibold text-green-400 border border-green-400/20 shadow-card whitespace-nowrap"
              >
                Docker
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="flex justify-center mt-12 sm:mt-16"
        >
          <motion.button
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            className="flex flex-col items-center gap-1.5 text-muted hover:text-blue transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-[10px] font-medium uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
