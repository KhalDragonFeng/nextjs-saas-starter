import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { mockCampaigns } from '@/lib/mock-data';

export async function GET() {
  try {
    const campaigns = await prisma.campaign.findMany({ orderBy: { createdAt: 'desc' } });
    if (campaigns.length === 0) {
      return NextResponse.json(mockCampaigns);
    }
    return NextResponse.json(campaigns);
  } catch {
    return NextResponse.json(mockCampaigns);
  }
}

export async function POST(request: Request) {
  try {
    const { name, channel, budget, startDate, endDate } = await request.json();
    let campaign;
    try {
      campaign = await prisma.campaign.create({
        data: {
          name,
          channel: channel || 'email',
          budget: budget || 0,
          startDate: startDate ? new Date(startDate) : null,
          endDate: endDate ? new Date(endDate) : null,
          orgId: 'default-org',
        },
      });
    } catch (e) {
      console.log('Prisma DB error on Vercel POST, falling back to mock');
      campaign = {
        id: 'mock-camp-' + Date.now(),
        name,
        status: 'draft',
        channel: channel || 'email',
        budget: budget || 0,
        spent: 0,
        roi: 0,
        startDate: startDate ? new Date(startDate) : null,
        endDate: endDate ? new Date(endDate) : null,
        orgId: 'default-org',
        createdAt: new Date(),
        updatedAt: new Date()
      };
    }
    return NextResponse.json(campaign, { status: 201 });
  }
}
