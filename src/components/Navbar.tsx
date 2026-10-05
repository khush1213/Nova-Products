import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onSearchClick: () => void;
  onExploreClick: () => void;
  activeSearchQuery?: string;
  onSearchChange?: (val: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onSearchClick,
  onExploreClick,
  activeSearchQuery = '',
  onSearchChange
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Products', href: '#products' },
    { label: 'Categories', href: '#categories' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Zone 1: Brand Wordmark (Single clean text element) */}
          <a
            href="#home"
            className="flex items-center gap-2 group text-decoration-none shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center font-display font-bold text-sm tracking-wider shadow-sm group-hover:bg-slate-800 transition-colors">
              N
            </div>
            <span className="font-display font-bold text-xl sm:text-2xl tracking-tight text-slate-900">
              NOVA <span className="font-light text-slate-500">PRODUCTS</span>
            </span>
          </a>

          {/* Zone 2: Navigation Links (Desktop 4-6 text links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="hover:text-slate-900 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-slate-900 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Search & Primary Action */}
          <div className="flex items-center gap-3">
            {/* Search Input / Trigger */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-slate-100 rounded-lg px-2.5 py-1.5 border border-slate-300 w-44 sm:w-60 transition-all">
                  <Search className="w-4 h-4 text-slate-400 mr-2 shrink-0" />
                  <input
                    type="text"
                    value={activeSearchQuery}
                    onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                    placeholder="Search catalogue..."
                    autoFocus
                    className="bg-transparent text-xs sm:text-sm text-slate-800 focus:outline-none w-full placeholder:text-slate-400"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      if (onSearchChange) onSearchChange('');
                    }}
                    className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
                    aria-label="Close search"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    setIsSearchOpen(true);
                    onSearchClick();
                  }}
                  className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
                  aria-label="Open search input"
                  title="Search products"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* "Explore Products" Primary Button */}
            <button
              onClick={onExploreClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-sm hover:shadow whitespace-nowrap active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-200 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-base font-medium text-slate-700 hover:text-slate-950 py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-slate-400 text-xs">Explore →</span>
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreClick();
                }}
                className="w-full py-2.5 px-4 bg-slate-900 text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Explore Complete Catalogue</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
