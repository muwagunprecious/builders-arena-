import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { TimelineSection } from '../components/TimelineSection';

export const SchedulePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <TimelineSection />
      </div>
      <Footer />
    </div>
  );
};
