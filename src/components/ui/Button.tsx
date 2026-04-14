import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface ButtonProps {
  variant?: 'primary' | 'outline' | 'outlineWhite' | 'whatsapp'
  href?: string
  onClick?: () => void
  children: ReactNode
  className?: string
  icon?: ReactNode
}

const variants = {
  primary:
    'bg-gold text-ink font-bold hover:bg-gold-light active:bg-gold-dark',
  outline:
    'border-2 border-gold text-gold hover:bg-gold hover:text-ink active:bg-gold-dark',
  outlineWhite:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10',
  whatsapp:
    'bg-whatsapp text-white font-bold hover:brightness-110',
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm sm:text-base transition-colors cursor-pointer ${variants[variant]} ${className}`

  const motionProps = {
    whileHover: { scale: 1.03, y: -1 },
    whileTap: { scale: 0.98 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 17 },
  }

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        className={classes}
        {...motionProps}
      >
        {icon}
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button onClick={onClick} className={classes} {...motionProps}>
      {icon}
      {children}
    </motion.button>
  )
}
