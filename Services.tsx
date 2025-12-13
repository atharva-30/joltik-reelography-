import React from 'react';
import SectionTitle from './SectionTitle';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="My Services" 
          subtitle="Tailored editing solutions for every need."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-neutral-950 rounded-2xl p-8 border border-neutral-800 hover:border-amber-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] group flex flex-col"
            >
              <div className="w-14 h-14 bg-neutral-900 rounded-lg flex items-center justify-center mb-6 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors duration-300">
                <service.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-neutral-400 text-sm mb-6 flex-grow leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-neutral-300">
                    <Check size={16} className="text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-neutral-900 flex justify-between items-center">
                <span className="text-neutral-500 text-xs uppercase tracking-wider">Starting At</span>
                <span className="text-amber-500 font-bold text-lg">{service.priceRange}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;