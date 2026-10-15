import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-sm bg-zinc-100 inline-block" />
              <span>{PORTFOLIO_DATA.profile.name}</span>
            </div>
            <p className="text-zinc-500">
              Full Stack Engineer | Agentic AI · React · Java · MongoDB · Responsive
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap items-center gap-6 text-zinc-400">
            <a href="#work" className="hover:text-zinc-100 transition-colors">Work</a>
            <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#philosophy" className="hover:text-zinc-100 transition-colors">Philosophy</a>
            <a href="#skills" className="hover:text-zinc-100 transition-colors">Skills</a>
            <a href="#lab" className="hover:text-zinc-100 transition-colors">Systems Lab</a>
            <button onClick={onOpenResume} className="hover:text-zinc-100 transition-colors">Resume</button>
            <button onClick={onOpenContact} className="hover:text-zinc-100 transition-colors">Contact</button>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500">
          <div>
            © {new Date().getFullYear()} Subash K. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={PORTFOLIO_DATA.profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-300 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true">·</span>
            <button
              onClick={scrollToTop}
              className="hover:text-zinc-300 transition-colors flex items-center gap-1"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
