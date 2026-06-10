import type { DashboardStats, RevenueDataPoint, ActivityItem, Campaign } from '@/types';

export const dashboardStats: DashboardStats = {
  totalRevenue: 284500,
  revenueChange: 12.5,
  activeCampaigns: 24,
  campaignChange: 4.3,
  totalImpressions: 2450000,
  impressionChange: 8.7,
  conversionRate: 3.24,
  conversionChange: 0.8,
};

export const revenueData: RevenueDataPoint[] = [
  { month: 'Jan', revenue: 18200, spend: 12400 },
  { month: 'Feb', revenue: 21500, spend: 14200 },
  { month: 'Mar', revenue: 19800, spend: 13100 },
  { month: 'Apr', revenue: 24300, spend: 15800 },
  { month: 'May', revenue: 22100, spend: 14500 },
  { month: 'Jun', revenue: 26800, spend: 16200 },
  { month: 'Jul', revenue: 28400, spend: 17100 },
  { month: 'Aug', revenue: 25600, spend: 15900 },
  { month: 'Sep', revenue: 30200, spend: 18400 },
  { month: 'Oct', revenue: 27900, spend: 16800 },
  { month: 'Nov', revenue: 32100, spend: 19500 },
  { month: 'Dec', revenue: 35400, spend: 21200 },
];

export const recentActivity: ActivityItem[] = [
  { id: '1', action: 'launched campaign', target: 'Summer Flash Sale', user: 'Sarah Chen', time: '2 minutes ago', type: 'success' },
  { id: '2', action: 'updated budget for', target: 'Q4 Brand Awareness', user: 'Demo User', time: '15 minutes ago', type: 'update' },
  { id: '3', action: 'created campaign', target: 'Holiday Promo 2025', user: 'Alex Rivera', time: '1 hour ago', type: 'create' },
  { id: '4', action: 'paused campaign', target: 'Beta User Onboarding', user: 'Demo User', time: '2 hours ago', type: 'update' },
  { id: '5', action: 'completed campaign', target: 'Spring Product Launch', user: 'Jordan Lee', time: '4 hours ago', type: 'success' },
  { id: '6', action: 'deleted draft', target: 'Test Campaign #12', user: 'Demo User', time: '5 hours ago', type: 'delete' },
  { id: '7', action: 'created campaign', target: 'Influencer Outreach v2', user: 'Sarah Chen', time: '6 hours ago', type: 'create' },
  { id: '8', action: 'updated targeting for', target: 'Retargeting Warm Leads', user: 'Alex Rivera', time: '8 hours ago', type: 'update' },
];

export const mockCampaigns: Campaign[] = [
  { id: 'cm1a', name: 'Summer Flash Sale', status: 'active', channel: 'email', budget: 15000, spent: 8420, impressions: 342000, clicks: 12800, conversions: 890, orgId: 'org1', startDate: new Date('2025-06-01'), endDate: new Date('2025-08-31'), createdAt: new Date('2025-05-20') },
  { id: 'cm1b', name: 'Q4 Brand Awareness', status: 'active', channel: 'display', budget: 28000, spent: 14200, impressions: 890000, clicks: 24500, conversions: 1200, orgId: 'org1', startDate: new Date('2025-10-01'), endDate: new Date('2025-12-31'), createdAt: new Date('2025-09-15') },
  { id: 'cm1c', name: 'Holiday Promo 2025', status: 'draft', channel: 'social', budget: 20000, spent: 0, impressions: 0, clicks: 0, conversions: 0, orgId: 'org1', startDate: new Date('2025-11-15'), endDate: new Date('2025-12-25'), createdAt: new Date('2025-10-01') },
  { id: 'cm1d', name: 'Spring Product Launch', status: 'completed', channel: 'search', budget: 12000, spent: 11800, impressions: 520000, clicks: 18900, conversions: 2100, orgId: 'org1', startDate: new Date('2025-03-01'), endDate: new Date('2025-05-31'), createdAt: new Date('2025-02-10') },
  { id: 'cm1e', name: 'Beta User Onboarding', status: 'paused', channel: 'email', budget: 5000, spent: 2100, impressions: 85000, clicks: 4200, conversions: 380, orgId: 'org1', startDate: new Date('2025-07-01'), endDate: new Date('2025-09-30'), createdAt: new Date('2025-06-15') },
  { id: 'cm1f', name: 'Influencer Outreach v2', status: 'active', channel: 'social', budget: 35000, spent: 18500, impressions: 1200000, clicks: 45000, conversions: 3200, orgId: 'org1', startDate: new Date('2025-08-01'), endDate: new Date('2025-12-31'), createdAt: new Date('2025-07-20') },
  { id: 'cm1g', name: 'Retargeting Warm Leads', status: 'active', channel: 'display', budget: 8000, spent: 5600, impressions: 420000, clicks: 15800, conversions: 920, orgId: 'org1', startDate: new Date('2025-09-01'), endDate: new Date('2025-11-30'), createdAt: new Date('2025-08-25') },
  { id: 'cm1h', name: 'SEO Content Push', status: 'completed', channel: 'search', budget: 6000, spent: 5900, impressions: 310000, clicks: 28000, conversions: 1850, orgId: 'org1', startDate: new Date('2025-01-01'), endDate: new Date('2025-06-30'), createdAt: new Date('2024-12-15') },
  { id: 'cm1i', name: 'Newsletter Reactivation', status: 'draft', channel: 'email', budget: 3000, spent: 0, impressions: 0, clicks: 0, conversions: 0, orgId: 'org1', startDate: null, endDate: null, createdAt: new Date('2025-10-10') },
  { id: 'cm1j', name: 'Product Hunt Launch', status: 'completed', channel: 'social', budget: 2000, spent: 1950, impressions: 180000, clicks: 9200, conversions: 680, orgId: 'org1', startDate: new Date('2025-04-15'), endDate: new Date('2025-04-30'), createdAt: new Date('2025-04-01') },
];
