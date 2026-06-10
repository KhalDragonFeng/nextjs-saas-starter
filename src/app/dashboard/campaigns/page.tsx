'use client';

import { useState } from 'react';
import { Header } from '@/components/dashboard/Header';
import { CampaignTable } from '@/components/dashboard/CampaignTable';
import { Button } from '@/components/ui/Button';
import { mockCampaigns } from '@/lib/mock-data';
import { NewCampaignModal } from '@/components/campaign/NewCampaignModal';

type FilterStatus = 'all' | 'active' | 'draft' | 'paused' | 'completed';

const filters: { label: string; value: FilterStatus }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Draft', value: 'draft' },
  { label: 'Paused', value: 'paused' },
  { label: 'Completed', value: 'completed' },
];

export default function CampaignsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterStatus>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredCampaigns =
    activeFilter === 'all'
      ? mockCampaigns
      : mockCampaigns.filter((c) => c.status === activeFilter);

  const getCampaignCount = (status: FilterStatus) => {
    if (status === 'all') return mockCampaigns.length;
    return mockCampaigns.filter((c) => c.status === status).length;
  };

  return (
    <div>
      <NewCampaignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <div className="flex items-center justify-between">
        <Header title="Campaigns" subtitle="Manage your marketing campaigns" />
        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          <span className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            New Campaign
          </span>
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="mt-6 flex flex-wrap items-center gap-2">
        {filters.map((filter) => {
          const count = getCampaignCount(filter.value);
          const isActive = activeFilter === filter.value;
          return (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blue-500/10 text-blue-400 ring-1 ring-blue-500/30'
                  : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              {filter.label}
              <span
                className={`ml-1 rounded-full px-1.5 py-0.5 text-xs ${
                  isActive
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'bg-slate-800 text-slate-500'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <CampaignTable campaigns={filteredCampaigns} />
      </div>
    </div>
  );
}
