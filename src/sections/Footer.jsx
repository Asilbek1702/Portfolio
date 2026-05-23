import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const SOCIALS = [
  { icon: Github,        href: 'https://github.com/Asilbek1702', label: 'GitHub' },
  { icon: Linkedin,      href: 'https://linkedin.com',           label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/notdead3',           label: 'Telegram' },
  { icon: Mail,          href: 'mailto:asilbektashpulatov687@gmail.com',     label: 'Email' },
]

const LINKS = [
  { name: 'About',    href: '#about' },
  { name: 'Stack',    href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI Tools', href: '#ai-tools' },
  { name: 'Contact',  href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] py-14 lg:py-16">
      <div className="section-wrap">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-grad-blue-purple flex items-center justify-center">
                <span className="font-mono text-white text-sm font-bold">A</span>
              </div>
              <span className="font-semibold text-bright text-sm">Asilbek<span className="text-blue">.</span>dev</span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs mb-5">
              Full-Stack Developer based in Tashkent. Building production-ready web apps with React,
              FastAPI, Docker, and AI integrations.
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(s => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  whileHover={{ y: -2 }}
                  className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted hover:text-blue hover:border-blue/25 transition-colors"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-4">Navigation</p>
            <ul className="space-y-2.5">
              {LINKS.map(l => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    onClick={e => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-xs text-muted hover:text-blue transition-colors"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-4">Contact</p>
            <ul className="space-y-2.5">
              <li><a href="mailto:asilbektashpulatov687@gmail.com" className="text-xs text-muted hover:text-blue transition-colors">asilbektashpulatov687@gmail.com</a></li>
              <li><a href="https://t.me/notdead3" className="text-xs text-muted hover:text-blue transition-colors">@notdead3 (Telegram)</a></li>
              <li><span className="text-xs text-muted">Tashkent, Uzbekistan</span></li>
              <li><a href="https://github.com/Asilbek1702" className="text-xs text-muted hover:text-blue transition-colors">github.com/Asilbek1702</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted">
            © {new Date().getFullYear()} Asilbek. Built with React + TailwindCSS.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted hover:text-blue hover:border-blue/25 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
