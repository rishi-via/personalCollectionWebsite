const toAmazonSearch = (title, author) =>
  `https://www.amazon.com/s?k=${encodeURIComponent(`${title} ${author}`)}`;

const toGoodreadsSearch = (title, author) =>
  `https://www.goodreads.com/search?q=${encodeURIComponent(`${title} ${author}`)}`;

export const categories = [
  {
    id: 'advanced-physics',
    title: 'Advanced Physics',
    description: 'Relativity, quantum theory, field theory, and deep conceptual foundations.',
    icon: 'atom',
    books: [
      {
        title: 'The Feynman Lectures on Physics',
        author: 'Richard P. Feynman, Robert B. Leighton, Matthew Sands',
      },
      { title: 'Gravitation', author: 'Charles W. Misner, Kip S. Thorne, John Archibald Wheeler' },
      { title: 'Introduction to Elementary Particles', author: 'David Griffiths' },
      { title: 'Classical Electrodynamics', author: 'John David Jackson' },
      { title: 'Modern Quantum Mechanics', author: 'J. J. Sakurai, Jim Napolitano' },
      { title: 'Quantum Field Theory in a Nutshell', author: 'A. Zee' },
      { title: 'Spacetime and Geometry', author: 'Sean Carroll' },
      { title: 'A Brief History of Time', author: 'Stephen Hawking' },
      { title: 'The Road to Reality', author: 'Roger Penrose' },
    ].map((book) => ({
      ...book,
      amazonUrl: toAmazonSearch(book.title, book.author),
      goodreadsUrl: toGoodreadsSearch(book.title, book.author),
    })),
  },
  {
    id: 'ancient-indian-history',
    title: 'Ancient Indian History',
    description: 'Civilization, polity, archaeology, and cultural evolution across early India.',
    icon: 'landmark',
    books: [
      { title: 'The Wonder That Was India', author: 'A. L. Basham' },
      { title: 'History of Ancient and Early Medieval India', author: 'Upinder Singh' },
      { title: 'Ancient India', author: 'Romila Thapar' },
      { title: 'Early India: From the Origins to AD 1300', author: 'Romila Thapar' },
      { title: 'Ashoka and the Decline of the Mauryas', author: 'Romila Thapar' },
      { title: 'The Penguin History of Early India', author: 'Romila Thapar' },
      { title: 'India: A History', author: 'John Keay' },
      { title: 'India Before Europe', author: 'Cynthia Talbot, Catherine B. Asher' },
      { title: 'An Introduction to the Study of Indian History', author: 'D. D. Kosambi' },
    ].map((book) => ({
      ...book,
      amazonUrl: toAmazonSearch(book.title, book.author),
      goodreadsUrl: toGoodreadsSearch(book.title, book.author),
    })),
  },
  {
    id: 'no-personal-attachments',
    title: 'No Personal Attachments',
    description: 'Detachment, non-attachment, and inner freedom from grasping and ego.',
    icon: 'lotus',
    books: [
      { title: 'The Untethered Soul', author: 'Michael A. Singer' },
      { title: 'Letting Go: The Pathway of Surrender', author: 'David R. Hawkins' },
      { title: 'The Power of Now', author: 'Eckhart Tolle' },
      { title: 'A New Earth', author: 'Eckhart Tolle' },
      { title: 'Bhagavad Gita', author: 'Eknath Easwaran (translation)' },
      { title: 'The Dhammapada', author: 'Anonymous, translated editions' },
      { title: 'The Art of Happiness', author: 'Dalai Lama XIV, Howard C. Cutler' },
      { title: 'Zen Mind, Beginner’s Mind', author: 'Shunryu Suzuki' },
      { title: 'How to Love', author: 'Thich Nhat Hanh' },
    ].map((book) => ({
      ...book,
      amazonUrl: toAmazonSearch(book.title, book.author),
      goodreadsUrl: toGoodreadsSearch(book.title, book.author),
    })),
  },
];
