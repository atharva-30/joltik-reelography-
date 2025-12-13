import React from 'react';
import SectionTitle from './SectionTitle';
import { Film, Zap, Palette, Users } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { icon: Film, title: "2+ Years Exp", desc: "Professional editing journey" },
    { icon: Zap, title: "Fast-Paced", desc: "High retention editing style" },
    { icon: Users, title: "Client Focus", desc: "Singers, Clubs, Creators" },
    { icon: Palette, title: "Visuals", desc: "Color Grading & VFX" },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900 border-t border-neutral-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 order-2 md:order-1">
             <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors group">
                    <skill.icon className="w-8 h-8 text-amber-500 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-white font-bold text-lg mb-1">{skill.title}</h3>
                    <p className="text-neutral-400 text-sm">{skill.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          <div className="flex-1 order-1 md:order-2">
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-2 text-sm">About Me</h4>
            <h2 className="text-4xl font-bold text-white mb-6">Crafting Visual Stories That Resonate</h2>
            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                My journey as a video editor began with a passion for rhythm and visual storytelling. Over the past 2+ years, I've honed my skills specifically for the vertical video format, understanding exactly what stops the scroll.
              </p>
              <p>
                I don't just cut footage; I engineer moments. Whether it's the beat drop in a music video teaser or the emotional vows of a wedding highlight, I ensure every frame serves a purpose. 
              </p>
              <p>
                My toolkit includes advanced color grading to set the mood, seamless transitions to maintain flow, and VFX basics to add that extra production value. I've worked with diverse clients ranging from commercial outlets to private event organizers.
              </p>
            </div>
            
            <div className="mt-8">
              <div className="flex items-center gap-4">
                 <div className="h-px bg-neutral-700 flex-1"></div>
                 <span className="text-white font-signature text-2xl">Atharva Raorane</span>
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