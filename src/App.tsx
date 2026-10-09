/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BenefitsSection } from './components/BenefitsSection';
import { CallToActionSection } from './components/CallToActionSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  const handleExploreSystem = () => {
    // Smooth scroll to the iPhone mockup interactive experience or open modal if mobile
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHowItWorks = () => {
    const el = document.getElementById('nece-isleyir');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0B1711] text-[#F8F3E9] selection:bg-[#C3A16A]/30 selection:text-[#F3EBDD]">
      {/* Top Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main>
        {/* First Screen: Hero Section with 2 columns & iPhone Mockup */}
        <HeroSection
          onOpenDemo={handleOpenDemo}
          onExploreSystem={handleExploreSystem}
          onHowItWorks={handleHowItWorks}
        />

        {/* Section 1: The Problem */}
        <ProblemSection />

        {/* Section 2: How It Works */}
        <HowItWorksSection />

        {/* Section 3: Benefits for Restaurants */}
        <BenefitsSection />

        {/* Section 4: Final Call to Action */}
        <CallToActionSection onOpenContactModal={handleOpenDemo} />
      </main>

      {/* Luxury Footer */}
      <Footer />

      {/* Interactive Demo & Consultation Modal */}
      <DemoModal isOpen={isDemoModalOpen} onClose={handleCloseDemo} />
    </div>
  );
}
