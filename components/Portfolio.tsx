import React, { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import { PORTFOLIO_REELS } from "../constants";

const Portfolio: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const activeSection = PORTFOLIO_REELS[activeIndex];

  const handlePlay = (idx: number) => {
    // Pause previously playing video
    if (playingIndex !== null && videoRefs.current[playingIndex]) {
      videoRefs.current[playingIndex]?.pause();
    }

    setPlayingIndex(idx);

    // Play current video (USER GESTURE SAFE)
    setTimeout(() => {
      videoRefs.current[idx]?.play();
    }, 0);
  };

  return (
    <section id="work" className="py-24 bg-neutral-950">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Selected Work"
          subtitle="Tap to play reels — smooth scrolling enabled"
        />

        {/* Section Tabs */}
        <div className="flex space-x-4 overflow-x-auto py-2 scrollbar-hide mb-12 pl-1 md:pl-0">
          {PORTFOLIO_REELS.map((section, index) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveIndex(index);
                setPlayingIndex(null);
              }}
              className={`flex-shrink-0 px-6 py-3 font-bold rounded-full
                text-white transition-transform duration-300 ${
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
          {activeSection.videos.map((video, idx) => (
            <div
              key={idx}
              className="relative aspect-[9/16] w-full max-w-[240px] md:max-w-[260px] rounded-xl overflow-hidden shadow-lg bg-neutral-900 mx-auto"
            >
              <video
                ref={(el) => (videoRefs.current[idx] = el)}
                src={video}
                muted
                playsInline
                controls={playingIndex === idx}
                className="w-full h-full object-cover"
              />

              {/* TAP TO PLAY OVERLAY */}
              {playingIndex !== idx && (
                <button
                  onClick={() => handlePlay(idx)}
                  className="absolute inset-0 flex items-center justify-center
                             bg-black/50 text-white font-bold text-sm
                             hover:bg-black/60 transition"
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
