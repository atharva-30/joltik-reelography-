import React from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-neutral-950"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-900/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Reel Videographer & Editor
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            ATHARVA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
              RAORANE
            </span>
          </h1>

          <p className="text-neutral-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
            I am a professional reel videographer and editor specializing in cinematic, fast-paced reels for events, weddings, festivals, and commercial spaces. 
            My reels are designed to capture energy, emotion, and rhythm delivering impactful visuals that perform across digital platforms.
          </p>

<div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-up">

  {/* Primary CTA */}
  <a
    href="#work"
    className="relative overflow-hidden px-9 py-4 bg-amber-600 text-black font-bold uppercase tracking-wider
    rounded-lg
    transition-all duration-300 ease-out
    hover:bg-amber-500 hover:scale-105 hover:-translate-y-1
    shadow-[0_0_25px_rgba(245,158,11,0.35)]
    before:absolute before:inset-0
    before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent
    before:-translate-x-full hover:before:translate-x-full
    before:transition-transform before:duration-700"
  >
    Check My Work
  </a>

  {/* Secondary CTA */}
  <a
    href="#contact"
    className="px-9 py-4 rounded-lg
    border border-neutral-700
    text-white font-bold uppercase tracking-wider
    transition-all duration-300 ease-out
    hover:border-amber-500 hover:text-amber-400
    hover:bg-neutral-900 hover:-translate-y-1 hover:scale-105"
  >
    Get In Touch
  </a>

</div>

        {/* Right Video */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl group">
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500" />

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/5] md:aspect-square lg:aspect-[4/5]">

            {/* ScreenPal Embed */}
            <iframe
              src="https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=1&muted=1&loop=1&controls=0"
              className="w-full h-full object-cover"
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
            />

            {/* Overlay */}
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
  <div>
    <p className="text-white font-bold text-sm">Latest Showreel</p>
    <p className="text-neutral-400 text-xs">2024 Edition</p>
  </div>
</div>


          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
