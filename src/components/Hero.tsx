import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowDown, Github, Linkedin, Mail, Phone, Award, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenContact: () => void;
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onOpenResume }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Split Hero: Typography Left, High-Impact Media Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            {/* Quiet Unboxed Text Kicker */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-400 tracking-wide uppercase">
              <span>Full Stack Engineer</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Agentic AI Systems</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>React · Java · MongoDB</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] [text-wrap:balance]">
              Building scalable web applications & multi-agent AI platforms.
            </h1>

            {/* Lead copy specific to Subash Kannan's resume */}
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              I am <strong className="font-semibold text-zinc-200">Subash Kannan</strong>, a Full Stack Developer with 3 years of experience at <span className="text-zinc-200 font-medium">Responsive</span> building enterprise platforms and Agentic AI systems with <span className="text-zinc-200 font-medium">Google ADK</span>, dynamic tool invocation, and intelligent workflow automation across <span className="text-zinc-200 font-medium">React.js, Java (Spring Boot), and MongoDB</span>.
            </p>

            {/* Action Group */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-all shadow-sm flex items-center gap-2"
              >
                <span>View Complete Resume</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <a
                href="#work"
                className="px-5 py-2.5 text-sm font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors"
              >
                Explore Projects
              </a>

              <div className="flex items-center gap-2 pl-2 border-l border-zinc-800">
                <a
                  href={PORTFOLIO_DATA.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-900"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenContact}
                  className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-900"
                  aria-label="Send direct email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <a
                  href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                  className="p-2 text-zinc-400 hover:text-white transition-colors rounded-md hover:bg-zinc-900"
                  aria-label="Phone contact"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Key Awards & Accolades Unboxed Line */}
            <div className="pt-3 text-xs text-zinc-400 flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-zinc-300 font-medium flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-zinc-300" />
                Spot Award Winner:
              </span>
              <span>Agent Studio at Responsive</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Invited Hackathon Judge</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>AI Productivity KT Lead</span>
            </div>
          </div>

          {/* Right Column: Visual Container (Simple Rounded Corners DP) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-xl group">
              {!imageError ? (
                <img
                  src={PORTFOLIO_DATA.profile.heroImage}
                  alt="Subash Kannan - Full Stack & Agentic AI Engineer"
                  referrerPolicy="no-referrer"
                  onError={() => setImageError(true)}
                  className="w-full h-full object-cover object-center rounded-2xl hover:scale-102 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-8 bg-zinc-900 text-center">
                  <Terminal className="w-12 h-12 text-zinc-600 mb-3" />
                  <p className="text-zinc-300 font-semibold text-lg">{PORTFOLIO_DATA.profile.name}</p>
                  <p className="text-zinc-500 text-sm mt-1">{PORTFOLIO_DATA.profile.role}</p>
                </div>
              )}

              {/* Bottom tag bar */}
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-sm border border-zinc-800/80 flex items-center justify-between text-xs text-zinc-300">
                <span className="font-semibold tracking-wide text-white">Subash Kannan</span>
                <span className="text-zinc-400 font-mono text-[11px]">{PORTFOLIO_DATA.profile.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quantitative Proof Strip: Full-Width Row Directly Below Split */}
        <div className="mt-16 pt-8 border-t border-zinc-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.keyStats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-mono tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-zinc-300">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-500">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
