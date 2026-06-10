'use client';

import { Header } from '@/components/dashboard/Header';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { RevenueChart } from '@/components/dashboard/RevenueChart';

const channels = [
  { name: 'Email', percentage: 38, color: 'bg-blue-500' },
  { name: 'Social', percentage: 28, color: 'bg-violet-500' },
  { name: 'Search', percentage: 22, color: 'bg-emerald-500' },
  { name: 'Display', percentage: 12, color: 'bg-amber-500' },
];

const funnelSteps = [
  { label: 'Impressions', value: '2.45M', width: '100%', color: 'from-blue-500 to-blue-600' },
  { label: 'Clicks', value: '184K', width: '65%', color: 'from-violet-500 to-violet-600' },
  { label: 'Conversions', value: '12.4K', width: '30%', color: 'from-emerald-500 to-emerald-600' },
];

export default function AnalyticsPage() {
  return (
    <div>
      <Header title="Analytics" subtitle="Track your performance metrics" />

      <div className="mt-8">
        <StatsCards />
      </div>

      <div className="mt-8">
        <RevenueChart />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Top Channels */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-slate-50">Top Channels</h3>
          <p className="mt-1 text-sm text-slate-400">Traffic distribution by channel</p>

          <div className="mt-6 space-y-5">
            {channels.map((channel) => (
              <div key={channel.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-300">{channel.name}</span>
                  <span className="text-sm font-semibold text-slate-50">{channel.percentage}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full ${channel.color} transition-all duration-500`}
                    style={{ width: `${channel.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="rounded-xl border border-slate-700/50 bg-slate-900 p-6">
          <h3 className="text-lg font-semibold text-slate-50">Conversion Funnel</h3>
          <p className="mt-1 text-sm text-slate-400">From impressions to conversions</p>

          <div className="mt-8 flex flex-col items-center gap-4">
            {funnelSteps.map((step, index) => (
              <div key={step.label} className="w-full">
                <div className="mx-auto" style={{ width: step.width }}>
                  <div
                    className={`rounded-xl bg-gradient-to-r ${step.color} px-6 py-4 text-center shadow-lg transition-all duration-300`}
                  >
                    <p className="text-lg font-bold text-white">{step.value}</p>
                    <p className="text-sm text-white/80">{step.label}</p>
                  </div>
                </div>
                {index < funnelSteps.length - 1 && (
                  <div className="flex justify-center py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
