import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PORTFOLIO_CATEGORIES } from '../constants';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingId, setPlayingId] = useState<number | null>(null);

  const nextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_CATEGORIES.length);
    setPlayingId(null);
  };

  const prevCategory = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + PORTFOLIO_CATEGORIES.length) %
        PORTFOLIO_CATEGORIES.length
    );
    setPlayingId(null);
  };

  const activeCategory = PORTFOLIO_CATEGORIES[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Works"
          subtitle="Explore my diverse portfolio. Switch categories to see more."
        />

        {/* CATEGORY NAV */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={prevCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex gap-3 overflow-x-auto no-scrollbar">
            {PORTFOLIO_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setPlayingId(null);
                }}
                className={`px-6 py-3 rounded-full text-sm font-bold border transition ${
                  activeIndex === idx
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'border-neutral-800 text-neutral-400 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* REELS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory.items.map((item) => {
            const isPlaying = playingId === item.id;
            const embedUrl = `https://go.screenpal.com/player/${item.videoId}?autoplay=1&muted=1&loop=1&controls=0`;

            return (
              <div
                key={item.id}
                className="relative rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-neutral-800"
              >
                {!isPlaying ? (
                  <>
                    {/* THUMBNAIL */}
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-70"
                    />

                    {/* PLAY BUTTON */}
                    <button
                      onClick={() => setPlayingId(item.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition"
                    >
                      <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center">
                        <Play size={26} fill="currentColor" className="ml-1" />
                      </div>
                    </button>
                  </>
                ) : (
                  <>
                    {/* SCREENPAL EMBED — SAME AS SHOWREEL */}
                    <iframe
                      src={embedUrl}
                      className="w-full h-full object-cover"
                      allow="autoplay; fullscreen"
                      allowFullScreen
                      frameBorder="0"
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
