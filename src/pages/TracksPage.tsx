import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { TracksSection } from '../components/TracksSection';
import { BuildForNigeriaSection } from '../components/BuildForNigeriaSection';

export const TracksPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <BuildForNigeriaSection />
        <TracksSection />
      </div>
      <Footer />
    </div>
  );
};
