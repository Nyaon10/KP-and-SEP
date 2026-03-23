"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Mockup categories for the dropdown
const CATEGORIES = [
  "commercial-bean-series",
  "exotic-single-origin-series",
  "exotic-arabica-blends-series"
];

export default function AddProductPage() {
  const router = useRouter();
  
  // State for basic text data
  const [formData, setFormData] = useState({
    name: '',
    categorySlug: CATEGORIES[0],
    origin: '',
    description: '',
    tastingNotes: '',
    roast: '',
    acidityLevel: 3,
    roastLevel: 2,
    price: '',
    stock: '',
    roastLog: ''
  });

  // NEW: State for file uploads (Preview URLs)
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- IMAGE UPLOAD HANDLERS (Simulated for Frontend Phase) ---
  const handleMainImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a temporary local URL to preview the image immediately
      const previewUrl = URL.createObjectURL(file);
      setMainImage(previewUrl);
    }
  };

  const handleGalleryUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    // Calculate how many slots are left (max 4)
    const remainingSlots = 4 - gallery.length;
    const allowedFiles = files.slice(0, remainingSlots);
    
    if (files.length > remainingSlots) {
      alert(`You can only upload a maximum of 4 gallery images. ${allowedFiles.length} images added.`);
    }

    const newPreviews = allowedFiles.map(file => URL.createObjectURL(file));
    setGallery(prev => [...prev, ...newPreviews]);
  };

  const removeGalleryImage = (indexToRemove: number) => {
    setGallery(gallery.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mainImage) {
      alert("Please upload a Main Image for the product.");
      return;
    }

    // Combine text data and image data for submission
    const finalProductData = {
      ...formData,
      image: mainImage,
      gallery: gallery
    };
    
    // In production, this uses FormData to send files to the backend
    console.log("Submitting new product:", finalProductData);
    
    alert("New product created successfully! (Simulated)");
    router.push('/admin/inventory');
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto pb-12">
      
      {/* HEADER & BACK BUTTON */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/inventory" className="p-2 bg-stone-900 border border-stone-700 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
        </Link>
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white">Create New Product</h2>
          <p className="text-stone-400 text-sm">Add a new coffee bean variant to the catalog.</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* CARD 1: Basic Information */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">Basic Information</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Product Name <span className="text-red-500">*</span></label>
              <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm shadow-inner" placeholder="e.g. Morning Sunshine" />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Category Assignment <span className="text-red-500">*</span></label>
              <select name="categorySlug" value={formData.categorySlug} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-amber-500 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono uppercase tracking-widest shadow-inner cursor-pointer">
                {CATEGORIES.map(cat => <option key={cat} value={cat} className="text-stone-300">{cat.replace(/-/g, ' ')}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Product Description <span className="text-red-500">*</span></label>
            <textarea required name="description" value={formData.description} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-4 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[120px] text-sm resize-none leading-relaxed shadow-inner" placeholder="Describe the coffee..." />
          </div>
          
          <div>
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Tasting Notes (Comma Separated)</label>
            <input type="text" name="tastingNotes" value={formData.tastingNotes} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono shadow-inner" placeholder="e.g. Dark Chocolate, Caramel, Nutty" />
          </div>
        </div>

        {/* CARD 2: Pricing & Stock */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">Pricing & Inventory</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Base Price (Rp) <span className="text-red-500">*</span></label>
              <input required type="number" min="0" name="price" value={formData.price} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner" placeholder="100000" />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Initial Physical Stock (Bags)</label>
              <input type="number" min="0" name="stock" value={formData.stock} onChange={handleChange} disabled={!formData.categorySlug.includes("commercial")} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner disabled:opacity-50 disabled:bg-stone-900/50 disabled:cursor-not-allowed" placeholder={formData.categorySlug.includes("commercial") ? "0" : "Locked (Exotic Bean)"} />
            </div>
          </div>
        </div>

        {/* CARD 3: Roasting Profile & Journal */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">Roaster's Specifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="md:col-span-1">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Origin</label>
              <input type="text" name="origin" value={formData.origin} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm shadow-inner" placeholder="e.g. Toraja, Sumatra" />
            </div>
            <div className="md:col-span-1">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Acidity (1-5)</label>
              <select name="acidityLevel" value={formData.acidityLevel} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner cursor-pointer">
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}/5</option>)}
              </select>
            </div>
            <div className="md:col-span-1">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Roast Level (1-3)</label>
              <select name="roastLevel" value={formData.roastLevel} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner cursor-pointer">
                {[1, 2, 3].map(num => <option key={num} value={num}>{num}/3</option>)}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Roast Profile Name</label>
            <input type="text" name="roast" value={formData.roast} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm shadow-inner" placeholder="e.g. Natural Anaerobic" />
          </div>

          <div>
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Initial Roasting Log Entry</label>
            <textarea name="roastLog" value={formData.roastLog} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-4 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[120px] text-sm font-mono resize-none leading-relaxed shadow-inner" placeholder="Batch details, temperature notes, environmental factors..." />
          </div>
        </div>

        {/* CARD 4: Media Uploads (The New UI) */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <div className="flex justify-between items-end mb-6 border-b border-stone-800 pb-3">
            <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest">Media Assets</h3>
            <span className="text-[10px] font-mono text-stone-500">Formats: JPG, PNG, WEBP</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Image Uploader */}
            <div className="col-span-1">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-3">Primary Display Image <span className="text-red-500">*</span></label>
              
              <label className="block relative aspect-square bg-stone-950 border-2 border-dashed border-stone-700 rounded-xl overflow-hidden cursor-pointer hover:border-amber-600 transition-colors group">
                <input type="file" accept="image/*" onChange={handleMainImageUpload} className="hidden" />
                
                {mainImage ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={mainImage} alt="Main Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-white text-xs font-bold uppercase tracking-widest">Change Photo</span>
                    </div>
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 group-hover:text-amber-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 mb-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <span className="text-xs font-bold uppercase tracking-widest">Upload Main</span>
                  </div>
                )}
              </label>
            </div>

            {/* Sub/Gallery Images Uploader */}
            <div className="col-span-1 lg:col-span-2">
              <div className="flex justify-between items-end mb-3">
                <label className="block text-[10px] text-stone-500 uppercase tracking-widest">Gallery Images (Max 4)</label>
                <span className="text-[10px] font-bold text-amber-600">{gallery.length} / 4 Uploaded</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {/* Render existing gallery previews */}
                {gallery.map((imgUrl, index) => (
                  <div key={index} className="relative aspect-square bg-stone-950 border border-stone-700 rounded-xl overflow-hidden group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgUrl} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
                    <button 
                      type="button" 
                      onClick={() => removeGalleryImage(index)}
                      className="absolute top-2 right-2 bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md hover:bg-red-500"
                      title="Remove Image"
                    >
                      ✖
                    </button>
                  </div>
                ))}

                {/* Render empty upload slots */}
                {Array.from({ length: 4 - gallery.length }).map((_, i) => (
                  <label key={`empty-${i}`} className="relative aspect-square bg-stone-950 border-2 border-dashed border-stone-700 rounded-xl overflow-hidden cursor-pointer hover:border-amber-600 transition-colors group flex flex-col items-center justify-center">
                    <input type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="hidden" />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-stone-600 group-hover:text-amber-500 transition-colors">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className="flex justify-end pt-6">
          <button type="submit" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 flex items-center gap-2">
            Save & Publish Product
          </button>
        </div>

      </form>
    </div>
  );
}