import React, { useState, useMemo } from 'react';
import { Bot, Cpu, CheckCircle2, AlertCircle, RefreshCw, Layers, ArrowRight, Zap, FileText, Database, ShieldCheck } from 'lucide-react';

export const ArchitectureLab: React.FC = () => {
  // Configurable Agentic AI parameters
  const [scenarioId, setScenarioId] = useState<string>('summarize');
  const [modelFamily, setModelFamily] = useState<'gpt54' | 'grok' | 'gpt52mini'>('gpt54');
  const [confidenceThreshold, setConfidenceThreshold] = useState<number>(0.80);
  const [promptOptimization, setPromptOptimization] = useState<boolean>(true);
  const [activeAgents, setActiveAgents] = useState<{ [key: string]: boolean }>({
    summarizer: true,
    toolCaller: true,
    contextual: true,
    fallback: true,
  });

  const scenarios = [
    {
      id: 'summarize',
      label: 'File Summarization',
      query: 'Summarize the 45-page SOC2 compliance RFP PDF and extract high-risk clauses.',
      targetAgent: 'File Summarization Specialist',
      tool: 'Document Parser & Vector Chunk Reranker',
      rawConfidence: 0.94,
      ambiguous: false,
    },
    {
      id: 'salesforce',
      label: 'Pricing & Salesforce Tool',
      query: 'Check custom tier pricing for Acme Corp and sync updated seats to Salesforce.',
      targetAgent: 'Revenue & Tool Invocation Agent',
      tool: 'Salesforce CRM REST API + MongoDB Pricing Cache',
      rawConfidence: 0.91,
      ambiguous: false,
    },
    {
      id: 'ambiguous',
      label: 'Ambiguous Query (Fallback)',
      query: 'Need an update on the latest proposal changes.',
      targetAgent: 'Fallback Clarification Agent',
      tool: 'Follow-Up Intent Clarifier Prompt',
      rawConfidence: 0.62,
      ambiguous: true,
      followUpQuestion: 'Which proposal would you like an update on: Acme Corp Q3 ($120k) or Globex SaaS ($85k)?',
    },
    {
      id: 'automation',
      label: 'Multi-Step Task Automation',
      query: 'Generate a ChatGPT-style contextual draft response using verified past knowledge base files.',
      targetAgent: 'Contextual Response & Knowledge Agent',
      tool: 'RAG Knowledge Retriever + Grok Validator',
      rawConfidence: 0.88,
      ambiguous: false,
    },
  ];

  const currentScenario = scenarios.find((s) => s.id === scenarioId) || scenarios[0];

  // Simulation calculations based on prompt optimization and model family
  const metrics = useMemo(() => {
    const isGrok = modelFamily === 'grok';
    const isMini = modelFamily === 'gpt52mini';

    // Base latency in ms
    let latency = isGrok ? 310 : isMini ? 160 : 280;
    if (promptOptimization) latency -= 65;

    // Confidence calibration
    let effectiveConfidence = currentScenario.rawConfidence;
    if (promptOptimization) effectiveConfidence = Math.min(0.99, effectiveConfidence + 0.05);

    // Is fallback question triggered?
    const triggersFallback = effectiveConfidence < confidenceThreshold || currentScenario.ambiguous;

    // Token savings via prompt optimization
    const tokenEfficiency = promptOptimization ? '+38%' : 'Baseline';
    const accuracyScore = triggersFallback ? '99.2% (Clarified)' : `${(effectiveConfidence * 100).toFixed(1)}% Direct`;

    return {
      latency: Math.max(95, latency),
      effectiveConfidence: (effectiveConfidence * 100).toFixed(0),
      triggersFallback,
      tokenEfficiency,
      accuracyScore,
    };
  }, [scenarioId, modelFamily, confidenceThreshold, promptOptimization, currentScenario]);

  return (
    <section id="lab" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Interactive Architecture Sandbox
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Google ADK Multi-Agent Orchestrator Simulator.
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              An interactive demonstration of Subash's Spot-Award-winning multi-agent system at Responsive: dynamic tool selection, model routing, and fallback clarification mechanisms.
            </p>
          </div>

          {/* Quick Info */}
          <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl text-xs text-zinc-300 font-mono flex items-center gap-2">
            <Bot className="w-4 h-4 text-zinc-300" />
            <span>Agent Studio Architecture</span>
          </div>
        </div>

        {/* Workbench Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Bot className="w-4 h-4 text-zinc-400" />
                Query & Model Parameters
              </span>
              <button
                onClick={() => {
                  setScenarioId('summarize');
                  setModelFamily('gpt54');
                  setConfidenceThreshold(0.80);
                  setPromptOptimization(true);
                }}
                className="text-xs text-zinc-400 hover:text-white flex items-center gap-1"
              >
                <RefreshCw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Scenario Picker */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">Select Incoming Enterprise Query</label>
              <div className="space-y-1.5">
                {scenarios.map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => setScenarioId(sc.id)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-colors flex items-center justify-between ${
                      scenarioId === sc.id
                        ? 'bg-zinc-800 border-zinc-600 text-white font-medium'
                        : 'bg-zinc-950/80 border-zinc-850 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
                    }`}
                  >
                    <span className="truncate pr-2">{sc.label}</span>
                    <span className="text-[11px] font-mono text-zinc-500 shrink-0">
                      {sc.ambiguous ? 'Fallback Test' : 'Direct Tool'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Model Family Selector */}
            <div className="space-y-2">
              <label className="text-xs font-medium text-zinc-300">LLM Validation Family</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'gpt54', label: 'GPT-5.4' },
                  { id: 'grok', label: 'Grok' },
                  { id: 'gpt52mini', label: 'GPT-5.2 mini' },
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setModelFamily(m.id as any)}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors ${
                      modelFamily === m.id
                        ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-semibold'
                        : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:border-zinc-700'
                    }`}
                  >
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Tool Confidence Slider */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-zinc-300 font-medium">Tool Invocation Confidence Threshold</span>
                <span className="font-mono text-zinc-100 tabular-nums">{(confidenceThreshold * 100).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.50"
                max="0.95"
                step="0.05"
                value={confidenceThreshold}
                onChange={(e) => setConfidenceThreshold(Number(e.target.value))}
                className="w-full accent-zinc-100 bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>50% (Permissive)</span>
                <span>80% (Recommended)</span>
                <span>95% (Strict Fallback)</span>
              </div>
            </div>

            {/* Prompt Optimization Toggle */}
            <div className="pt-2 flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-850">
              <div className="space-y-0.5">
                <div className="text-xs font-medium text-zinc-200">PROMPT Optimization Active</div>
                <div className="text-[11px] text-zinc-500">Refines context window & reduces hallucination</div>
              </div>
              <button
                type="button"
                onClick={() => setPromptOptimization(!promptOptimization)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  promptOptimization ? 'bg-zinc-100' : 'bg-zinc-800'
                }`}
              >
                <div
                  className={`w-4 h-4 rounded-full transition-transform ${
                    promptOptimization ? 'bg-zinc-950 translate-x-6' : 'bg-zinc-400 translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Results & Live Step-by-Step Flow */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-zinc-950 border border-zinc-800">
              <div className="space-y-1">
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Agent Latency</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {metrics.latency} <span className="text-xs font-normal text-zinc-500">ms</span>
                </div>
                <div className="text-[11px] text-zinc-500">End-to-end routing</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Confidence</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {metrics.effectiveConfidence}%
                </div>
                <div className="text-[11px] text-zinc-500">Google ADK intent</div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Decision Mode</span>
                </div>
                <div className="text-base font-bold text-white truncate pt-1">
                  {metrics.triggersFallback ? 'Clarification' : 'Direct Tool'}
                </div>
                <div className="text-[11px] text-zinc-500">
                  {metrics.triggersFallback ? 'Ambiguity detected' : 'Automated action'}
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-zinc-400 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Token Gain</span>
                </div>
                <div className="text-2xl font-bold font-mono text-white tabular-nums">
                  {metrics.tokenEfficiency}
                </div>
                <div className="text-[11px] text-zinc-500">Via prompt tuning</div>
              </div>
            </div>

            {/* Live Multi-Agent Pipeline Visualization */}
            <div className="p-5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 flex items-center justify-between">
                <span>Google ADK Multi-Agent Execution Trace</span>
                <span className="font-mono text-zinc-400 text-[11px]">
                  State: Resolved
                </span>
              </div>

              {/* Incoming Prompt View */}
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-xs space-y-1">
                <div className="text-zinc-500 font-mono text-[11px]">Input Prompt:</div>
                <div className="text-zinc-200 italic font-sans">"{currentScenario.query}"</div>
              </div>

              {/* Execution Steps */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="text-zinc-400 font-mono text-[11px]">Step 1: ADK Router</div>
                  <div className="font-semibold text-white">Intent Classification</div>
                  <div className="text-[11px] text-zinc-400">Score: {metrics.effectiveConfidence}%</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="text-zinc-400 font-mono text-[11px]">Step 2: Invocation</div>
                  <div className="font-semibold text-white truncate">{currentScenario.targetAgent}</div>
                  <div className="text-[11px] text-zinc-400 truncate">{currentScenario.tool}</div>
                </div>

                <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1.5">
                  <div className="text-zinc-400 font-mono text-[11px]">Step 3: Output</div>
                  <div className="font-semibold text-white">
                    {metrics.triggersFallback ? 'Follow-Up Question' : 'Contextual Response'}
                  </div>
                  <div className="text-[11px] text-zinc-400">Grounded & Verified</div>
                </div>
              </div>

              {/* Fallback Question Demonstration if applicable */}
              {metrics.triggersFallback && (
                <div className="p-3 rounded-lg bg-zinc-900/90 border border-amber-900/60 text-xs space-y-1 text-amber-200">
                  <div className="font-semibold flex items-center gap-1.5 text-amber-300">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Fallback Clarification Prompt Triggered:</span>
                  </div>
                  <p className="text-zinc-300">
                    "{currentScenario.followUpQuestion || 'Could you please specify the target project or document context to proceed?'}"
                  </p>
                </div>
              )}
            </div>

            {/* Resume Callout Note */}
            <div className="text-xs text-zinc-400 leading-relaxed bg-zinc-950/40 p-4 rounded-xl border border-zinc-800/60">
              <strong className="text-zinc-200">Production Highlight from Responsive:</strong> Subash engineered this exact multi-agent architecture using Google ADK to dynamically evaluate intent, automate background tools, and query multiple LLM backends (GPT models and Grok), earning the <span className="text-white font-medium">Spot Award for Agent Studio</span>.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
