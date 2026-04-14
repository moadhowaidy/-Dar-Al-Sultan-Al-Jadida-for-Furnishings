import { motion } from 'framer-motion'
import { useLang } from '../../hooks/useLang'
import { TEXT } from '../../data'
import Button from '../ui/Button'

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const stats = [
  { value: '2000+', label: TEXT.hero.statProducts },
  { value: '15+', label: TEXT.hero.statYears },
  { value: '10,000+', label: TEXT.hero.statCustomers },
]

export default function Hero() {
  const { lang, t } = useLang()

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ink overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M30 0 L60 30 L30 60 L0 30 Z" fill="none" stroke="#C49A20" strokeWidth="0.5" />
              <circle cx="30" cy="30" r="3" fill="none" stroke="#C49A20" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-pattern)" />
        </svg>
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-6">
          <span className="inline-block px-5 py-2 rounded-full border border-gold/40 bg-gold/10 text-gold text-xs sm:text-sm font-semibold tracking-wide">
            {t(TEXT.hero.badge.ar, TEXT.hero.badge.en)}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent ${
            lang === 'ar' ? 'font-cairo' : 'font-playfair'
          }`}
        >
          {t(TEXT.hero.heading.ar, TEXT.hero.heading.en)}
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="text-white/60 text-base sm:text-lg max-w-[480px] mx-auto mb-10 leading-relaxed"
        >
          {t(TEXT.hero.sub.ar, TEXT.hero.sub.en)}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" href="/products">
            {t(TEXT.hero.ctaBrowse.ar, TEXT.hero.ctaBrowse.en)}
          </Button>
          <Button variant="outlineWhite" href="#contact" onClick={() => {
            const el = document.getElementById('contact')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}>
            {t(TEXT.hero.ctaContact.ar, TEXT.hero.ctaContact.en)}
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-16"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-gold text-3xl sm:text-4xl font-bold font-cairo">
                {stat.value}
              </div>
              <div className="text-white/40 text-xs sm:text-sm mt-1">
                {t(stat.label.ar, stat.label.en)}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  )
}
