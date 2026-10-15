import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ArchitectureLab } from './components/ArchitectureLab';
import { ExperienceSection } from './components/ExperienceSection';
import { PhilosophySection } from './components/PhilosophySection';
import { SkillsSection } from './components/SkillsSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ContactDrawer } from './components/ContactDrawer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* Top Bar adhering to 3-zone contract */}
      <Navbar
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split Screen Hero with 4-Column Proof Row */}
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Selected Work Bento Grid & Case Studies */}
        <Projects />

        {/* Interactive Distributed Architecture & Latency Simulator */}
        <ArchitectureLab />

        {/* Career Trajectory & Enterprise Scale Delivery */}
        <ExperienceSection />

        {/* Core Principles & Systems Philosophy */}
        <PhilosophySection />

        {/* Technical Competencies Matrix */}
        <SkillsSection />
      </main>

      {/* Quiet Footer */}
      <Footer
        onOpenContact={() => setIsContactOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Modals & Drawers */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onOpenContact={() => {
          setIsResumeOpen(false);
          setIsContactOpen(true);
        }}
      />

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
