export default function PlaceholderPage() {
  return (
    <div className="animate-in fade-in duration-500 border-2 border-dashed border-stone-800 rounded-2xl p-16 text-center mt-10 bg-stone-900/30">
      <h2 className="text-2xl font-oswald font-bold uppercase tracking-widest text-white mb-4">Module Locked</h2>
      <p className="text-stone-400 mb-6 max-w-lg mx-auto leading-relaxed">
        Welcome to the Manager dashboard. This module is designated for specific managerial operations.
      </p>
      <div className="inline-block bg-amber-900/20 text-amber-500 border border-amber-900/50 px-5 py-2.5 rounded-lg text-xs font-mono shadow-inner">
        Development in progress...
      </div>
    </div>
  );
}