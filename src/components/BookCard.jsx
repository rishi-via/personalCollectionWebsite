import { ExternalLink, ShoppingCart, Star } from 'lucide-react';
import { motion } from 'framer-motion';

function BookCard({ book, delay }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.35, delay }}
      className="rounded-2xl bg-white/90 p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug text-slate-900">{book.title}</h3>
          <p className="text-base text-slate-600">{book.author}</p>
        </div>
        <Star className="mt-1 h-5 w-5 shrink-0 text-brand-600" />
      </div>

      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <a
          href={book.amazonUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          <ShoppingCart className="h-4 w-4" />
          Amazon
        </a>
        <a
          href={book.goodreadsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-xl bg-accent-600 px-4 py-2 text-base font-medium text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98]"
        >
          <ExternalLink className="h-4 w-4" />
          Goodreads
        </a>
      </div>
    </motion.article>
  );
}

export default BookCard;
