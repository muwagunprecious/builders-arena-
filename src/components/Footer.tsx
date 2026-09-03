import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t-3 border-black py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b-2 border-white/20">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white text-black font-display font-black px-4 py-2 rounded border-2 border-black inline-block text-lg shadow-[4px_4px_0px_#000000]">
              BUILDERS ARENA <span className="text-[#00D9FF] bg-black px-2 py-0.5 rounded font-mono text-xs">2026</span>
            </div>

            <p className="font-mono text-xs text-[#00D9FF] uppercase tracking-widest font-black">
              Code. Create. Solve.
            </p>

            <p className="text-gray-300 text-xs sm:text-sm font-sans font-semibold max-w-sm leading-relaxed">
              Organized by <strong className="text-white underline">OOU Tech Community (OTC)</strong>. Empowering the next generation of university builders and problem solvers across Nigeria.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono font-bold text-gray-300 pt-2">
              <MapPin className="w-4 h-4 text-[#00D9FF] shrink-0" />
              <span>Olabisi Onabanjo University, Ago-Iwoye, Ogun State, Nigeria</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-mono text-xs text-[#00D9FF] uppercase tracking-widest font-black">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono font-bold text-gray-200">
              <li><Link to="/" className="hover:text-[#00D9FF] transition-colors">Home Landing</Link></li>
              <li><Link to="/tracks" className="hover:text-[#00D9FF] transition-colors">Challenge Tracks</Link></li>
              <li><Link to="/schedule" className="hover:text-[#00D9FF] transition-colors">Hackathon Schedule</Link></li>
              <li><Link to="/sponsors" className="hover:text-[#00D9FF] transition-colors">Sponsorship Tiers</Link></li>
              <li><Link to="/mentors" className="hover:text-[#00D9FF] transition-colors">Mentors & Judges</Link></li>
              <li><Link to="/teams" className="hover:text-[#00D9FF] transition-colors">15 Finalist Teams</Link></li>
              <li><Link to="/register" className="hover:text-[#00D9FF] transition-colors font-black text-[#00D9FF]">Register Team</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-mono text-xs text-[#00D9FF] uppercase tracking-widest font-black">
              CONNECT WITH US
            </h4>

            <div className="space-y-2 text-xs font-mono font-bold text-gray-200">
              <a href="mailto:ooutechcommunity@gmail.com" className="flex items-center gap-2 hover:text-[#00D9FF] transition-colors">
                <Mail className="w-4 h-4 text-[#00D9FF]" />
                <span>ooutechcommunity@gmail.com</span>
              </a>
              <a href="tel:+2348061764593" className="flex items-center gap-2 hover:text-[#00D9FF] transition-colors">
                <Phone className="w-4 h-4 text-[#00D9FF]" />
                <span>+234 806 176 4593</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2 pt-2">
              {['Instagram', 'X', 'LinkedIn', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-3 py-1.5 rounded bg-white text-black font-mono text-xs font-black border border-black hover:bg-[#00D9FF] transition-all shadow-[2px_2px_0px_#000000]"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-400 font-bold">
          <div>
            © 2026 BUILDERS ARENA. Built with <Heart className="w-3.5 h-3.5 inline text-[#00D9FF] fill-[#00D9FF]" /> by OTC Dev Team.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 bg-white text-black px-4 py-2 rounded font-mono text-xs font-black border border-black shadow-[3px_3px_0px_#000000] hover:bg-[#00D9FF] transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4 stroke-[3]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
