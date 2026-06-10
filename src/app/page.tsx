import Link from 'next/link';

const features = [
  { icon: '🔐', title: 'Authentication', desc: 'Secure JWT-based auth with login, register, and session management out of the box.' },
  { icon: '📊', title: 'Dashboard Analytics', desc: 'Interactive charts and KPI cards with real-time data visualization powered by Recharts.' },
  { icon: '📣', title: 'Campaign Management', desc: 'Full CRUD for marketing campaigns with filtering, sorting, and status tracking.' },
  { icon: '👥', title: 'Team Collaboration', desc: 'Multi-tenant organizations with role-based access control and team invitations.' },
  { icon: '⚡', title: 'API Integration', desc: 'RESTful API routes with Prisma ORM for type-safe database operations and queries.' },
  { icon: '🛡️', title: 'Enterprise Security', desc: 'Route protection middleware, password hashing, and HTTP-only cookie sessions.' },
];

const tiers = [
  { name: 'Free', price: '$0', period: '/month', features: ['Up to 3 campaigns', '1,000 impressions/mo', 'Basic analytics', 'Email support'], highlighted: false },
  { name: 'Pro', price: '$29', period: '/month', features: ['Unlimited campaigns', '100K impressions/mo', 'Advanced analytics', 'Priority support', 'Team collaboration', 'Custom integrations'], highlighted: true },
  { name: 'Enterprise', price: '$99', period: '/month', features: ['Everything in Pro', 'Unlimited impressions', 'Custom dashboards', 'Dedicated support', 'SLA guarantee', 'SSO & audit logs'], highlighted: false },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-violet-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            </div>
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-xl font-bold text-transparent">SaaSforge</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-slate-400 transition hover:text-slate-200">Features</a>
            <a href="#pricing" className="text-sm text-slate-400 transition hover:text-slate-200">Pricing</a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login" className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white">Log in</Link>
            <Link href="/register" className="rounded-lg bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-blue-500/20 transition hover:brightness-110">Get Started</Link>
          </div>
        </nav>

        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 pb-20 pt-20 text-center lg:pt-32">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/50 px-4 py-1.5 text-xs text-slate-400 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Now in public beta — free to use
          </div>
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Build SaaS Products{' '}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">10x Faster</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 md:text-xl">
            A production-grade starter with authentication, analytics dashboard, campaign management, and everything you need to launch your SaaS — in hours, not months.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:brightness-110 hover:shadow-2xl hover:shadow-blue-500/30">
              Start Building Free
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/login" className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-slate-300 backdrop-blur transition-all hover:border-slate-600 hover:bg-slate-800">
              View Demo Dashboard
            </Link>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-slate-800 bg-slate-900/30 py-12">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-12 px-6 lg:gap-20">
            {[
              ['10K+', 'Users'],
              ['99.9%', 'Uptime'],
              ['50+', 'Integrations'],
              ['24/7', 'Support'],
            ].map(([value, label]) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold text-slate-50">{value}</p>
                <p className="mt-1 text-sm text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Everything you need to ship fast</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">Production-ready features that let you focus on your unique business logic instead of boilerplate.</p>
          </div>
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group rounded-xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur transition-all duration-300 hover:scale-[1.02] hover:border-slate-600/50 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-blue-500/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-800 text-2xl">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-50">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="mx-auto max-w-5xl px-6 py-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Simple, transparent pricing</h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-400">Choose the plan that fits your needs. Upgrade anytime as you grow.</p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div key={tier.name} className={`relative rounded-2xl border p-8 transition-all duration-300 ${tier.highlighted ? 'border-blue-500/50 bg-gradient-to-b from-blue-500/10 to-violet-500/5 shadow-xl shadow-blue-500/10' : 'border-slate-700/50 bg-slate-900/50 hover:border-slate-600/50'}`}>
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 px-3 py-0.5 text-xs font-semibold text-white">Most Popular</div>
                )}
                <h3 className="text-lg font-semibold text-slate-50">{tier.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-slate-50">{tier.price}</span>
                  <span className="text-sm text-slate-500">{tier.period}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-slate-300">
                      <svg className="h-4 w-4 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link href="/register" className={`mt-8 block w-full rounded-lg py-2.5 text-center text-sm font-semibold transition-all ${tier.highlighted ? 'bg-gradient-to-r from-blue-500 to-violet-500 text-white shadow-lg shadow-blue-500/20 hover:brightness-110' : 'border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-6 py-24">
          <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 via-violet-500/10 to-purple-500/10 border border-blue-500/20 p-12 text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to get started?</h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-400">Join thousands of developers who ship faster with SaaSforge.</p>
            <Link href="/register" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-blue-500/25 transition-all hover:brightness-110">
              Start Building — It&apos;s Free
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-800 px-6 py-12">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-violet-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <span className="text-sm font-semibold text-slate-400">SaaSforge</span>
            </div>
            <p className="text-xs text-slate-600">&copy; {new Date().getFullYear()} Qifan Feng. Built with Next.js, Prisma &amp; Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
