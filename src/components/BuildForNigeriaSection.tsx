import React from 'react';
import { motion } from 'framer-motion';
import { NIGERIAN_PROBLEMS } from '../data/hackathonData';
import { Flag, ArrowDown } from 'lucide-react';

export const BuildForNigeriaSection: React.FC = () => {
  return (
    <section className="py-24 relative bg-neo-hero border-t-3 border-black overflow-hidden">
      
      {/* Background Tech Image Overlay */}
      <img
        src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"
        alt="Nigerian Tech Ecosystem"
        className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Eyebrow Tag & Neo-Brutalist Title Box */}
        <div className="text-center max-w-4xl mx-auto mb-16 flex flex-col items-center gap-4">
          <span className="neo-tag flex items-center gap-1.5">
            <Flag className="w-3.5 h-3.5 fill-white" />
            <span>NIGERIAN PROBLEM MATRIX</span>
          </span>

          <div className="inline-block bg-white text-black border-3 border-black px-8 sm:px-12 py-4 rounded-md shadow-[8px_8px_0px_#000000]">
            <h2 className="font-display font-extrabold text-4xl sm:text-7xl uppercase tracking-tight">
              BUILD FOR <span className="text-black underline decoration-[#00D9FF] decoration-4">NIGERIA</span>
            </h2>
          </div>

          <div className="bg-black text-white border-2 border-black px-6 py-2.5 rounded-md shadow-[4px_4px_0px_#000000] font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            Solve real problems • Build real products • Create real impact
          </div>
        </div>

        {/* Animated Nigerian Problem Statement Neo-Brutalist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {NIGERIAN_PROBLEMS.map((problem, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white text-black border-3 border-black p-6 rounded-md shadow-[6px_6px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000000] transition-all flex items-start gap-4 group"
              data-cursor="PROBLEM"
            >
              <div className="w-12 h-12 rounded bg-[#00D9FF] text-black border-2 border-black flex items-center justify-center font-mono text-xl font-black shrink-0 shadow-[3px_3px_0px_#000000]">
                ?
              </div>
              <div className="space-y-1.5">
                <span className="neo-tag bg-black text-white text-[10px]">
                  CHALLENGE #{idx + 1}
                </span>
                <p className="font-sans text-base sm:text-lg font-medium text-black leading-snug">
                  "{problem}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Down Indicator Button */}
        <div className="text-center space-y-3 flex flex-col items-center">
          <span className="neo-tag-accent">
            EXPLORE SOLUTION TRACKS BELOW
          </span>
          <div className="w-12 h-12 rounded bg-white text-black border-3 border-black shadow-[4px_4px_0px_#000000] flex items-center justify-center animate-bounce">
            <ArrowDown className="w-6 h-6 stroke-[3]" />
          </div>
        </div>
      </div>
    </section>
  );
};
