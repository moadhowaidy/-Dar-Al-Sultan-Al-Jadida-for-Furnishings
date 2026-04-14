import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../hooks/useLang'

export default function WaveOverlay() {
  const { isWaving, waveOrigin, wavePhase } = useLang()

  const maxRadius = Math.sqrt(
    Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2)
  )

  return (
    <AnimatePresence>
      {isWaving && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none bg-ink"
          style={{ transformOrigin: `${waveOrigin.x}px ${waveOrigin.y}px` }}
          initial={{
            clipPath: `circle(0px at ${waveOrigin.x}px ${waveOrigin.y}px)`,
          }}
          animate={{
            clipPath:
              wavePhase === 'expanding'
                ? `circle(${maxRadius}px at ${waveOrigin.x}px ${waveOrigin.y}px)`
                : `circle(0px at ${waveOrigin.x}px ${waveOrigin.y}px)`,
          }}
          exit={{
            clipPath: `circle(0px at ${waveOrigin.x}px ${waveOrigin.y}px)`,
          }}
          transition={{
            duration: 0.62,
            ease: [0.77, 0, 0.18, 1],
          }}
        />
      )}
    </AnimatePresence>
  )
}
