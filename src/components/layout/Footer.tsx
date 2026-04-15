import { Link } from 'react-router-dom'
import { Phone, MessageCircle } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { COMPANY, TEXT } from '../../data'

export default function Footer() {
  const { lang, t } = useLang()
  const signatureHref = 'https://swiftscaled.com'
  const signatureLabel = 'SWIFTSCALED'

  return (
    <footer className="bg-ink border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo + tagline */}
          <div>
            <h3
              className={`text-gold text-xl font-bold mb-3 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}
            >
              {t(COMPANY.nameAR, COMPANY.nameEN)}
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              {t(COMPANY.taglineAR, COMPANY.taglineEN)}
            </p>
            <p className="text-white/30 text-xs mt-3">
              {t(COMPANY.locationAR, COMPANY.locationEN)}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {t(TEXT.footer.quickLinks.ar, TEXT.footer.quickLinks.en)}
            </h4>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-white/60 hover:text-gold text-sm transition-colors">
                {t(TEXT.nav.home.ar, TEXT.nav.home.en)}
              </Link>
              <Link to="/products" className="text-white/60 hover:text-gold text-sm transition-colors">
                {t(TEXT.nav.products.ar, TEXT.nav.products.en)}
              </Link>
              <Link to="/about" className="text-white/60 hover:text-gold text-sm transition-colors">
                {t(TEXT.nav.about.ar, TEXT.nav.about.en)}
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {t(TEXT.footer.contactUs.ar, TEXT.footer.contactUs.en)}
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-whatsapp text-sm transition-colors"
              >
                <MessageCircle size={16} />
                <span dir="ltr">{COMPANY.whatsapp}</span>
              </a>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 text-white/60 hover:text-gold text-sm transition-colors"
              >
                <Phone size={16} />
                <span dir="ltr">{COMPANY.phone}</span>
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-gold font-semibold mb-4 text-sm uppercase tracking-wider">
              {t(TEXT.footer.legal.ar, TEXT.footer.legal.en)}
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-xs">{t(TEXT.footer.licenseLabel.ar, TEXT.footer.licenseLabel.en)}:</span>
                <span className="text-gold font-mono text-sm font-bold">{COMPANY.license}</span>
              </div>
              <div className="text-white/30 text-xs">
                {t(`صالح حتى ${COMPANY.licenseTo}`, `Valid until ${COMPANY.licenseTo}`)}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 text-center">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} {t(COMPANY.nameAR, COMPANY.nameEN)}.{' '}
            {t(TEXT.footer.rights.ar, TEXT.footer.rights.en)}.
          </p>
          <p className="text-white/40 text-[10px] leading-tight mt-1">
            Powered by <a href={signatureHref} target="_blank" rel="noopener noreferrer" className="footer-signature-link">{signatureLabel}</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
