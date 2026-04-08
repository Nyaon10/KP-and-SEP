"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type AdminReview = {
  id: string;
  user_name: string;
  rating: number;
  comment: string;
  created_at: string;
  products: {
    name: string;
    category_slug: string;
  };
};

export default function AdminCommentsPage() {
  const [reviews, setReviews] = useState<AdminReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all reviews on load
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch('/api/admin/reviews');
        if (res.ok) {
          const data = await res.json();
          setReviews(data);
        }
      } catch (err) {
        console.error("Failed to load reviews:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, []);

  // Handle Deleting a Review
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this comment? This action is permanent.")) return;

    try {
      const res = await fetch(`/api/admin/reviews/${id}`, { method: 'DELETE' });
      
      if (res.ok) {
        // Remove from the screen instantly
        setReviews(reviews.filter(review => review.id !== id));
        alert("Review successfully removed.");
      } else {
        alert("Failed to delete review. Please check server logs.");
      }
    } catch (err) {
      alert("System connection error.");
    }
  };

  const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex gap-[2px] text-amber-500 text-sm">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "fill-current" : "text-stone-700"}>★</span>
      ))}
    </div>
  );

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* HEADER SECTION */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Community Feedback</h2>
          <p className="text-stone-400 text-sm">Monitor and moderate customer reviews across the store.</p>
        </div>
        
        <div className="bg-stone-900 border border-stone-800 rounded-lg px-4 py-2 flex items-center gap-3 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-[10px] text-stone-400 font-bold uppercase tracking-widest font-mono">Live Monitoring</span>
        </div>
      </div>

      {/* REVIEWS TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden min-h-[400px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1000px]">
              <thead className="sticky top-0 bg-stone-950 outline outline-1 outline-stone-800 shadow-md">
                <tr className="text-[10px] uppercase tracking-widest text-stone-500">
                  <th className="p-6 font-bold w-[15%] rounded-tl-2xl">Customer</th>
                  <th className="p-6 font-bold w-[20%]">Product Target</th>
                  <th className="p-6 font-bold w-[15%]">Rating</th>
                  <th className="p-6 font-bold w-[40%]">Comment Content</th>
                  <th className="p-6 font-bold w-[10%] rounded-tr-2xl text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/50 text-sm">
                {reviews.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-16 text-center text-stone-500 italic uppercase tracking-widest text-[10px]">No community feedback found.</td>
                  </tr>
                ) : reviews.map((review) => (
                  <tr key={review.id} className="hover:bg-stone-800/20 transition-colors">
                    
                    {/* CUSTOMER */}
                    <td className="p-6 align-top">
                      <div className="font-bold text-stone-200">{review.user_name}</div>
                      <div className="text-[10px] text-stone-500 font-mono mt-1">
                        {new Date(review.created_at).toLocaleDateString('id-ID')}
                      </div>
                    </td>

                    {/* PRODUCT */}
                    <td className="p-6 align-top">
                      <div className="text-amber-500 font-bold text-xs uppercase tracking-wider mb-1">
                        {review.products?.name || "Unknown Product"}
                      </div>
                      <div className="text-[9px] text-stone-500 uppercase tracking-widest border border-stone-700 bg-stone-950 px-2 py-0.5 rounded inline-block">
                        {review.products?.category_slug.replace(/-/g, ' ') || "N/A"}
                      </div>
                    </td>

                    {/* RATING */}
                    <td className="p-6 align-top">
                      <StarRating rating={review.rating} />
                      <div className="text-[10px] text-stone-500 mt-1 font-bold">
                        {review.rating} / 5 STARS
                      </div>
                    </td>

                    {/* COMMENT */}
                    <td className="p-6 align-top">
                      <p className="text-stone-300 leading-relaxed italic text-xs border-l-2 border-stone-700 pl-4 py-1">
                        "{review.comment}"
                      </p>
                    </td>

                    {/* ACTIONS */}
                    <td className="p-6 align-top text-right">
                      <button 
                        onClick={() => handleDelete(review.id)}
                        className="bg-red-950/30 border border-red-900/50 text-red-500 hover:bg-red-900 hover:text-white px-4 py-2 rounded text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95"
                      >
                        Delete
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      
    </div>
  );
}