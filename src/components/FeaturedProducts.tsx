import React from 'react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/product';
import { ProductImage } from './ProductImage';
import { ArrowRight, Eye, Check, Sparkles } from 'lucide-react';

interface FeaturedProductsProps {
  onSelectProduct: (productId: string) => void;
  onExploreAll: () => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  onSelectProduct,
  onExploreAll
}) => {
  // Grab items with isFeatured = true (or first 4)
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#F8F9FA] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Curated Selection</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Featured Collection
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-xl">
              Handpicked standout formulations recognized for superior ingredient purity, high customer satisfaction, and commercial consistency.
            </p>
          </div>

          <button
            onClick={onExploreAll}
            className="self-start md:self-auto text-xs font-semibold text-slate-900 hover:text-emerald-700 flex items-center gap-1.5 transition-colors group"
          >
            <span>View All {PRODUCTS.length} Products</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Featured 4-Grid with enhanced presentation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Visual Media */}
                <div className="p-3 bg-slate-50/50">
                  <ProductImage
                    product={product}
                    aspectRatio="square"
                    className="w-full rounded-xl"
                  />
                </div>

                {/* Body Content */}
                <div className="p-5">
                  {/* Category and Pack Size */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-emerald-700">{product.category}</span>
                    <span className="font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                      {product.packSize}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors line-clamp-1 mb-2">
                    {product.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                    {product.shortDescription}
                  </p>

                  {/* Key Feature Highlight */}
                  {product.features && product.features[0] && (
                    <div className="flex items-start gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-100 mb-4">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{product.features[0]}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer: Pricing and "View Details" */}
              <div className="px-5 pb-5 pt-2 border-t border-slate-100 flex items-center justify-between gap-3 bg-white">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    MRP <span className="line-through tabular-nums">₹{product.mrp}</span>
                  </div>
                  <div className="text-base font-bold text-slate-900 tabular-nums">
                    {product.availablePrice}
                  </div>
                </div>

                <button
                  onClick={() => onSelectProduct(product.id)}
                  className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap active:scale-[0.98]"
                  title={`View details for ${product.name}`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Details</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
