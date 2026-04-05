"use client";

import { useState, useEffect } from 'react';

// 1. Type Definitions
type Transaction = {
  id: string;
  date: string; 
  description: string;
  type: 'CREDIT' | 'DEBIT';
  amount: number;
  category: 'SALES' | 'PROCUREMENT' | 'OPERATIONAL' | 'SHIPPING' | 'SALARY' | 'OTHER';
};

export default function FinancialHubPage() {
  // 2. Data State
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 3. Filter State
  const [viewFilter, setViewFilter] = useState<'ALL' | 'CREDIT' | 'DEBIT'>('ALL');
  const [fromDate, setFromDate] = useState('2026-03-01');
  const [toDate, setToDate] = useState('2026-03-31');
  const [exportType, setExportType] = useState<'ALL' | 'CREDIT' | 'DEBIT'>('ALL');

  // 4. Modal State (For Manual Entries)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    type: 'DEBIT',
    category: 'OPERATIONAL',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  // 5. Fetch Data from Database
  const fetchTransactions = async () => {
    try {
      const response = await fetch('/api/finance/transactions');
      if (!response.ok) throw new Error(`Server Error: ${response.status}`);
      
      const data = await response.json();
      
      // THE FIX: Safely map 'date' from the database
      const formattedData = data.map((trx: any) => ({
        ...trx,
        // Using your actual column name: transaction_date
        date: trx.transaction_date ? new Date(trx.transaction_date).toISOString().split('T')[0] : 'N/A'
      }));

      setTransactions(formattedData);
    } catch (err: any) {
      console.error("Error loading transactions:", err);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Run fetch on page load
  useEffect(() => {
    fetchTransactions();
  }, []);

  // 6. Handle New Manual Transaction
  const handleAddTransaction = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/finance/transactions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        fetchTransactions(); // Refresh the table
        setIsModalOpen(false); // Close the modal
        // Reset the form
        setFormData({ 
          type: 'DEBIT', 
          category: 'OPERATIONAL', 
          amount: '', 
          description: '', 
          date: new Date().toISOString().split('T')[0] 
        });
      } else {
        alert("Failed to save transaction.");
      }
    } catch (err) {
      alert("Network error while saving.");
    }
  };

  // 7. Calculations & Filtering
  const filteredTrx = transactions.filter(t => {
    const matchesType = viewFilter === 'ALL' ? true : t.type === viewFilter;
    const matchesDate = t.date >= fromDate && t.date <= toDate;
    return matchesType && matchesDate;
  });

  const totalCredit = transactions
    .filter(t => t.type === 'CREDIT' && t.date >= fromDate && t.date <= toDate)
    .reduce((acc, curr) => acc + curr.amount, 0);
  
  const totalDebit = transactions
    .filter(t => t.type === 'DEBIT' && t.date >= fromDate && t.date <= toDate)
    .reduce((acc, curr) => acc + curr.amount, 0);
    
  const netProfit = totalCredit - totalDebit;

  // 8. CSV Export Logic
  const handleExport = () => {
    const dataToExport = transactions.filter(t => {
      const matchesType = exportType === 'ALL' ? true : t.type === exportType;
      const matchesDate = t.date >= fromDate && t.date <= toDate;
      return matchesType && matchesDate;
    });

    if (dataToExport.length === 0) {
      alert("No data found for the selected range/type to export.");
      return;
    }

    const headers = ["Transaction ID", "Date", "Description", "Type", "Category", "Amount (IDR)"];
    const csvRows = dataToExport.map(t => [
      t.id,
      t.date,
      `"${t.description.replace(/"/g, '""')}"`, 
      t.type,
      t.category,
      t.amount
    ].join(","));

    const csvContent = [headers.join(","), ...csvRows].join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `Wanst_Financial_Report_${fromDate}_to_${toDate}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // 9. UI Rendering
  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* MANUAL ENTRY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="bg-stone-900 border border-stone-800 p-8 rounded-2xl w-full max-w-md shadow-2xl">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-6">Log Transaction</h3>
            <form onSubmit={handleAddTransaction} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Type</label>
                  <select value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white">
                    <option value="DEBIT">Expense (Debit)</option>
                    <option value="CREDIT">Income (Credit)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Category</label>
                  <select value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white">
                    <option value="OPERATIONAL">Operational</option>
                    <option value="SALARY">Salary</option>
                    <option value="MARKETING">Marketing</option>
                    <option value="OTHER">Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Description</label>
                <input type="text" required value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} placeholder="e.g. Monthly Electricity Bill" className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white focus:border-amber-600 outline-none" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Amount (IDR)</label>
                <input type="number" required value={formData.amount} onChange={e => setFormData({...formData, amount: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-amber-500 font-mono focus:border-amber-600 outline-none" />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase mb-2">Date</label>
                <input type="date" required value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-2.5 text-sm text-white font-mono focus:border-amber-600 outline-none" />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button type="button" onClick={() => setIsModalOpen(false)} className="text-xs font-bold text-stone-500 hover:text-white transition-colors uppercase px-4">Cancel</button>
                <button type="submit" className="bg-amber-700 hover:bg-amber-600 transition-colors text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95">Save Record</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* HEADER & CONTROLS */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-8 gap-6">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Financial Hub</h2>
          <p className="text-stone-400 text-sm">Monitor revenue streams and manage operational expenses.</p>
        </div>

        <div className="flex flex-wrap items-end gap-3 bg-stone-900/50 p-4 rounded-2xl border border-stone-800 shadow-xl">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-amber-900/30 hover:bg-amber-900/50 text-amber-500 border border-amber-900/50 h-[38px] px-6 rounded-lg text-xs font-bold uppercase tracking-widest transition-all mr-2"
          >
            + Add Record
          </button>

          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">From</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">To</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors" />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Export</label>
            <select value={exportType} onChange={(e) => setExportType(e.target.value as any)} className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors cursor-pointer min-w-[120px]">
              <option value="ALL" className="text-stone-950 bg-white">All Records</option>
              <option value="CREDIT" className="text-stone-950 bg-white">Income Only</option>
              <option value="DEBIT" className="text-stone-950 bg-white">Expenses Only</option>
            </select>
          </div>
          <button onClick={handleExport} className="bg-stone-100 hover:bg-white text-stone-900 h-[38px] px-6 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2">
            CSV
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative overflow-hidden text-center sm:text-left">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Income (Credits)</h3>
          <p className="text-3xl font-oswald text-green-500 font-bold">Rp {totalCredit.toLocaleString('id-ID')}</p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative overflow-hidden text-center sm:text-left">
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Expenses (Debits)</h3>
          <p className="text-3xl font-oswald text-red-500 font-bold">Rp {totalDebit.toLocaleString('id-ID')}</p>
        </div>

        <div className={`bg-stone-900 border p-6 rounded-2xl relative overflow-hidden text-center sm:text-left ${netProfit >= 0 ? 'border-amber-900/30' : 'border-red-900/30'}`}>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Net Cash Flow</h3>
          <p className={`text-3xl font-oswald font-bold ${netProfit >= 0 ? 'text-amber-500' : 'text-red-600'}`}>
            {netProfit < 0 ? '-' : ''} Rp {Math.abs(netProfit).toLocaleString('id-ID')}
          </p>
        </div>
      </div>

      {/* VIEW TABS */}
      <div className="flex gap-4 mb-6 border-b border-stone-800 pb-px">
        <button onClick={() => setViewFilter('ALL')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'ALL' ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Full Statement</button>
        <button onClick={() => setViewFilter('CREDIT')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'CREDIT' ? 'border-green-600 text-green-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Income</button>
        <button onClick={() => setViewFilter('DEBIT')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'DEBIT' ? 'border-red-600 text-red-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Expenses</button>
      </div>

      {/* TRANSACTION TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden min-h-[300px]">
        {isLoading ? (
          <div className="flex items-center justify-center h-[300px]">
            <div className="w-8 h-8 border-2 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
           <div className="flex items-center justify-center h-[300px] text-red-500 font-bold uppercase tracking-widest text-[10px]">
             Database Error: {error}
           </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead className="bg-stone-950 outline outline-1 outline-stone-800">
              <tr className="text-[10px] uppercase tracking-widest text-stone-500">
                <th className="p-6 font-bold">Ref ID & Date</th>
                <th className="p-6 font-bold">Description</th>
                <th className="p-6 font-bold">Category</th>
                <th className="p-6 font-bold text-right">Amount (IDR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-800/50 text-sm">
              {filteredTrx.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-16 text-center text-stone-500 italic uppercase tracking-widest text-[10px]">No records found for this period.</td>
                </tr>
              ) : filteredTrx.map((trx) => (
                <tr key={trx.id} className="hover:bg-stone-800/20 transition-colors group">
                  <td className="p-6">
                    <p className="font-mono font-bold text-stone-400 group-hover:text-amber-500 transition-colors mb-1 truncate max-w-[150px]">{trx.id}</p>
                    <p className="text-[10px] uppercase tracking-widest text-stone-600">{trx.date}</p>
                  </td>
                  <td className="p-6">
                    <p className="font-bold text-stone-200">{trx.description}</p>
                  </td>
                  <td className="p-6">
                    <span className="text-[9px] font-bold px-2 py-1 bg-stone-950 border border-stone-800 rounded text-stone-500 uppercase tracking-widest">
                      {trx.category}
                    </span>
                  </td>
                  <td className={`p-6 text-right font-mono font-bold text-base ${trx.type === 'CREDIT' ? 'text-green-500' : 'text-red-500'}`}>
                    {trx.type === 'CREDIT' ? '+' : '-'} Rp {trx.amount.toLocaleString('id-ID')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}