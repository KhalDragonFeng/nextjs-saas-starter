import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { aiRouter } from '@/lib/ai/router';
import { LlmProviderType } from '@/lib/ai/types';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    const { prompt, provider } = await request.json();

    if (!prompt) {
      return NextResponse.json({ error: 'Prompt is required' }, { status: 400 });
    }

    // Call the Multi-LLM Router
    const aiResponse = await aiRouter.route({
      prompt,
      provider: provider as LlmProviderType || 'auto',
    });

    // Save the generated copy to the database
    let aiCopy;
    try {
      aiCopy = await prisma.aiCopy.create({
        data: {
          prompt,
          content: aiResponse.content,
          provider: aiResponse.provider,
          campaignId: resolvedParams.id,
        },
      });
    } catch (e) {
      aiCopy = {
        id: 'mock-ai-' + Date.now(),
        prompt,
        content: aiResponse.content,
        provider: aiResponse.provider,
        campaignId: resolvedParams.id,
        createdAt: new Date()
      };
    }

    return NextResponse.json({
      success: true,
      data: {
        ...aiCopy,
        modelUsed: aiResponse.model,
        latencyMs: aiResponse.latencyMs,
      }
    });
  } catch (error: any) {
    console.error('[AI Generation Error]', error);
    return NextResponse.json({ error: error.message || 'Failed to generate AI copy' }, { status: 500 });
  }
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const resolvedParams = await params;
    let copies = [];
    try {
      copies = await prisma.aiCopy.findMany({
        where: { campaignId: resolvedParams.id },
        orderBy: { createdAt: 'desc' },
      });
    } catch (e) {}
    
    return NextResponse.json(copies);
  } catch (error) {
    return NextResponse.json([], { status: 200 });
  }
}
