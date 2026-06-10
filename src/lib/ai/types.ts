export type LlmProviderType = 'openai' | 'anthropic' | 'deepseek' | 'auto';

export interface AiGenerationRequest {
  prompt: string;
  provider: LlmProviderType;
  context?: Record<string, any>;
}

export interface AiGenerationResponse {
  content: string;
  provider: LlmProviderType;
  model: string;
  latencyMs: number;
}
