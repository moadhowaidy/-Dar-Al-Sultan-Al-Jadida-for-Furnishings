import { motion } from 'framer-motion'
import { MessageCircle, Phone } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { TEXT, COMPANY } from '../../data'
import Button from '../ui/Button'

export default function ContactCTA() {
  const { lang, t } = useLang()

  return (
    <section id="contact" className="py-20 sm:py-28 bg-ink relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="30" fill="none" stroke="#C49A20" strokeWidth="0.5" />
              <circle cx="40" cy="40" r="15" fill="none" stroke="#C49A20" strokeWidth="0.3" />
              <path d="M10 40 H70 M40 10 V70" stroke="#C49A20" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent ${
            lang === 'ar' ? 'font-cairo' : 'font-playfair'
          }`}>
            {t(TEXT.contactCTA.heading.ar, TEXT.contactCTA.heading.en)}
          </h2>
          <p className="text-white/50 text-base sm:text-lg mb-10">
            {t(TEXT.contactCTA.sub.ar, TEXT.contactCTA.sub.en)}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="whatsapp"
              href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}`}
              icon={<MessageCircle size={20} />}
              className="min-w-[200px]"
            >
              {t(TEXT.contactCTA.whatsapp.ar, TEXT.contactCTA.whatsapp.en)}
            </Button>
            <Button
              variant="outline"
              href={`tel:${COMPANY.phone}`}
              icon={<Phone size={20} />}
              className="min-w-[200px]"
            >
              {t(TEXT.contactCTA.phone.ar, TEXT.contactCTA.phone.en)}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
