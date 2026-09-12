import React from 'react';
import { CustomCursor } from '../components/CustomCursor';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { BuildForNigeriaSection } from '../components/BuildForNigeriaSection';
import { TracksSection } from '../components/TracksSection';
import { TimelineSection } from '../components/TimelineSection';
import { FinalistModelSection } from '../components/FinalistModelSection';
import { BuildersSection } from '../components/BuildersSection';
import { AboutOTCSection } from '../components/AboutOTCSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCTASection } from '../components/FinalCTASection';
import { Footer } from '../components/Footer';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white relative">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <BuildForNigeriaSection />
        <TracksSection />
        <TimelineSection />
        <FinalistModelSection />
        <BuildersSection />
        <AboutOTCSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};
