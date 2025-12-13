import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Professional Reel Editor
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            ATHARVA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
              RAORANE
            </span>
          </h1>
          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
            I’m a professional reel video editor delivering cinematic, engaging, and trend-driven reels for individuals, creators, and brands. Creating edits that connect emotionally and perform strongly on social platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#work"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-500 text-black font-bold uppercase tracking-wider transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(245,158,11,0.3)]"
            >
              Check My Work
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-neutral-700 hover:border-amber-500 text-white font-bold uppercase tracking-wider transition-all duration-300 hover:bg-neutral-900"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Image/Visual */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">
             {/* Placeholder for Atharva's photo */}
            <img 
              src="https://picsum.photos/800/1000?grayscale" 
              alt="Atharva Raorane" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 hover:opacity-100"
            />
            {/* Overlay Elements */}
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
               <div className="flex items-center gap-3">
                 <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-black">
                   <Play size={18} fill="currentColor" />
                 </div>
                 <div>
                   <p className="text-white font-bold text-sm">Latest Showreel</p>
                   <p className="text-neutral-400 text-xs">2024 Edition</p>
                 </div>
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;