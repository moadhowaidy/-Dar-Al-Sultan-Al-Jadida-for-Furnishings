import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useLang } from '../hooks/useLang'
import { PRODUCTS, TEXT, COMPANY } from '../data'
import type { Product } from '../data'
import Button from '../components/ui/Button'

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
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        <div className="flex gap-2 mb-4">
          {product.colors.map((c, i) => (
            <span
              key={i}
              className="w-6 h-6 rounded-full border border-black/10 shadow-sm"
              style={{ backgroundColor: c }}
            />
          ))}
        </div>

        <h3 className={`text-ink font-bold text-xl mb-1 ${lang === 'ar' ? 'font-cairo' : 'font-playfair'}`}>
          {t(product.nameAR, product.nameEN)}
        </h3>
        <p className="text-ink/40 text-sm mb-3">
          {t(product.nameEN, product.nameAR)}
        </p>

        <p className="text-ink/60 text-sm leading-relaxed mb-6">
          {t(product.descAR, product.descEN)}
        </p>

        <Button
          variant="primary"
          href={`https://wa.me/${COMPANY.whatsapp.replace('+', '')}?text=${encodeURIComponent(t(product.nameAR, product.nameEN))}`}
          className="w-full"
          icon={<ExternalLink size={16} />}
        >
          {t(TEXT.products.orderNow.ar, TEXT.products.orderNow.en)}
        </Button>
      </div>
    </motion.div>
  )
}

export default function ProductsPage() {
  const { lang, t } = useLang()

  return (
    <>
      {/* Hero banner */}
      <section className="bg-ink pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent mb-4 ${
              lang === 'ar' ? 'font-cairo' : 'font-playfair'
            }`}
          >
            {t(TEXT.productsPage.heading.ar, TEXT.productsPage.heading.en)}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto"
          >
            {t(TEXT.productsPage.sub.ar, TEXT.productsPage.sub.en)}
          </motion.p>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
