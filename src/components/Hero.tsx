import React from 'react';
import { ArrowDown, CheckCircle2, ShieldCheck, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { TRUST_POINTS, PRODUCTS } from '../data/products';
import { ProductImage } from './ProductImage';

interface HeroProps {
  onExploreProducts: () => void;
  onViewCategories: () => void;
  onSelectProduct: (productId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onViewCategories,
  onSelectProduct
}) => {
  // Use first 3 showcase products for the hero visual card stack
  const heroSoap = PRODUCTS[0]; // Premium Bath Soap
  const heroShampoo = PRODUCTS[1]; // Herbal Shampoo
  const heroHandWash = PRODUCTS[2]; // Fresh Hand Wash

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-200/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-72 h-72 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left copy, Right visual showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines and actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Clean, quiet metadata kicker without ugly pill boxes */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
              <span>Official Digital Catalogue</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>2026 Edition</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-emerald-700">Verified Specifications</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.1] text-balance mb-6">
              Discover Our Complete Product Collection
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              Explore our range of quality products with detailed information, specifications and pricing — all in one place.
            </p>

            {/* Primary Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onExploreProducts}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-sm hover:shadow-md active:scale-[0.99] flex items-center gap-2 whitespace-nowrap"
              >
                <span>Explore Products</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={onViewCategories}
                className="px-6 py-3.5 text-sm font-semibold text-slate-800 bg-white border border-slate-300/80 rounded-xl hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm whitespace-nowrap flex items-center gap-2"
              >
                <span>View Categories</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Quick Catalogue Summary Note */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-slate-700">
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">12+</div>
                <div className="text-xs text-slate-500 mt-0.5">Catalogued Items</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">5</div>
                <div className="text-xs text-slate-500 mt-0.5">Core Categories</div>
              </div>
              <div>
                <div className="font-display text-xl sm:text-2xl font-bold text-slate-900 tabular-nums">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Transparent Specs</div>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Visual Showcase Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Feature Product Card */}
              <div className="bg-white rounded-3xl p-5 shadow-xl border border-slate-200/90 relative z-10 transition-transform duration-300 hover:shadow-2xl">
                
                {/* Visual Header */}
                <div className="relative rounded-2xl overflow-hidden mb-4 bg-slate-50">
                  <ProductImage
                    product={heroSoap}
                    aspectRatio="square"
                    className="h-64 sm:h-72 w-full object-cover"
                  />
                </div>

                {/* Info Bar */}
                <div className="flex items-start justify-between gap-3 pt-1">
                  <div>
                    <div className="text-xs font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                      {heroSoap.category} · {heroSoap.packSize}
                    </div>
                    <h3 className="font-display font-bold text-lg text-slate-900">
                      {heroSoap.name}
                    </h3>
                    <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                      {heroSoap.shortDescription}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="text-xs text-slate-400 line-through tabular-nums">
                      MRP ₹{heroSoap.mrp}
                    </div>
                    <div className="text-base font-bold text-slate-900 tabular-nums">
                      {heroSoap.availablePrice}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-medium text-slate-500">
                    TFM 76% Grade 1 Bath Bar
                  </span>
                  <button
                    onClick={() => onSelectProduct(heroSoap.id)}
                    className="text-xs font-semibold text-slate-900 hover:text-emerald-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Floating Mini Satellite Card (Herbal Shampoo) */}
              <div 
                onClick={() => onSelectProduct(heroShampoo.id)}
                className="hidden sm:flex absolute -bottom-6 -left-6 z-20 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-lg border border-slate-200/80 items-center gap-3 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-800 font-bold text-xs shrink-0">
                  180ml
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-slate-400 uppercase">Personal Care</div>
                  <div className="text-xs font-bold text-slate-900">{heroShampoo.name}</div>
                  <div className="text-xs font-bold text-emerald-700 tabular-nums mt-0.5">{heroShampoo.availablePrice}</div>
                </div>
              </div>

              {/* Floating Mini Satellite Card (Fresh Hand Wash) */}
              <div 
                onClick={() => onSelectProduct(heroHandWash.id)}
                className="hidden sm:flex absolute -top-4 -right-4 z-20 bg-white/95 backdrop-blur-md p-3 rounded-xl shadow-lg border border-slate-200/80 items-center gap-2.5 cursor-pointer hover:scale-105 transition-transform duration-200"
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xs">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="pr-1">
                  <div className="text-[10px] text-slate-400 font-medium">Hygiene · 250ml</div>
                  <div className="text-xs font-bold text-slate-900">Fresh Hand Wash</div>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Small Trust Indicators Below */}
        <div className="mt-16 pt-8 border-t border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TRUST_POINTS.map((item, index) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/60 border border-slate-200/60 shadow-xs"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
