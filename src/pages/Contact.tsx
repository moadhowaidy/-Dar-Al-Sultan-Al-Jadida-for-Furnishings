import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react'
import { useLang } from '../hooks/useLang'

/** Tarhuna center — replace with Share → Embed map `src` from Google Maps for the exact place pin if needed. */
const MAP_EMBED_SRC =
  'https://www.google.com/maps?q=32.4339,13.6336&z=14&hl=ar&output=embed'

const MAPS_LINK = 'https://maps.app.goo.gl/69AAXQCDLewPWSPu6'
const WHATSAPP_HREF = 'https://wa.me/0944371217'
const PHONE_HREF = 'tel:+0921381513'
const EMAIL_HREF = 'mailto:info@dar-al-sultan.com'

export default function ContactPage() {
  const { lang, t, dir } = useLang()
  const heroAlign = lang === 'ar' ? 'text-right' : 'text-center'
  const cardAlign = lang === 'ar' ? 'text-right' : 'text-center'
  const rowFlex = lang === 'ar' ? 'flex-row-reverse justify-end' : 'justify-center'

  return (
    <div className="flex flex-col flex-1 min-h-0">
      {/* Hero strip */}
      <section
        className="bg-ink pt-24 sm:pt-28"
        aria-labelledby="contact-hero-heading"
      >
        <div
          className="min-h-[200px] flex flex-col justify-center px-4 sm:px-6 w-full max-w-3xl mx-auto"
          dir={dir}
        >
          <p className={`text-gold text-[12px] tracking-[2px] mb-2 font-cairo ${heroAlign}`}>
            {t('نحن هنا لخدمتك', 'We are here to serve you')}
          </p>
          <h1
            id="contact-hero-heading"
            className={`font-cairo font-bold text-[36px] text-gold mb-2 ${heroAlign}`}
          >
            {t('تواصل معنا', 'Contact Us')}
          </h1>
          <p className={`text-[15px] text-white/65 mb-4 font-cairo ${heroAlign}`}>
            {t('يسعدنا الرد على جميع استفساراتك', 'We are happy to answer all your questions')}
          </p>
          <div className="w-20 h-0.5 bg-gold rounded-full mx-auto" aria-hidden />
        </div>
      </section>

      {/* Contact cards */}
      <section className="bg-cream py-16" aria-label={t('طرق التواصل', 'Contact methods')}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* WhatsApp */}
            <article
              className={`bg-white rounded-2xl border-[0.5px] border-gold/20 p-8 px-6 ${cardAlign} transition-all duration-[250ms] ease hover:border-gold hover:-translate-y-1.5 shadow-sm`}
              dir={dir}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(37,211,102,0.12)] flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-[#25D366]" size={26} strokeWidth={2} aria-hidden />
              </div>
              <h2 className="font-cairo font-bold text-ink text-base mb-2">
                {t('واتساب', 'WhatsApp')}
              </h2>
              <p className="text-sm text-ink mb-4 font-cairo">+0944371217</p>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-[10px] py-[11px] font-cairo font-bold text-sm bg-[#25D366] text-white hover:bg-[#1da851] transition-colors"
              >
                {t('ابدأ المحادثة الآن', 'Start a conversation')}
              </a>
            </article>

            {/* Phone & email */}
            <article
              className={`bg-white rounded-2xl border-[0.5px] border-gold/20 p-8 px-6 ${cardAlign} transition-all duration-[250ms] ease hover:border-gold hover:-translate-y-1.5 shadow-sm`}
              dir={dir}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(196,154,32,0.1)] flex items-center justify-center mx-auto mb-4">
                <Phone className="text-gold" size={26} strokeWidth={2} aria-hidden />
              </div>
              <h2 className="font-cairo font-bold text-ink text-base mb-4">
                {t('هاتف وبريد', 'Phone & Email')}
              </h2>
              <a
                href={PHONE_HREF}
                className={`flex items-center gap-2 text-sm text-ink hover:text-gold transition-colors font-cairo ${rowFlex}`}
              >
                <Phone className="text-gold shrink-0" size={16} aria-hidden />
                <span>+0921381513</span>
              </a>
              <div className="border-t border-gold/15 pt-3 mt-3">
                <a
                  href={EMAIL_HREF}
                  className={`flex items-center gap-2 text-sm text-ink hover:text-gold transition-colors font-cairo ${rowFlex}`}
                >
                  <Mail className="text-gold shrink-0" size={16} aria-hidden />
                  <span className="break-all">info@dar-al-sultan.com</span>
                </a>
              </div>
            </article>

            {/* Location */}
            <article
              className={`bg-white rounded-2xl border-[0.5px] border-gold/20 p-8 px-6 ${cardAlign} transition-all duration-[250ms] ease hover:border-gold hover:-translate-y-1.5 shadow-sm`}
              dir={dir}
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(196,154,32,0.1)] flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-gold" size={26} strokeWidth={2} aria-hidden />
              </div>
              <h2 className="font-cairo font-bold text-ink text-base mb-2">
                {t('موقعنا', 'Our Location')}
              </h2>
              <p className="font-cairo font-bold text-ink text-sm mb-2">
                {t('ترهونة، ليبيا', 'Tarhuna, Libya')}
              </p>
              <p className="text-[13px] text-ink/60 mb-4 font-cairo leading-relaxed">
                {t(
                  'نخدم جميع أنحاء ليبيا بالتوصيل المجاني',
                  'Free delivery across all of Libya'
                )}
              </p>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-[10px] py-[11px] font-cairo font-bold text-sm border-[1.5px] border-gold text-gold-dark bg-transparent hover:bg-gold hover:text-ink transition-colors"
              >
                {t('افتح في خرائط جوجل', 'Open in Google Maps')}
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-white py-[60px]" aria-label={t('الخريطة', 'Map')}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center" dir={dir}>
          <p className="text-gold text-[11px] uppercase tracking-[0.2em] mb-2 font-cairo">
            {t('موقعنا', 'Find us')}
          </p>
          <h2 className="font-cairo font-bold text-2xl text-ink mb-8">
            {t('ترهونة، ليبيا', 'Tarhuna, Libya')}
          </h2>
          <div className="rounded-2xl overflow-hidden border border-gold/20 shadow-sm h-[320px] sm:h-[420px] md:h-[450px]">
            <iframe
              title={t('خريطة موقع دار السلطان — ترهونة', 'Dar Al Sultan location map — Tarhuna')}
              src={MAP_EMBED_SRC}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  )
}
