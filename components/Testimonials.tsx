import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const EDITOR_NOTES = [
  {
    content:
      'Editing is not about effects or transitions. It’s about timing — knowing exactly when a moment should breathe.',
    focus: 'Timing & Pacing',
    role: 'Reel Editing',
  },
  {
    content:
      'Short-form content works best when cuts feel invisible and the emotion leads the rhythm.',
    focus: 'Emotional Flow',
    role: 'Creative Direction',
  },
  {
    content:
      'Every reel on this page is built to hold attention, not by force — but by flow.',
    focus: 'Audience Retention',
    role: 'Visual Storytelling',
  },
  {
    content:
      'Good edits don’t ask for attention. They earn it.',
    focus: 'Purposeful Cuts',
    role: 'Reel Editing',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % EDITOR_NOTES.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + EDITOR_NOTES.length) % EDITOR_NOTES.length
    );
  };

  return (
    <section
      id="from-the-editor"
      className="py-24 bg-neutral-950 relative overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="From the Editor" />

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 text-neutral-800 w-16 h-16 -z-10" />

            <div className="flex flex-col items-center text-center">
              <p className="text-xl md:text-2xl text-neutral-200 italic mb-8 font-light leading-relaxed">
                “{EDITOR_NOTES[currentIndex].content}”
              </p>

              <div>
                <h4 className="text-white font-semibold text-lg">
                  {EDITOR_NOTES[currentIndex].focus}
                </h4>
                <p className="text-amber-500 text-sm">
                  {EDITOR_NOTES[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 md:-mx-12 pointer-events-none">
              <button
                onClick={prev}
                className="pointer-events-auto w-10 h-10 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all md:-translate-x-2"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="pointer-events-auto w-10 h-10 rounded-full bg-neutral-800 hover:bg-amber-500 hover:text-black text-white flex items-center justify-center transition-all md:translate-x-2"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {EDITOR_NOTES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-amber-500'
                      : 'bg-neutral-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
