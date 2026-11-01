import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedAIReceptionist } from './components/FeaturedAIReceptionist';
import { HowItWorks } from './components/HowItWorks';
import { IndustriesAndWorkSection } from './components/IndustriesAndWorkSection';
import { WhyTrexxSection } from './components/WhyTrexxSection';
import { FinalCTAAndContact } from './components/FinalCTAAndContact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#0066FF]/30 selection:text-white">
      <Navbar />
      <main>
        <HeroSection />
        <TrustSection />
        <ServicesSection />
        <FeaturedAIReceptionist />
        <HowItWorks />
        <IndustriesAndWorkSection />
        <WhyTrexxSection />
        <FinalCTAAndContact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

