import { recentActivity } from '@/lib/mock-data';

const typeColors: Record<string, string> = {
  create: 'bg-blue-500',
  update: 'bg-amber-500',
  delete: 'bg-red-500',
  success: 'bg-emerald-500',
};

export function RecentActivity() {
  return (
    <div className="rounded-xl border border-slate-700/50 bg-slate-900 p-6">
      <h3 className="text-lg font-semibold text-slate-50">Recent Activity</h3>
      <p className="mt-1 text-sm text-slate-400">Latest actions across your campaigns</p>

      <div className="mt-6 space-y-0">
        {recentActivity.map((item, index) => (
          <div key={item.id}>
            <div className="flex items-start gap-3 py-3">
              <div className="mt-1.5 flex-shrink-0">
                <span className={`block h-2.5 w-2.5 rounded-full ${typeColors[item.type] || 'bg-slate-500'}`} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm text-slate-300">
                  <span className="font-medium text-slate-50">{item.user}</span>{' '}
                  {item.action}{' '}
                  <span className="font-medium text-slate-200">{item.target}</span>
                </p>
                <p className="mt-0.5 text-xs text-slate-500">{item.time}</p>
              </div>
            </div>
            {index < recentActivity.length - 1 && (
              <div className="ml-[5px] border-l border-slate-700/50 pl-0 h-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
