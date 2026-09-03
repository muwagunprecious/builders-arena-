import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { FAQSection } from '../components/FAQSection';

export const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};
