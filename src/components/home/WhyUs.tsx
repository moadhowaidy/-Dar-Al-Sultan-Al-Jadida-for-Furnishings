import { motion } from 'framer-motion'
import { Shield, Truck, Palette, CreditCard } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { TEXT } from '../../data'

const iconMap = {
  Shield,
  Truck,
  Palette,
  CreditCard,
} as const

export default function WhyUs() {
  const { lang, t } = useLang()

  return (
    <section className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            {t(TEXT.whyUs.eyebrow.ar, TEXT.whyUs.eyebrow.en)}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-ink mt-3 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
            {t(TEXT.whyUs.heading.ar, TEXT.whyUs.heading.en)}{' '}
            <span className="text-gold">{t(TEXT.whyUs.headingGold.ar, TEXT.whyUs.headingGold.en)}</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEXT.whyUs.features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl p-6 text-center border border-gold/10 shadow-sm hover:shadow-md hover:shadow-gold/5 transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gold/10 text-gold mb-4">
                  <Icon size={28} />
                </div>
                <h3 className={`text-ink font-bold text-lg mb-2 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
                  {t(feature.titleAR, feature.titleEN)}
                </h3>
                <p className="text-ink/60 text-sm leading-relaxed">
                  {t(feature.descAR, feature.descEN)}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
