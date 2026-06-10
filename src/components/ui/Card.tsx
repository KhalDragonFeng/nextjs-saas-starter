import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-slate-700/50 bg-slate-900 p-6',
        hover && 'transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/80',
        className
      )}
    >
      {children}
    </div>
  );
}
