import React, { useState } from 'react';
import { Product } from '../types/product';
import { Sparkles, Shield, Droplets, Home, Package, Box } from 'lucide-react';

interface ProductImageProps {
  product: Product;
  className?: string;
  showBadge?: boolean;
  aspectRatio?: 'square' | 'wide' | 'tall';
}

export const ProductImage: React.FC<ProductImageProps> = ({
  product,
  className = '',
  showBadge = true,
  aspectRatio = 'square'
}) => {
  const [imageError, setImageError] = useState(false);

  // Pick visual motif based on category and product type
  const getStylingTheme = () => {
    switch (product.category) {
      case 'Personal Care':
        return {
          bgGradient: 'from-amber-50/70 via-stone-50 to-emerald-50/40',
          accent: '#059669',
          accentLight: '#ecfdf5',
          borderTone: 'border-amber-900/10',
          icon: Sparkles
        };
      case 'Hygiene':
        return {
          bgGradient: 'from-teal-50/80 via-slate-50 to-cyan-50/40',
          accent: '#0d9488',
          accentLight: '#f0fdfa',
          borderTone: 'border-teal-900/10',
          icon: Shield
        };
      case 'Home Care':
        return {
          bgGradient: 'from-sky-50/80 via-slate-50 to-blue-50/40',
          accent: '#2563eb',
          accentLight: '#eff6ff',
          borderTone: 'border-blue-900/10',
          icon: Home
        };
      case 'Daily Essentials':
        return {
          bgGradient: 'from-orange-50/70 via-stone-50 to-amber-50/40',
          accent: '#d97706',
          accentLight: '#fffbeb',
          borderTone: 'border-amber-900/10',
          icon: Package
        };
      default:
        return {
          bgGradient: 'from-slate-100 via-stone-50 to-slate-50',
          accent: '#475569',
          accentLight: '#f8fafc',
          borderTone: 'border-slate-900/10',
          icon: Box
        };
    }
  };

  const theme = getStylingTheme();

  // Distinctive packaging packshot graphic for each product type
  const renderPackagingGraphic = () => {
    const isSoap = product.id === 'prod-001';
    const isBottlePump = product.id === 'prod-002' || product.id === 'prod-003' || product.id === 'prod-008';
    const isSprayOrCanister = product.id === 'prod-004' || product.id === 'prod-009' || product.id === 'prod-012';
    const isJarOrPouch = product.id === 'prod-005' || product.id === 'prod-010' || product.id === 'prod-011';

    if (isSoap) {
      // Artisanal Soap Bar with embossed band
      return (
        <div className="relative flex items-center justify-center w-full h-full p-6">
          {/* Subtle pedestal shadow */}
          <div className="absolute bottom-6 w-3/4 h-5 bg-slate-900/10 rounded-full blur-md" />
          
          {/* Soap bar 3D body */}
          <div className="relative w-44 h-32 bg-gradient-to-tr from-amber-100 via-stone-100 to-amber-50 rounded-2xl shadow-xl border border-amber-200/60 flex flex-col justify-between p-3 overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
            {/* Texture sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-white/30 rounded-full blur-sm" />
            
            {/* Paper wrap band */}
            <div className="my-auto w-full py-2.5 px-3 bg-stone-900 text-white rounded-md shadow-sm border border-stone-800 flex items-center justify-between">
              <div>
                <div className="text-[9px] tracking-widest uppercase font-semibold text-amber-200">NOVA</div>
                <div className="text-xs font-bold tracking-tight text-white leading-tight">PREMIUM SOAP</div>
              </div>
              <div className="text-right">
                <div className="text-[8px] text-stone-300 font-mono">TFM 76%</div>
                <div className="text-[9px] font-semibold text-amber-300">100g</div>
              </div>
            </div>

            {/* Botanical corner watermark */}
            <div className="flex justify-between items-center text-[9px] text-stone-500 font-medium px-1">
              <span>Pure Botanical</span>
              <span>Grade 1</span>
            </div>
          </div>
        </div>
      );
    }

    if (isBottlePump) {
      // Sleek cosmetic pump bottle
      const isAmber = product.id === 'prod-002';
      return (
        <div className="relative flex items-center justify-center w-full h-full p-4">
          <div className="absolute bottom-4 w-28 h-4 bg-slate-900/10 rounded-full blur-md" />
          
          <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
            {/* Pump mechanism */}
            <div className="w-10 h-3 bg-slate-800 rounded-t-sm" />
            <div className="w-4 h-6 bg-slate-700 -my-1" />
            <div className="w-8 h-2 bg-slate-800 rounded-sm" />

            {/* Bottle body */}
            <div className={`relative w-28 h-44 rounded-2xl shadow-xl flex flex-col items-center justify-between p-3.5 border overflow-hidden ${
              isAmber 
                ? 'bg-gradient-to-tr from-amber-900 via-amber-800 to-amber-700 border-amber-950/40 text-amber-50' 
                : 'bg-gradient-to-tr from-teal-800 via-teal-700 to-cyan-700 border-teal-900/40 text-teal-50'
            }`}>
              {/* Vertical reflection */}
              <div className="absolute left-2 inset-y-0 w-2.5 bg-white/20 blur-[1px] rounded-full pointer-events-none" />
              
              {/* Product Label */}
              <div className="w-full bg-white/95 text-slate-900 rounded-lg p-2.5 shadow-sm text-center my-auto border border-white/60">
                <div className="text-[8px] uppercase tracking-widest font-bold text-slate-400">NOVA FORMULA</div>
                <div className="text-[11px] font-bold tracking-tight text-slate-900 leading-snug line-clamp-2">
                  {product.name}
                </div>
                <div className="w-6 h-0.5 bg-slate-900 mx-auto my-1.5" />
                <div className="text-[9px] font-medium text-slate-600 font-mono">
                  {product.packSize}
                </div>
              </div>

              {/* Bottom quality assurance */}
              <div className="text-[8px] tracking-wider uppercase opacity-80 font-mono text-center">
                Dermatologically Tested
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (isSprayOrCanister) {
      // Professional cleaner spray bottle or jug
      return (
        <div className="relative flex items-center justify-center w-full h-full p-4">
          <div className="absolute bottom-4 w-32 h-4 bg-slate-900/10 rounded-full blur-md" />

          <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
            {/* Spray nozzle / handle */}
            <div className="flex items-center -mb-1">
              <div className="w-5 h-6 bg-slate-900 rounded-l-md" />
              <div className="w-8 h-8 bg-blue-600 rounded-r-xl shadow-sm" />
            </div>
            <div className="w-10 h-3 bg-slate-800 rounded-sm" />

            {/* Main canister body */}
            <div className="relative w-32 h-42 bg-gradient-to-tr from-slate-100 via-blue-50/50 to-white rounded-2xl shadow-xl border border-slate-200 flex flex-col justify-between p-3 overflow-hidden">
              <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-400/10 rounded-full blur-sm" />
              
              {/* Badge strip */}
              <div className="bg-blue-600 text-white text-[8px] font-bold uppercase tracking-wider py-0.5 px-2 rounded self-start">
                Pro Clean
              </div>

              {/* Bold label */}
              <div className="text-center py-2">
                <div className="text-[8px] tracking-widest text-slate-400 uppercase font-semibold">NOVA HOME</div>
                <div className="text-xs font-bold text-slate-900 leading-tight">
                  {product.name}
                </div>
                <div className="text-[9px] font-mono text-blue-700 font-semibold mt-1">
                  {product.packSize}
                </div>
              </div>

              <div className="text-[8px] text-center text-slate-500 border-t border-slate-100 pt-1">
                Streak-Free & Disinfectant
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Premium Minimalist Cosmetic Pack / Tub / Bottle
    return (
      <div className="relative flex items-center justify-center w-full h-full p-4">
        <div className="absolute bottom-4 w-28 h-4 bg-slate-900/10 rounded-full blur-md" />

        <div className="relative flex flex-col items-center group-hover:scale-105 transition-transform duration-500">
          <div className="w-16 h-3 bg-slate-800 rounded-t-lg" />
          
          <div className="relative w-32 h-36 bg-gradient-to-tr from-white via-stone-50 to-slate-100 rounded-2xl shadow-xl border border-slate-200/90 flex flex-col justify-between p-3.5 overflow-hidden">
            <div className="flex justify-between items-center text-[8px] text-slate-400 font-mono">
              <span>EST. 2026</span>
              <span>{product.packSize}</span>
            </div>

            <div className="text-center my-auto">
              <div className="text-[9px] tracking-widest text-slate-500 uppercase font-bold">NOVA</div>
              <div className="text-xs font-bold text-slate-900 leading-snug line-clamp-2">
                {product.name}
              </div>
              <div className="w-5 h-0.5 bg-slate-900 mx-auto my-1.5" />
              <div className="text-[9px] text-slate-600 font-medium">
                {product.category}
              </div>
            </div>

            <div className="text-[8px] text-center text-emerald-700 font-medium">
              Pure Active Care
            </div>
          </div>
        </div>
      </div>
    );
  };

  const aspectClass = {
    square: 'aspect-square',
    wide: 'aspect-video',
    tall: 'aspect-[3/4]'
  }[aspectRatio];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${theme.bgGradient} border ${theme.borderTone} ${aspectClass} ${className} group`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-white/60 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-white/40 rounded-full blur-xl pointer-events-none" />

      {/* Actual image if provided and valid */}
      {product.image && !imageError ? (
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        renderPackagingGraphic()
      )}

      {/* Floating Category Indicator */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 bg-white/90 backdrop-blur-md rounded-md text-[11px] font-semibold text-slate-700 shadow-sm border border-slate-200/60 z-10 pointer-events-none">
        <theme.icon className="w-3 h-3 text-slate-900" />
        <span>{product.category}</span>
      </div>

      {/* Optional Badge */}
      {showBadge && product.badge && (
        <div className="absolute top-3 right-3 px-2 py-0.5 bg-slate-900 text-white rounded text-[10px] font-medium tracking-wide shadow-sm z-10 pointer-events-none">
          {product.badge}
        </div>
      )}
    </div>
  );
};
