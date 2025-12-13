import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PORTFOLIO_CATEGORIES } from '../constants';
import { Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const REEL_VIDEO_URL = "https://screenpal.com/content/video/cTlIXfnYO3k";

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const nextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_CATEGORIES.length);
  };

  const prevCategory = () => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + PORTFOLIO_CATEGORIES.length) %
        PORTFOLIO_CATEGORIES.length
    );
  };

  const activeCategory = PORTFOLIO_CATEGORIES[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Works"
          subtitle="Explore my diverse portfolio. Switch categories to see more."
        />

        {/* Category Navigation */}
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-12">
          <button
            onClick={prevCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all hover:bg-neutral-900"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex overflow-x-auto gap-3 py-2 px-2 no-scrollbar">
            {PORTFOLIO_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all border ${
                  activeIndex === idx
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all hover:bg-neutral-900"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory.items.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveVideo(REEL_VIDEO_URL)}
              className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-neutral-800 cursor-pointer"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center">
                  <Play size={26} fill="currentColor" className="ml-1" />
                </div>
              </div>

              {/* Bottom Title */}
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h4 className="text-white font-medium truncate">
                  {item.title}
                </h4>
                {item.views && (
                  <div className="flex items-center gap-1 text-xs text-neutral-400 mt-1">
                    <Eye size={12} />
                    {item.views}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white text-3xl hover:text-amber-500"
          >
            ✕
          </button>

          <div className="w-full max-w-[360px] aspect-[9/16] bg-black rounded-xl overflow-hidden border border-neutral-700 shadow-2xl">
            <iframe
              src={activeVideo}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
