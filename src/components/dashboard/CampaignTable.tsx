'use client';

import { Badge } from '@/components/ui/Badge';
import { formatCurrency, formatNumber } from '@/lib/utils';
import type { Campaign } from '@/types';

interface CampaignTableProps {
  campaigns: Campaign[];
}

const statusVariant: Record<string, 'success' | 'warning' | 'danger' | 'info' | 'default'> = {
  active: 'success',
  draft: 'default',
  paused: 'warning',
  completed: 'info',
};

const channelIcons: Record<string, string> = {
  email: '✉️',
  social: '📱',
  search: '🔍',
  display: '🖥️',
};

export function CampaignTable({ campaigns }: CampaignTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-900">
      <table className="w-full text-left">
        <thead>
          <tr className="border-b border-slate-700/50">
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Name
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Status
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Channel
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Budget
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Spent
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Impressions
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              CTR
            </th>
            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => {
            const ctr =
              campaign.impressions > 0
                ? ((campaign.clicks / campaign.impressions) * 100).toFixed(2)
                : '0.00';
            return (
              <tr
                key={campaign.id}
                className="border-b border-slate-700/30 transition-colors duration-150 even:bg-slate-800/30 hover:bg-slate-800/50"
              >
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-slate-50">
                    {campaign.name}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <Badge variant={statusVariant[campaign.status] || 'default'}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <span className="flex items-center gap-1.5 text-sm text-slate-300">
                    <span>{channelIcons[campaign.channel] || ''}</span>
                    {campaign.channel.charAt(0).toUpperCase() + campaign.channel.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">
                  {formatCurrency(campaign.budget)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">
                  {formatCurrency(campaign.spent)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">
                  {formatNumber(campaign.impressions)}
                </td>
                <td className="px-6 py-4 text-sm text-slate-300">{ctr}%</td>
                <td className="px-6 py-4">
                  <button className="rounded-lg p-1.5 text-slate-400 transition-all duration-200 hover:bg-slate-700 hover:text-slate-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="12" cy="5" r="1" />
                      <circle cx="12" cy="19" r="1" />
                    </svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {campaigns.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-slate-600">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
            <polyline points="13 2 13 9 20 9" />
          </svg>
          <p className="mt-3 text-sm text-slate-400">No campaigns found</p>
        </div>
      )}
    </div>
  );
}
