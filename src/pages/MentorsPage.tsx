import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { BuildersSection } from '../components/BuildersSection';

export const MentorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <BuildersSection />
      </div>
      <Footer />
    </div>
  );
};
