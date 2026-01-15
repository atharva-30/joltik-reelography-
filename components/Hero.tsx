import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black"
    >
      {/* 🔴 BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-25"
      >
        <source src="/bg-loop.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY for readability */}
      <div className="absolute inset-0 bg-black/60" />

      {/* AMBIENCE BLOBS */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-purple-900/15 blur-[120px] rounded-full pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">

          <h2 className="text-amber-500 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
            Reel Videographer & Editor
          </h2>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-tight">
            ATHARVA <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
              RAORANE
            </span>
          </h1>

          <p className="text-neutral-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-8 mx-auto lg:mx-0">
            I create cinematic, fast-paced reels for events, weddings, festivals,
            and commercial spaces — designed to capture emotion, rhythm, and attention.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">

            <a
              href="#work"
              className="px-9 py-4 bg-amber-600 text-black font-bold uppercase tracking-wider rounded-lg
                         transition-all duration-300 hover:bg-amber-500 hover:scale-105 hover:-translate-y-1
                         shadow-[0_0_30px_rgba(245,158,11,0.45)]"
            >
              Check My Work
            </a>

            <a
              href="#contact"
              className="px-9 py-4 rounded-lg border border-neutral-700 text-white font-bold uppercase tracking-wider
                         transition-all duration-300 hover:border-amber-500 hover:text-amber-400
                         hover:bg-black/40 hover:scale-105 hover:-translate-y-1"
            >
              Get In Touch
            </a>

          </div>
        </div>

        {/* RIGHT SHOWREEL */}
        <div className="flex-1 relative w-full max-w-lg lg:max-w-xl">

          <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-purple-600 rounded-2xl blur opacity-30" />

          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 aspect-[4/5]">

            <iframe
              src="https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=1&muted=1&loop=1&controls=0"
              className="w-full h-full object-cover"
              allow="autoplay; fullscreen"
              allowFullScreen
              frameBorder="0"
            />

            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 to-transparent">
              <p className="text-white font-bold text-sm">Latest Showreel</p>
              <p className="text-neutral-400 text-xs">2024 Edition</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
