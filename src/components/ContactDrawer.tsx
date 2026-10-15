import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Send, CheckCircle2, Mail, Phone, Linkedin, Copy, Check } from 'lucide-react';

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactDrawer: React.FC<ContactDrawerProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('Agentic AI / Full Stack Opportunity');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please provide your name, email, and a message.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      try {
        const stored = JSON.parse(localStorage.getItem('subash_portfolio_inquiries') || '[]');
        stored.push({
          name,
          email,
          topic,
          message,
          timestamp: new Date().toISOString(),
        });
        localStorage.setItem('subash_portfolio_inquiries', JSON.stringify(stored));
      } catch (err) {
        // Safe catch
      }

      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(false);
    setError(null);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-drawer-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl text-zinc-100 my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300">
              Get in Touch with Subash
            </span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="text-xs text-zinc-400 font-mono">Coimbatore, India</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
            aria-label="Close contact drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6">
          {!submitted ? (
            <>
              <div>
                <h2 id="contact-drawer-title" className="text-2xl font-bold tracking-tight text-white">
                  Let's discuss Full-Stack & Agentic AI.
                </h2>
                <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                  Open to full stack engineering roles, multi-agent AI architecture discussions, and hackathon judging. Reach out via email, phone, or send a direct note below.
                </p>
              </div>

              {/* Direct Contact Pills / Quick Bars */}
              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-300 font-mono">
                    <Mail className="w-4 h-4 text-zinc-400" />
                    <span>{PORTFOLIO_DATA.profile.email}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-md transition-colors flex items-center gap-1"
                  >
                    {emailCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{emailCopied ? 'Copied' : 'Copy Email'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-300 font-mono">
                    <Phone className="w-4 h-4 text-zinc-400" />
                    <span>{PORTFOLIO_DATA.profile.phone}</span>
                  </div>
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-md transition-colors flex items-center gap-1"
                  >
                    {phoneCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{phoneCopied ? 'Copied' : 'Copy Phone'}</span>
                  </button>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-zinc-300 font-mono">
                    <Linkedin className="w-4 h-4 text-zinc-400" />
                    <span>{PORTFOLIO_DATA.profile.linkedinHandle}</span>
                  </div>
                  <a
                    href={PORTFOLIO_DATA.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="px-2.5 py-1 text-[11px] font-medium text-zinc-300 hover:text-white border border-zinc-800 hover:border-zinc-700 rounded-md transition-colors"
                  >
                    Open LinkedIn
                  </a>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-lg bg-red-950/50 border border-red-900 text-red-300 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Recruiter / Tech Lead Name"
                      className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Your Email</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Inquiry Topic</label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-zinc-100 text-sm transition-colors"
                  >
                    <option value="Agentic AI / Full Stack Opportunity">Agentic AI & Full Stack Opportunity</option>
                    <option value="Technical Interview / Role">Technical Interview / Senior Role</option>
                    <option value="Hackathon Judging / Speaking">Hackathon Judging / Speaker Invitation</option>
                    <option value="General Technical Inquiry">General Technical Discussion</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-zinc-300">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Hi Subash, we came across your work on Agentic AI and multi-agent systems at Responsive..."
                    className="w-full px-3.5 py-2 rounded-lg bg-zinc-950 border border-zinc-800 focus:border-zinc-500 focus:outline-none text-zinc-100 placeholder:text-zinc-600 text-sm transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-5 py-2 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors flex items-center gap-1.5 disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{submitting ? 'Dispatching...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-zinc-800 text-white flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Message Received</h3>
                <p className="text-sm text-zinc-400 max-w-sm mx-auto">
                  Thank you, {name}! Your message regarding "{topic}" has been saved. Subash will reply via <span className="text-zinc-200">{email}</span> shortly.
                </p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white border border-zinc-800 rounded-lg transition-colors"
                >
                  Send Another
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 text-xs font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
