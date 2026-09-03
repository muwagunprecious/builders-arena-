import React from 'react';
import { motion } from 'framer-motion';
import { FINALIST_TEAMS_GRID } from '../data/hackathonData';
import { Award, Users, UserCheck, Sparkles } from 'lucide-react';

export const FinalistModelSection: React.FC = () => {
  const modelStats = [
    { value: '15', label: 'FINALIST TEAMS', color: '#00D9FF' },
    { value: '75', label: 'BUILDERS', color: '#FF9F00' },
    { value: '15', label: 'CORE VOLUNTEERS', color: '#F451D7' },
    { value: '10', label: 'MENTORS & JUDGES', color: '#FFFFFF' },
  ];

  return (
    <section id="teams" className="py-24 relative bg-neo-hero border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Neo-Brutalist Title Box */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <span className="neo-tag flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>ELITE SELECTION MODEL</span>
          </span>

          <div className="inline-block bg-white text-black border-3 border-black px-8 py-3 rounded-md shadow-[6px_6px_0px_#000000]">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              THE FINALIST MODEL
            </h2>
          </div>

          <p className="font-sans font-bold text-sm sm:text-base text-white bg-black px-6 py-2.5 rounded-md border-2 border-black shadow-[4px_4px_0px_#000000]">
            A tight, highly competitive structure designed for maximum mentor focus, deep technical execution, and quality product outcomes.
          </p>
        </div>

        {/* 4 Neo-Brutalist Enormous Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {modelStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white text-black border-3 border-black p-6 rounded-md text-center shadow-[6px_6px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000000] transition-all"
            >
              <div className="font-display font-black text-5xl sm:text-7xl text-black mb-2">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-black tracking-widest text-black uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Criteria Callouts */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <div className="neo-tag bg-black text-white px-4 py-2 flex items-center gap-2">
            <Users className="w-4 h-4 text-[#00D9FF]" />
            <span>MAXIMUM <strong>5 BUILDERS</strong> PER TEAM</span>
          </div>
          <div className="neo-tag-accent px-4 py-2 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-black" />
            <span>SELECTED VIA <strong>COMPETITIVE SCREENING</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
};
