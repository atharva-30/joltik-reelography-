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
          title="Selected Works"
          subtitle="Scroll through my recent reel edits"
        />

        {/* Section Tabs */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {PORTFOLIO_REELS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-full text-sm font-bold border transition ${
                activeIndex === index
                  ? "bg-white text-black border-white"
                  : "border-neutral-700 text-neutral-400 hover:text-white"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeSection.videos.map((url, idx) => (
            <div
              key={idx}
              className="aspect-[9/16] rounded-xl overflow-hidden bg-black border border-neutral-800"
            >
              <iframe
                src={url}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
