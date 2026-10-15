import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Work Experience & Track Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            3 Years building enterprise web & Agentic AI platforms.
          </h2>
          <p className="text-zinc-400 text-sm">
            Proven trajectory at Responsive spanning multi-agent architectures, customer support portals, revenue-impacting pricing flows, and organization-wide AI productivity adoption.
          </p>
        </div>

        {/* Roles Progression Timeline */}
        <div className="space-y-8">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-zinc-400" />
            <span>Responsive (Coimbatore, India) — Roles Progression</span>
          </h3>

          <div className="space-y-10">
            {PORTFOLIO_DATA.experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative pl-0 md:pl-8 md:border-l md:border-zinc-800 space-y-4 group"
              >
                {/* Marker */}
                <div className="hidden md:block absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-zinc-200 transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {exp.role}
                    </h4>
                    <div className="text-xs text-zinc-400 font-medium">
                      {exp.company} · {exp.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400">
                    {exp.period}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed max-w-4xl">
                  {exp.summary}
                </p>

                {/* Achievements List */}
                <div className="space-y-2 max-w-4xl pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                      <span className="text-zinc-500 font-mono text-xs mt-0.5 shrink-0">→</span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Skills unboxed */}
                <div className="pt-2 text-xs text-zinc-400 font-mono flex flex-wrap gap-x-2 gap-y-1">
                  <span className="text-zinc-400">Key Technologies:</span>
                  {exp.skills.map((skill, sIdx) => (
                    <React.Fragment key={skill}>
                      <span>{skill}</span>
                      {sIdx < exp.skills.length - 1 && (
                        <span aria-hidden="true" className="text-zinc-600">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Rigor */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-zinc-400" />
            <span>Education & Academic Distinction</span>
          </h3>

          <div className="p-6 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="text-lg font-bold text-white">
                {PORTFOLIO_DATA.education.institution}
              </div>
              <div className="text-sm text-zinc-300 font-medium">
                {PORTFOLIO_DATA.education.degree}
              </div>
              <div className="text-xs text-zinc-400 font-mono">
                {PORTFOLIO_DATA.education.location} · {PORTFOLIO_DATA.education.period}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800 text-center shrink-0">
              <div className="text-3xl font-bold font-mono text-white tabular-nums">
                {PORTFOLIO_DATA.education.cgpa}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5">Cumulative GPA (Out of 10)</div>
              <div className="text-[11px] text-zinc-400 font-medium mt-1">First Class with Distinction</div>
            </div>
          </div>
        </div>

        {/* Honors, Spot Award & Hackathon Judging */}
        <div className="pt-8 border-t border-zinc-800/80 space-y-6">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Award className="w-4 h-4 text-zinc-400" />
            <span>Honors & Key Achievements</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PORTFOLIO_DATA.awards.map((award, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">
                    {award.title}
                  </span>
                  <span className="text-xs font-mono text-zinc-400">
                    {award.year}
                  </span>
                </div>
                <div className="text-xs text-zinc-400 font-medium">
                  {award.organization}
                </div>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
