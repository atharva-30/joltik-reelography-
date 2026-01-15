import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Joltik Reelography Logo"
            className="w-7 h-7 object-contain"
          />
          <span className="text-white font-bold text-xl uppercase tracking-widest">
            Joltik Reelography
          </span>
        </div>

        <p className="text-neutral-500 text-sm text-center">
          © {new Date().getFullYear()} Joltik Reelography. All Rights Reserved.
        </p>

        {/* Footer Links */}
        <div className="flex gap-6 text-sm">
          <a href="#home" className="text-neutral-600 hover:text-white transition-colors">
            Home
          </a>
          <a href="#work" className="text-neutral-600 hover:text-white transition-colors">
            Work
          </a>
          <a href="#about" className="text-neutral-600 hover:text-white transition-colors">
            About
          </a>
        </div>

        <div className="w-full h-px bg-neutral-900 max-w-xs my-2" />

        <p className="text-neutral-600 text-xs">
          Made by Atharva Raorane
        </p>

      </div>
    </footer>
  );
};

export default Footer;
