export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  avatarUrl?: string | null;
  orgId?: string | null;
  createdAt: Date;
}

export interface Campaign {
  id: string;
  name: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  channel: 'email' | 'social' | 'search' | 'display';
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  conversions: number;
  orgId: string;
  startDate: Date | null;
  endDate: Date | null;
  createdAt: Date;
}

export interface DashboardStats {
  totalRevenue: number;
  revenueChange: number;
  activeCampaigns: number;
  campaignChange: number;
  totalImpressions: number;
  impressionChange: number;
  conversionRate: number;
  conversionChange: number;
}

export interface RevenueDataPoint {
  month: string;
  revenue: number;
  spend: number;
}

export interface ActivityItem {
  id: string;
  action: string;
  target: string;
  user: string;
  time: string;
  type: 'create' | 'update' | 'delete' | 'success';
}
