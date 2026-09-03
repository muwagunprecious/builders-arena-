import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Tracks', path: '/tracks' },
    { label: 'Schedule', path: '/schedule' },
    { label: 'Sponsors', path: '/sponsors' },
    { label: 'Mentors', path: '/mentors' },
    { label: 'Teams', path: '/teams' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? 'bg-black text-white border-b-3 border-black py-3 shadow-[0_6px_0px_#000000]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo - Solid Neo Brutalist Badge */}
        <Link to="/" className="flex items-center gap-3 group" data-cursor="BUILDERS">
          <div className="bg-white text-black font-display font-black px-3 py-1.5 rounded-md border-3 border-black shadow-[4px_4px_0px_#000000] text-sm uppercase">
            OTC <span className="text-[#00D9FF] bg-black px-1.5 py-0.5 rounded ml-1">BUILDERS ARENA</span>
          </div>
        </Link>

        {/* Desktop Navigation Pills (Neo-Brutalist Boxes) */}
        <nav className="hidden lg:flex items-center gap-2 bg-white px-4 py-2 rounded-md border-3 border-black shadow-[5px_5px_0px_#000000]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={`text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded transition-colors ${
                  isActive ? 'bg-black text-[#00D9FF]' : 'text-black hover:bg-black hover:text-white'
                }`}
                data-cursor={item.label.toUpperCase()}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            to="/sponsors"
            className="neo-btn-secondary px-4 py-2 text-xs uppercase"
            data-cursor="SPONSOR"
          >
            SPONSOR
          </Link>
          <Link
            to="/register"
            className="neo-btn-primary px-4 py-2 text-xs uppercase flex items-center gap-1.5"
            data-cursor="REGISTER"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>REGISTER TEAM</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-black bg-white rounded-md border-3 border-black shadow-[3px_3px_0px_#000000]"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white text-black border-b-3 border-black px-4 pt-4 pb-6 space-y-3 shadow-[0_6px_0px_#000000]">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-display font-bold uppercase text-black hover:bg-black hover:text-white px-3 py-2 rounded border border-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="pt-4 border-t-2 border-black flex flex-col gap-2">
            <Link
              to="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center neo-btn-primary py-3 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 fill-black" />
              REGISTER YOUR TEAM
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
