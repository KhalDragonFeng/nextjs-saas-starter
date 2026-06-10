'use client';

import { useState, useEffect } from 'react';

type AiCopy = {
  id: string;
  prompt: string;
  content: string;
  provider: string;
  createdAt: string;
};

export function AiCopywriter({ campaignId }: { campaignId: string }) {
  const [prompt, setPrompt] = useState('');
  const [provider, setProvider] = useState('auto');
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<AiCopy[]>([]);
  const [error, setError] = useState('');

  const fetchHistory = async () => {
    try {
      const res = await fetch(`/api/campaigns/${campaignId}/ai`);
      if (res.ok) {
        const data = await res.json();
        setHistory(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, [campaignId]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`/api/campaigns/${campaignId}/ai`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, provider }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Failed to generate');
      }

      setPrompt('');
      await fetchHistory();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-white">AI Copywriter</h2>
          <p className="text-sm text-slate-400">Generate ad copy using our Multi-LLM routing engine.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-slate-400">LLM Router:</span>
          <select 
            className="bg-slate-800 border border-slate-700 text-white rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={provider}
            onChange={(e) => setProvider(e.target.value)}
          >
            <option value="auto">Auto (Smart Routing)</option>
            <option value="openai">OpenAI (GPT-4o)</option>
            <option value="deepseek">DeepSeek (V3)</option>
            <option value="anthropic">Anthropic (Claude 3.5)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe what you want the ad copy to be about... e.g. 'A promotion for our new summer features targeting enterprise clients.'"
          className="w-full h-32 bg-slate-950 border border-slate-800 rounded-lg p-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        <div className="flex items-center justify-between">
          <span className="text-red-400 text-sm">{error}</span>
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium px-6 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating with AI...
              </>
            ) : (
              '✨ Generate Copy'
            )}
          </button>
        </div>
      </div>

      {history.length > 0 && (
        <div className="mt-8 pt-8 border-t border-slate-800">
          <h3 className="text-lg font-medium text-white mb-4">Generated History</h3>
          <div className="space-y-4">
            {history.map((copy) => (
              <div key={copy.id} className="bg-slate-950 rounded-lg p-4 border border-slate-800/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                    {copy.provider}
                  </span>
                  <span className="text-xs text-slate-500">
                    {new Date(copy.createdAt).toLocaleString()}
                  </span>
                </div>
                <p className="text-sm text-slate-400 mb-2 italic">"{copy.prompt}"</p>
                <div className="text-slate-200 whitespace-pre-wrap text-sm leading-relaxed">
                  {copy.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
