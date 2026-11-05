import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../theme'
import { useI18n } from '../i18n'

const NAV_SECTION_IDS = ['hero', 'projects', 'about', 'tech', 'experience', 'ai-tools', 'contact']

const scrollTo = (href, closeFn) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  closeFn?.()
}

function LanguageSwitch({ compact = false }) {
  const { language, setLanguage, t } = useI18n()

  return (
    <div
      className={`inline-flex items-center rounded-lg border border-border p-1 ${compact ? 'w-full' : ''}`}
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
              ? 'bg-blue/15 text-blue'
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
  const [activeSection, setActiveSection] = useState('projects')
  const { t } = useI18n()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    let ticking = false
    const updateActiveSection = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(() => {
        const marker = 150
        let current = 'hero'
        NAV_SECTION_IDS.forEach(id => {
          const section = document.getElementById(id)
          if (section && section.getBoundingClientRect().top <= marker) current = id
        })
        setActiveSection(current)
        ticking = false
      })
    }
    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const closeOnEscape = event => { if (event.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

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
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-card' : 'bg-bg/75 backdrop-blur-md'}`}
      >
        <div className="section-wrap">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              onClick={e => { e.preventDefault(); scrollTo('#hero') }}
              className="flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-md bg-blue flex items-center justify-center shrink-0">
                <span className="font-mono text-black text-sm font-bold">AT</span>
              </div>
              <span className="font-semibold text-bright text-sm tracking-tight hidden sm:block">
                ASILBEK<span className="text-blue">.</span>DEV
              </span>
            </a>

            <div className="hidden md:flex items-center gap-1">
              {t.nav.links.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={e => { e.preventDefault(); scrollTo(link.href) }}
                  className={`nav-link px-3 lg:px-4 py-2 text-sm rounded-lg transition-all ${activeSection === link.href.slice(1) ? 'nav-link-active' : 'text-dim hover:text-bright'}`} aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button type="button" onClick={toggleTheme} className="w-10 h-10 inline-flex items-center justify-center rounded-lg border border-border text-dim hover:text-blue transition-colors" aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'} title={theme === 'dark' ? 'Light theme' : 'Dark theme'}>{theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}</button>
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
                aria-controls="mobile-navigation"
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
              id="mobile-navigation"
              role="navigation"
              aria-label={t.nav.links.map(link => link.name).join(', ')}
              className="mobile-nav-panel absolute right-0 top-0 h-full w-[min(300px,88vw)] flex flex-col pt-20 pb-10 px-5 gap-1 overflow-y-auto"
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
                  className={`mobile-nav-link flex items-center px-4 h-12 rounded-xl transition-all text-sm font-medium ${activeSection === link.href.slice(1) ? 'mobile-nav-link-active' : 'text-dim'}`} aria-current={activeSection === link.href.slice(1) ? 'location' : undefined}
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
