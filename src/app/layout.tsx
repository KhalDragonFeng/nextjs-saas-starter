import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSforge — Modern SaaS Starter',
  description:
    'Production-grade SaaS starter with authentication, analytics dashboard, campaign management, and team collaboration. Built with Next.js 15, Prisma, and Tailwind CSS.',
  keywords: ['SaaS', 'Next.js', 'Dashboard', 'Starter', 'Template'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
