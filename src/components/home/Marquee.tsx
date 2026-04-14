import { useLang } from '../../hooks/useLang'
import { TEXT } from '../../data'

export default function Marquee() {
  const { lang } = useLang()
  const items = lang === 'ar' ? TEXT.marquee.items.ar : TEXT.marquee.items.en
  const repeated = [...items, ...items]

  return (
    <div className="bg-gold overflow-hidden py-3 select-none group">
      <div
        className="flex whitespace-nowrap gap-8 [animation:marquee_20s_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-ink font-bold text-sm sm:text-base">
              {item}
            </span>
            <span className="text-ink/40 text-lg">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
