"use client";

import { useState, useEffect } from 'react';

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  created_at: string;
};

export default function CustomerManagementPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      // THE FIX: Pointing to the new /customers API
      const res = await fetch('/api/admin/customers');
      const data = await res.json();
      
      const formattedData = data.map((c: any) => ({
        ...c,
        created_at: c.created_at ? new Date(c.created_at).toLocaleDateString('id-ID') : 'Unknown'
      }));
      
      setCustomers(formattedData);
    } catch (err) {
      console.error("Failed to fetch customers", err);
    } finally {
      setLoading(false);
    }
  };

  const toggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    
    try {
      // THE FIX: Pointing to the new /customers API
      const res = await fetch('/api/admin/customers', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });

      if (res.ok) {
        setCustomers(customers.map(c => c.id === id ? { ...c, status: newStatus } : c));
      }
    } catch (err) {
      alert("Failed to update status.");
    }
  };

  const deleteCustomer = async (id: string, name: string) => {
    if (!window.confirm(`Are you sure you want to PERMANENTLY delete the account for ${name}?`)) return;

    try {
      // THE FIX: Pointing to the new /customers API
      const res = await fetch('/api/admin/customers', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      });

      if (res.ok) {
        setCustomers(customers.filter(c => c.id !== id));
      }
    } catch (err) {
      alert("Failed to delete customer.");
    }
  };

  if (loading) return <div className="p-20 text-stone-500 font-mono text-center animate-pulse uppercase tracking-widest text-xs">Loading Customer Database...</div>;

  return (
    <div className="animate-in fade-in duration-500">
      
      <div className="mb-8">
        <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">Customer Accounts</h2>
        <p className="text-stone-400 text-sm">Manage registered customers, suspend access, or remove accounts.</p>
      </div>

      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-hidden overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead className="bg-stone-950">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold">Customer Details</th>
              <th className="p-6 font-bold">Contact</th>
              <th className="p-6 font-bold">Registered On</th>
              <th className="p-6 font-bold">Status</th>
              <th className="p-6 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {customers.length === 0 ? (
              <tr><td colSpan={5} className="p-12 text-center text-stone-500 italic">No registered customers found.</td></tr>
            ) : customers.map((customer) => {
              const isActive = customer.status === 'ACTIVE';
              
              return (
                <tr key={customer.id} className="hover:bg-stone-800/20 transition-colors">
                  <td className="p-6">
                    <p className="font-bold text-stone-100 mb-1">{customer.name}</p>
                    <p className="text-[10px] text-stone-500 font-mono">{customer.email}</p>
                  </td>
                  
                  <td className="p-6">
                    <span className="text-stone-300 font-mono text-xs">{customer.phone || 'No Phone'}</span>
                  </td>
                  
                  <td className="p-6">
                    <span className="text-stone-300 font-mono text-xs">{customer.created_at}</span>
                  </td>
                  
                  <td className="p-6">
                    {isActive ? (
                      <span className="flex items-center gap-2 text-[10px] font-bold text-green-500 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Active
                      </span>
                    ) : (
                      <span className="flex items-center gap-2 text-[10px] font-bold text-red-500 uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-red-500"></span> Suspended
                      </span>
                    )}
                  </td>
                  
                  <td className="p-6 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <button 
                        onClick={() => toggleStatus(customer.id, customer.status)}
                        className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${isActive ? 'text-amber-500 hover:text-amber-400' : 'text-green-500 hover:text-green-400'}`}
                      >
                        {isActive ? 'Suspend' : 'Activate'}
                      </button>
                      
                      <div className="w-px h-4 bg-stone-700"></div>
                      
                      <button 
                        onClick={() => deleteCustomer(customer.id, customer.name)}
                        className="text-[10px] font-bold text-red-600 hover:text-red-400 uppercase tracking-widest transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}