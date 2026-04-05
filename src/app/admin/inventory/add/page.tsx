"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AddProductPage() {
  const router = useRouter();
  
  // State for database-fetched categories
  const [dbCategories, setDbCategories] = useState<{slug: string, name: string}[]>([]);
  
  // State for basic text data
  const [formData, setFormData] = useState({
    name: '',
    categorySlug: '', 
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

  // State for image paths (to be saved in DB)
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [gallery, setGallery] = useState<string[]>([]);

  // NEW: State for instant visual previews (Blob URLs)
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);

  // 1. FETCH REAL CATEGORIES FROM DATABASE
  useEffect(() => {
    const fetchCats = async () => {
      try {
        const res = await fetch('/api/admin/products'); 
        if (res.ok) {
          const data = await res.json();
          setDbCategories(data.categories);
          if (data.categories.length > 0) {
            setFormData(prev => ({ ...prev, categorySlug: data.categories[0].slug }));
          }
        }
      } catch (err) {
        console.error("Failed to fetch categories", err);
      }
    };
    fetchCats();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // 1. Show preview immediately for the user
    setMainImagePreview(URL.createObjectURL(file));

    // 2. Physically upload the file to the server
    const data = new FormData();
    data.set('file', file);

    const res = await fetch('/api/admin/upload', { method: 'POST', body: data });
    const result = await res.json();
    
    if (result.success) {
      setMainImage(result.url); // Saves "/images/filename.jpg" for the DB
    }
  };

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = 4 - gallery.length;
    const allowedFiles = files.slice(0, remainingSlots);

    for (const file of allowedFiles) {
      // 1. Show preview immediately
      const previewUrl = URL.createObjectURL(file);
      setGalleryPreviews(prev => [...prev, previewUrl]);

      // 2. Upload to server
      const data = new FormData();
      data.set('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body: data });
      const result = await res.json();
      
      if (result.success) {
        setGallery(prev => [...prev, result.url]); // Saves paths for DB
      }
    }
  };

  // Function to remove gallery images (Missing in previous snippet)
  const removeGalleryImage = (indexToRemove: number) => {
    setGallery(prev => prev.filter((_, index) => index !== indexToRemove));
    setGalleryPreviews(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  // 2. SUBMIT TO BACKEND API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!mainImage) {
      alert("Please upload a Main Image.");
      return;
    }

    const finalProductData = {
      ...formData,
      image: mainImage,
      gallery: gallery
    };

    try {
      const response = await fetch('/api/admin/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalProductData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.details || "Failed to create product");
      }

      alert("New product created successfully!");
      router.push('/admin/inventory');
      router.refresh(); 
    } catch (err: any) {
      console.error(err);
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div className="animate-in fade-in duration-500 max-w-4xl mx-auto pb-12 text-stone-300">
      
      {/* HEADER & BACK BUTTON */}
      <div className="flex items-center gap-4 mb-8">
        <Link href="/admin/inventory" className="p-2 bg-stone-900 border border-stone-700 rounded-lg text-stone-400 hover:text-white hover:bg-stone-800 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path fillRule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clipRule="evenodd" />
          </svg>
        </Link>
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white">Create New Product</h2>
          <p className="text-stone-400 text-sm">Add a new coffee bean variant to the database.</p>
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
                {dbCategories.map(cat => <option key={cat.slug} value={cat.slug}>{cat.name}</option>)}
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Product Description <span className="text-red-500">*</span></label>
            <textarea required name="description" value={formData.description} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-4 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[120px] text-sm resize-none leading-relaxed shadow-inner" placeholder="Describe the coffee..." />
          </div>
          
          <div>
            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Tasting Notes</label>
            <input type="text" name="tastingNotes" value={formData.tastingNotes} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono shadow-inner" placeholder="e.g. Dark Chocolate, Caramel" />
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

        {/* CARD 3: Roasting Profile */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">Roaster's Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Origin</label>
              <input type="text" name="origin" value={formData.origin} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm shadow-inner" placeholder="e.g. Toraja" />
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Acidity (1-5)</label>
              <select name="acidityLevel" value={formData.acidityLevel} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner">
                {[1, 2, 3, 4, 5].map(num => <option key={num} value={num}>{num}/5</option>)}
              </select>
            </div>
            <div>
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Roast Level (1-3)</label>
              <select name="roastLevel" value={formData.roastLevel} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner">
                {[1, 2, 3].map(num => <option key={num} value={num}>{num}/3</option>)}
              </select>
            </div>
          </div>
          <textarea name="roastLog" value={formData.roastLog} onChange={handleChange} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-4 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[120px] text-sm font-mono shadow-inner" placeholder="Initial Roasting Log..." />
        </div>

        {/* CARD 4: Media Assets */}
        <div className="bg-stone-900 rounded-2xl border border-stone-800 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-stone-200 uppercase tracking-widest mb-6 border-b border-stone-800 pb-3">Media Assets</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="col-span-1">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-3">Primary Image <span className="text-red-500">*</span></label>
              <label className="block relative aspect-square bg-stone-950 border-2 border-dashed border-stone-700 rounded-xl overflow-hidden cursor-pointer hover:border-amber-600 transition-colors group">
                <input type="file" accept="image/*" onChange={handleMainImageUpload} className="hidden" />
                {mainImagePreview ? (
                  <img src={mainImagePreview} alt="Main Preview" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-stone-500 group-hover:text-amber-500 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest">Upload Main</span>
                  </div>
                )}
              </label>
            </div>

            <div className="col-span-2">
              <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-3">Gallery (Max 4)</label>
              <div className="grid grid-cols-4 gap-4">
                {galleryPreviews.map((path, index) => (
                  <div key={index} className="relative aspect-square bg-stone-950 border border-stone-700 rounded-xl overflow-hidden group">
                    <img src={path} alt="Gallery" className="w-full h-full object-cover" />
                    <button type="button" onClick={() => removeGalleryImage(index)} className="absolute top-1 right-1 bg-red-600 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center shadow-lg active:scale-90">✖</button>
                  </div>
                ))}
                {Array.from({ length: 4 - galleryPreviews.length }).map((_, i) => (
                  <label key={i} className="relative aspect-square bg-stone-950 border-2 border-dashed border-stone-700 rounded-xl cursor-pointer flex items-center justify-center hover:border-amber-600 transition-colors">
                    <input type="file" accept="image/*" multiple onChange={handleGalleryUpload} className="hidden" />
                    <span className="text-stone-600 text-xl">+</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-amber-700 hover:bg-amber-600 text-white px-10 py-4 rounded-xl text-xs font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95">
            Save & Publish Product
          </button>
        </div>
      </form>
    </div>
  );
}