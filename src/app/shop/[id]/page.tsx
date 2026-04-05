"use client";

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '../../../context/CartContext'; 
import { useFavourites } from '../../../context/FavouritesContext';

const BeanIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 rotate-12">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.0003 3.72546C8.96174 1.81795 4.96492 2.43987 2.71799 5.26457C0.424671 8.14768 0.459975 12.1836 2.86208 15.1676C4.5879 17.3115 7.43508 18.7503 10.3369 19.4488C11.069 19.625 11.8404 19.6276 12.5671 19.4382C16.5216 18.4073 19.9718 16.0655 21.8173 12.3486C23.6512 8.6553 23.3239 4.23034 21.1477 0.886719C18.1172 3.16194 14.8308 4.46196 11.4635 4.4927C11.7287 3.8035 11.9701 3.5392 12.0003 3.72546ZM12.0003 3.72546C13.4271 -0.521795 18.3134 -0.650173 21.1477 0.886719M12.5671 19.4382C13.292 21.2296 13.7483 23.1217 14.1888 25.0003M2.86208 15.1676C5.44671 17.5743 9.38107 17.8413 12.5671 19.4382M2.86208 15.1676C1.70135 18.4935 1.52241 22.3952 1.55593 25.0003" />
  </svg>
);

const BeanRating = ({ level, maxLevel }: { level: number, maxLevel: number }) => (
  <div className="flex gap-2 text-amber-800">
    {[...Array(maxLevel)].map((_, i) => (
      <BeanIcon key={i} filled={i < level} />
    ))}
  </div>
);

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1 text-amber-500 text-lg">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < rating ? "fill-current" : "text-stone-300"}>★</span>
    ))}
  </div>
);

