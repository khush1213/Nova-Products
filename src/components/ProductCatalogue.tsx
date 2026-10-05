import React, { useState, useMemo } from 'react';
import { Product, ProductCategory } from '../types/product';
import { ProductImage } from './ProductImage';
import { Search, Eye, Filter, ArrowUpDown, X, Tag } from 'lucide-react';

interface ProductCatalogueProps {
  products: Product[];
  selectedCategory: ProductCategory | 'All';
  onCategoryChange: (category: ProductCategory | 'All') => void;
  onSelectProduct: (productId: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'name-asc';

export const ProductCatalogue: React.FC<ProductCatalogueProps> = ({
  products,
  selectedCategory,
  onCategoryChange,
  onSelectProduct,
  searchQuery,
  onSearchChange
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  const categories: (ProductCategory | 'All')[] = [
    'All',
    'Personal Care',
    'Home Care',
    'Hygiene',
    'Daily Essentials',
    'Other Products'
  ];

  // Helper to extract numeric price for sorting
  const extractNumericPrice = (priceStr: string, mrp: number): number => {
    const match = priceStr.match(/₹?(\d+)/);
    return match ? parseInt(match[1], 10) : mrp;
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    let result = products.filter((p) => {
      // Category match
      const categoryMatch = selectedCategory === 'All' || p.category === selectedCategory;

      // Search match
      const query = searchQuery.trim().toLowerCase();
      if (!query) return categoryMatch;

      const nameMatch = p.name.toLowerCase().includes(query);
      const descMatch = p.shortDescription.toLowerCase().includes(query) || p.description.toLowerCase().includes(query);
      const catMatch = p.category.toLowerCase().includes(query);
      const packMatch = p.packSize.toLowerCase().includes(query);
      const featMatch = p.features.some(f => f.toLowerCase().includes(query));

      return categoryMatch && (nameMatch || descMatch || catMatch || packMatch || featMatch);
    });

    // Sorting
    return [...result].sort((a, b) => {
      if (sortBy === 'featured') {
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      }
      if (sortBy === 'price-asc') {
        return extractNumericPrice(a.availablePrice, a.mrp) - extractNumericPrice(b.availablePrice, b.mrp);
      }
      if (sortBy === 'price-desc') {
        return extractNumericPrice(b.availablePrice, b.mrp) - extractNumericPrice(a.availablePrice, a.mrp);
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [products, selectedCategory, searchQuery, sortBy]);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8F9FA] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Complete Digital Catalogue
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-4">
            Our Products
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Browse our complete collection and explore detailed information about every product.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-xs border border-slate-200/80 mb-8 space-y-4">
          
          {/* Top Row: Search and Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search products by name, formula, or pack size..."
                className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-xs text-slate-500 hidden sm:inline flex items-center gap-1 font-medium">
                <ArrowUpDown className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                aria-label="Sort products by"
                className="px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-slate-900/10 cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="name-asc">Name (A – Z)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Bottom Row: Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 shrink-0 hidden md:inline">
              Filter:
            </span>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onCategoryChange(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Metadata Bar */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <div className="flex items-center gap-2">
            <span>
              Showing <strong className="text-slate-900 font-bold tabular-nums">{filteredProducts.length}</strong> of{' '}
              <strong className="text-slate-900 font-bold tabular-nums">{products.length}</strong> products
            </span>
            {selectedCategory !== 'All' && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-slate-700 font-medium">Category: {selectedCategory}</span>
              </>
            )}
            {searchQuery && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-slate-700 font-medium">Query: &quot;{searchQuery}&quot;</span>
              </>
            )}
          </div>

          {(selectedCategory !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                onCategoryChange('All');
                onSearchChange('');
              }}
              className="text-xs text-slate-600 hover:text-slate-900 underline font-medium"
            >
              Reset All Filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-slate-900 mb-1">
              No matching products found
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              We couldn’t find any items matching &quot;{searchQuery}&quot; in {selectedCategory}. Try adjusting your search query or reset category filters.
            </p>
            <button
              onClick={() => {
                onCategoryChange('All');
                onSearchChange('');
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
            >
              Clear Search & Show All
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
              >
                <div>
                  {/* High Quality Product Image / Packshot graphic */}
                  <div className="p-3 bg-slate-50/50">
                    <ProductImage
                      product={product}
                      aspectRatio="square"
                      className="w-full"
                    />
                  </div>

                  {/* Body Content */}
                  <div className="p-4 sm:p-5">
                    
                    {/* Category & Pack size clean metadata */}
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                      <span className="font-semibold text-slate-700 tracking-wide">
                        {product.category}
                      </span>
                      <span className="font-mono text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">
                        {product.packSize}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors line-clamp-1 mb-1.5">
                      {product.name}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                      {product.shortDescription}
                    </p>

                    {/* Key Spec Badge Pill */}
                    {product.badge && (
                      <div className="inline-flex items-center gap-1 text-[11px] text-slate-600 bg-slate-50 px-2 py-0.5 rounded border border-slate-100 mb-2">
                        <Tag className="w-3 h-3 text-slate-400" />
                        <span className="font-medium">{product.badge}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Pricing and "View Details" button */}
                <div className="px-4 sm:px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 bg-white">
                  <div>
                    <div className="text-[11px] text-slate-400">
                      MRP <span className="line-through tabular-nums">₹{product.mrp}</span>
                    </div>
                    <div className="text-sm sm:text-base font-bold text-slate-900 tabular-nums">
                      {product.availablePrice}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectProduct(product.id)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-900 hover:text-white rounded-lg transition-colors flex items-center gap-1.5 shadow-2xs whitespace-nowrap active:scale-[0.98] cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
