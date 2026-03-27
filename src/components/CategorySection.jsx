import { motion } from 'framer-motion';
import { Atom, Landmark, Flower2 } from 'lucide-react';
import BookCard from './BookCard';

const iconByType = {
  atom: Atom,
  landmark: Landmark,
  lotus: Flower2,
};

function CategorySection({ category }) {
  const CategoryIcon = iconByType[category.icon];

  return (
    <section id={category.id} className="rounded-3xl bg-sand-100/85 p-5 shadow-sm md:p-7">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
        className="mb-5 space-y-3"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-slate-700 shadow-sm">
          {CategoryIcon ? <CategoryIcon className="h-5 w-5 text-brand-600" /> : null}
          {category.title}
        </div>
        <p className="text-base leading-relaxed text-slate-700">{category.description}</p>
      </motion.header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {category.books.map((book, idx) => (
          <BookCard key={`${category.id}-${book.title}`} book={book} delay={idx * 0.04} />
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
