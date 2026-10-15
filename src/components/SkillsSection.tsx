import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <section id="skills" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Technical Competencies
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Domain expertise & architecture stack.
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              Battle-tested tools, protocols, and runtimes leveraged across enterprise production systems.
            </p>
          </div>

          {/* Interactive Category Selector (Buttons with click handlers) */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto shrink-0">
            {PORTFOLIO_DATA.skillCategories.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeTab === idx
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Skill Category View */}
        <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6">
          <div className="border-b border-zinc-800 pb-4">
            <h3 className="text-xl font-bold text-white">
              {PORTFOLIO_DATA.skillCategories[activeTab].title}
            </h3>
            <p className="text-sm text-zinc-400 mt-1">
              {PORTFOLIO_DATA.skillCategories[activeTab].description}
            </p>
          </div>

          {/* Skills Grid: Clean Unboxed Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.skillCategories[activeTab].skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-zinc-950 border border-zinc-850 hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white text-sm">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {skill.level}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 font-mono">
                  {skill.context}
                </p>
              </div>
            ))}
          </div>

          {/* Full overview horizontal listing */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-400 font-mono">
            <span className="text-zinc-300 font-medium">Daily Runtimes & Languages:</span>
            <span>TypeScript</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Go</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Python</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>PostgreSQL</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Redis</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Kafka</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Docker / Kubernetes</span>
          </div>
        </div>
      </div>
    </section>
  );
};
