import React from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { ProductCategory } from '../types/product';
import { Sparkles, Home, ShieldCheck, PackageCheck, Layers, ArrowRight } from 'lucide-react';

interface CategoriesSectionProps {
  onSelectCategory: (category: ProductCategory) => void;
  activeCategory?: ProductCategory | 'All';
}

export const CategoriesSection: React.FC<CategoriesSectionProps> = ({
  onSelectCategory,
  activeCategory = 'All'
}) => {
  // Map icons
  const getIcon = (name: string) => {
    switch (name) {
      case 'Sparkles':
        return Sparkles;
      case 'Home':
        return Home;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'PackageCheck':
        return PackageCheck;
      default:
        return Layers;
    }
  };

  // Compute live count for each category from PRODUCTS
  const getProductCount = (catId: ProductCategory) => {
    return PRODUCTS.filter((p) => p.category === catId).length;
  };

  return (
    <section id="categories" className="py-16 md:py-20 bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Browse Categories
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Product Categories
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Explore specialized product classifications engineered for everyday household, personal care, and institutional needs.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            {CATEGORIES.length} Categories · {PRODUCTS.length} Products
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {CATEGORIES.map((cat) => {
            const Icon = getIcon(cat.iconName);
            const count = getProductCount(cat.id);
            const isSelected = activeCategory === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-slate-900 text-white shadow-lg scale-[1.02] ring-2 ring-slate-900'
                    : 'bg-slate-50 hover:bg-slate-100/80 text-slate-900 border border-slate-200/80 hover:border-slate-300 shadow-xs hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                        isSelected
                          ? 'bg-white/10 text-white'
                          : 'bg-white text-slate-800 shadow-xs border border-slate-200/60'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span
                      className={`text-xs font-mono font-medium px-2 py-0.5 rounded-full ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200/70 text-slate-600'
                      }`}
                    >
                      {count} {count === 1 ? 'item' : 'items'}
                    </span>
                  </div>

                  {/* Name and Tagline */}
                  <h3 className="font-display text-lg font-bold tracking-tight mb-2">
                    {cat.name}
                  </h3>

                  <p
                    className={`text-xs leading-relaxed line-clamp-3 ${
                      isSelected ? 'text-slate-300' : 'text-slate-500'
                    }`}
                  >
                    {cat.shortDescription}
                  </p>
                </div>

                {/* Bottom link callout */}
                <div className="mt-6 pt-4 border-t border-current/10 flex items-center justify-between text-xs font-semibold">
                  <span className={isSelected ? 'text-white' : 'text-slate-700'}>
                    Browse Range
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform ${
                      isSelected ? 'text-white' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
