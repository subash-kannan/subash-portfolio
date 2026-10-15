import React, { useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ExternalLink, Github, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-8 text-zinc-100">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/60">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Preview */}
        <div className="relative w-full aspect-[16/9] bg-zinc-950 border-b border-zinc-800 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-80 pointer-events-none" />
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Title and Summary */}
          <div>
            <h2 id="modal-project-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {project.title}
            </h2>
            <p className="text-base text-zinc-400 mt-1">{project.subtitle}</p>
            <p className="text-sm text-zinc-300 mt-4 leading-relaxed">{project.summary}</p>
          </div>

          {/* Quantitative Impact Strip */}
          <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-zinc-950 border border-zinc-800">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="text-xl font-bold text-white font-mono tabular-nums">{m.value}</div>
                <div className="text-xs text-zinc-400">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Problem & Solution Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">The Problem</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">The Solution</h3>
              <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architectural Decisions */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">Architectural Decisions</h3>
            <div className="space-y-2">
              {project.architectureNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                  <span className="text-zinc-500 font-mono text-xs mt-0.5">0{idx + 1}.</span>
                  <p>{note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack - Unboxed Text with Separators */}
          <div className="pt-4 border-t border-zinc-800">
            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">Technologies Used</div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300 font-mono">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span>{tech}</span>
                  {idx < project.techStack.length - 1 && <span aria-hidden="true" className="text-zinc-600">·</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors"
            >
              Close Window
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
