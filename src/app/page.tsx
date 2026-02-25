import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-stone-900 text-stone-50">
        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Freshly Roasted, <br/> Delivered to You.</h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Experience the finest single-origin beans sourced directly from farmers in Sumatra, Ethiopia, and Colombia.
          </p>
          <Link 
            href="/shop" 
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold transition-all"
          >
            Explore the Collection
          </Link>
        </div>
      </section>

      {/* Featured Categories/Benefits */}
      <section className="py-20 px-8 bg-stone-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl mb-4 text-amber-800">🌱</div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Ethically Sourced</h3>
            <p className="text-stone-600">We ensure fair pay and sustainable practices for every farmer we partner with.</p>
          </div>
          <div>
            <div className="text-4xl mb-4 text-amber-800">🔥</div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Small Batch Roasts</h3>
            <p className="text-stone-600">Roasted daily in our local workshop to maintain peak flavor and aroma.</p>
          </div>
          <div>
            <div className="text-4xl mb-4 text-amber-800">🚚</div>
            <h3 className="text-xl font-bold mb-2 text-stone-800">Fast Shipping</h3>
            <p className="text-stone-600">Delivered within 48 hours of roasting so you never drink stale coffee.</p>
          </div>
        </div>
      </section>
    </main>
  );
}