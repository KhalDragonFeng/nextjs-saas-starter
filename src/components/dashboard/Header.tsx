'use client';

import { useState } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-50">{title}</h1>
        {subtitle && (
          <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
        )}
      </div>

      <div className="flex items-center gap-3">
        {/* Notification Bell */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className="relative rounded-lg border border-slate-700/50 bg-slate-900 p-2.5 text-slate-400 transition-all duration-200 hover:bg-slate-800 hover:text-slate-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          {/* Notification dot */}
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500" />
        </button>

        {/* User Avatar */}
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-sm font-semibold text-white ring-2 ring-slate-800">
          DU
        </div>
      </div>
    </div>
  );
}
