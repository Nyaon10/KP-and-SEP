import Link from 'next/link';
import Image from 'next/image';
import QuickAdd from '../../components/QuickAdd';
import prisma from '../../lib/prisma'; 

interface Product {
  id: string;
  name: string;
  roast: string;
  price: number;
  discountPrice?: number;
  categorySlug: string;
  image: string;
}

const ITEMS_PER_PAGE = 6;

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const params = await searchParams;
  const currentCategory = params.category;
  const currentPage = Number(params.page) || 1;

  // 1. Build the database query filter (REMOVED 'status: ACTIVE')
  const whereClause = currentCategory ? { category_slug: currentCategory } : {};

  // 2. Ask the database exactly how many products exist for pagination
  const totalItems = await prisma.products.count({
    where: whereClause
  });

  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  // 3. Fetch ONLY the 6 products needed for this specific page
  const dbProducts = await prisma.products.findMany({
    where: whereClause,
    skip: startIndex,
    take: ITEMS_PER_PAGE,
    orderBy: { created_at: 'desc' } 
  });

  // 4. Map the database results using your ACTUAL column names
  const now = new Date();

  const displayedProducts: Product[] = dbProducts.map((p: any) => {
    let activeDiscount = undefined;

    // Check if the product is marked for sale and has a price
    if (p.is_on_sale && p.discount_price) {
      let isDiscountActive = true;

      // Check if the start date is in the future
      if (p.discount_start) {
        const startDate = new Date(p.discount_start);
        if (now < startDate) isDiscountActive = false;
      }

      // Check if the end date has passed (setting it to the very end of the day)
      if (p.discount_end) {
        const endDate = new Date(p.discount_end);
        endDate.setHours(23, 59, 59, 999); 
        if (now > endDate) isDiscountActive = false;
      }

      // Only apply the discount if the current date is within the window
      if (isDiscountActive) {
        activeDiscount = Number(p.discount_price);
      }
    }

    return {
      id: p.id,
      name: p.name,
      roast: p.roast_profile || "Signature Roast", 
      price: Number(p.base_price || 0),
      categorySlug: p.category_slug || "uncategorized",
      image: p.main_image || "/images/CB01-1.jpeg", 
      discountPrice: activeDiscount // Uses our new date-checked variable!
    };
  });

  // 5. Generate a beautiful dynamic title
  const pageTitle = currentCategory 
    ? currentCategory.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
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
              Showing {totalItems === 0 ? 0 : startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems} roasts
            </p>
          </div>
        </div>

        {totalItems === 0 ? (
           <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-12 text-center">
             <p className="text-stone-500 font-medium">No products found in this category.</p>
             <Link href="/shop" className="text-amber-700 font-bold mt-4 inline-block hover:underline">
               Clear Filters
             </Link>
           </div>
        ) : (
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
                    <h2 className="text-xl font-bold text-stone-900 mb-1 group-hover:text-amber-800 transition-colors line-clamp-2">
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
        )}

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