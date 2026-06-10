import { AiGenerationRequest, AiGenerationResponse } from '../types';

export abstract class BaseLlmProvider {
  protected abstract providerName: string;
  protected abstract defaultModel: string;

  /**
   * Generates content using the specific LLM API.
   * Throws an error if generation fails, allowing the router to catch and fallback.
   */
  abstract generate(request: AiGenerationRequest): Promise<AiGenerationResponse>;

  /**
   * Mock utility for demonstration purposes.
   * In a real environment, this would be an actual SDK call (e.g. `openai.chat.completions.create`)
   */
  protected async simulateNetworkLatency(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
