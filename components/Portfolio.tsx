import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { PORTFOLIO_REELS } from "../constants";

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSection = PORTFOLIO_REELS[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Work"
          subtitle="Latest works & showreels"
        />

{/* Tabs */}
<div className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide mb-12">
  {PORTFOLIO_REELS.map((section, index) => {
    const isActive = activeIndex === index;

    return (
      <button
        key={section.id}
        onClick={() => setActiveIndex(index)}
        className={`flex-shrink-0 px-6 py-3 font-bold rounded-full text-white
          transition-all duration-300
          ${isActive
            ? "scale-105 opacity-100 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
            : "opacity-40 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600/70 hover:opacity-80"
          }`}
      >
        {section.title}
      </button>
    );
  })}
</div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeSection.videos.map((url, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] w-full max-w-[260px] mx-auto rounded-xl overflow-hidden bg-black shadow-lg"
            >
              {/* Scroll-friendly wrapper */}
              <div className="absolute inset-0 pointer-events-none">
                <iframe
                  src={url}
                  title={`ScreenPal Reel ${idx + 1}`}
                  loading="lazy"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full pointer-events-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