const HeartIcon = ({ filled }: { filled: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill={filled ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>
);

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params.id as string;
  
  const { addToCart } = useCart();
  
  // 1. Get the array of favourite IDs and the toggle function from Context
  const { favourites, toggleFavourite } = useFavourites();
  // 2. Check if THIS specific product's ID is inside the favourites array
  const isFavorite = favourites.includes(productId);

  const [product, setProduct] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [activeImage, setActiveImage] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [reviews, setReviews] = useState<any[]>([]);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [currentUserName, setCurrentUserName] = useState("Anonymous User");

  const selectedWeight = '200g';

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/storefront/products/${productId}`);
        if (res.ok) {
          const dbData = await res.json();
          
          const now = new Date();
          let activeDiscount = undefined;

          if (dbData.is_on_sale && dbData.discount_price) {
            let isDiscountActive = true;

            if (dbData.discount_start) {
              const startDate = new Date(dbData.discount_start);
              if (now < startDate) isDiscountActive = false;
            }

            if (dbData.discount_end) {
              const endDate = new Date(dbData.discount_end);
              endDate.setHours(23, 59, 59, 999);
              if (now > endDate) isDiscountActive = false;
            }

            if (isDiscountActive) {
              activeDiscount = Number(dbData.discount_price);
            }
          }

          const formattedProduct = {
            id: dbData.id,
            name: dbData.name,
            roast: dbData.roast_profile || "Signature Roast",
            acidityLevel: dbData.acidity_level || 3,
            roastLevel: dbData.roast_level || 3,
            price: Number(dbData.base_price || 0),
            discountPrice: activeDiscount,
            categorySlug: dbData.category_slug || "uncategorized",
            image: dbData.main_image || "/images/CB01-1.jpeg",
            gallery: [dbData.main_image || "/images/CB01-1.jpeg"], 
            origin: dbData.origin || "Signature Blend",
            tastingNotes: dbData.tasting_notes ? dbData.tasting_notes.split(',').map((n: string) => n.trim()) : [],
            description: dbData.description || "A masterfully roasted coffee blend.",
          };

          setProduct(formattedProduct);
          setActiveImage(formattedProduct.image);
        }
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  useEffect(() => {
    const savedReviews = localStorage.getItem(`wanst-reviews-${productId}`);
    if (savedReviews) setReviews(JSON.parse(savedReviews));

    const storedUserStr = localStorage.getItem('wanst_mock_user');
    if (storedUserStr) {
      const parsedUser = JSON.parse(storedUserStr);
      if (parsedUser.name) setCurrentUserName(parsedUser.name);
    }
  }, [productId]);

  useEffect(() => {
    if (reviews.length > 0) localStorage.setItem(`wanst-reviews-${productId}`, JSON.stringify(reviews));
  }, [reviews, productId]);

  if (isLoading) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50 animate-pulse text-stone-400 uppercase tracking-widest font-bold text-sm">Loading Roast Details...</div>;
  }

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center bg-stone-50"><div className="text-center"><h2 className="text-2xl font-bold text-stone-900">Product not found</h2><Link href="/shop" className="text-amber-700 hover:underline mt-4 block">Back to Shop</Link></div></div>;
  }

  const activePrice = product.discountPrice || product.price;
  const totalPrice = activePrice * quantity;
  const averageRating = reviews.length > 0 ? Math.round(reviews.reduce((acc, rev) => acc + rev.rating, 0) / reviews.length) : 0;

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;
    const today = new Date().toLocaleDateString('en-CA');
    const newReviewObj = { id: Date.now(), user: currentUserName, rating: newReviewRating, comment: newReviewComment, date: today };
    setReviews([newReviewObj, ...reviews]);
    setIsReviewFormOpen(false);
    setNewReviewComment("");
    setNewReviewRating(5);
  };

  return (
    <main className="min-h-screen bg-stone-50 py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <nav className="mb-8 text-sm font-medium text-stone-500 flex items-center gap-2">
          <Link href="/" className="hover:text-amber-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-amber-700 transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-stone-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-20">
          <div className="flex flex-col gap-6">
            <div className="aspect-square bg-white rounded-2xl border border-stone-200 relative overflow-hidden shadow-sm">
              {activeImage && (
                <Image src={activeImage} alt={product.name} fill className="object-cover transition-all duration-500" priority />
              )}
              {product.discountPrice && (
                <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1.5 rounded uppercase z-10 shadow-sm">
                  {Math.round((1 - product.discountPrice / product.price) * 100)}% OFF
                </div>
              )}
            </div>
            <div className="grid grid-cols-5 gap-3">
              {(product.gallery || [product.image]).map((img: string, index: number) => (
                <button key={index} onClick={() => setActiveImage(img)} className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${activeImage === img ? 'border-amber-700 ring-2 ring-amber-700/20' : 'border-stone-200 hover:border-stone-400'}`}>
                  {img && <Image src={img} alt={`${product.name} view ${index + 1}`} fill className="object-cover" />}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex justify-between items-start mb-2">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-widest">{product.categorySlug.replace(/-/g, ' ')}</div>
              {reviews.length > 0 && <div className="flex items-center gap-2"><StarRating rating={averageRating} /><span className="text-xs font-bold text-stone-400">({reviews.length})</span></div>}
            </div>
            <h1 className="font-oswald text-4xl md:text-5xl font-bold text-stone-900 uppercase tracking-tight mb-2">{product.name}</h1>
            
            <div className="mb-6">
              {product.discountPrice ? (
                <div className="flex items-center gap-4">
                  <span className="text-3xl text-stone-900 font-mono font-bold">
                    Rp {totalPrice.toLocaleString('id-ID')}
                  </span>
                  <span className="text-lg font-bold text-red-600 line-through">
                    <span className="text-stone-500">
                      Rp {(product.price * quantity).toLocaleString('id-ID')}
                    </span>
                  </span>
                </div>
              ) : (
                <span className="text-3xl text-stone-900 font-mono font-bold">
                  Rp {totalPrice.toLocaleString('id-ID')}
                </span>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {product.tastingNotes?.map((note: string) => (
                <span key={note} className="px-3 py-1 bg-amber-50 text-amber-900 text-xs font-bold uppercase tracking-wider rounded-full border border-amber-100">{note}</span>
              ))}
            </div>
            
            <p className="text-stone-600 leading-relaxed mb-4">{product.description}</p>
            <p className="text-stone-500 leading-relaxed mb-8 italic">Experience the distinct flavor of {product.roast} roast. Sourced directly from {product.origin}.</p>
            <hr className="border-stone-200 mb-8" />

            <div className="grid grid-cols-2 gap-x-4 gap-y-8 mb-8">
              <div><p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-2">Origin</p><p className="text-stone-900 font-medium">{product.origin}</p></div>
              <div><p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-2">Roast Profile</p><p className="text-stone-900 font-medium">{product.roast}</p></div>
              <div><p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-2">Acidity</p><BeanRating level={product.acidityLevel} maxLevel={5} /></div>
              <div><p className="text-xs text-stone-500 font-bold uppercase tracking-wider mb-2">Roast Level</p><BeanRating level={product.roastLevel} maxLevel={3} /></div>
            </div>

            <div className="mb-8"><p className="text-sm font-bold text-stone-900 mb-3">Weight</p><div className="inline-flex px-6 py-2 rounded-lg text-sm font-bold border border-amber-700 bg-amber-50 text-amber-900">{selectedWeight}</div></div>

            <div className="flex gap-4 mb-8">
              <div className="flex items-center bg-white border border-stone-300 rounded-lg">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 py-3 text-stone-500 hover:text-stone-900 transition-colors">-</button>
                <span className="w-8 text-center font-semibold text-stone-900">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="px-4 py-3 text-stone-500 hover:text-stone-900 transition-colors">+</button>
              </div>

              <button 
                onClick={() => {
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: activePrice,
                    image: product.image,
                    quantity: quantity,
                    roast: product.roast,
                    weight: selectedWeight
                  });
                  alert(`Successfully added ${quantity}x ${product.name} to your cart!`);
                }}
                className="flex-1 bg-stone-900 text-white font-semibold rounded-lg hover:bg-amber-800 transition-colors py-4 px-6 shadow-sm active:scale-[0.98]"
              >
                Add to Cart
              </button>

              {/* 3. Wire the button up using the isFavorite boolean we defined at the top! */}
              <button 
                onClick={() => toggleFavourite(product.id)} 
                className={`p-4 rounded-lg border flex items-center justify-center transition-all duration-200 active:scale-[0.90] ${isFavorite ? 'bg-rose-50 border-rose-200 text-rose-500' : 'bg-white border-stone-300 text-stone-400 hover:text-rose-500 hover:border-rose-200 hover:bg-rose-50'}`} 
                aria-label="Toggle Favorite" 
                title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
              >
                <HeartIcon filled={isFavorite} />
              </button>
            </div>
          </div>
        </div>

        <section className="pt-16 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <h2 className="font-oswald text-3xl font-bold text-stone-900 uppercase mb-2">Community Feedback</h2>
              <div className="flex items-center gap-4"><StarRating rating={averageRating} /><span className="text-sm font-bold text-stone-500 uppercase tracking-widest">{reviews.length} Review{reviews.length !== 1 ? 's' : ''}</span></div>
            </div>
            {!isReviewFormOpen && <button onClick={() => setIsReviewFormOpen(true)} className="px-8 py-3 bg-white border-2 border-stone-900 text-stone-900 font-bold text-xs uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all">Write A Review</button>}
          </div>

          {isReviewFormOpen && (
            <form onSubmit={handleSubmitReview} className="bg-stone-100 p-8 rounded-2xl mb-8 border border-stone-200 animate-in fade-in duration-300">
              <div className="flex justify-between items-start mb-6"><h3 className="font-oswald text-xl font-bold text-stone-900 uppercase">Leave a Review</h3><span className="text-sm text-stone-500 font-medium">Posting as <span className="text-stone-900 font-bold">{currentUserName}</span></span></div>
              <div className="mb-6"><label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Your Rating</label><div className="flex gap-2 text-3xl">{[1, 2, 3, 4, 5].map((star) => (<button key={star} type="button" onClick={() => setNewReviewRating(star)} className={`transition-all hover:scale-110 ${star <= newReviewRating ? "text-amber-500" : "text-stone-300"}`}>★</button>))}</div></div>
              <div className="mb-6"><label className="block text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">Review</label><textarea required value={newReviewComment} onChange={(e) => setNewReviewComment(e.target.value)} className="w-full p-4 rounded-lg border border-stone-300 bg-white text-stone-900 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 min-h-[120px]" placeholder="Tell us what you thought of this roast..." /></div>
              <div className="flex gap-4 justify-end"><button type="button" onClick={() => setIsReviewFormOpen(false)} className="px-6 py-3 font-bold text-stone-500 text-xs uppercase tracking-widest hover:text-stone-900 transition-colors">Cancel</button><button type="submit" className="px-8 py-3 bg-stone-900 text-white font-bold text-xs uppercase tracking-widest hover:bg-amber-800 transition-colors rounded-lg shadow-sm">Post Review</button></div>
            </form>
          )}

          <div className="grid grid-cols-1 gap-6">
            {reviews.length > 0 ? (reviews.map((review) => (<div key={review.id} className="bg-white border border-stone-200 p-8 rounded-2xl shadow-sm"><div className="flex justify-between items-start mb-4"><div><h4 className="font-bold text-stone-900 text-lg">{review.user}</h4><p className="text-xs font-mono text-stone-400 uppercase">{review.date}</p></div><StarRating rating={review.rating} /></div><p className="text-stone-600 leading-relaxed italic">"{review.comment}"</p></div>))) : (<div className="bg-stone-100/50 border-2 border-dashed border-stone-200 p-12 text-center rounded-2xl"><p className="text-stone-500 font-medium italic">No reviews yet. Be the first to experience this roast!</p></div>)}
          </div>
        </section>
      </div>
    </main>
  );
}