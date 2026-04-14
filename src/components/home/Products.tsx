import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLang } from '../../hooks/useLang'
import { PRODUCTS, TEXT, COMPANY } from '../../data'
import type { Product } from '../../data'
import Button from '../ui/Button'

function ProductCard({ product, index }: { product: Product; index: number }) {
  const { lang, t } = useLang()

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group border border-gold/10 hover:shadow-xl hover:shadow-gold/5 transition-shadow"
    >
      <div className="h-[220px] overflow-hidden rounded-t-xl">
        <img
          src={product.image}
          alt={t(product.nameAR, product.nameEN)}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        {/* Color swatches */}
        <div className="flex gap-2 mb-3">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-5 h-5 rounded-full border border-black/10 shadow-sm"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        {/* Name */}
        <h3 className={`text-ink font-bold text-base mb-1 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
          {t(product.nameAR, product.nameEN)}
        </h3>
        <p className="text-ink/50 text-xs mb-2">
          {t(product.nameEN, product.nameAR)}
        </p>

        {/* Origin badge */}
        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gold/10 text-gold-dark border border-gold/20 mb-3">
          {t(TEXT.products.origin.ar, TEXT.products.origin.en)}: {product.origin}
        </span>

        {/* Description */}
        <p className="text-ink/60 text-sm leading-relaxed mb-4">
          {t(product.descAR, product.descEN)}
        </p>

        {/* CTA */}
        <Button
          variant="primary"
          href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}?text=${encodeURIComponent(t(product.nameAR, product.nameEN))}`}
          className="w-full text-sm"
          icon={<ExternalLink size={14} />}
        >
          {t(TEXT.products.orderNow.ar, TEXT.products.orderNow.en)}
        </Button>
      </div>
    </motion.div>
  )
}

export default function Products() {
  const { lang, t } = useLang()

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">
            {t(TEXT.products.eyebrow.ar, TEXT.products.eyebrow.en)}
          </span>
          <h2 className={`text-3xl sm:text-4xl font-bold text-ink mt-3 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
            {t(TEXT.products.heading.ar, TEXT.products.heading.en)}{' '}
            <span className="text-gold">{t(TEXT.products.headingGold.ar, TEXT.products.headingGold.en)}</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
