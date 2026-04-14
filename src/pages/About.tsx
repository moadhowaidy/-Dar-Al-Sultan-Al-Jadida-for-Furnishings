import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLang } from '../hooks/useLang'
import { TEXT, ACTIVITIES } from '../data'

export default function AboutPage() {
  const { lang, t } = useLang()

  return (
    <>
      {/* Hero banner */}
      <section className="bg-ink pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 ${
              lang === 'ar' ? 'font-cairo' : 'font-playfair'
            }`}
          >
            {t(TEXT.aboutPage.heading.ar, TEXT.aboutPage.heading.en)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            {t(TEXT.aboutPage.sub.ar, TEXT.aboutPage.sub.en)}
          </motion.p>
        </div>
      </section>

      {/* Story section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`text-2xl sm:text-3xl font-bold text-ink mb-6 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
              {t(TEXT.about.heading.ar, TEXT.about.heading.en)}{' '}
              <span className="text-gold">{t(TEXT.about.headingGold.ar, TEXT.about.headingGold.en)}</span>
            </h2>
            <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
              {t(TEXT.about.story.ar, TEXT.about.story.en)}
            </p>
          </motion.div>

          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-xl font-bold text-ink text-center mb-8 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
              {t(TEXT.about.activitiesTitle.ar, TEXT.about.activitiesTitle.en)}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ACTIVITIES.map((activity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-lg p-5 border border-gold/10 shadow-sm flex items-center gap-4"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className={`text-ink font-semibold text-sm ${lang === 'ar' ? 'font-cairo' : ''}`}>
                    {t(activity.ar, activity.en)}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-14 sm:mt-16 pt-10 sm:pt-12 border-t border-gold/15"
          >
            <p className={`text-ink/80 text-base sm:text-lg mb-6 max-w-xl mx-auto ${lang === 'ar' ? 'font-cairo' : ''}`}>
              {t(TEXT.aboutPage.closingCta.ar, TEXT.aboutPage.closingCta.en)}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-[#C49A20] text-[#1A1208] font-cairo font-bold text-sm py-3 px-8 rounded-[10px] hover:brightness-105 transition-[filter] active:brightness-95"
            >
              {t(TEXT.aboutPage.closingCtaButton.ar, TEXT.aboutPage.closingCtaButton.en)}
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
