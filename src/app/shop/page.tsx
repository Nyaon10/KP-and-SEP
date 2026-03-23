import Link from 'next/link';
import Image from 'next/image';
import QuickAdd from '../../components/QuickAdd';

interface Product {
  id: string;
  name: string;
  roast: string;
  price: number;
  discountPrice?: number;
  categorySlug: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { 
    id: 'b1', 
    name: "Nothing But Love", 
    roast: "Kerinci Natural Anaerob", 
    price: 225000, 
    discountPrice: 185000, 
    categorySlug: "exotic-arabica-blends-series", 
    image: "/images/SAB01-1.jpeg" 
  },
  { id: 'b2', name: "My Sweet Miracle", roast: "Kerinci Natural Anaerob", price: 225000, categorySlug: "exotic-arabica-blends-series", image: "/images/SAB02-1.jpeg" },
  { id: 's1', name: "When It's Love", roast: "Karo Natural Anaerob", price: 235000, categorySlug: "exotic-single-origin-series", image: "/images/ESO01-1.jpeg" },
  { id: 's2', name: "Berry Fields Forever", roast: "Kerinci Natural Anaerob", price: 235000, categorySlug: "exotic-single-origin-series", image: "/images/ESO02-1.jpeg" },
  { id: 'c1', name: "G'Day Mate", roast: "Arabica Classic", price: 100000, categorySlug: "commercial-bean-series", image: "/images/CB01-1.jpeg"},
  { id: 'c2', name: "Here Comes The Vibes", roast: "60 : 40 Houseblend", price: 90000, categorySlug: "commercial-bean-series", image: "/images/CB02-1.jpeg" },
];

const CATEGORY_TITLES: Record<string, string> = {
  "exotic-arabica-blends-series": "Exotic Arabica Blends",
  "exotic-single-origin-series": "Exotic Single Origin",
  "commercial-bean-series": "Commercial Beans",
};

const ITEMS_PER_PAGE = 6;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const currentCategory = params.category;
  const currentPage = Number(params.page) || 1;

  const filteredProducts = currentCategory 
    ? PRODUCTS.filter(product => product.categorySlug === currentCategory)
    : PRODUCTS;

  const totalItems = filteredProducts.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(startIndex, endIndex);

  const pageTitle = currentCategory && CATEGORY_TITLES[currentCategory] 
    ? CATEGORY_TITLES[currentCategory] 
    : "All Products";

  const createPageURL = (pageNumber: number) => {
    const newParams = new URLSearchParams();
    if (currentCategory) newParams.set('category', currentCategory);
    newParams.set('page', pageNumber.toString());
    return `/shop?${newParams.toString()}`;
  };

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 border-b border-stone-200 pb-6 flex justify-between items-end">
          <div>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight">
              {pageTitle}
            </h1>
            <p className="text-stone-500 mt-2 font-medium">
              Showing {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} roasts
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              
              <Link href={`/shop/${product.id}`} className="flex-grow flex flex-col">
                <div className="h-64 bg-stone-100 flex items-center justify-center overflow-hidden relative w-full">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {product.discountPrice && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded uppercase z-10 shadow-sm">
                      {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow bg-white">
                  <div className="text-[10px] font-bold text-amber-700 uppercase tracking-widest mb-2">
                    {product.categorySlug.replace(/-/g, ' ')}
                  </div>
                  <h2 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-amber-800 transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-stone-500 text-sm italic">{product.roast}</p>
                </div>
              </Link>

              <div className="p-6 pt-0 mt-auto relative z-20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex flex-col">
                    {product.discountPrice ? (
                      <>
                        {/* CHANGED TO text-red-600 */}
                        <span className="text-xs font-bold text-red-600 line-through">
                          <span className="text-stone-500">
                            Rp {product.price.toLocaleString('id-ID')}
                          </span>
                        </span>
                        <span className="font-mono text-lg font-bold text-stone-900">
                          Rp {product.discountPrice.toLocaleString('id-ID')}
                        </span>
                      </>
                    ) : (
                      <span className="font-mono text-lg font-bold text-stone-900">
                        Rp {product.price.toLocaleString('id-ID')}
                      </span>
                    )}
                  </div>
                </div>
                
                <QuickAdd product={product} />
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {currentPage > 1 ? (
              <Link href={createPageURL(currentPage - 1)} className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors font-medium text-stone-700">
                Previous
              </Link>
            ) : (
              <span className="px-4 py-2 border border-stone-200 rounded-lg text-stone-400 cursor-not-allowed font-medium">
                Previous
              </span>
            )}

            {Array.from({ length: totalPages }).map((_, i) => {
              const pageNumber = i + 1;
              const isActive = pageNumber === currentPage;
              return (
                <Link 
                  key={pageNumber} 
                  href={createPageURL(pageNumber)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg font-semibold transition-colors ${
                    isActive 
                      ? "bg-amber-700 text-white border-amber-700" 
                      : "border border-stone-300 text-stone-700 hover:bg-stone-100"
                  }`}
                >
                  {pageNumber}
                </Link>
              );
            })}

            {currentPage < totalPages ? (
              <Link href={createPageURL(currentPage + 1)} className="px-4 py-2 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors font-medium text-stone-700">
                Next
              </Link>
            ) : (
              <span className="px-4 py-2 border border-stone-200 rounded-lg text-stone-400 cursor-not-allowed font-medium">
                Next
              </span>
            )}
          </div>
        )}
      </div>
    </main>
  );
}