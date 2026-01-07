import React from 'react';
import SectionTitle from './SectionTitle';
import { Film, Zap } from 'lucide-react';

// PNG imports - ensure your build setup supports importing PNGs like this
import AppleLogo from '../public/apple.png';
import CapCutLogo from '../public/capcut.png';

// PNG icon wrappers to allow usage like React components with className prop
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
