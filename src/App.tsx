import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SystemArchitecture } from './components/SystemArchitecture';
import { ActiveDeployments } from './components/ActiveDeployments';
import { CoreCompetencies } from './components/CoreCompetencies';
import { AudiovisualSection } from './components/AudiovisualSection';
import { CommunitySection } from './components/CommunitySection';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { COMPETENCIES_DATA } from './data/deployments';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white text-zinc-900 min-h-screen flex flex-col overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onExploreProjects={() => handleNavigate('projects')}
          onAboutClick={() => handleNavigate('about')}
        />

        {/* Sección: ¿Quiénes somos? */}
        <SystemArchitecture />

        {/* Sección: Tienda Online & Actividad */}
        <ActiveDeployments />

        {/* Sección: Core Competencies / Servicios Especializados */}
        <CoreCompetencies
          competencies={COMPETENCIES_DATA}
          onContactClick={() => handleNavigate('community')}
        />

        {/* Sección: Servicios Audiovisuales & Edición de Video */}
        <AudiovisualSection
          onContactClick={() => handleNavigate('community')}
        />

        {/* Sección: Contacto Directo */}
        <CommunitySection />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Modales Legales */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}