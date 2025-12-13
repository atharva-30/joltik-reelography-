import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { PORTFOLIO_REELS } from "../constants";

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const activeSection = PORTFOLIO_REELS[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Works"
          subtitle="Tap to play reels — smooth scrolling enabled"
        />

        {/* Section Tabs - Horizontal Carousel */}
        <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide mb-12">
          {PORTFOLIO_REELS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveIndex(index);
                setPlayingIndex(null);
              }}
              className={`flex-shrink-0 px-6 py-3 font-bold rounded-full
                text-white transition-transform duration-300
                ${
                  activeIndex === index
                    ? "scale-105 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600"
                    : "bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600/70 hover:scale-105"
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
              className="aspect-[9/16] rounded-xl overflow-hidden bg-black border border-neutral-800 relative"
            >
              {playingIndex === idx ? (
                <iframe
                  src={url}
                  className="w-full h-full"
                  allow="fullscreen"
                  allowFullScreen
                  frameBorder="0"
                />
              ) : (
                <button
                  onClick={() => setPlayingIndex(idx)}
                  className="absolute inset-0 flex items-center justify-center bg-black/60 text-white text-lg font-bold"
                >
                  ▶ Tap to Play
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
