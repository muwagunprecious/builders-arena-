import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const hoverable = target.closest('[data-cursor]');
      if (hoverable) {
        setIsHovered(true);
        setHoverText(hoverable.getAttribute('data-cursor') || 'BUILD');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Outer ambient cursor ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full border border-brand-cyan/60 hidden md:block"
        animate={{
          x: mousePosition.x - (isHovered ? 24 : 16),
          y: mousePosition.y - (isHovered ? 24 : 16),
          scale: isHovered ? 1.5 : 1,
          backgroundColor: isHovered ? 'rgba(0, 217, 255, 0.15)' : 'rgba(98, 91, 255, 0.05)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.1 }}
        style={{
          width: isHovered ? 48 : 32,
          height: isHovered ? 48 : 32,
        }}
      />

      {/* Cyber 3D Pointer Arrow Badge */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 flex items-center gap-1.5 hidden md:flex"
        animate={{
          x: mousePosition.x + 12,
          y: mousePosition.y + 12,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.05 }}
      >
        <div className="bg-brand-black/90 border border-brand-cyan px-2 py-0.5 rounded text-[10px] font-mono tracking-widest text-brand-cyan uppercase shadow-lg shadow-brand-cyan/20 flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan animate-pulse" />
          {hoverText || 'BUILDER'}
        </div>
      </motion.div>
    </>
  );
};
