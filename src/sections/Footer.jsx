import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { useI18n } from '../i18n'

const SOCIALS = [
  { icon: Github, href: 'https://github.com/Asilbek1702', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://t.me/notdead3', label: 'Telegram' },
  { icon: Mail, href: 'mailto:asilbektashpulatov687@gmail.com', label: 'Email' },
]

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative border-t border-white/[0.06] py-14 lg:py-16">
      <div className="section-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-grad-blue-purple flex items-center justify-center">
                <span className="font-mono text-white text-sm font-bold">A</span>
              </div>
              <span className="font-semibold text-bright text-sm">Asilbek<span className="text-blue">.</span>dev</span>
            </div>
            <p className="text-xs text-muted leading-relaxed max-w-xs mb-5">
              {t.footer.text}
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

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-4">{t.footer.navigation}</p>
            <ul className="space-y-2.5">
              {t.nav.links.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={e => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-xs text-muted hover:text-blue transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-widest text-muted mb-4">{t.footer.contact}</p>
            <ul className="space-y-2.5">
              <li><a href="mailto:asilbektashpulatov687@gmail.com" className="text-xs text-muted hover:text-blue transition-colors">asilbektashpulatov687@gmail.com</a></li>
              <li><a href="https://t.me/notdead3" className="text-xs text-muted hover:text-blue transition-colors">@notdead3 (Telegram)</a></li>
              <li><span className="text-xs text-muted">{t.contact.info.locationValue}</span></li>
              <li><a href="https://github.com/Asilbek1702" className="text-xs text-muted hover:text-blue transition-colors">github.com/Asilbek1702</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted">
            {t.footer.copyright(new Date().getFullYear())}
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="w-9 h-9 rounded-xl glass flex items-center justify-center text-muted hover:text-blue hover:border-blue/25 transition-colors"
            aria-label={t.footer.scrollTop}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
