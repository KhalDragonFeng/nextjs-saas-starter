'use client';

import { useState } from 'react';
import { Header } from '@/components/dashboard/Header';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function SettingsPage() {
  const [name, setName] = useState('Demo User');
  const [email, setEmail] = useState('demo@saas.com');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <Header title="Settings" subtitle="Manage your account preferences" />

      <div className="mt-8 max-w-2xl space-y-8">
        {/* Profile Settings */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-slate-50">Profile Settings</h3>
          <p className="mt-1 text-sm text-slate-400">Update your personal information</p>

          <div className="mt-6 space-y-5">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-slate-700/50 bg-slate-800 px-4 py-2.5 text-sm text-slate-50 placeholder-slate-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-slate-700/50 bg-slate-800 px-4 py-2.5 text-sm text-slate-50 placeholder-slate-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">
                Role
              </label>
              <div className="flex items-center gap-2 rounded-lg border border-slate-700/50 bg-slate-800/50 px-4 py-2.5">
                <span className="text-sm text-slate-400">Admin</span>
                <span className="rounded bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
                  Read-only
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
              {saved && (
                <span className="flex items-center gap-1.5 text-sm text-emerald-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Changes saved!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="rounded-xl border border-red-500/30 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-red-400">Danger Zone</h3>
          <p className="mt-1 text-sm text-slate-400">
            Irreversible and destructive actions
          </p>

          <div className="mt-6 rounded-lg border border-red-500/20 bg-red-500/5 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-50">Delete Account</p>
                <p className="mt-0.5 text-sm text-slate-400">
                  Permanently remove your account and all associated data. This action cannot be undone.
                </p>
              </div>
              <Button
                variant="danger"
                onClick={() => alert('This is a demo — account deletion is disabled.')}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
