import { motion } from 'framer-motion'
import { Users, Star, Award, Truck, Layers, Sparkles, MapPin } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { TEXT } from '../../data'

const statIcons = [Users, Star, Award, Truck] as const
const highlightIcons = { Layers, Sparkles, MapPin } as const

const cardView = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.45, ease: 'easeOut' as const },
}

export default function TrustStorySection() {
  const { lang, t, dir } = useLang()
  const copy = TEXT.trustStory

  return (
    <section dir={dir} className="overflow-hidden">
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-gold text-sm font-semibold tracking-wider block mb-3">
              {t(copy.eyebrow.ar, copy.eyebrow.en)}
            </span>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-ink max-w-3xl mx-auto leading-tight ${
                lang === 'ar' ? 'font-cairo' : 'font-playfair'
              }`}
            >
              {t(copy.headingBeforeGold.ar, copy.headingBeforeGold.en)}
              <span className="text-[#C49A20]">{t(copy.headingGold.ar, copy.headingGold.en)}</span>
            </h2>
            <p
              className={`mt-6 text-[#5C4A1E] text-base leading-relaxed max-w-[640px] mx-auto ${
                lang === 'ar' ? 'font-cairo' : ''
              }`}
            >
              {t(copy.paragraph.ar, copy.paragraph.en)}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {copy.stats.map((stat, i) => {
              const Icon = statIcons[i]
              return (
                <motion.div
                  key={i}
                  {...cardView}
                  transition={{ ...cardView.transition, delay: i * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-[12px] py-6 px-5 text-center border-[0.5px] border-[rgba(196,154,32,0.25)] transition-[transform,border-color] duration-300 hover:border-[#C49A20]"
                >
                  <Icon className="w-5 h-5 text-[#C49A20] mx-auto mb-3" strokeWidth={2} aria-hidden />
                  <div className="text-[28px] font-bold text-[#C49A20] leading-none font-cairo">
                    {lang === 'ar' ? stat.numberAR : stat.numberEN}
                  </div>
                  <div
                    className={`mt-2 text-[14px] text-[#5C4A1E] ${lang === 'ar' ? 'font-cairo' : 'font-inter'}`}
                  >
                    {t(stat.label.ar, stat.label.en)}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            {copy.highlights.map((item, i) => {
              const Icon = highlightIcons[item.icon]
              return (
                <motion.article
                  key={i}
                  {...cardView}
                  transition={{ ...cardView.transition, delay: i * 0.08 }}
                  className="rounded-[12px] bg-[#FDF8EC] py-7 px-[22px]"
                >
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'rgba(196,154,32,0.12)' }}
                  >
                    <Icon className="w-5 h-5 text-[#C49A20]" strokeWidth={2} aria-hidden />
                  </div>
                  <h3
                    className={`text-base font-bold text-ink mb-3 ${
                      lang === 'ar' ? 'font-cairo' : 'font-playfair'
                    }`}
                  >
                    {t(item.title.ar, item.title.en)}
                  </h3>
                  <p
                    className={`text-[13px] text-[#5C4A1E] leading-[1.8] ${
                      lang === 'ar' ? 'font-cairo' : 'font-inter'
                    }`}
                  >
                    {t(item.body.ar, item.body.en)}
                  </p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
