"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

type Product = {
  id: string;
  name: string;
  categorySlug: string;
  origin: string;
  roast: string;
  acidityLevel: number;
  roastLevel: number;
  price: number;
  stock: number;
  image: string;
  gallery: string[];
  tastingNotes: string;
  description: string;
  roastLog: string;
};

export default function InventoryPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [modifiedRows, setModifiedRows] = useState<Set<string>>(new Set());

  // --- MODAL STATE ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'delete'>('add');
  const [modalInput, setModalInput] = useState('');
  const [modalError, setModalError] = useState('');

  // --- LIVE BACKEND FETCH ---
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('/api/admin/products');
        if (!response.ok) throw new Error(`Server Error: ${response.status}`);
        
        const data = await response.json();
        
        // Map the DB structure to your UI structure
        const formattedProducts = data.products.map((p: any) => ({
          id: p.id,
          name: p.name,
          categorySlug: p.category_slug,
          origin: p.origin || '',
          roast: p.roast_profile || '',
          acidityLevel: p.acidity_level || 1,
          roastLevel: p.roast_level || 1,
          price: p.base_price || 0,
          stock: p.stock || 0,
          image: p.main_image || '',
          tastingNotes: p.tasting_notes || '',
          description: p.description || '',
          roastLog: p.roast_log || '',
          // Map the related product_images table into a simple array of strings for the UI
          gallery: p.product_images.map((img: any) => img.image_url)
        }));

        setProducts(formattedProducts);
        setCategories(data.categories.map((c: any) => c.slug));
      } catch (err: any) {
        console.error("Error loading products:", err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInventory();
  }, []);

  const handleChange = (id: string, field: string, value: any) => {
    setProducts(products.map(p => p.id === id ? { ...p, [field]: value } : p));
    setModifiedRows(prev => new Set(prev).add(id));
  };

  const handleMainImageChange = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      handleChange(id, 'image', previewUrl);
    }
  };

  const handleGalleryAdd = (id: string, e: React.ChangeEvent<HTMLInputElement>, currentGallery: string[]) => {
    const files = Array.from(e.target.files || []);
    const remainingSlots = 4 - currentGallery.length;
    const allowedFiles = files.slice(0, remainingSlots);
    
    if (files.length > remainingSlots) {
      alert(`Max 4 images allowed. Only added ${allowedFiles.length} images.`);
    }

    const newPreviews = allowedFiles.map(file => URL.createObjectURL(file));
    handleChange(id, 'gallery', [...currentGallery, ...newPreviews]);
  };

  const handleGalleryRemove = (id: string, indexToRemove: number, currentGallery: string[]) => {
    const updatedGallery = currentGallery.filter((_, i) => i !== indexToRemove);
    handleChange(id, 'gallery', updatedGallery);
  };

  const handleDeleteProduct = async (id: string) => {
    if (confirm("Are you sure you want to permanently delete this product? This action cannot be undone.")) {
      try {
        const response = await fetch(`/api/admin/products/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Failed to delete product");
        }

        // 1. Remove from local state immediately
        setProducts(products.filter(p => p.id !== id));
        
        // 2. Clean up modified tracking if the row was being edited
        setModifiedRows(prev => {
          const next = new Set(prev);
          next.delete(id);
          return next;
        });

        setLastUpdated(new Date().toLocaleString('id-ID'));
        alert("Product deleted successfully.");
      } catch (err: any) {
        console.error("Delete Error:", err);
        alert(`Error: ${err.message}`);
      }
    }
  };

  const handleUpdateRow = async (id: string) => {
    // 1. Find the exact product data from our state
    const productToUpdate = products.find(p => p.id === id);
    if (!productToUpdate) return;

    try {
      // 2. Send the PUT request to our new API
      const response = await fetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productToUpdate)
      });

      if (!response.ok) throw new Error("Failed to save to database");

      // 3. Clear the modified state so the button turns back to "Saved"
      setModifiedRows(prev => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
      setLastUpdated(new Date().toLocaleString('id-ID'));
      
    } catch (error) {
      console.error(error);
      alert("Failed to save changes to the database.");
    }
  };

  // --- MODAL LOGIC ---
  const openModal = (mode: 'add' | 'delete') => {
    setModalMode(mode);
    setModalInput(mode === 'delete' && categories.length > 0 ? categories[0] : '');
    setModalError('');
    setIsModalOpen(true);
  };

  const submitModal = async () => {
    setModalError('');
    
    if (modalMode === 'add') {
      if (!modalInput.trim()) { setModalError("Category name cannot be empty."); return; }
      const formattedSlug = modalInput.trim().toLowerCase().replace(/\s+/g, '-');
      
      try {
        const response = await fetch('/api/admin/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: modalInput.trim(), slug: formattedSlug })
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Failed to create category");
        }

        // Update local state so UI refreshes without reload
        setCategories([...categories, formattedSlug]);
        setIsModalOpen(false);
        setLastUpdated(new Date().toLocaleString('id-ID'));
      } catch (err: any) {
        setModalError(err.message);
      }

    } else if (modalMode === 'delete') {
      try {
        const response = await fetch(`/api/admin/categories?slug=${modalInput}`, {
          method: 'DELETE',
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Failed to delete category");
        }

        // Remove from local state
        setCategories(categories.filter(c => c !== modalInput));
        setIsModalOpen(false);
        setLastUpdated(new Date().toLocaleString('id-ID'));
      } catch (err: any) {
        setModalError(err.message);
      }
    }
  };

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* CUSTOM MODAL OVERLAY */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 border border-stone-700 p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">
              {modalMode === 'add' ? 'Add New Category' : 'Delete Category'}
            </h3>
            <p className="text-stone-400 text-xs mb-6">
              {modalMode === 'add' ? 'Create a new category tag. It will be formatted automatically.' : 'Select a category to permanently remove from the system.'}
            </p>

            {modalError && (
              <div className="mb-4 p-3 bg-red-950/50 border border-red-900/50 text-red-500 text-[10px] font-mono rounded-lg">
                ⚠️ {modalError}
              </div>
            )}

            {modalMode === 'add' ? (
              <input type="text" autoFocus value={modalInput} onChange={(e) => setModalInput(e.target.value)} placeholder="e.g. Limited Edition Series" className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono mb-6" onKeyDown={(e) => e.key === 'Enter' && submitModal()} />
            ) : (
              <select value={modalInput} onChange={(e) => setModalInput(e.target.value)} className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-amber-500 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm font-mono uppercase tracking-widest mb-6 cursor-pointer">
                {categories.map(cat => <option key={cat} value={cat} className="bg-stone-900 text-stone-100">{cat.replace(/-/g, ' ')}</option>)}
              </select>
            )}

            <div className="flex gap-3 justify-end">
              <button onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-xs font-bold text-stone-400 uppercase tracking-widest hover:text-white transition-colors">Cancel</button>
              <button onClick={submitModal} className={`px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all active:scale-95 shadow-md ${modalMode === 'add' ? 'bg-amber-700 hover:bg-amber-600 text-white' : 'bg-red-900/80 hover:bg-red-800 text-white'}`}>
                {modalMode === 'add' ? 'Create Category' : 'Confirm Delete'}
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Inventory & Content Control</h2>
          <p className="text-stone-400 text-sm">Update product metadata, stock, gallery images, and roasting journals.</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <button onClick={() => openModal('add')} className="bg-stone-900 border border-stone-700 hover:bg-stone-800 text-stone-300 px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
            + Add Category
          </button>
          <button onClick={() => openModal('delete')} className="bg-red-950/30 border border-red-900/50 hover:bg-red-900/40 text-red-500 px-4 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95">
            - Delete Category
          </button>
          <div className="w-px h-8 bg-stone-800 mx-1 hidden sm:block"></div>
          
          <Link 
            href="/admin/inventory/add" 
            className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            + Add New Product
          </Link>
        </div>
      </div>

      {lastUpdated && (
        <div className="mb-6 p-4 bg-green-950/30 border border-green-900/50 text-green-500 text-xs font-mono rounded-lg flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Metadata Log: Last synchronized at {lastUpdated}
        </div>
      )}

      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden min-h-[400px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-[400px]">
            <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
           <div className="flex items-center justify-center h-[400px] text-red-500 font-bold uppercase tracking-widest text-[10px]">
             Database Error: {error}
           </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[1100px]">
              <thead className="sticky top-0 z-30 bg-stone-950 outline outline-1 outline-stone-800 shadow-md">
                <tr className="text-[10px] uppercase tracking-widest text-stone-500">
                  <th className="p-6 font-bold w-[25%] rounded-tl-2xl">Product Details & Imagery</th>
                  <th className="p-6 font-bold w-[20%]">Metrics & Stock</th>
                  <th className="p-6 font-bold w-[20%]">Content Management</th>
                  <th className="p-6 font-bold w-[25%]">Roaster's Journal Log</th>
                  <th className="p-6 font-bold w-[10%] rounded-tr-2xl text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800/50 text-sm">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-16 text-center text-stone-500 italic uppercase tracking-widest text-[10px]">No products in inventory.</td>
                  </tr>
                ) : products.map((product) => (
                  <tr key={product.id} className="hover:bg-stone-800/20 transition-colors group">
                    
                    {/* COLUMN 1: DETAILS & IMAGERY */}
                    <td className="p-6 align-top">
                      <div className="flex gap-4 mb-4">
                        <label className="w-16 h-16 shrink-0 bg-stone-950 rounded-lg border border-stone-700 overflow-hidden relative cursor-pointer group/img block">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={product.image || 'https://via.placeholder.com/150/0c0a09/d6d3d1?text=No+Image'} alt={product.name} className="object-cover w-full h-full" />
                          <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                            <span className="text-[8px] font-bold text-white uppercase tracking-widest">Change</span>
                          </div>
                          <input type="file" accept="image/*" className="hidden" onChange={(e) => handleMainImageChange(product.id, e)} />
                        </label>

                        <div className="flex-1 space-y-2">
                          <input type="text" value={product.name} onChange={(e) => handleChange(product.id, 'name', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded p-1.5 text-stone-100 font-bold outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-sm shadow-inner" placeholder="Product Name" />
                          <select value={product.categorySlug} onChange={(e) => handleChange(product.id, 'categorySlug', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded p-1.5 text-[10px] uppercase tracking-widest text-amber-600 font-bold outline-none focus:border-amber-600 cursor-pointer shadow-inner">
                            {categories.map(cat => (
                              <option key={cat} value={cat} className="bg-stone-900 text-white">{cat.replace(/-/g, ' ')}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3 border-t border-stone-800/50 pt-3">
                        <div>
                          <div className="flex justify-between items-end mb-2">
                            <label className="block text-[10px] text-stone-500 uppercase tracking-widest">Gallery Images</label>
                            <span className="text-[9px] text-stone-600">{product.gallery?.length || 0}/4</span>
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            {product.gallery?.map((img, i) => (
                              <div key={i} className="relative w-10 h-10 rounded border border-stone-700 overflow-hidden group/gal">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                                <button 
                                  type="button" 
                                  onClick={() => handleGalleryRemove(product.id, i, product.gallery)}
                                  className="absolute top-0 right-0 w-4 h-4 bg-red-600 hover:bg-red-500 text-white text-[8px] flex items-center justify-center opacity-0 group-hover/gal:opacity-100 transition-opacity"
                                >
                                  ✖
                                </button>
                              </div>
                            ))}
                            {(!product.gallery || product.gallery.length < 4) && (
                              <label className="w-10 h-10 flex items-center justify-center border border-dashed border-stone-600 rounded cursor-pointer hover:border-amber-500 hover:text-amber-500 text-stone-600 transition-colors">
                                <span className="text-lg leading-none mb-1">+</span>
                                <input type="file" multiple accept="image/*" className="hidden" onChange={(e) => handleGalleryAdd(product.id, e, product.gallery || [])} />
                              </label>
                            )}
                          </div>
                        </div>

                        <div>
                          <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1.5 mt-4">Origin</label>
                          <input type="text" value={product.origin} onChange={(e) => handleChange(product.id, 'origin', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-xs shadow-inner" placeholder="e.g., Indonesia, Kerinci" />
                        </div>
                      </div>
                    </td>
                    
                    {/* COLUMN 2: METRICS & STOCK */}
                    <td className="p-6 align-top">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1.5">Physical Stock (Bags)</label>
                          <input type="number" min="0" value={product.stock} onChange={(e) => handleChange(product.id, 'stock', parseInt(e.target.value) || 0)} disabled={!product.categorySlug.includes("commercial")} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner disabled:opacity-50 disabled:bg-stone-900/50 disabled:cursor-not-allowed transition-all" />
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-end mb-1.5">
                            <label className="block text-[10px] text-stone-500 uppercase tracking-widest">Base Price (Rp)</label>
                            <span className="text-[9px] font-bold text-amber-700 uppercase tracking-widest">🔒 Locked</span>
                          </div>
                          <input 
                            type="number" 
                            value={product.price} 
                            disabled 
                            title="Base Price can only be edited by Managers in the Pricing Policy Hub."
                            className="w-full bg-stone-950/50 border border-stone-800 rounded-lg px-3 py-2 text-stone-500 outline-none font-mono text-sm shadow-inner cursor-not-allowed select-none" 
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1.5">Acidity</label>
                            <select value={product.acidityLevel} onChange={(e) => handleChange(product.id, 'acidityLevel', parseInt(e.target.value))} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-2 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner cursor-pointer">
                              {[1, 2, 3, 4, 5].map(num => <option key={num} value={num} className="bg-stone-900 text-white">{num}/5</option>)}
                            </select>
                          </div>
                          <div>
                            <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-1.5">Roast Lvl</label>
                            <select value={product.roastLevel} onChange={(e) => handleChange(product.id, 'roastLevel', parseInt(e.target.value))} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-2 text-stone-200 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 font-mono text-sm shadow-inner cursor-pointer">
                              {[1, 2, 3].map(num => <option key={num} value={num} className="bg-stone-900 text-white">{num}/3</option>)}
                            </select>
                          </div>
                        </div>
                      </div>
                    </td>

                    {/* COLUMN 3: CONTENT */}
                    <td className="p-6 align-top">
                      <div className="flex flex-col gap-4">
                        <div>
                          <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Description</label>
                          <textarea value={product.description} onChange={(e) => handleChange(product.id, 'description', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[90px] text-xs resize-none leading-relaxed shadow-inner" />
                        </div>
                        <div>
                          <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Roast Profile Name</label>
                          <input type="text" value={product.roast} onChange={(e) => handleChange(product.id, 'roast', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-xs shadow-inner" placeholder="e.g. Kerinci Natural Anaerob" />
                        </div>
                        <div>
                          <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Tasting Notes</label>
                          <input type="text" value={product.tastingNotes} onChange={(e) => handleChange(product.id, 'tastingNotes', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg px-3 py-2 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 text-xs font-mono shadow-inner" placeholder="e.g. Floral, Honey, Red Apple" />
                        </div>
                      </div>
                    </td>

                    {/* COLUMN 4: ROAST LOG */}
                    <td className="p-6 align-top relative">
                      <div className="flex flex-col h-full">
                        <label className="block text-[10px] text-stone-500 uppercase tracking-widest mb-2">Roasting Log Entry</label>
                        <textarea value={product.roastLog} onChange={(e) => handleChange(product.id, 'roastLog', e.target.value)} className="w-full bg-stone-950 border border-stone-700/50 rounded-lg p-3 text-stone-300 outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-600 min-h-[220px] text-xs font-mono resize-none leading-relaxed shadow-inner mb-14" />
                      </div>
                    </td>

                    {/* COLUMN 5: ACTIONS */}
                    <td className="p-6 align-top border-l border-stone-800/50 bg-stone-900/20">
                      <div className="flex flex-col gap-4 sticky top-6">
                        {modifiedRows.has(product.id) ? (
                          <button 
                            onClick={() => handleUpdateRow(product.id)}
                            className="w-full bg-amber-700 hover:bg-amber-600 text-white py-3 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all shadow-md active:scale-95 animate-in fade-in"
                          >
                            Update Item
                          </button>
                        ) : (
                          <div className="h-[42px] w-full flex items-center justify-center bg-stone-950/50 rounded-lg border border-stone-800 text-[10px] text-stone-600 font-bold uppercase tracking-widest">
                            Saved
                          </div>
                        )}
                        
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="w-full text-center text-[10px] text-stone-500 hover:text-red-500 font-bold uppercase tracking-widest transition-colors py-2"
                        >
                          Delete
                        </button>
                      </div>
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