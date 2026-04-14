import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { TEXT, COMPANY } from '../../data'
import LangToggle from '../ui/LangToggle'

function Logo() {
  return (
    <svg viewBox="0 0 400 340" className="h-14 sm:h-16 w-auto" aria-label={COMPANY.nameAR}>
      {/* CROWN — ornate with central flame and filigree scrolls */}
      <g fill="none" stroke="#C49A20" strokeLinecap="round" strokeLinejoin="round">
        {/* Central pointed leaf/flame */}
        <path d="M200 30 C197 45 188 55 185 65 C190 60 196 52 200 48 C204 52 210 60 215 65 C212 55 203 45 200 30Z" fill="#C49A20" stroke="none"/>
        <path d="M185 65 C182 72 176 78 172 82 C178 78 184 72 188 68" fill="#C49A20" stroke="none"/>
        <path d="M215 65 C218 72 224 78 228 82 C222 78 216 72 212 68" fill="#C49A20" stroke="none"/>
        {/* Left filigree scrolls */}
        <path d="M185 65 C175 72 160 74 148 72 C136 70 126 66 120 75 C114 84 122 92 132 90 C140 88 136 80 130 82" strokeWidth="2.5" stroke="#C49A20"/>
        <path d="M148 72 C144 78 138 84 142 90 C146 96 154 92 152 86" strokeWidth="2" stroke="#C49A20"/>
        <path d="M160 74 C156 80 150 82 148 78" strokeWidth="1.5" stroke="#C49A20"/>
        <path d="M120 75 C112 72 104 76 108 84 C110 88 116 86 114 82" strokeWidth="1.8" stroke="#C49A20"/>
        {/* Right filigree scrolls (mirror) */}
        <path d="M215 65 C225 72 240 74 252 72 C264 70 274 66 280 75 C286 84 278 92 268 90 C260 88 264 80 270 82" strokeWidth="2.5" stroke="#C49A20"/>
        <path d="M252 72 C256 78 262 84 258 90 C254 96 246 92 248 86" strokeWidth="2" stroke="#C49A20"/>
        <path d="M240 74 C244 80 250 82 252 78" strokeWidth="1.5" stroke="#C49A20"/>
        <path d="M280 75 C288 72 296 76 292 84 C290 88 284 86 286 82" strokeWidth="1.8" stroke="#C49A20"/>
        {/* Scroll-end dots */}
        <circle cx="132" cy="90" r="2" fill="#C49A20" stroke="none"/>
        <circle cx="268" cy="90" r="2" fill="#C49A20" stroke="none"/>
        <circle cx="108" cy="84" r="1.5" fill="#C49A20" stroke="none"/>
        <circle cx="292" cy="84" r="1.5" fill="#C49A20" stroke="none"/>
        <circle cx="152" cy="86" r="1.5" fill="#C49A20" stroke="none"/>
        <circle cx="248" cy="86" r="1.5" fill="#C49A20" stroke="none"/>
      </g>

      {/* M MONOGRAM — bold geometric */}
      <g fill="#C49A20">
        <rect x="108" y="115" width="18" height="130"/>
        <rect x="274" y="115" width="18" height="130"/>
        <polygon points="126,115 126,130 200,220 200,205"/>
        <polygon points="274,115 274,130 200,220 200,205"/>
        <polygon points="160,160 160,175 200,205 200,190"/>
        <polygon points="240,160 240,175 200,205 200,190"/>
        <rect x="105" y="250" width="190" height="5" rx="2.5"/>
      </g>

      {/* ARABIC TEXT */}
      <text
        x="200"
        y="300"
        textAnchor="middle"
        fill="#C49A20"
        fontFamily="Cairo, sans-serif"
        fontSize="28"
        fontWeight="700"
        letterSpacing="2"
      >
        دار السلطان الجديدة للمفروشات
      </text>
    </svg>
  )
}

const navLinks = [
  { to: '/', label: TEXT.nav.home },
  { to: '/products', label: TEXT.nav.products },
  { to: '/about', label: TEXT.nav.about },
  { to: '#contact', label: TEXT.nav.contact },
] as const

export default function Navbar() {
  const { lang, t } = useLang()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  const isActive = (to: string) => {
    if (to === '/') return location.pathname === '/'
    if (to.startsWith('#')) return false
    return location.pathname.startsWith(to)
  }

  const handleNavClick = (to: string) => {
    if (to === '#contact') {
      const el = document.getElementById('contact')
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
    setMobileOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-40 border-b border-gold/30 transition-all duration-300 ${
        scrolled ? 'bg-ink/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-ink/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="shrink-0" aria-label={t(COMPANY.nameAR, COMPANY.nameEN)}>
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to === '#contact' ? (location.pathname === '/' ? '#contact' : '/#contact') : link.to}
              onClick={() => handleNavClick(link.to)}
              className={`relative px-4 py-2 text-sm font-semibold transition-colors ${
                isActive(link.to) ? 'text-gold' : 'text-white/70 hover:text-white'
              }`}
            >
              {t(link.label.ar, link.label.en)}
              {isActive(link.to) && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 inset-x-4 h-0.5 bg-gold rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LangToggle />
          <button
            className="md:hidden text-gold p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-ink border-t border-gold/20"
          >
            <div className="px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to === '#contact' ? (location.pathname === '/' ? '#contact' : '/#contact') : link.to}
                  onClick={() => handleNavClick(link.to)}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    isActive(link.to) ? 'text-gold bg-gold/10' : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t(link.label.ar, link.label.en)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
