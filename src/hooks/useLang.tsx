import { createContext, useContext, useState, useCallback, useRef } from 'react'
import type { ReactNode } from 'react'
import type { Lang } from '../data'

interface WaveOrigin {
  x: number
  y: number
}

interface LangContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  toggleLang: (origin?: WaveOrigin) => void
  t: (ar: string, en: string) => string
  isWaving: boolean
  waveOrigin: WaveOrigin
  wavePhase: 'expanding' | 'collapsing' | 'idle'
}

const LangContext = createContext<LangContextValue | null>(null)

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('ar')
  const [isWaving, setIsWaving] = useState(false)
  const [waveOrigin, setWaveOrigin] = useState<WaveOrigin>({ x: 0, y: 0 })
  const [wavePhase, setWavePhase] = useState<'expanding' | 'collapsing' | 'idle'>('idle')
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const toggleLang = useCallback((origin?: WaveOrigin) => {
    if (isWaving) return

    if (origin) {
      setWaveOrigin(origin)
    }

    setIsWaving(true)
    setWavePhase('expanding')

    if (timeoutRef.current) clearTimeout(timeoutRef.current)

    timeoutRef.current = setTimeout(() => {
      const next: Lang = lang === 'ar' ? 'en' : 'ar'
      setLang(next)
      document.documentElement.lang = next
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr'
      setWavePhase('collapsing')

      timeoutRef.current = setTimeout(() => {
        setIsWaving(false)
        setWavePhase('idle')
      }, 620)
    }, 620)
  }, [lang, isWaving])

  const t = useCallback((ar: string, en: string) => {
    return lang === 'ar' ? ar : en
  }, [lang])

  const value: LangContextValue = { lang, dir, toggleLang, t, isWaving, waveOrigin, wavePhase }

  return (
    <LangContext.Provider value={value}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within LangProvider')
  return ctx
}
