import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

const SOCIALS = [
  { icon: Github,        href: 'https://github.com/Asilbek1702', label: 'GitHub' },
  { icon: Linkedin,      href: 'https://linkedin.com',           label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/notdead3',           label: 'Telegram' },
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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Hero gradient backdrop */}
      <div className="absolute inset-0 bg-grad-hero pointer-events-none" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-[15%] w-[420px] h-[420px] rounded-full bg-blue/[0.06] blur-[100px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-[320px] h-[320px] rounded-full bg-purple/[0.07] blur-[80px] animate-float-med pointer-events-none" style={{ animationDelay: '2.5s' }} />

      <div className="relative z-10 section-wrap w-full py-20">
        <div className="relative max-w-3xl lg:max-w-none lg:pr-[430px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
          >
            {/* Status badge */}
            <motion.div variants={item} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-green-500/20 text-green-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse-slow" />
                Open to opportunities
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="text-[2.8rem] sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="text-bright">Hi, I'm</span>
              <br />
              <span className="grad-text">Asilbek</span>
              <br />
              <span className="text-dim font-semibold text-[0.75em]">Full-Stack Developer</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={item}
              className="text-base sm:text-lg text-dim max-w-xl leading-relaxed mb-10"
            >
              I build modern web applications with React, FastAPI, and AI integrations.
              Based in Tashkent — studying CS at Central Asian University while shipping production-grade code.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 mb-10">
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

            {/* Social links */}
            <motion.div variants={item} className="flex gap-2.5">
              {SOCIALS.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-muted hover:text-blue hover:border-blue/30 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero portrait */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mt-14 w-[min(100%,320px)] sm:w-[360px] lg:absolute lg:right-12 lg:top-1/2 lg:mt-0 lg:w-[360px] lg:-translate-y-1/2"
          >
            <div className="relative rounded-[2rem] bg-gradient-to-br from-blue via-purple to-blue p-[3px] shadow-card">
              <div className="rounded-[calc(2rem-3px)] bg-bg overflow-hidden">
                <img
                  src="/images/asilbek-hero.jpg"
                  alt="Asilbek portrait"
                  className="aspect-square w-full object-cover"
                />
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-3 sm:-right-5 glass px-3.5 py-1.5 rounded-xl text-xs font-semibold text-blue border border-blue/20 shadow-card"
            >
              React
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-1/2 -left-4 sm:-left-8 glass px-3.5 py-1.5 rounded-xl text-xs font-semibold text-purple border border-purple/20 shadow-card"
            >
              FastAPI
            </motion.div>
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="absolute -bottom-4 right-8 glass px-3.5 py-1.5 rounded-xl text-xs font-semibold text-green-400 border border-green-400/20 shadow-card"
            >
              Docker
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
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
