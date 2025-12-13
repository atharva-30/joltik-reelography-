import React, { useState, useEffect } from 'react';
import { Menu, X, Clapperboard } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Clapperboard className="w-8 h-8 text-amber-500 group-hover:text-amber-400 transition-colors" />
          <div className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-widest text-white leading-none">
              Joltik
            </span>
            <span className="text-xs text-amber-500 tracking-[0.2em] group-hover:text-amber-400 transition-colors">
              Reelography
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm uppercase tracking-wider text-neutral-300 hover:text-amber-500 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white hover:text-amber-500 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-b border-neutral-800 animate-fade-in-up">
          <div className="flex flex-col p-6 gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-lg uppercase tracking-wide text-neutral-300 hover:text-amber-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;