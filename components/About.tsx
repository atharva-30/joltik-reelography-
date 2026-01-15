import React from "react";
import SectionTitle from "./SectionTitle";
import { Film, Zap } from "lucide-react";

// PNG imports
import AppleLogo from "../public/apple.png";
import CapCutLogo from "../public/capcut.png";

// PNG icon wrappers
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
      className="relative py-20 border-t border-neutral-800 overflow-hidden"
    >
      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover opacity-100 hidden md:block"
      >
        <source src="/bg-loop.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-neutral-950/85" />

      {/* AMBIENCE GLOW */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-amber-500/5 blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">

          {/* SKILLS GRID */}
          <div className="flex-1 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-neutral-950/80 backdrop-blur-md p-6 rounded-xl border border-neutral-800 hover:border-amber-500/50 transition-colors group"
                >
                  <skill.icon
                    className="w-8 h-8 text-white mb-3 transition-transform duration-300 group-hover:scale-110"
                  />

                  <h3 className="text-amber-500 font-bold text-lg mb-1 group-hover:text-amber-400 transition-colors">
                    {skill.title}
                  </h3>

                  <p className="text-neutral-400 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ABOUT TEXT */}
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
                outlets—focusing on capturing energy, emotion, and
                attention-grabbing visuals.
              </p>
              <p>
                My editing approach is rooted in strong visual storytelling, clean
                framing, precise beat sync, and smooth transitions. I specialize in
                translating a client’s vision into impactful short-form content that
                feels polished, engaging, and platform-ready.
              </p>
            </div>

            {/* SIGNATURE */}
            <div className="mt-8">
              <div className="flex items-center gap-4">
                <div className="h-px bg-neutral-700 flex-1" />
                <span className="text-amber-500 font-signature text-2xl">
                  Atharva Raorane
                </span>
                <div className="h-px bg-neutral-700 flex-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
