import { Header } from '@/components/dashboard/Header';
import { StatsCards } from '@/components/dashboard/StatsCards';
import { RevenueChart } from '@/components/dashboard/RevenueChart';
import { RecentActivity } from '@/components/dashboard/RecentActivity';

export default function DashboardPage() {
  return (
    <div>
      <Header title="Dashboard" subtitle="Welcome back, here's your overview" />

      <div className="mt-8">
        <StatsCards />
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RevenueChart />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>
    </div>
  );
}
