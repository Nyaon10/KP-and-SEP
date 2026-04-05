"use client";

import { useState, useEffect } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'manager';
  status: 'ACTIVE' | 'SUSPENDED';
  last_login: string | null;
};

export default function UserManagementPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  
  // State to track who is currently logged in
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
  const [formData, setFormData] = useState<Partial<User & { tempPassword?: string }>>({
    name: '', email: '', role: 'admin', status: 'ACTIVE', tempPassword: ''
  });

  // 1. FETCH REAL USERS FROM DATABASE & GET SESSION
  useEffect(() => {
    // Grab the logged in user from local storage
    const sessionStr = localStorage.getItem('wanst_admin_session');
    if (sessionStr) {
      const sessionData = JSON.parse(sessionStr);
      setCurrentUserEmail(sessionData.email);
    }

    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/manager/users');
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        }
      } catch (err) {
        console.error("Failed to fetch users", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleOpenModal = (mode: 'add' | 'edit', user?: User) => {
    setModalMode(mode);
    if (mode === 'edit' && user) {
      setFormData({ ...user, tempPassword: '' });
    } else {
      setFormData({ name: '', email: '', role: 'admin', status: 'ACTIVE', tempPassword: '' });
    }
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = modalMode === 'add' ? 'POST' : 'PATCH';
    
    try {
      const res = await fetch('/api/manager/users', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        const savedUser = await res.json();
        if (modalMode === 'add') {
          setUsers([savedUser, ...users]);
        } else {
          setUsers(users.map(u => u.id === savedUser.id ? savedUser : u));
        }
        setIsModalOpen(false);
      } else {
        const errorData = await res.json();
        alert(errorData.error || "Failed to save user account.");
      }
    } catch (err) {
      console.error("Submit error", err);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to permanently delete this user account?")) {
      try {
        const res = await fetch('/api/manager/users', { 
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id })
        });
        if (res.ok) {
          setUsers(users.filter(u => u.id !== id));
        }
      } catch (err) {
        alert("Delete failed.");
      }
    }
  };

  const handleToggleStatus = async (id: string, currentStatus: string) => {
    const newStatus = currentStatus === 'ACTIVE' ? 'SUSPENDED' : 'ACTIVE';
    try {
      const res = await fetch('/api/manager/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus })
      });
      if (res.ok) {
        setUsers(users.map(u => u.id === id ? { ...u, status: newStatus as any } : u));
      }
    } catch (err) {
      alert("Status update failed.");
    }
  };

  if (loading) return <div className="p-10 text-stone-500 font-mono">Loading Staff Records...</div>;

  return (
    <div className="animate-in fade-in duration-500 relative">
      
      {/* CUSTOM MODAL FOR ADD/EDIT USER */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in">
          <div className="bg-stone-900 border border-stone-700 p-8 rounded-2xl w-full max-w-md shadow-2xl text-stone-300">
            <h3 className="font-oswald text-2xl font-bold text-white uppercase tracking-widest mb-2">
              {modalMode === 'add' ? 'Create New User' : 'Edit User Account'}
            </h3>
            <p className="text-stone-400 text-xs mb-6">
              {modalMode === 'add' ? 'Generate credentials for a new staff member.' : 'Modify roles and access levels.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Full Name</label>
                <input 
                  type="text" required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 text-sm"
                />
              </div>

              <div>
                <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Email Address</label>
                <input 
                  type="email" required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 text-sm font-mono"
                />
              </div>

              {modalMode === 'add' && (
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Temporary Password</label>
                  <input 
                    type="password" required
                    value={formData.tempPassword}
                    onChange={(e) => setFormData({...formData, tempPassword: e.target.value})}
                    placeholder="Wanst2026!"
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 text-sm font-mono"
                  />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4 pb-4">
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">System Role</label>
                  <select 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value as any})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 text-sm cursor-pointer font-bold"
                  >
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Account Status</label>
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value as any})}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-4 py-3 text-stone-200 outline-none focus:border-amber-600 text-sm cursor-pointer font-bold"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="SUSPENDED">Suspended</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t border-stone-800">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 text-xs font-bold text-stone-400 hover:text-white uppercase tracking-widest">Cancel</button>
                <button type="submit" className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-md active:scale-95">
                  {modalMode === 'add' ? 'Save User' : 'Update User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* PAGE HEADER */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-8 gap-4">
        <div>
          <h2 className="text-3xl font-oswald font-bold uppercase tracking-widest text-white mb-2">User Management</h2>
          <p className="text-stone-400 text-sm">Control staff access, assign roles, and revoke privileges.</p>
        </div>
        <button onClick={() => handleOpenModal('add')} className="bg-amber-700 hover:bg-amber-600 text-white px-6 py-3 rounded-lg text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center gap-2">
          + Add New Staff
        </button>
      </div>

      {/* USERS TABLE */}
      <div className="bg-stone-900 rounded-2xl border border-stone-800 shadow-2xl overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[900px]">
          <thead className="bg-stone-950 outline outline-1 outline-stone-800">
            <tr className="text-[10px] uppercase tracking-widest text-stone-500">
              <th className="p-6 font-bold w-[35%]">Staff Identity</th>
              <th className="p-6 font-bold w-[15%]">Role Level</th>
              <th className="p-6 font-bold w-[20%]">Current Status</th>
              <th className="p-6 font-bold w-[15%]">Last Login</th>
              <th className="p-6 font-bold w-[15%] text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-800/50 text-sm">
            {users.map((user) => {
              // Check if this row belongs to the person looking at the screen
              const isSelf = currentUserEmail === user.email;

              return (
                <tr key={user.id} className={`hover:bg-stone-800/20 transition-colors ${user.status === 'SUSPENDED' ? 'opacity-50 grayscale' : ''}`}>
                  <td className="p-6 align-middle">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 font-bold border border-stone-700 uppercase">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-stone-100 mb-1">
                          {user.name} {isSelf && <span className="text-[9px] text-amber-500 uppercase ml-2 tracking-widest border border-amber-900/50 px-1.5 py-0.5 rounded-md">You</span>}
                        </p>
                        <p className="text-xs text-stone-400 font-mono">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-6 align-middle">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded border text-[10px] font-bold uppercase tracking-widest ${
                      user.role === 'manager' ? 'bg-purple-950/30 text-purple-400 border-purple-900/50' : 'bg-amber-950/30 text-amber-500 border-amber-900/50'
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-6 align-middle">
                    <div className="flex items-center gap-3">
                      <span className={`w-2 h-2 rounded-full ${user.status === 'ACTIVE' ? 'bg-green-500' : 'bg-red-500'}`}></span>
                      <span className={`text-xs font-bold uppercase tracking-widest ${user.status === 'ACTIVE' ? 'text-green-500' : 'text-red-500'}`}>
                        {user.status}
                      </span>
                    </div>
                  </td>
                  <td className="p-6 align-middle">
                    <p className="text-xs text-stone-400 font-mono">{user.last_login || 'Never'}</p>
                  </td>
                  <td className="p-6 align-middle text-right">
                    {/* Hide dangerous buttons if the user is looking at their own row! */}
                    {isSelf ? (
                       <button onClick={() => handleOpenModal('edit', user)} className="text-[10px] text-stone-500 hover:text-white font-bold uppercase tracking-widest transition-colors">
                         Edit My Profile
                       </button>
                    ) : (
                      <div className="flex items-center justify-end gap-3">
                        <button onClick={() => handleToggleStatus(user.id, user.status)} className="text-[10px] text-stone-500 hover:text-amber-500 font-bold uppercase tracking-widest transition-colors">
                          {user.status === 'ACTIVE' ? 'Suspend' : 'Activate'}
                        </button>
                        <div className="w-px h-4 bg-stone-800"></div>
                        <button onClick={() => handleOpenModal('edit', user)} className="text-[10px] text-stone-500 hover:text-white font-bold uppercase tracking-widest transition-colors">Edit</button>
                        <div className="w-px h-4 bg-stone-800"></div>
                        <button onClick={() => handleDelete(user.id)} className="text-[10px] text-red-900 hover:text-red-500 font-bold uppercase tracking-widest transition-colors">Delete</button>
                      </div>
                    )}
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