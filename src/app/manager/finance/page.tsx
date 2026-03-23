"use client";

import { useState } from 'react';

type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'CREDIT' | 'DEBIT';
  amount: number;
  category: 'SALES' | 'PROCUREMENT' | 'OPERATIONAL' | 'SHIPPING';
};

const INITIAL_TRANSACTIONS: Transaction[] = [
  { id: 'TRX-001', date: '2026-03-20', description: 'Order ORD-20260320-001 Payment', type: 'CREDIT', amount: 495000, category: 'SALES' },
  { id: 'TRX-002', date: '2026-03-20', description: 'Purchase PO-20260320-01 (NIR Coffee)', type: 'DEBIT', amount: 1800000, category: 'PROCUREMENT' },
  { id: 'TRX-003', date: '2026-03-19', description: 'Order ORD-20260319-042 Payment', type: 'CREDIT', amount: 250000, category: 'SALES' },
  { id: 'TRX-004', date: '2026-03-18', description: 'Packaging Materials (Matte Bags)', type: 'DEBIT', amount: 450000, category: 'OPERATIONAL' },
  { id: 'TRX-005', date: '2026-03-18', description: 'Order ORD-20260318-012 Payment', type: 'CREDIT', amount: 305000, category: 'SALES' },
];

export default function FinancialHubPage() {
  const [transactions] = useState<Transaction[]>(INITIAL_TRANSACTIONS);
  const [viewFilter, setViewFilter] = useState<'ALL' | 'CREDIT' | 'DEBIT'>('ALL');
  const [fromDate, setFromDate] = useState('2026-03-01');
  const [toDate, setToDate] = useState('2026-03-31');
  const [exportType, setExportType] = useState<'ALL' | 'CREDIT' | 'DEBIT'>('ALL');

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

  // --- THE REAL EXPORT LOGIC ---
  const handleExport = () => {
    // 1. Filter data based on EXPORT TYPE and DATE range
    const dataToExport = transactions.filter(t => {
      const matchesType = exportType === 'ALL' ? true : t.type === exportType;
      const matchesDate = t.date >= fromDate && t.date <= toDate;
      return matchesType && matchesDate;
    });

    if (dataToExport.length === 0) {
      alert("No data found for the selected range/type to export.");
      return;
    }

    // 2. Create CSV Header
    const headers = ["Transaction ID", "Date", "Description", "Type", "Category", "Amount (IDR)"];
    
    // 3. Convert Rows to String
    const csvRows = dataToExport.map(t => [
      t.id,
      t.date,
      `"${t.description.replace(/"/g, '""')}"`, // Escape quotes for CSV safety
      t.type,
      t.category,
      t.amount
    ].join(","));

    const csvContent = [headers.join(","), ...csvRows].join("\n");

    // 4. Create Blob and Trigger Download
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

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* HEADER & CONTROLS */}
      <div className="flex flex-col xl:flex-row justify-between items-start xl:items-end mb-8 gap-6">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Financial Hub</h2>
          <p className="text-stone-400 text-sm">Monitor revenue streams, manage operational expenses, and export fiscal reports.</p>
        </div>

        <div className="flex flex-wrap items-end gap-3 bg-stone-900/50 p-4 rounded-2xl border border-stone-800 shadow-xl">
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">From</label>
            <input 
              type="date" 
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">To</label>
            <input 
              type="date" 
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest ml-1">Export Type</label>
            <select 
              value={exportType}
              onChange={(e) => setExportType(e.target.value as any)}
              className="bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-xs text-stone-200 outline-none focus:border-amber-600 transition-colors cursor-pointer min-w-[120px]"
            >
              <option value="ALL" className="text-stone-950 bg-white">All Records</option>
              <option value="CREDIT" className="text-stone-950 bg-white">Income Only</option>
              <option value="DEBIT" className="text-stone-950 bg-white">Expenses Only</option>
            </select>
          </div>
          <button 
            onClick={handleExport}
            className="bg-stone-100 hover:bg-white text-stone-900 h-[38px] px-6 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a3.375 3.375 0 003.375 3.375h10.5a3.375 3.375 0 003.375-3.375V16.5a.75.75 0 011.5 0v2.25a4.875 4.875 0 01-4.875 4.875H7.125A4.875 4.875 0 012.25 18.75V16.5a.75.75 0 01.75-.75z" clipRule="evenodd" /></svg>
            Export CSV
          </button>
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-green-500/5 rounded-full blur-2xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Income (Credits)</h3>
          <p className="text-3xl font-oswald text-green-500 font-bold">Rp {totalCredit.toLocaleString('id-ID')}</p>
          <p className="text-[9px] text-stone-600 uppercase tracking-widest mt-2 font-mono">{fromDate} to {toDate}</p>
        </div>

        <div className="bg-stone-900 border border-stone-800 p-6 rounded-2xl relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-500/5 rounded-full blur-2xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Expenses (Debits)</h3>
          <p className="text-3xl font-oswald text-red-500 font-bold">Rp {totalDebit.toLocaleString('id-ID')}</p>
          <p className="text-[9px] text-stone-600 uppercase tracking-widest mt-2 font-mono">{fromDate} to {toDate}</p>
        </div>

        <div className={`bg-stone-900 border p-6 rounded-2xl relative overflow-hidden ${netProfit >= 0 ? 'border-amber-900/30' : 'border-red-900/30'}`}>
          <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl"></div>
          <h3 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Net Cash Flow</h3>
          <p className={`text-3xl font-oswald font-bold ${netProfit >= 0 ? 'text-amber-500' : 'text-red-600'}`}>
            {netProfit < 0 ? '-' : ''} Rp {Math.abs(netProfit).toLocaleString('id-ID')}
          </p>
          <p className="text-[9px] text-stone-600 uppercase tracking-widest mt-2">Current Range Balance</p>
        </div>
      </div>

      {/* VIEW TABS */}
      <div className="flex gap-4 mb-6 border-b border-stone-800 pb-px">
        <button onClick={() => setViewFilter('ALL')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'ALL' ? 'border-amber-600 text-amber-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Full Statement</button>
        <button onClick={() => setViewFilter('CREDIT')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'CREDIT' ? 'border-green-600 text-green-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Income Only</button>
        <button onClick={() => setViewFilter('DEBIT')} className={`pb-3 px-1 text-[10px] font-bold uppercase tracking-widest transition-all border-b-2 ${viewFilter === 'DEBIT' ? 'border-red-600 text-red-500' : 'border-transparent text-stone-500 hover:text-stone-300'}`}>Expenses Only</button>
      </div>

      {/* TRANSACTION TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden">
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
                  <p className="font-mono font-bold text-stone-400 group-hover:text-amber-500 transition-colors mb-1">{trx.id}</p>
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
      </div>
    </div>
  );
}