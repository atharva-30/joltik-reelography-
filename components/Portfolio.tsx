import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { PORTFOLIO_CATEGORIES } from '../constants';
import { Play, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextCategory = () => {
    setActiveIndex((prev) => (prev + 1) % PORTFOLIO_CATEGORIES.length);
  };

  const prevCategory = () => {
    setActiveIndex((prev) => (prev - 1 + PORTFOLIO_CATEGORIES.length) % PORTFOLIO_CATEGORIES.length);
  };

  const activeCategory = PORTFOLIO_CATEGORIES[activeIndex];

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="Selected Works" 
          subtitle="Explore my diverse portfolio. Switch categories to see more."
        />

        {/* Category Navigation (Tabs + Arrows) */}
        <div className="flex items-center justify-center gap-2 md:gap-6 mb-12">
            
            {/* Desktop Prev Arrow */}
            <button 
                onClick={prevCategory}
                className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all hover:bg-neutral-900"
                aria-label="Previous Category"
            >
                <ChevronLeft size={24} />
            </button>

            {/* Scrollable Tabs */}
            <div className="flex overflow-x-auto gap-3 py-2 px-2 max-w-full no-scrollbar">
                {PORTFOLIO_CATEGORIES.map((cat, idx) => (
                    <button
                        key={idx}
                        onClick={() => setActiveIndex(idx)}
                        className={`whitespace-nowrap px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all border ${
                            activeIndex === idx
                            ? 'bg-amber-500 text-black border-amber-500 shadow-lg shadow-amber-500/20 scale-105'
                            : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                        }`}
                    >
                        {cat.title}
                    </button>
                ))}
            </div>

             {/* Desktop Next Arrow */}
            <button 
                onClick={nextCategory}
                className="hidden md:flex w-12 h-12 rounded-full border border-neutral-700 items-center justify-center text-neutral-400 hover:text-amber-500 hover:border-amber-500 transition-all hover:bg-neutral-900"
                aria-label="Next Category"
            >
                <ChevronRight size={24} />
            </button>
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
            {/* Key ensures animation triggers on switch */}
            <div key={activeIndex} className="animate-fade-in">
                <div className="flex items-center gap-3 mb-6 md:hidden">
                    <span className="w-1 h-6 bg-amber-500 rounded-full"></span>
                    <h3 className="text-xl font-bold text-white">{activeCategory.title}</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {activeCategory.items.map((item) => (
                        <div 
                        key={item.id} 
                        className="group relative rounded-xl overflow-hidden aspect-[9/16] bg-neutral-900 border border-neutral-800 cursor-pointer"
                        >
                        {/* Thumbnail */}
                        <img 
                            src={item.thumbnail} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                        />
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-amber-500 text-black flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                            <Play fill="currentColor" size={24} className="ml-1" />
                            </div>
                            <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                            <h4 className="text-white font-bold text-lg px-4">{item.title}</h4>
                            {item.views && (
                                <div className="flex items-center justify-center gap-2 text-amber-400 text-sm mt-2">
                                <Eye size={14} />
                                <span>{item.views} Views</span>
                                </div>
                            )}
                            </div>
                        </div>

                        {/* Default Overlay */}
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                            <h4 className="text-white font-medium truncate text-lg">{item.title}</h4>
                            <p className="text-neutral-400 text-xs mt-1 uppercase tracking-wider">{activeCategory.title}</p>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Mobile Navigation Controls */}
        <div className="flex md:hidden justify-center gap-6 mt-10">
             <button 
                onClick={prevCategory}
                className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg"
            >
                <ChevronLeft size={28} />
            </button>
            <button 
                onClick={nextCategory}
                className="w-14 h-14 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white active:scale-95 transition-transform shadow-lg"
            >
                <ChevronRight size={28} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;