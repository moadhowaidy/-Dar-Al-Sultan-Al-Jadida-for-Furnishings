import { motion } from 'framer-motion'
import { BadgeCheck, MapPin, Banknote, Clock } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { TEXT, COMPANY, ACTIVITIES } from '../../data'

export default function About() {
  const { lang, t } = useLang()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            {t(TEXT.about.eyebrow.ar, TEXT.about.eyebrow.en)}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-ink mt-3 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
            {t(TEXT.about.heading.ar, TEXT.about.heading.en)}{' '}
            <span className="text-gold">{t(TEXT.about.headingGold.ar, TEXT.about.headingGold.en)}</span>
          </h2>
        </motion.div>

        {/* Story */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-ink/70 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto text-center mb-16"
        >
          {t(TEXT.about.story.ar, TEXT.about.story.en)}
        </motion.p>

        {/* Activities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className={`text-xl font-bold text-ink text-center mb-8 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
            {t(TEXT.about.activitiesTitle.ar, TEXT.about.activitiesTitle.en)}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ACTIVITIES.map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-cream rounded-lg p-4 text-center border border-gold/10"
              >
                <p className={`text-ink font-semibold text-sm ${lang === 'ar' ? 'font-cairo' : ''}`}>
                  {t(activity.ar, activity.en)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* License card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-ink rounded-2xl p-6 sm:p-8 border border-gold/30">
            <div className="flex items-center justify-center gap-2 mb-6">
              <BadgeCheck className="text-gold" size={24} />
              <h3 className={`text-gold font-bold text-lg ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
                {t(TEXT.about.licenseTitle.ar, TEXT.about.licenseTitle.en)}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="text-white/50 text-xs mb-1">{t(TEXT.about.licenseNo.ar, TEXT.about.licenseNo.en)}</div>
                <div className="text-gold font-bold font-mono text-lg">{COMPANY.license}</div>
              </div>
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="text-white/50 text-xs mb-1">{t(TEXT.about.registryRef.ar, TEXT.about.registryRef.en)}</div>
                <div className="text-gold font-bold font-mono text-lg">{COMPANY.registryRef}</div>
              </div>
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="text-white/50 text-xs mb-1">{t(TEXT.about.validFrom.ar, TEXT.about.validFrom.en)}</div>
                <div className="text-white font-semibold text-sm">{COMPANY.licenseFrom}</div>
              </div>
              <div className="bg-gold/10 rounded-lg p-3">
                <div className="text-white/50 text-xs mb-1">{t(TEXT.about.validTo.ar, TEXT.about.validTo.en)}</div>
                <div className="text-white font-semibold text-sm">{COMPANY.licenseTo}</div>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-6 pt-6 border-t border-gold/20 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Banknote size={16} className="text-gold" />
                <span>{COMPANY.capital} {COMPANY.currency}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Clock size={16} className="text-gold" />
                <span>{COMPANY.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} className="text-gold" />
                <span>{t(COMPANY.locationAR, COMPANY.locationEN)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
