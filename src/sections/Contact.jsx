import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send, CheckCircle, AlertCircle, Loader2, Mail, MapPin, MessageCircle } from 'lucide-react'
import SectionTitle from '../components/SectionTitle'
import AnimatedCard from '../components/AnimatedCard'

const INFO = [
  { icon: Mail,          label: 'Email',    value: 'asilbektashpulatov687@gmail.com', href: 'mailto:asilbektashpulatov687@gmail.com' },
  { icon: MessageCircle, label: 'Telegram', value: '@notdead3',            href: 'https://t.me/notdead3' },
  { icon: MapPin,        label: 'Location', value: 'Tashkent, Uzbekistan', href: null },
]

function Field({ label, required, error, children }) {
  return (
    <div>
      <label className="block text-xs font-medium text-dim mb-2">
        {label}{required && <span className="text-blue ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1 text-orange-400 text-[11px] mt-1.5"
        >
          <AlertCircle className="w-3 h-3 shrink-0" />
          {error}
        </motion.p>
      )}
    </div>
  )
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  const [form, setForm]     = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.email.trim())   e.email   = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email address'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleChange = e => {
    const { name, value } = e.target
    setForm(p => ({ ...p, [name]: value }))
    if (errors[name]) setErrors(p => ({ ...p, [name]: '' }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Server error')
      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const isDisabled = status === 'loading' || status === 'success'

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(99,179,237,0.05) 0%, transparent 70%)' }}
      />
      <div className="relative section-wrap">
        <SectionTitle eyebrow="Contact" title="Let's work" highlight="together" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14">
          {/* Info panel */}
          <AnimatedCard className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 h-full">
              <p className="text-sm text-dim leading-relaxed mb-8">
                Open to full-time roles, freelance projects, and internships.
                Drop me a message — I typically respond within 24 hours.
              </p>

              <div className="space-y-3">
                {INFO.map(info => (
                  <div
                    key={info.label}
                    className={`flex items-center gap-4 p-4 rounded-xl glass-hover ${info.href ? 'cursor-pointer' : 'cursor-default'}`}
                    onClick={() => info.href && window.open(info.href)}
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue/10 flex items-center justify-center shrink-0">
                      <info.icon className="w-4 h-4 text-blue" />
                    </div>
                    <div>
                      <p className="text-[10px] text-muted uppercase tracking-wider mb-0.5">{info.label}</p>
                      <p className="text-sm text-dim">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Form */}
          <AnimatedCard delay={0.15} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="glass rounded-2xl p-6 lg:p-8 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" required error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Asilbek"
                    disabled={isDisabled}
                    className={`input-field ${errors.name ? 'input-error' : ''}`}
                  />
                </Field>

                <Field label="Email address" required error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    disabled={isDisabled}
                    className={`input-field ${errors.email ? 'input-error' : ''}`}
                  />
                </Field>
              </div>

              <Field label="Phone number">
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+998 90 000 0000"
                  disabled={isDisabled}
                  className="input-field"
                />
              </Field>

              <Field label="Message" required error={errors.message}>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  disabled={isDisabled}
                  className={`input-field resize-none ${errors.message ? 'input-error' : ''}`}
                />
              </Field>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={isDisabled}
                whileHover={!isDisabled ? { y: -1 } : {}}
                whileTap={!isDisabled ? { scale: 0.98 } : {}}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm text-white flex items-center justify-center gap-2 transition-all ${
                  status === 'success' ? 'bg-green-600'
                  : status === 'error'   ? 'bg-orange-600'
                  : 'btn-primary'
                } ${isDisabled ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status === 'loading' && <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>}
                {status === 'success' && <><CheckCircle className="w-4 h-4" /> Message sent!</>}
                {status === 'error'   && <><AlertCircle className="w-4 h-4" /> Failed — try again</>}
                {status === 'idle'    && <><Send className="w-4 h-4" /> Send message</>}
              </motion.button>

              <p className="text-[11px] text-muted text-center">
                You'll receive a copy to your email address.
              </p>
            </form>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}
