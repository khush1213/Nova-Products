import React from 'react';
import { Award, FileCheck2, LayoutGrid, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const featurePoints = [
    {
      title: 'Quality Focus',
      description: 'Manufactured under strict batch controls using vetted cosmetic and household formulations with high ingredient integrity.',
      icon: Award
    },
    {
      title: 'Transparent Information',
      description: 'Zero hidden specifications. We provide complete disclosure on TFM grades, net contents, ingredients, and realistic wholesale price margins.',
      icon: FileCheck2
    },
    {
      title: 'Wide Product Range',
      description: 'From personal care and hygiene essentials to industrial-strength surface sanitation, our catalog covers versatile consumer needs.',
      icon: LayoutGrid
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Mission & Narrative */}
          <div className="lg:col-span-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              About NOVA PRODUCTS
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-6">
              Committed to Clear, Reliable Product Excellence
            </h2>
            
            <p className="text-base text-slate-600 leading-relaxed mb-6">
              We are committed to presenting quality products with clear, reliable and easy-to-understand information. Our digital catalogue makes it simple for customers and business partners to explore our complete product range.
            </p>

            <p className="text-sm text-slate-500 leading-relaxed mb-8">
              Founded on principles of formulation discipline, we engineer everyday personal care, hygiene solutions, and household cleaners that prioritize human safety and tangible performance. Whether you are a retail customer, retail shopkeeper, or institutional distributor, our catalogue serves as your direct window into our active product portfolio.
            </p>

            {/* Quick Commitments List */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Strict adherence to National Bureau of Standards & FDA Guidelines</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Consistent batch weights and tamper-evident packaging seals</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Direct inquiry channel for trade inquiries and specification sheets</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Feature Points */}
          <div className="lg:col-span-6 space-y-5">
            {featurePoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all duration-200 shadow-xs"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white text-slate-900 shadow-xs border border-slate-200/60 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-slate-800" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono font-semibold text-slate-400">0{idx + 1}.</span>
                        <h3 className="font-display text-base font-bold text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
