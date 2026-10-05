import React, { useEffect } from 'react';
import { Product } from '../types/product';
import { ProductImage } from './ProductImage';
import { 
  X, 
  ArrowLeft, 
  CheckCircle2, 
  MessageSquare, 
  Printer, 
  Share2, 
  Info, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  Hash, 
  Sparkles 
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onInquire: (product: Product) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquire
}) => {
  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${product.name} | NOVA PRODUCTS`,
        text: `${product.name} (${product.packSize}) - ${product.shortDescription} MRP: ₹${product.mrp}, Price: ${product.availablePrice}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Product link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Background click backdrop */}
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog Card */}
      <div className="relative bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col max-h-[92vh] z-10 animate-in zoom-in-95 duration-200">
        
        {/* Sticky Top Bar Inside Modal */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-slate-200/80 flex items-center justify-between z-20">
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors py-1 px-2.5 rounded-lg hover:bg-slate-100"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Products</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Print product technical sheet"
              aria-label="Print sheet"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={handleShare}
              className="p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
              title="Share product details"
              aria-label="Share details"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Top Section: Split Media & Key Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Image Showcase */}
            <div className="md:col-span-5 flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden border border-slate-200/80 bg-slate-50 shadow-xs">
                <ProductImage
                  product={product}
                  aspectRatio="square"
                  className="w-full"
                />
              </div>

              {/* Quick Specs Under Media */}
              <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-200/70 text-xs text-slate-600 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5" /> SKU Code
                  </span>
                  <span className="font-mono font-medium text-slate-800">{product.sku || 'NP-CAT-2026'}</span>
                </div>
                {product.shelfLife && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" /> Shelf Life
                    </span>
                    <span className="font-medium text-slate-800">{product.shelfLife}</span>
                  </div>
                )}
                {product.origin && (
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" /> Production
                    </span>
                    <span className="font-medium text-slate-800">{product.origin}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Title, Pricing & Overview */}
            <div className="md:col-span-7 flex flex-col">
              
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-slate-500">
                <span className="text-emerald-700">{product.category}</span>
                <span aria-hidden="true">·</span>
                <span>Pack: {product.packSize}</span>
                {product.badge && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded text-[11px] font-mono">
                      {product.badge}
                    </span>
                  </>
                )}
              </div>

              {/* Product Name */}
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">
                {product.name}
              </h1>

              {/* Short Overview */}
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {product.shortDescription}
              </p>

              {/* Pricing Box (Strictly informational - No fake purchase buttons!) */}
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/90 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 font-medium">Maximum Retail Price</div>
                    <div className="text-lg font-semibold text-slate-500 line-through tabular-nums mt-0.5">
                      ₹{product.mrp}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">Inclusive of all taxes</div>
                  </div>

                  <div>
                    <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                      Available / Wholesale Range
                    </div>
                    <div className="text-2xl font-bold text-slate-900 tabular-nums mt-0.5">
                      {product.availablePrice}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Per unit ({product.packSize})
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/70 flex items-center justify-between text-xs text-slate-500">
                  <span>* Subject to order volume & distribution tier.</span>
                  <span className="font-semibold text-slate-700">GST Invoice Provided</span>
                </div>
              </div>

              {/* Primary Informational Call to Action: Send Inquiry (NO BUY / NO CART) */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    onClose();
                    onInquire(product);
                  }}
                  className="w-full sm:w-auto flex-1 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Product Inquiry / Request Quote</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-3.5 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold rounded-xl transition-colors whitespace-nowrap cursor-pointer"
                >
                  Back to Catalogue
                </button>
              </div>

            </div>
          </div>

          {/* Section: Comprehensive Product Description */}
          <div className="border-t border-slate-200/80 pt-6">
            <h2 className="font-display text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-slate-500" />
              <span>Product Description</span>
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed max-w-3xl">
              {product.description}
            </p>
          </div>

          {/* Section: Key Features */}
          {product.features && product.features.length > 0 && (
            <div className="border-t border-slate-200/80 pt-6">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span>Key Features & Benefits</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Section: Technical Specifications Table */}
          {product.specifications && Object.keys(product.specifications).length > 0 && (
            <div className="border-t border-slate-200/80 pt-6">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-500" />
                <span>Technical Specifications</span>
              </h2>

              <div className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
                <table className="w-full text-xs text-left">
                  <tbody className="divide-y divide-slate-100">
                    {Object.entries(product.specifications).map(([key, value], idx) => (
                      <tr key={key} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                        <td className="py-3 px-4 font-semibold text-slate-600 w-1/3 border-r border-slate-100">
                          {key}
                        </td>
                        <td className="py-3 px-4 text-slate-800 font-medium">
                          {value}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 w-1/3 border-r border-slate-100">
                        Pack Size / Net Quantity
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        {product.packSize}
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-semibold text-slate-600 w-1/3 border-r border-slate-100">
                        Category Classification
                      </td>
                      <td className="py-3 px-4 text-slate-800 font-medium">
                        {product.category}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section: Ingredients / Materials */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="border-t border-slate-200/80 pt-6">
              <h2 className="font-display text-lg font-bold text-slate-900 mb-3">
                Key Ingredients & Formulation Base
              </h2>
              <p className="text-xs text-slate-500 mb-3">
                All ingredients comply with national quality benchmarks and dermatological standards:
              </p>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-100 border border-slate-200/70 rounded-md text-xs text-slate-700 font-medium"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Section: Usage & Storage Information */}
          <div className="border-t border-slate-200/80 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.usage && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-2">
                  Recommended Usage Instructions
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.usage}
                </p>
              </div>
            )}

            {product.storage && (
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
                <h3 className="font-display font-bold text-sm text-slate-900 mb-2">
                  Storage & Safety Guidelines
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {product.storage}
                </p>
              </div>
            )}
          </div>

          {/* Catalogue Transparency Notice */}
          <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
            <div className="text-xs text-emerald-900">
              <strong>Official Catalogue Guarantee:</strong> All specifications, formulation grades, and pack dimensions published herein reflect active factory production lots. For certificate of analysis (COA) or batch reports, please contact our quality department.
            </div>
          </div>

        </div>

        {/* Modal Bottom Fixed Action Bar */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500 font-mono">
            {product.name} · {product.packSize}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
          >
            Back to Products
          </button>
        </div>

      </div>
    </div>
  );
};
