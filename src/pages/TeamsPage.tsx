import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { FinalistModelSection } from '../components/FinalistModelSection';

export const TeamsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <FinalistModelSection />
      </div>
      <Footer />
    </div>
  );
};
