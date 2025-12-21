import React from 'react';
import SectionTitle from './SectionTitle';
import { Film, Zap } from 'lucide-react';

// ✅ PNG imports (make sure these paths are correct)
import AppleLogo from '../public/apple.png';
import CapCutLogo from '../public/capcut.png';

// ✅ PNG icon wrappers (accept className like Lucide icons)
const AppleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img src={AppleLogo} alt="Apple" className={className} />
);

const CapCutIcon: React.FC<{ className?: string }> = ({ className }) => (
  <img src={CapCutLogo} alt="CapCut" className={className} />
);

const About: React.FC = () => {
  const skills = [
    {
      icon: Film,
      title: "2+ Years Exp",
      desc: "Professional Reelography Journey",
    },
    {
      icon: Zap,
      title: "Fast-Paced",
      desc: "Fast Delivery",
    },
    {
      icon: CapCutIcon,
      title: "Capcut Pro",
      desc: "Exports Quicker and Quality Work",
    },
    {
      icon: AppleIcon,
      title: "iPhone Videography",
      desc: "i16 Captures Quality",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-neutral-900 border-t border-neutral-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* LEFT GRID */}
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors group"
                >
                  {/* ICON */}
                  <skill.icon
                    className="w-8 h-8 mb-3 text-white group-hover:scale-110 transition-transform object-contain"
                  />

                  <h3 className="text-white font-bold text-lg mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 order-1 md:order-2">
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-2 text-sm">
              About Me
            </h4>

            <h2 className="text-4xl font-bold text-white mb-6">
              Crafting Visual Stories That Resonate
            </h2>

            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                My journey as a video editor began with a passion for rhythm and
                visual storytelling. Over the past 2+ years, I've honed my
                skills specifically for the vertical video format, understanding
                exactly what stops the scroll.
              </p>

              <p>
                I don't just cut footage; I engineer moments. Whether it's the
                beat drop in a music video teaser or the emotional vows of a
                wedding highlight, I ensure every frame serves a purpose.
              </p>

              <p>
                My toolkit includes advanced color grading, seamless transitions,
                and VFX basics to add that extra production value. I've worked
                with diverse clients ranging from commercial outlets to private
                event organizers.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-4">
                <div className="h-px bg-neutral-700 flex-1"></div>
                <span className="text-white font-signature text-2xl">
                  Atharva Raorane
                </span>
                <div className="h-px bg-neutral-700 flex-1"></div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
