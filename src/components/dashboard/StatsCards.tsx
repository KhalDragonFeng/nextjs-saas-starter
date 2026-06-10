'use client';

import { dashboardStats } from '@/lib/mock-data';
import { formatCurrency, formatNumber, formatPercentage } from '@/lib/utils';

const stats = [
  {
    label: 'Total Revenue',
    value: formatCurrency(dashboardStats.totalRevenue),
    change: dashboardStats.revenueChange,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    iconBg: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    label: 'Active Campaigns',
    value: formatNumber(dashboardStats.activeCampaigns),
    change: dashboardStats.campaignChange,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    iconBg: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-400',
  },
  {
    label: 'Impressions',
    value: formatNumber(dashboardStats.totalImpressions),
    change: dashboardStats.impressionChange,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    iconBg: 'from-violet-500/20 to-violet-500/5',
    iconColor: 'text-violet-400',
  },
  {
    label: 'Conversion Rate',
    value: formatPercentage(dashboardStats.conversionRate),
    change: dashboardStats.conversionChange,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    iconBg: 'from-amber-500/20 to-amber-500/5',
    iconColor: 'text-amber-400',
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="group rounded-xl border border-slate-700/50 bg-slate-900 p-6 transition-all duration-200 hover:border-slate-600/50 hover:shadow-lg hover:shadow-slate-900/50"
        >
          <div className="flex items-center justify-between">
            <div className={`rounded-lg bg-gradient-to-br ${stat.iconBg} p-2.5 ${stat.iconColor}`}>
              {stat.icon}
            </div>
            <div
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                stat.change >= 0
                  ? 'bg-emerald-500/10 text-emerald-400'
                  : 'bg-red-500/10 text-red-400'
              }`}
            >
              {stat.change >= 0 ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              )}
              {Math.abs(stat.change)}%
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-1 text-2xl font-bold text-slate-50">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
