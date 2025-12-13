import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <div className="flex flex-col items-center">
             <p className={`text-neutral-400 text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
            </p>
            <div className={`h-1 w-20 bg-amber-500 mt-6 ${align === 'center' ? '' : 'self-start'}`}></div>
        </div>
      )}
       {!subtitle && <div className={`h-1 w-20 bg-amber-500 mt-2 ${align === 'center' ? 'mx-auto' : ''}`}></div>}
    </div>
  );
};

export default SectionTitle;