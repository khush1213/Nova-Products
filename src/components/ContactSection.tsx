import React, { useState } from 'react';
import { 
  Building2, 
  Phone, 
  Mail, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_CONTACT, PRODUCTS } from '../data/products';
import { Product } from '../types/product';

interface ContactSectionProps {
  selectedProductForInquiry?: Product | null;
  onClearSelectedProduct?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedProductForInquiry,
  onClearSelectedProduct
}) => {
  const [formData, setFormData] = useState({
    name: '',
    emailOrPhone: '',
    productName: selectedProductForInquiry ? selectedProductForInquiry.name : 'General Catalogue Inquiry',
    inquiryType: 'Product Specifications & COA',
    message: selectedProductForInquiry 
      ? `Hello NOVA PRODUCTS team, I am interested in exploring specifications, bulk pricing tiers, and sample testing for ${selectedProductForInquiry.name} (${selectedProductForInquiry.packSize}).` 
      : ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  // Update form if product selection changes from outside
  React.useEffect(() => {
    if (selectedProductForInquiry) {
      setFormData((prev) => ({
        ...prev,
        productName: selectedProductForInquiry.name,
        message: `Hello NOVA PRODUCTS team, I would like to inquire about specifications and commercial wholesale supply for ${selectedProductForInquiry.name} (${selectedProductForInquiry.packSize}).`
      }));
    }
  }, [selectedProductForInquiry]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.emailOrPhone) return;

    const ref = `NOV-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(ref);
    setSubmitted(true);
  };

  const handleCopyDetails = () => {
    const text = `NOVA PRODUCTS Inquiry [Ref: ${inquiryId}]\nFrom: ${formData.name}\nContact: ${formData.emailOrPhone}\nProduct: ${formData.productName}\nMessage: ${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello NOVA PRODUCTS, my name is ${formData.name || 'Visitor'}. I am submitting inquiry [${inquiryId || 'NEW'}] regarding ${formData.productName}. Please share catalogue specifications and trade terms.`
  );

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-slate-200/70 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
            Get in Touch
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Product Inquiry & Contact
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Have questions about formulations, pack sizes, bulk commercial requirements, or sample availability? Send us a direct inquiry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xs">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
              {COMPANY_CONTACT.brandName}
            </h3>
            <p className="text-xs text-slate-500 mb-8">
              {COMPANY_CONTACT.tagline}
            </p>

            <div className="space-y-6 text-xs sm:text-sm">
              
              {/* Business Name */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Corporate Entity</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{COMPANY_CONTACT.businessName}</div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Telephone / Office</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{COMPANY_CONTACT.phone}</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Catalogue & Support Email</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{COMPANY_CONTACT.email}</div>
                  <div className="text-xs text-slate-500">{COMPANY_CONTACT.salesEmail}</div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <MessageSquare className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-medium">WhatsApp Trade Desk</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{COMPANY_CONTACT.whatsapp}</div>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Registered Facility & Office</div>
                  <div className="text-slate-700 leading-relaxed mt-0.5">{COMPANY_CONTACT.address}</div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-800 flex items-center justify-center shrink-0 shadow-2xs">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Business Hours</div>
                  <div className="font-semibold text-slate-900 mt-0.5">{COMPANY_CONTACT.businessHours}</div>
                </div>
              </div>

            </div>

            {/* Clean reassurance note */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 text-[11px] text-slate-500 leading-relaxed">
              * Note: This portal is an informational product catalogue. We do not process direct consumer checkout transactions here.
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
            
            {submitted ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-slate-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="text-xs text-slate-500">
                    Your reference ticket number is: <span className="font-mono font-bold text-slate-900">{inquiryId}</span>
                  </p>
                </div>

                <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-left max-w-md mx-auto text-xs text-slate-700 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Recipient:</span>
                    <span className="font-medium text-slate-900">{formData.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Contact:</span>
                    <span className="font-medium text-slate-900">{formData.emailOrPhone}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Product Inquired:</span>
                    <span className="font-semibold text-emerald-800">{formData.productName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Type:</span>
                    <span className="font-medium text-slate-800">{formData.inquiryType}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 max-w-md mx-auto">
                  Our product representative will review your request and share full technical documentation or wholesale availability within 1 business day.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
                  <a
                    href={`https://wa.me/${COMPANY_CONTACT.whatsapp.replace(/[^0-9]/g, '')}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors shadow-xs"
                  >
                    <span>Follow Up on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={handleCopyDetails}
                    className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl flex items-center gap-2 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Reference'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      if (onClearSelectedProduct) onClearSelectedProduct();
                    }}
                    className="px-4 py-2.5 border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold rounded-xl transition-colors"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1">
                    Send a Product Inquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below for specifications, bulk pack details, or technical documentation.
                  </p>
                </div>

                {/* Pre-selected Product Alert Banner */}
                {selectedProductForInquiry && (
                  <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 flex items-center justify-between text-xs text-emerald-900">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Inquiring about:</span>
                      <strong className="font-bold">{selectedProductForInquiry.name} ({selectedProductForInquiry.packSize})</strong>
                    </div>
                    {onClearSelectedProduct && (
                      <button
                        type="button"
                        onClick={onClearSelectedProduct}
                        className="text-emerald-700 hover:text-emerald-950 font-semibold underline text-[11px]"
                      >
                        Change
                      </button>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Your Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar or Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
                    />
                  </div>

                  {/* Phone / Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Phone Number or Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.emailOrPhone}
                      onChange={(e) => setFormData({ ...formData, emailOrPhone: e.target.value })}
                      placeholder="e.g. +91 98765 00000 or email@domain.com"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Product of Interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Product of Interest
                    </label>
                    <select
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all cursor-pointer"
                    >
                      <option value="General Catalogue Inquiry">General Catalogue Inquiry (All Products)</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.packSize} - {p.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Inquiry Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all cursor-pointer"
                    >
                      <option value="Product Specifications & COA">Product Specifications & COA</option>
                      <option value="Bulk / Wholesale Pricing Range">Bulk / Wholesale Pricing Range</option>
                      <option value="Stockist & Retail Distribution">Stockist & Retail Distribution</option>
                      <option value="Sample Product Request">Sample Product Request</option>
                      <option value="General Questions">General Questions</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Your Message / Specific Requirements <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details about your query, estimated requirement volume, or state/city for distribution..."
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all resize-y"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                  <p className="text-[11px] text-slate-400 mt-2">
                    Direct inquiry only. No credit card, deposit, or checkout required.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
