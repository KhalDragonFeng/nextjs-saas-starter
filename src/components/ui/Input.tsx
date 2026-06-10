'use client';

import { cn } from '@/lib/utils';
import { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: ReactNode;
}

export function Input({ label, error, icon, className, ...props }: InputProps) {
  return (
    <div className="space-y-1.5">
      {label && (
        <label className="block text-sm font-medium text-slate-300">{label}</label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
            {icon}
          </div>
        )}
        <input
          className={cn(
            'w-full rounded-lg border bg-slate-800 px-4 py-2.5 text-sm text-slate-50 placeholder-slate-500 outline-none transition-all duration-200',
            error
              ? 'border-red-500 focus:ring-2 focus:ring-red-500/50'
              : 'border-slate-700/50 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20',
            !!icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
