import { BookOpenCheck } from 'lucide-react';
import { categories } from './data/books';
import HeroSection from './components/HeroSection';
import CategorySection from './components/CategorySection';

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sand-50 via-sand-100 to-white text-slate-900">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-8 md:px-6 md:py-10">
        <HeroSection />

        <nav
          aria-label="Collection categories"
          className="sticky top-3 z-20 rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur"
        >
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="inline-flex min-h-[44px] min-w-[44px] items-center rounded-xl bg-slate-100 px-4 py-2 text-base font-medium text-slate-700 transition-all duration-200 hover:bg-brand-100 hover:text-brand-800"
              >
                {category.title}
              </a>
            ))}
          </div>
        </nav>

        <section className="space-y-6">
          {categories.map((category) => (
            <CategorySection key={category.id} category={category} />
          ))}
        </section>

        <footer className="flex items-center justify-center gap-2 px-2 py-6 text-base text-slate-600">
          <BookOpenCheck className="h-5 w-5 text-brand-700" />
          Personal Collection Website
        </footer>
      </div>
    </main>
  );
}

export default App;
