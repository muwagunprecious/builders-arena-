import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BUILDER_PROFILES } from '../data/hackathonData';
import { Sparkles } from 'lucide-react';

export const BuildersSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredProfiles = filter === 'all'
    ? BUILDER_PROFILES
    : BUILDER_PROFILES.filter((p) => p.category === filter);

  return (
    <section id="mentors" className="py-24 relative bg-neo-hero border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <span className="neo-tag flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 fill-white" />
            <span>EXECUTIVE TEAM & MENTORS</span>
          </span>

          <div className="inline-block bg-white text-black border-3 border-black px-8 py-3 rounded-md shadow-[6px_6px_0px_#000000]">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              MEET THE BUILDERS
            </h2>
          </div>

          <p className="font-sans font-bold text-sm sm:text-base text-white bg-black px-6 py-2.5 rounded-md border-2 border-black shadow-[4px_4px_0px_#000000]">
            The hackathon leads, organizers, judges, and technical mentors building the arena.
          </p>
        </div>

        {/* Neo-Brutalist Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-16">
          {['all', 'lead', 'organizer', 'mentor', 'judge', 'speaker'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded font-mono text-xs uppercase font-black tracking-wider transition-all border-2 border-black ${
                filter === cat
                  ? 'bg-[#00D9FF] text-black shadow-[4px_4px_0px_#000000] translate-x-0.5 translate-y-0.5'
                  : 'bg-white text-black shadow-[4px_4px_0px_#000000] hover:bg-black hover:text-white'
              }`}
            >
              {cat === 'all' ? '⚡ ALL PROFILES' : cat}
            </button>
          ))}
        </div>

        {/* Digital Trading Cards Grid with Avatar Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProfiles.map((builder, idx) => (
            <motion.div
              key={builder.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white text-black border-3 border-black rounded-md p-6 relative flex flex-col items-center text-center shadow-[8px_8px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0px_#000000] transition-all group overflow-visible"
              data-cursor={builder.name}
            >
              {/* TOP TAPED BADGE PILL ("Meet") */}
              <div className="relative mb-6 -mt-3">
                <div className="tape-corner-tl" />
                <div className="tape-corner-tr" />

                <div className="bg-black text-white border-2 border-black px-8 py-1.5 rounded-full shadow-[3px_3px_0px_#000000]">
                  <span className="font-display font-black text-xl tracking-wide">
                    Meet
                  </span>
                </div>
              </div>

              {/* PROFILE IMAGE CONTAINER WITH HARD BLACK BORDER & FLAT CYAN CURSOR */}
              <div className="relative w-full max-w-[240px] aspect-square rounded border-3 border-black shadow-[5px_5px_0px_#000000] mb-6 bg-black overflow-hidden group-hover:scale-102 transition-transform">
                <img
                  src={builder.avatarUrl}
                  alt={builder.name}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                <span className="absolute bottom-2 left-2 font-mono text-[10px] font-black text-black bg-[#00D9FF] px-2 py-0.5 rounded border border-black uppercase shadow-[2px_2px_0px_#000000]">
                  OTC BUILDER
                </span>

                {/* Flat Solid Cyan Cursor Pointer */}
                <div className="absolute bottom-2 right-2 w-8 h-8 pointer-events-none z-20">
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 3L25 15L15 17L10 27L5 3Z" fill="#00D9FF" stroke="#000000" strokeWidth="2.5" strokeLinejoin="miter" />
                  </svg>
                </div>
              </div>

              {/* BOTTOM TAPED BADGE PILL ("The Team") */}
              <div className="relative mb-5">
                <div className="tape-corner-bl" />
                <div className="tape-corner-br" />

                <div className="bg-black text-white border-2 border-black px-8 py-1.5 rounded-full shadow-[3px_3px_0px_#000000]">
                  <span className="font-display font-black text-xl tracking-wide">
                    The <span className="text-[#00D9FF]">Team</span>
                  </span>
                </div>
              </div>

              {/* BUILDER NAME & ROLE */}
              <div className="space-y-1.5 mb-4">
                <h3 className="font-display font-extrabold text-xl text-black tracking-tight">
                  {builder.name}
                </h3>
                <p className="font-mono text-xs font-black text-black bg-[#00D9FF] px-3 py-1 rounded border border-black uppercase inline-block shadow-[2px_2px_0px_#000000]">
                  {builder.role}
                </p>
                {builder.organization && (
                  <p className="text-[11px] font-sans font-bold text-gray-700 mt-1">
                    {builder.organization}
                  </p>
                )}
              </div>

              {/* Bio */}
              <p className="text-gray-900 text-xs font-sans font-bold leading-relaxed line-clamp-3 mb-4 px-2">
                "{builder.bio}"
              </p>

              {/* Bottom Cyan Line Accent */}
              <div className="w-full h-1.5 bg-black rounded-full mt-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
