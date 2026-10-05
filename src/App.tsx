import React, { useState } from 'react';
import { PRODUCTS } from './data/products';
import { Product, ProductCategory } from './types/product';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoriesSection } from './components/CategoriesSection';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductCatalogue } from './components/ProductCatalogue';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AboutSection } from './components/AboutSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);
  const [productForInquiry, setProductForInquiry] = useState<Product | null>(null);

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreProducts = () => {
    scrollTo('products');
  };

  const handleViewCategories = () => {
    scrollTo('categories');
  };

  const handleCategorySelect = (category: ProductCategory) => {
    setSelectedCategory(category);
    scrollTo('products');
  };

  const handleOpenProduct = (productId: string) => {
    const found = PRODUCTS.find((p) => p.id === productId);
    if (found) {
      setActiveProductModal(found);
    }
  };

  const handleInquireFromProduct = (product: Product) => {
    setProductForInquiry(product);
    scrollTo('contact');
  };

  const handleSearchFocus = () => {
    scrollTo('products');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 flex flex-col selection:bg-slate-900 selection:text-white">
      {/* Sticky Header with Top Bar Contract */}
      <Navbar
        onSearchClick={handleSearchFocus}
        onExploreClick={handleExploreProducts}
        activeSearchQuery={searchQuery}
        onSearchChange={(val) => {
          setSearchQuery(val);
          // If searching while at the top, bring products into view
          if (val && window.scrollY < 400) {
            scrollTo('products');
          }
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProducts={handleExploreProducts}
          onViewCategories={handleViewCategories}
          onSelectProduct={handleOpenProduct}
        />

        {/* Categories Section */}
        <CategoriesSection
          onSelectCategory={handleCategorySelect}
          activeCategory={selectedCategory}
        />

        {/* Featured Products Section */}
        <FeaturedProducts
          onSelectProduct={handleOpenProduct}
          onExploreAll={() => {
            setSelectedCategory('All');
            handleExploreProducts();
          }}
        />

        {/* Full Product Catalogue Section */}
        <ProductCatalogue
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          onSelectProduct={handleOpenProduct}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* About Us Section */}
        <AboutSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Contact & Inquiry Section */}
        <ContactSection
          selectedProductForInquiry={productForInquiry}
          onClearSelectedProduct={() => setProductForInquiry(null)}
        />
      </main>

      {/* Footer */}
      <Footer
        onSelectCategory={handleCategorySelect}
        onExploreProducts={handleExploreProducts}
      />

      {/* Product Detail Modal / Sheet */}
      <ProductDetailModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onInquire={handleInquireFromProduct}
      />
    </div>
  );
}
