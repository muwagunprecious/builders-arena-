import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_STEPS, SCHEDULE_DAYS } from '../data/hackathonData';
import { Clock, Calendar, CheckCircle2 } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(0);

  return (
    <section id="schedule" className="py-24 relative bg-neo-hero border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Neo-Brutalist Title Box */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 flex flex-col items-center">
          <span className="neo-tag flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>HOW THE HACKATHON WORKS</span>
          </span>

          <div className="inline-block bg-white text-black border-3 border-black px-8 py-3 rounded-md shadow-[6px_6px_0px_#000000]">
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl uppercase tracking-tight">
              48 HOURS. ONE MISSION.
            </h2>
          </div>

          <p className="font-sans font-medium text-sm sm:text-base text-white bg-black px-6 py-2.5 rounded-md border-2 border-black shadow-[4px_4px_0px_#000000]">
            From initial screening to live demo pitches, experience a structured high-octane build journey.
          </p>
        </div>

        {/* 8-Step Horizontal Neo-Brutalist Timeline Bar */}
        <div className="mb-20 overflow-x-auto pb-6 scrollbar-thin">
          <div className="flex items-center min-w-[900px] justify-between relative px-4">
            {/* Connecting line */}
            <div className="absolute top-6 left-8 right-8 h-1.5 bg-black z-0" />

            {TIMELINE_STEPS.map((step, idx) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="flex flex-col items-center relative z-10 text-center w-28 group"
                data-cursor={step.title}
              >
                <div className="w-12 h-12 rounded bg-white text-black border-3 border-black flex items-center justify-center font-mono font-black text-sm shadow-[4px_4px_0px_#000000] group-hover:bg-[#00D9FF] group-hover:scale-105 transition-all mb-3">
                  {step.stepNumber}
                </div>
                <h4 className="font-display font-black text-xs text-white bg-black px-2 py-1 rounded border border-black uppercase tracking-wider mb-1">
                  {step.title}
                </h4>
                <p className="text-[10px] text-white font-mono font-bold leading-tight hidden sm:block">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Neo-Brutalist 2-Day Schedule Card */}
        <div className="bg-white text-black border-3 border-black rounded-md p-6 sm:p-10 shadow-[8px_8px_0px_#000000]">
          
          {/* Day Toggle Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b-3 border-black">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-black" />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
                EVENT TIMELINE BREAKDOWN
              </span>
            </div>

            <div className="flex gap-2 w-full sm:w-auto">
              {SCHEDULE_DAYS.map((day, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDay(idx)}
                  className={`flex-1 sm:flex-initial px-6 py-2.5 rounded font-display font-black text-xs uppercase tracking-wider border-2 border-black transition-all ${
                    activeDay === idx
                      ? 'bg-[#00D9FF] text-black shadow-[3px_3px_0px_#000000]'
                      : 'bg-white text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {day.dayTitle}
                </button>
              ))}
            </div>
          </div>

          {/* Active Day Details */}
          <div>
            <div className="mb-6">
              <h3 className="font-display font-black text-2xl uppercase text-black">
                {SCHEDULE_DAYS[activeDay].dayTitle}
              </h3>
              <p className="font-mono text-xs font-bold text-black uppercase tracking-wider">
                {SCHEDULE_DAYS[activeDay].subTitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {SCHEDULE_DAYS[activeDay].activities.map((act, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded bg-gray-50 border-2 border-black shadow-[4px_4px_0px_#000000] flex items-start gap-4"
                >
                  <div className="px-2.5 py-1 rounded bg-black text-[#00D9FF] font-mono text-xs font-black shrink-0 border border-black">
                    {act.time}
                  </div>
                  <div>
                    <h5 className="font-display font-black text-black text-base mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-black" />
                      {act.title}
                    </h5>
                    <p className="text-gray-800 text-xs leading-relaxed font-sans font-normal">
                      {act.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
