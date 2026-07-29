import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({ eyebrow, title, highlight }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <div ref={ref} className="mb-14 lg:mb-18">
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-blue text-xs font-semibold uppercase tracking-[0.2em] mb-3"
        >
          {eyebrow}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, delay: 0.08 }}
        className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-tight tracking-tight text-bright"
      >
        {title}{' '}
        {highlight && <span className="grad-text">{highlight}</span>}
      </motion.h2>
    </div>
  )
}
