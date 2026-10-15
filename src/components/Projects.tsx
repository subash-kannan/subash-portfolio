import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, Layers } from 'lucide-react';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'agentic-ai', label: 'Agentic AI & Google ADK' },
    { id: 'revenue', label: 'Pricing & Salesforce' },
    { id: 'fullstack', label: 'Support & Management' },
    { id: 'productivity', label: 'AI Dev Productivity' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-20 md:py-28 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Featured Projects at Responsive
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Agentic AI systems, enterprise portals & revenue modules.
            </h2>
            <p className="text-zinc-400 text-sm max-w-xl">
              Production systems engineered using React.js, Java (Spring Boot), MongoDB, and Google ADK dynamic multi-agent architectures.
            </p>
          </div>

          {/* Interactive Filter Segmented Control */}
          <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            // Bento sizing rules: First item gets 8 cols on large screens, second gets 4 cols, etc.
            const isWide = idx === 0 || idx === 3;
            const colSpan = isWide ? 'lg:col-span-8' : 'lg:col-span-4';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`${colSpan} group relative bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:shadow-black/50`}
              >
                {/* Media frame */}
                <div className={`relative w-full overflow-hidden bg-zinc-950 ${isWide ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[102%] group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent pointer-events-none" />

                  {/* Corner action indicator */}
                  <div className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-950/70 border border-zinc-800 text-zinc-300 group-hover:text-white group-hover:bg-zinc-950 transition-colors">
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Zero-Pill Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-zinc-400">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-zinc-100 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-400 line-clamp-1">{project.subtitle}</p>
                    <p className="text-sm text-zinc-300 line-clamp-2 leading-relaxed mt-2">
                      {project.summary}
                    </p>
                  </div>

                  {/* Quantitative proof metrics */}
                  <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-3 gap-2">
                    {project.metrics.map((m, mIdx) => (
                      <div key={mIdx}>
                        <div className="text-sm font-bold text-white font-mono tabular-nums">{m.value}</div>
                        <div className="text-[11px] text-zinc-500 truncate">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack line: clean unboxed text */}
                  <div className="pt-2 text-xs text-zinc-400 font-mono flex flex-wrap gap-x-2 gap-y-1">
                    {project.techStack.slice(0, 4).map((tech, tIdx) => (
                      <React.Fragment key={tech}>
                        <span>{tech}</span>
                        {tIdx < Math.min(3, project.techStack.length - 1) && (
                          <span aria-hidden="true" className="text-zinc-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
