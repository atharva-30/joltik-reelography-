import React from "react";
import SectionTitle from "./SectionTitle";
import { Film, Zap } from "lucide-react";

// PNG imports
import AppleLogo from "../public/apple.png";
import CapCutLogo from "../public/capcut.png";

// PNG icon wrappers (accept className like Lucide icons)
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
      desc: "Fast Delivery and Ready to Post",
    },
    {
      icon: CapCutIcon,
      title: "CapCut Pro",
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
          
          {/* Skills Grid */}
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-neutral-950 p-6 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors group"
                >
                  <skill.icon
                    className="w-8 h-8 text-white mb-3 transition-all duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-white font-bold text-lg mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Text */}
          <div className="flex-1 order-1 md:order-2">
            <h4 className="text-amber-500 font-bold uppercase tracking-widest mb-2 text-sm">
              About Me
            </h4>
            <h2 className="text-4xl font-bold text-white mb-6">
              Crafting Visual Stories That Resonate
            </h2>

            <div className="space-y-4 text-neutral-400 leading-relaxed">
              <p>
                I’m Atharva Raorane, a freelance reel videographer and editor behind
                Joltik Reelography. Since 2023, I’ve been creating cinematic,
                fast-paced reels for weddings, festivals, events, and commercial
                outlets focused on capturing energy, emotion, and attention-grabbing
                visuals for digital platforms.
              </p>
              <p>
                My editing approach is rooted in strong visual storytelling, clean
                framing, precise beat sync, and smooth transitions. I specialize in
                translating a client’s vision into impactful short-form content that
                feels polished, engaging, and p
