import React from 'react';
import { motion } from 'framer-motion';
import { SPONSOR_TIERS } from '../data/hackathonData';
import { Link } from 'react-router-dom';
import { Crown, Users, Cpu, ShieldCheck, Award, ArrowUpRight, Check } from 'lucide-react';

export const SponsorSection: React.FC = () => {
  const valuePillars = [
    {
      title: 'TALENT PIPELINE',
      icon: Users,
      desc: 'Access a pre-vetted pipeline of developers, designers and technical builders.',
    },
    {
      title: 'PRODUCT ADOPTION',
      icon: Cpu,
      desc: 'Put your API, SDK or technology directly in front of student builders during the 48h sprint.',
    },
    {
      title: 'BRAND LEADERSHIP',
      icon: ShieldCheck,
      desc: "Become an anchor partner of one of OOU's biggest emerging technology communities.",
    },
    {
      title: 'THOUGHT LEADERSHIP',
      icon: Award,
      desc: 'Deliver keynotes, developer workshops, 1-on-1 mentorship, and occupy judging panel seats.',
    },
  ];

  return (
    <section id="sponsors" className="py-24 relative bg-neo-hero border-t-3 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Title Box */}
        <div className="text-center max-w-4xl mx-auto mb-20 space-y-4 flex flex-col items-center">
          <span className="neo-tag flex items-center gap-1.5">
            <Crown className="w-4 h-4 text-white" />
            <span>SPONSORSHIP & PARTNERSHIPS</span>
          </span>

          <div className="inline-block bg-white text-black border-3 border-black px-8 py-4 rounded-md shadow-[6px_6px_0px_#000000]">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight leading-tight">
              DON'T JUST SPONSOR THE HACKATHON. <br />
              <span className="text-[#00D9FF] bg-black px-4 py-1 inline-block mt-2">BUILD WITH THE NEXT GENERATION.</span>
            </h2>
          </div>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {valuePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white text-black p-6 rounded-md border-3 border-black shadow-[6px_6px_0px_#000000] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_#000000] transition-all space-y-4"
              >
                <div className="w-12 h-12 rounded bg-black text-[#00D9FF] border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000000]">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-black text-lg text-black uppercase">
                  {pillar.title}
                </h3>
                <p className="text-gray-900 text-xs sm:text-sm font-sans font-bold leading-relaxed">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sponsorship Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SPONSOR_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`rounded-md p-8 flex flex-col justify-between relative border-3 border-black shadow-[8px_8px_0px_#000000] transition-all ${
                tier.isTitle
                  ? 'bg-[#FF9F00] text-black'
                  : tier.isPopular
                  ? 'bg-[#00D9FF] text-black'
                  : 'bg-white text-black'
              }`}
              data-cursor={tier.name}
            >
              {/* Flagship Badge */}
              {tier.isTitle && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 neo-tag bg-black text-white px-4 py-1 flex items-center gap-1">
                  <Crown className="w-3.5 h-3.5 text-[#FF9F00]" /> FLAGSHIP TIER
                </div>
              )}
              {tier.isPopular && !tier.isTitle && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 neo-tag bg-black text-white px-4 py-1">
                  RECOMMENDED
                </div>
              )}

              <div>
                <div className="mb-6 border-b-3 border-black pb-4">
                  <span className="font-mono text-xs font-black uppercase tracking-wider block">
                    {tier.name}
                  </span>
                  <div className="font-display font-extrabold text-4xl sm:text-5xl text-black mt-1">
                    {tier.price}
                  </div>
                  {tier.subtitle && (
                    <p className="text-xs font-mono font-bold text-black mt-2">
                      {tier.subtitle}
                    </p>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2 text-xs text-black font-sans font-bold leading-snug">
                      <Check className="w-4 h-4 text-black shrink-0 mt-0.5 stroke-[3]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/sponsor-apply"
                className="w-full py-4 px-4 rounded neo-btn-secondary font-display font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5"
              >
                <span>{tier.cta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
