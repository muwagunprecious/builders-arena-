import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { CustomCursor } from '../components/CustomCursor';
import { SponsorSection } from '../components/SponsorSection';
import { InKindPartnersSection } from '../components/InKindPartnersSection';

export const SponsorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neo-hero text-black">
      <CustomCursor />
      <Navbar />
      <div className="pt-20">
        <SponsorSection />
        <InKindPartnersSection />
      </div>
      <Footer />
    </div>
  );
};
