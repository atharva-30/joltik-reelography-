import React from 'react';
import { Clapperboard } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-neutral-900">
      <div className="container mx-auto px-6 flex flex-col items-center justify-center gap-6">
        
        <div className="flex items-center gap-2">
           <Clapperboard className="text-amber-500 w-6 h-6" />
           <span className="text-white font-bold text-xl uppercase tracking-widest">Joltik Reelography</span>
        </div>

        <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Joltik Reelography. All Rights Reserved.
        </p>

        <div className="flex gap-6">
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">YouTube</a>
            <a href="#" className="text-neutral-600 hover:text-white transition-colors">LinkedIn</a>
        </div>

        <div className="w-full h-px bg-neutral-900 max-w-xs my-2"></div>
        
        <p className="text-neutral-600 text-xs">
            Made by Atharva Raorane
        </p>

      </div>
    </footer>
  );
};

export default Footer;