import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, Zap, Star } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-36 pb-28 overflow-hidden bg-neo-hero">
      
      {/* OFFICIAL OOU AUDITORIUM HERO BACKGROUND IMAGE (Spread Full Width & Height) */}
      <img
        src="/hero-auditorium-bg.png"
        alt="OOU Auditorium Venue Full Background"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-75 scale-105 pointer-events-none z-0"
      />

      {/* Light Gradient Vignette Overlay (Softened so full auditorium graphic pops through) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6C5CE7]/35 via-[#4A6CF7]/25 to-[#1E1B4B]/80 pointer-events-none z-0" />

      {/* ANCHORED NEO-BRUTALIST DECORATIVE STICKERS (Flat solid color + solid black 2px borders) */}
      {/* 1. Top-Left Flat Orange Starburst Sticker */}
      <div className="absolute top-28 left-6 sm:left-16 w-16 h-16 sm:w-20 sm:h-20 bg-[#FF9F00] border-3 border-black shadow-[4px_4px_0px_#000000] rounded-none rotate-[-6deg] z-20 pointer-events-none hidden sm:block">
        <div className="w-full h-full flex items-center justify-center font-mono font-black text-black text-xs">
          2026
        </div>
      </div>

      {/* 2. Top-Right Solid White Square Frame Accent */}
      <div className="absolute top-24 right-8 sm:right-20 w-24 h-24 sm:w-32 sm:h-32 border-3 border-black bg-white/30 shadow-[6px_6px_0px_#000000] rounded-none rotate-[8deg] pointer-events-none hidden md:block" />

      {/* 3. Bottom-Left Flat Pink Badge Anchor */}
      <div className="absolute bottom-32 left-6 sm:left-16 bg-[#F451D7] border-3 border-black shadow-[4px_4px_0px_#000000] px-4 py-2 rounded-md font-mono text-xs font-black text-black uppercase rotate-[-4deg] z-20 pointer-events-none hidden md:flex items-center gap-1.5">
        <Star className="w-3.5 h-3.5 fill-black text-black" />
        <span>OOU HACKATHON</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center">
        
        {/* Eyebrow Label Tag */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="neo-tag">
            HACKATHON ALERT
          </span>
          <span className="neo-tag-accent">
            48-HOUR BUILD SPRINT
          </span>
        </div>

        {/* NEO-BRUTALIST HEADLINE STACK (Tight, mixed case, solid boxed titles) */}
        <div className="relative space-y-3 mb-8 text-center">
          {/* Line 1: Builders */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-block bg-white text-black border-3 border-black rounded-md px-6 sm:px-12 py-2 sm:py-3 shadow-[6px_6px_0px_#000000]"
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tight leading-none uppercase">
              Builders
            </h1>
          </motion.div>

          <br />

          {/* Line 2: Arena */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block bg-white text-black border-3 border-black rounded-md px-6 sm:px-12 py-2 sm:py-3 shadow-[6px_6px_0px_#000000]"
          >
            <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-9xl tracking-tight leading-none uppercase">
              Arena
            </h1>
          </motion.div>

          <br />

          {/* Line 3: Hackathon 2026 (Cyan Accent Box) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-[#00D9FF] text-black border-3 border-black rounded-md px-6 sm:px-12 py-2 sm:py-3 shadow-[6px_6px_0px_#000000]"
          >
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-8xl tracking-tight leading-none uppercase">
              Hackathon
            </h1>
            <span className="bg-black text-white font-mono text-xl sm:text-3xl font-black px-3 py-1 rounded border-2 border-black">
              2026
            </span>
          </motion.div>

          {/* FLAT SOLID-COLOR CURSOR ICON WITH SOLID BLACK 2.5PX OUTLINE */}
          <div className="absolute -right-4 sm:-right-10 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 pointer-events-none z-30 hidden sm:block">
            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 4L34 20L20 23L13 35L6 4Z" fill="#00D9FF" stroke="#000000" strokeWidth="3" strokeLinejoin="miter" />
            </svg>
          </div>
        </div>

        {/* Body Copy High-Contrast Box */}
        <div className="bg-white border-3 border-black rounded-md p-6 shadow-[6px_6px_0px_#000000] text-black max-w-3xl space-y-3 mb-8 text-center">
          <p className="font-sans font-normal text-base sm:text-lg leading-relaxed text-gray-900">
            Code. Create. Solve. A 48-hour university hackathon where student builders turn real Nigerian problems into working technology.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 font-mono text-xs font-bold uppercase border-t-2 border-black">
            <div className="flex items-center gap-1.5 bg-[#00D9FF] text-black px-3 py-1 rounded border border-black">
              <MapPin className="w-4 h-4" />
              <span>OOU Campus, Ogun State</span>
            </div>
            <div className="flex items-center gap-1.5 bg-black text-white px-3 py-1 rounded border border-black">
              <Calendar className="w-4 h-4 text-[#00D9FF]" />
              <span>48-Hour Sprint</span>
            </div>
          </div>
        </div>

        {/* CTAS (RECTANGULAR, SOLID COLORS, HARD SHADOWS) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
          <Link
            to="/sponsor-apply"
            className="neo-btn-primary px-7 py-4 text-center text-xs sm:text-sm font-display uppercase tracking-wider flex items-center justify-center gap-2"
            data-cursor="PITCH DECK"
          >
            <span>SPONSORSHIP PITCH DECK OUTLINE</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/register"
            className="neo-btn-secondary px-7 py-4 text-center text-xs sm:text-sm font-display uppercase tracking-wider flex items-center justify-center gap-2"
            data-cursor="REGISTER TEAM"
          >
            <Zap className="w-4 h-4 text-black fill-black" />
            <span>REGISTER YOUR TEAM</span>
          </Link>
        </div>

      </div>
    </section>
  );
};
