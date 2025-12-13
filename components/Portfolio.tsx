import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PORTFOLIO_CATEGORIES } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_CATEGORIES.length);
  };

  const prevCategory = () => {
    setActiveIndex(
      (prev) => (prev - 1 + PORTFOLIO_CATEGORIES.length) % PORTFOLIO_CATEGORIES.length
    );
  };

  const activeCategory = PORTFOLIO_CATEGORIES[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Works"
          subtitle="Explore my portfolio across different categories."
        />

        {/* Category Navigation */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <button
            onClick={prevCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex overflow-x-auto gap-3 no-scrollbar">
            {PORTFOLIO_CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`px-6 py-3 rounded-full text-sm font-bold transition-all border ${
                  activeIndex === idx
                    ? 'bg-amber-500 text-black border-amber-500'
                    : 'text-neutral-400 border-neutral-800 hover:text-white'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          <button
            onClick={nextCategory}
            className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeCategory.items.map((item) => (
            <div
              key={item.id}
              className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black border border-neutral-800"
            >
              {/* EXACT SAME ScreenPal EMBED AS SHOWREEL */}
              <iframe
                src={`${item.videoUrl}&playsinline=1&background=1`}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
                frameBorder="0"
              />

              {/* Bottom Overlay */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none">
                <h4 className="text-white font-medium text-lg truncate">
                  {item.title}
                </h4>
                <p className="text-neutral-400 text-xs uppercase tracking-wider mt-1">
                  {activeCategory.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
