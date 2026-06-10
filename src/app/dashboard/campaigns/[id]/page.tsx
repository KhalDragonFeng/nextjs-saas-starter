import { Header } from '@/components/dashboard/Header';
import { AiCopywriter } from '@/components/campaign/AiCopywriter';
import { prisma } from '@/lib/prisma';
import { notFound } from 'next/navigation';

export default async function CampaignDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  
  // Try to find in db, or use mock fallback if it's "1" "2" from the hardcoded list
  let campaign: any = null;
  try {
    campaign = await prisma.campaign.findUnique({
      where: { id: resolvedParams.id }
    });
  } catch (error) {
    console.error('Prisma fallback on Campaign Detail');
  }

  if (!campaign) {
    // Just mock it so the user can easily see the AI demo
    // even if they click a mocked campaign from the previous table
    campaign = {
      id: resolvedParams.id,
      name: `Mock Campaign ${resolvedParams.id}`,
      status: 'active',
    };
  }

  return (
    <div>
      <div className="mb-6">
        <a href="/dashboard/campaigns" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← Back to Campaigns
        </a>
      </div>
      
      <Header 
        title={campaign.name} 
        subtitle={`Manage details and generate AI content for this campaign.`} 
      />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Details */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
            <h3 className="text-lg font-medium text-white mb-4">Campaign Details</h3>
            <div className="space-y-4">
              <div>
                <span className="text-sm text-slate-500 block">Status</span>
                <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 mt-1">
                  {campaign.status}
                </span>
              </div>
              <div>
                <span className="text-sm text-slate-500 block">Budget</span>
                <span className="text-slate-200 text-sm">$5,000.00</span>
              </div>
              <div>
                <span className="text-sm text-slate-500 block">Channel</span>
                <span className="text-slate-200 text-sm">Email Marketing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - AI Copywriter */}
        <div className="lg:col-span-2">
          <AiCopywriter campaignId={resolvedParams.id} />
        </div>
      </div>
    </div>
  );
}
