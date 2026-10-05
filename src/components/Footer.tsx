import React from 'react';
import { COMPANY_CONTACT, CATEGORIES } from '../data/products';
import { ProductCategory } from '../types/product';
import { ArrowUp, Mail, Phone, MapPin, Printer } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: ProductCategory) => void;
  onExploreProducts: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onExploreProducts
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-900">
          
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white text-slate-950 flex items-center justify-center font-display font-bold text-sm">
                N
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                NOVA <span className="font-light text-slate-400">PRODUCTS</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Quality-first manufacturer of personal care, hygiene formulations, and home care essentials. Presenting transparent specifications and realistic pricing for businesses, stockists, and modern households.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs rounded-lg border border-slate-800 flex items-center gap-1.5 transition-colors"
                title="Print digital catalogue overview"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Catalogue Sheet</span>
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a 
                  href="#products" 
                  onClick={(e) => {
                    e.preventDefault();
                    onExploreProducts();
                  }}
                  className="hover:text-white transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Categories</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact / Inquire</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Product Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat.id);
                      const el = document.getElementById('products');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors text-left"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
              Corporate Office
            </h4>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_CONTACT.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_CONTACT.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{COMPANY_CONTACT.email}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-slate-500">
              Hours: {COMPANY_CONTACT.businessHours}
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 {COMPANY_CONTACT.brandName}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span className="hidden sm:inline">Official Digital Catalogue System</span>
            
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
              title="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
