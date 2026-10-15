import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Copy, Check, Printer, Mail, ExternalLink, Award, BookOpen, Briefcase, Cpu, Layers } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenContact }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyMarkdown = () => {
    const markdown = `# Subash Kannan
**Full Stack Engineer | Agentic AI | React • Java • MongoDB**
Email: subashkannan2023@gmail.com | Phone: +91 7539943786
LinkedIn: linkedin.com/in/subash-kannan | Location: Coimbatore, India.

---

## SUMMARY
Full Stack Developer with 3 years of experience building scalable web applications and AI driven platforms. Specialized in developing Agentic AI systems and multi-agent architectures using Google ADK, enabling dynamic tool invocation and intelligent workflow automation.
Strong expertise in React.js, Java (Spring Boot), and MongoDB with hands-on experience in building customer-facing platforms, support systems, and revenue-impacting features. Proven track record of improving developer productivity using AI-assisted tools like Cursor and Codex. Recognized for technical excellence, innovation, and strong collaboration.

---

## EXPERIENCE (3 YEARS — Jul 2023 – Present)
**Software Engineer — Responsive** | 2026 – Present
**Associate Software Engineer — Responsive** | July 2024 – July 2026
**Intern — Responsive** | July 2023 – July 2024

### Responsive (Coimbatore, India) — Associate Software Engineer

#### #1 Project: Agentic AI Platform (Multi-Agent System)
**Technologies:** React.js, Google ADK, GPT Models (5.2 mini, 5.4), Grok.
Worked on building an advanced Agentic AI platform that enables users to create custom agents and interact via a ChatGPT-like interface.
**Responsibilities:**
- Designed and implemented a multi-agent architecture where Google ADK dynamically decides which agent/tool to invoke based on user queries
- Built intelligent workflows for file summarization, contextual responses, and task automation
- Enabled dynamic tool integration allowing agents to handle diverse user requirements
- Implemented fallback mechanisms where the system asks follow-up questions to better understand user intent
- Experimented and validated responses using multiple LLMs including GPT and Grok
- Contributed to improving overall system intelligence and response accuracy via PROMPT optimization.

#### #2 Project: Support Portal (Customer Management System)
**Technologies:** React.js, Java, MongoDB
Contributed to both frontend and backend development of key modules, gaining hands-on experience with full-stack application architecture.
**Responsibilities:**
- Built end-to-end features for customer data management and issue tracking
- Designed REST APIs and integrated frontend with backend services
- Ensured smooth user experience with responsive UI using React.js.

#### #3 Project: Pricing & Packaging System
**Technologies:** React.js, Java, MongoDB, Salesforce integration
Worked on a business-critical module directly contributing to company revenue.
**Responsibilities:**
- Developed pricing and packaging features used in customer onboarding and sales flows
- Implemented UI components as a common component so that it can be reused.
- Contributed to optimizing business logic impacting revenue generation.

---

## ADDITIONAL CONTRIBUTIONS
- Increased team productivity by ~120% using AI tools like Cursor, Codex, and ChatGPT
- Conducted Knowledge Transfer sessions on effective usage of AI-assisted development tools
- Actively used Jira for task tracking and Agile workflows
- Collaborated via Slack and worked closely with design teams using Figma

---

## AWARDS & ACHIEVEMENTS
- Spot Award – Agent Studio for outstanding contribution
- Invited as Hackathon Judge & Chief Guest
- Conducted internal sessions on AI tools (Cursor & Codex) adoption
- Recognized for innovation and impactful feature delivery

---

## EDUCATION
**Sri Shakthi Institute of Engineering and Technology** | July 2020 – May 2024
Coimbatore, Tamil Nadu
Bachelor's degree (B.E) | CGPA: 9.02

---

## TECHNOLOGIES
- **Frontend:** React.js, TypeScript
- **Backend:** Java
- **AI/ML:** Agentic AI, Google ADK, GPT Models (5.2 mini, 5.4), Grok, RAG, LLM
- **Tools:** Postman, VS Code, Cursor, Codex, Eclipse, IntelliJ, Mongo Compass, SourceTree, JIRA, Figma
- **Database:** MongoDB
- **Version Control:** GitHub, SourceTree
`;

    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-resume-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl my-8 text-zinc-100 flex flex-col max-h-[92vh]">
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/90 shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Official Resume
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400 font-mono">Subash Kannan</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyMarkdown}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors flex items-center gap-1.5"
              title="Copy resume in clean Markdown format"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Markdown' : 'Copy Markdown'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors ml-1"
              aria-label="Close resume dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-zinc-950 font-sans text-sm">
          {/* Header Profile */}
          <div className="border-b border-zinc-800 pb-6 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h1 id="modal-resume-title" className="text-3xl font-bold tracking-tight text-white">
                Subash Kannan
              </h1>
              <div className="text-xs font-mono text-zinc-400">
                Coimbatore, India
              </div>
            </div>

            <div className="text-base font-semibold text-zinc-200">
              Full Stack Engineer | Agentic AI | React • Java • MongoDB
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-400 font-mono pt-1">
              <span>Email: <a href="mailto:subashkannan2023@gmail.com" className="text-zinc-300 hover:underline">subashkannan2023@gmail.com</a></span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Phone: <a href="tel:+917539943786" className="text-zinc-300 hover:underline">+91 7539943786</a></span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>LinkedIn: <a href="https://linkedin.com/in/subash-kannan" target="_blank" rel="noreferrer" className="text-zinc-300 hover:underline">linkedin.com/in/subash-kannan</a></span>
            </div>
          </div>

          {/* SUMMARY */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              SUMMARY
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm">
              Full Stack Developer with <strong>3 years of experience</strong> building scalable web applications and AI driven platforms. Specialized in developing <strong>Agentic AI systems and multi-agent architectures using Google ADK</strong>, enabling dynamic tool invocation and intelligent workflow automation.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm">
              Strong expertise in <strong>React.js, Java (Spring Boot), and MongoDB</strong> with hands-on experience in building customer-facing platforms, support systems, and revenue-impacting features. Proven track record of improving developer productivity using AI-assisted tools like Cursor and Codex. Recognized for technical excellence, innovation, and strong collaboration.
            </p>
          </div>

          {/* EXPERIENCE CHRONOLOGY */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              EXPERIENCE
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850">
                <span className="font-semibold text-white text-sm">Software Engineer — Responsive</span>
                <span className="font-mono text-zinc-400">2026 – Present</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850">
                <span className="font-semibold text-white text-sm">Associate Software Engineer — Responsive</span>
                <span className="font-mono text-zinc-400">July 2024 – July 2026</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-850">
                <span className="font-semibold text-white text-sm">Intern — Responsive</span>
                <span className="font-mono text-zinc-400">July 2023 – July 2024</span>
              </div>
            </div>
          </div>

          {/* DETAILED PROJECTS AT RESPONSIVE */}
          <div className="space-y-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              KEY PROJECTS (RESPONSIVE · COIMBATORE, INDIA · 3 YEARS)
            </h2>

            {/* Project 1 */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-white text-base">
                  #1 Project: Agentic AI Platform (Multi-Agent System)
                </h3>
                <span className="text-xs text-zinc-400 font-mono">Spot Award Winner</span>
              </div>

              <div className="text-xs font-mono text-zinc-400">
                <strong className="text-zinc-300">Technologies:</strong> React.js, Google ADK, GPT Models (5.2 mini, 5.4), Grok.
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Worked on building an advanced Agentic AI platform that enables users to create custom agents and interact via a ChatGPT-like interface.
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-zinc-300">Responsibilities:</div>
                <ul className="space-y-1.5 pl-4 list-disc text-zinc-300 text-xs">
                  <li className="leading-relaxed">
                    Designed and implemented a <strong>multi-agent architecture where Google ADK dynamically decides which agent/tool to invoke</strong> based on user queries.
                  </li>
                  <li className="leading-relaxed">
                    Built intelligent workflows for file summarization, contextual responses, and task automation.
                  </li>
                  <li className="leading-relaxed">
                    Enabled dynamic tool integration allowing agents to handle diverse user requirements.
                  </li>
                  <li className="leading-relaxed">
                    Implemented fallback mechanisms where the system asks follow-up questions to better understand user intent.
                  </li>
                  <li className="leading-relaxed">
                    Experimented and validated responses using multiple LLMs including GPT and Grok.
                  </li>
                  <li className="leading-relaxed">
                    Contributed to improving overall system intelligence and response accuracy via PROMPT optimization.
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 2 */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-white text-base">
                  #2 Project: Support Portal (Customer Management System)
                </h3>
                <span className="text-xs text-zinc-400 font-mono">Full-Stack Application</span>
              </div>

              <div className="text-xs font-mono text-zinc-400">
                <strong className="text-zinc-300">Technologies:</strong> React.js, Java, MongoDB.
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Contributed to both frontend and backend development of key modules, gaining hands-on experience with full-stack application architecture.
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-zinc-300">Responsibilities:</div>
                <ul className="space-y-1.5 pl-4 list-disc text-zinc-300 text-xs">
                  <li className="leading-relaxed">
                    Built end-to-end features for customer data management and issue tracking.
                  </li>
                  <li className="leading-relaxed">
                    Designed REST APIs and integrated frontend with backend services.
                  </li>
                  <li className="leading-relaxed">
                    Ensured smooth user experience with responsive UI using React.js.
                  </li>
                </ul>
              </div>
            </div>

            {/* Project 3 */}
            <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="font-bold text-white text-base">
                  #3 Project: Pricing & Packaging System
                </h3>
                <span className="text-xs text-zinc-400 font-mono">Revenue Critical</span>
              </div>

              <div className="text-xs font-mono text-zinc-400">
                <strong className="text-zinc-300">Technologies:</strong> React.js, Java, MongoDB, Salesforce integration.
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                Worked on a business-critical module directly contributing to company revenue.
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-xs font-semibold text-zinc-300">Responsibilities:</div>
                <ul className="space-y-1.5 pl-4 list-disc text-zinc-300 text-xs">
                  <li className="leading-relaxed">
                    Developed pricing and packaging features used in customer onboarding and sales flows.
                  </li>
                  <li className="leading-relaxed">
                    Implemented UI components as a common component so that it can be reused across the platform.
                  </li>
                  <li className="leading-relaxed">
                    Contributed to optimizing business logic impacting revenue generation.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* ADDITIONAL CONTRIBUTIONS */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              ADDITIONAL CONTRIBUTIONS
            </h2>
            <ul className="space-y-1.5 pl-4 list-disc text-zinc-300 text-xs">
              <li className="leading-relaxed">
                Increased team productivity by <strong>~120%</strong> using AI tools like Cursor, Codex, and ChatGPT.
              </li>
              <li className="leading-relaxed">
                Conducted Knowledge Transfer (KT) sessions on effective usage of AI-assisted development tools.
              </li>
              <li className="leading-relaxed">
                Actively used Jira for task tracking and Agile sprint workflows.
              </li>
              <li className="leading-relaxed">
                Collaborated via Slack and worked closely with design teams using Figma.
              </li>
            </ul>
          </div>

          {/* AWARDS & ACHIEVEMENTS */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              AWARDS & ACHIEVEMENTS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Spot Award – Agent Studio</span>
                </div>
                <div className="text-zinc-400">Awarded for outstanding contribution to the multi-agent AI system at Responsive.</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-zinc-300" />
                  <span>Invited Hackathon Judge & Chief Guest</span>
                </div>
                <div className="text-zinc-400">Invited to judge collegiate hackathons and evaluate student engineering projects.</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                <div className="font-semibold text-white">AI Tools KT Adoption Leader</div>
                <div className="text-zinc-400">Conducted internal sessions on AI tools (Cursor & Codex) adoption across squads.</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800 space-y-1">
                <div className="font-semibold text-white">Impactful Feature Delivery</div>
                <div className="text-zinc-400">Recognized for technical excellence, innovation, and strong cross-functional collaboration.</div>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              EDUCATION
            </h2>
            <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="font-bold text-white text-sm">
                  Sri Shakthi Institute of Engineering and Technology
                </div>
                <div className="text-xs text-zinc-400 font-mono">
                  July 2020 – May 2024
                </div>
              </div>
              <div className="text-xs text-zinc-400">
                Coimbatore, Tamil Nadu
              </div>
              <div className="text-xs font-semibold text-zinc-200 pt-1">
                Bachelor's degree (B.E) | CGPA: 9.02
              </div>
            </div>
          </div>

          {/* TECHNOLOGIES */}
          <div className="space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 border-b border-zinc-900 pb-1">
              TECHNOLOGIES
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-white font-semibold">Frontend & Backend</div>
                <div className="text-zinc-300">Frontend: React.js, TypeScript</div>
                <div className="text-zinc-300">Backend: Java (Spring Boot)</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-white font-semibold">AI / ML & Database</div>
                <div className="text-zinc-300">AI/ML: Agentic AI, Google ADK, GPT Models (5.2 mini, 5.4), Grok, RAG, LLM</div>
                <div className="text-zinc-300">Database: MongoDB (Mongo Compass)</div>
              </div>

              <div className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 space-y-1 md:col-span-2">
                <div className="text-white font-semibold">Tools & Version Control</div>
                <div className="text-zinc-400">
                  Postman, VS Code, Cursor, Codex, Eclipse, IntelliJ, SourceTree, JIRA, Figma, GitHub
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-zinc-800 bg-zinc-950/90 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="text-xs text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Subash Kannan via Email or Phone</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
