import { motion } from 'framer-motion';
import { BookMarked, Compass, Sparkles } from 'lucide-react';

function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-accent-600 px-5 py-10 text-white shadow-lg md:px-8 md:py-14">
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-xl" />
      <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-sand-100/30 blur-xl" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="relative z-10 space-y-5"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-base font-medium backdrop-blur">
          <Sparkles className="h-5 w-5" />
          My Curated Collection
        </div>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Books I Keep Coming Back To</h1>
          <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
            A personal shelf across advanced physics, ancient Indian history, and non-attachment.
            Every title links directly to Amazon and Goodreads for easy purchase.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-3">
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-base">
            <BookMarked className="h-5 w-5" />
            27 Handpicked Titles
          </div>
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-base">
            <Compass className="h-5 w-5" />
            3 Core Themes
          </div>
          <div className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-white/15 px-4 py-2 text-base">
            <Sparkles className="h-5 w-5" />
            Buy-Ready Links
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
