import React from 'react';
import { ClipboardCheck, Search, FileText, Briefcase } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/products';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ClipboardCheck':
        return ClipboardCheck;
      case 'Search':
        return Search;
      case 'FileText':
        return FileText;
      case 'Briefcase':
        return Briefcase;
      default:
        return ClipboardCheck;
    }
  };

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-[#F8F9FA] border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Catalogue Advantage
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Why Choose Our Digital Showcase
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Engineered from the ground up to give buyers, retailers, and partners accurate, transparent, and frictionless product data.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point) => {
            const Icon = getIcon(point.iconName);
            return (
              <div
                key={point.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 text-slate-900 border border-slate-200/70 flex items-center justify-center mb-5 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-slate-900 mb-2.5">
                    {point.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {point.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Advantage 0{point.id}</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
