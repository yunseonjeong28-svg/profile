/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProcessSection } from './components/ProcessSection';
import { JournalSection } from './components/JournalSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { INITIAL_PROJECTS, ProjectItem, ProjectStatus } from './data/portfolioData';

export default function App() {
  const [projects, setProjects] = useState<ProjectItem[]>(() => {
    try {
      const saved = localStorage.getItem('ys_creative_projects');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback to initial
    }
    return INITIAL_PROJECTS;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('ys_creative_projects', JSON.stringify(projects));
    } catch {
      // ignore storage errors
    }
  }, [projects]);

  const handleUpdateProject = (updated: ProjectItem) => {
    setProjects((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setSelectedProject(updated);
  };

  const handleUpdateStatus = (projectId: string, newStatus: ProjectStatus) => {
    setProjects((prev) =>
      prev.map((item) =>
        item.id === projectId ? { ...item, status: newStatus } : item
      )
    );
  };

  const handleExploreClick = () => {
    const portfolioElem = document.getElementById('portfolio');
    if (portfolioElem) {
      portfolioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#343137] flex flex-col font-sans-kr selection:bg-[#D8CBE8]/50 selection:text-[#343137]">
      {/* Top Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      {/* Main Content Sections (1 to 6) */}
      <main className="flex-1">
        {/* Section 01: HOME */}
        <HeroSection onExploreClick={handleExploreClick} />

        {/* Section 02: ABOUT ME */}
        <AboutSection />

        {/* Section 03: PORTFOLIO */}
        <PortfolioSection
          projects={projects}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onUpdateStatus={handleUpdateStatus}
        />

        {/* Section 04: CREATIVE PROJECTS / PROCESS */}
        <ProcessSection />

        {/* Section 05: CREATIVE JOURNAL */}
        <JournalSection />

        {/* Section 06: CONTACT */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onUpdateProject={handleUpdateProject}
      />
    </div>
  );
}
