import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { name: 'About',    href: '#about' },
  { name: 'Stack',    href: '#tech' },
  { name: 'Projects', href: '#projects' },
  { name: 'AI',       href: '#ai-tools' },
  { name: 'Contact',  href: '#contact' },
]

const scrollTo = (href, closeFn) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  closeFn?.()
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Lock body scroll when drawer open
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
            {/* Logo */}
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

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {LINKS.map(link => (
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
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); scrollTo('#contact') }}
                className="btn-primary hidden md:inline-flex py-2 px-4 lg:px-5 text-xs"
              >
                Hire me
              </a>
              {/* Hamburger — big enough touch target */}
              <button
                onClick={() => setOpen(v => !v)}
                className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-dim hover:text-bright hover:bg-white/5 transition-colors"
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
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
              {LINKS.map((link, i) => (
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
                  Hire me
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
