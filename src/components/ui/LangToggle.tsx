import { useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../hooks/useLang'

export default function LangToggle() {
  const { lang, toggleLang, isWaving } = useLang()
  const btnRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (isWaving) return
    const btn = btnRef.current
    if (btn) {
      const rect = btn.getBoundingClientRect()
      toggleLang({
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      })
    }
  }

  const targetLabel = lang === 'ar' ? 'EN' : 'AR'

  return (
    <motion.button
      ref={btnRef}
      onClick={handleClick}
      className="relative flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gold bg-transparent cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={targetLabel}
          className="inline-block w-7 h-7 rounded-full bg-gold text-ink font-bold text-xs flex items-center justify-center"
          initial={{ rotateY: 90, opacity: 0 }}
          animate={{ rotateY: 0, opacity: 1 }}
          exit={{ rotateY: -90, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {targetLabel}
        </motion.span>
      </AnimatePresence>
      <span className="text-gold font-semibold text-sm">
        {lang === 'ar' ? 'English' : 'العربية'}
      </span>
    </motion.button>
  )
}
