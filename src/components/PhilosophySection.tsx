import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Technical Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Principles that govern system design.
          </h2>
          <p className="text-zinc-400 text-sm">
            Architectural decisions rooted in real production outages, tail-latency debugging, and long-term codebase maintainability.
          </p>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.principles.map((principle) => (
            <div
              key={principle.number}
              className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-4"
            >
              <div className="text-zinc-500 font-mono text-sm tracking-wider">
                {principle.number}
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {principle.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
