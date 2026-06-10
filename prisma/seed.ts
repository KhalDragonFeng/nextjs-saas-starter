import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clean existing data
  await prisma.campaign.deleteMany();
  await prisma.user.deleteMany();
  await prisma.organization.deleteMany();

  // Create organization
  const org = await prisma.organization.create({
    data: { name: 'Acme Corp', plan: 'pro' },
  });
  console.log('✅ Created organization:', org.name);

  // Create demo user
  const passwordHash = await hash('password123', 10);
  const user = await prisma.user.create({
    data: {
      name: 'Demo User',
      email: 'demo@saas.com',
      passwordHash,
      role: 'admin',
      orgId: org.id,
    },
  });
  console.log('✅ Created user:', user.email);

  // Create campaigns
  const campaigns = await Promise.all([
    prisma.campaign.create({ data: { name: 'Summer Flash Sale', status: 'active', channel: 'email', budget: 15000, spent: 8420, impressions: 342000, clicks: 12800, conversions: 890, orgId: org.id, startDate: new Date('2025-06-01'), endDate: new Date('2025-08-31') } }),
    prisma.campaign.create({ data: { name: 'Q4 Brand Awareness', status: 'active', channel: 'display', budget: 28000, spent: 14200, impressions: 890000, clicks: 24500, conversions: 1200, orgId: org.id, startDate: new Date('2025-10-01'), endDate: new Date('2025-12-31') } }),
    prisma.campaign.create({ data: { name: 'Holiday Promo 2025', status: 'draft', channel: 'social', budget: 20000, spent: 0, impressions: 0, clicks: 0, conversions: 0, orgId: org.id, startDate: new Date('2025-11-15'), endDate: new Date('2025-12-25') } }),
    prisma.campaign.create({ data: { name: 'Spring Product Launch', status: 'completed', channel: 'search', budget: 12000, spent: 11800, impressions: 520000, clicks: 18900, conversions: 2100, orgId: org.id, startDate: new Date('2025-03-01'), endDate: new Date('2025-05-31') } }),
    prisma.campaign.create({ data: { name: 'Beta User Onboarding', status: 'paused', channel: 'email', budget: 5000, spent: 2100, impressions: 85000, clicks: 4200, conversions: 380, orgId: org.id, startDate: new Date('2025-07-01'), endDate: new Date('2025-09-30') } }),
    prisma.campaign.create({ data: { name: 'Influencer Outreach v2', status: 'active', channel: 'social', budget: 35000, spent: 18500, impressions: 1200000, clicks: 45000, conversions: 3200, orgId: org.id, startDate: new Date('2025-08-01'), endDate: new Date('2025-12-31') } }),
    prisma.campaign.create({ data: { name: 'Retargeting Warm Leads', status: 'active', channel: 'display', budget: 8000, spent: 5600, impressions: 420000, clicks: 15800, conversions: 920, orgId: org.id, startDate: new Date('2025-09-01'), endDate: new Date('2025-11-30') } }),
    prisma.campaign.create({ data: { name: 'SEO Content Push', status: 'completed', channel: 'search', budget: 6000, spent: 5900, impressions: 310000, clicks: 28000, conversions: 1850, orgId: org.id, startDate: new Date('2025-01-01'), endDate: new Date('2025-06-30') } }),
    prisma.campaign.create({ data: { name: 'Newsletter Reactivation', status: 'draft', channel: 'email', budget: 3000, spent: 0, impressions: 0, clicks: 0, conversions: 0, orgId: org.id } }),
    prisma.campaign.create({ data: { name: 'Product Hunt Launch', status: 'completed', channel: 'social', budget: 2000, spent: 1950, impressions: 180000, clicks: 9200, conversions: 680, orgId: org.id, startDate: new Date('2025-04-15'), endDate: new Date('2025-04-30') } }),
  ]);
  console.log(`✅ Created ${campaigns.length} campaigns`);

  console.log('\n🎉 Database seeded successfully!');
  console.log('   Login: demo@saas.com / password123\n');
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error(e); await prisma.$disconnect(); process.exit(1); });
