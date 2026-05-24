import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n'

const scrollTo = (href, closeFn) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  closeFn?.()
}

function LanguageSwitch({ compact = false }) {
  const { language, setLanguage, t } = useI18n()

  return (
    <div
      className={`inline-flex items-center rounded-xl glass p-1 ${compact ? 'w-full' : ''}`}
      role="group"
      aria-label={t.nav.languageLabel}
    >
      {['en', 'ru'].map(lang => (
        <button
          key={lang}
          type="button"
          onClick={() => setLanguage(lang)}
          className={`${compact ? 'flex-1' : ''} min-h-0 h-8 px-3 rounded-lg text-[11px] font-semibold uppercase transition-colors ${
            language === lang
              ? 'bg-blue/20 text-blue'
              : 'text-muted hover:text-bright hover:bg-white/5'
          }`}
          aria-pressed={language === lang}
        >
          {lang}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { t } = useI18n()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong shadow-card' : ''
        }`}
      >
        <div className="section-wrap">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); scrollTo('#hero') }}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded-lg bg-grad-blue-purple flex items-center justify-center shadow-glow-blue shrink-0">
                <span className="font-mono text-white text-sm font-bold">A</span>
              </div>
              <span className="font-semibold text-bright text-sm tracking-tight hidden sm:block">
                Asilbek<span className="text-blue">.</span>dev
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {t.nav.links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className="px-3 lg:px-4 py-2 text-sm text-dim hover:text-bright rounded-lg transition-colors hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden sm:block">
                <LanguageSwitch />
              </div>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact') }}
                className="btn-primary hidden md:inline-flex py-2 px-4 lg:px-5 text-xs"
              >
                {t.nav.hire}
              </a>
              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-dim hover:text-bright hover:bg-white/5 transition-colors"
                aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                aria-expanded={open}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-bg/80 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 h-full w-[min(280px,85vw)] glass-strong flex flex-col pt-20 pb-10 px-5 gap-1"
            >
              <div className="mb-4">
                <LanguageSwitch compact />
              </div>
              {t.nav.links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href, () => setOpen(false)) }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center px-4 h-12 text-dim hover:text-bright rounded-xl hover:bg-white/5 transition-all text-sm font-medium"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="mt-4 px-1">
                <a
                  href="#contact"
                  onClick={e => { e.preventDefault(); scrollTo('#contact', () => setOpen(false)) }}
                  className="btn-primary w-full text-center"
                >
                  {t.nav.hire}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
