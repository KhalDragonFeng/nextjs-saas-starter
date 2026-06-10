import { AiGenerationRequest, AiGenerationResponse } from './types';
import { OpenAiProvider } from './providers/openai';
import { DeepSeekProvider } from './providers/deepseek';

export class MultiLlmRouter {
  private providers: Record<string, any> = {
    openai: new OpenAiProvider(),
    deepseek: new DeepSeekProvider(),
  };

  /**
   * Primary entry point for all AI generation requests.
   * Handles provider selection, automatic fallbacks, and monitoring.
   */
  async route(request: AiGenerationRequest): Promise<AiGenerationResponse> {
    // Determine primary provider
    let primaryProvider = request.provider;
    
    if (primaryProvider === 'auto' || primaryProvider === 'anthropic') {
      // In a real app, 'auto' might route based on context, token size, or current API health/cost.
      // We map anthropic to openai here just as a fallback simulation since we only mocked 2.
      primaryProvider = 'openai';
    }

    try {
      console.log(`[AI Router] Routing request to primary provider: ${primaryProvider}`);
      return await this.providers[primaryProvider].generate(request);
    } catch (error) {
      console.error(`[AI Router] Primary provider ${primaryProvider} failed:`, error);
      
      // Fallback logic
      const fallbackProvider = primaryProvider === 'openai' ? 'deepseek' : 'openai';
      console.log(`[AI Router] Initiating fallback to secondary provider: ${fallbackProvider}`);
      
      try {
        return await this.providers[fallbackProvider].generate(request);
      } catch (fallbackError) {
        console.error(`[AI Router] Fallback provider ${fallbackProvider} also failed:`, fallbackError);
        throw new Error('All available AI providers failed to generate content.');
      }
    }
  }
}

// Export a singleton instance
export const aiRouter = new MultiLlmRouter();
