export type ProductCategory = 
  | 'Personal Care'
  | 'Home Care'
  | 'Hygiene'
  | 'Daily Essentials'
  | 'Other Products';

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  mrp: number; // e.g. 30 (representing ₹30)
  availablePrice: string; // e.g. "₹22 – ₹25"
  packSize: string; // e.g. "100g", "180ml", "250ml"
  sku?: string;
  shelfLife?: string;
  origin?: string;
  features: string[];
  specifications: Record<string, string>;
  ingredients?: string[];
  usage?: string;
  storage?: string;
  isFeatured?: boolean;
  badge?: string; // e.g. "Bestseller", "New Formula", "Natural Extract"
  colorTheme?: string; // used for custom packaging visual styling
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  shortDescription: string;
  itemCount?: number;
  iconName: string;
  tagline: string;
  accentColor: string;
}

export interface CompanyContact {
  businessName: string;
  brandName: string;
  tagline: string;
  phone: string;
  email: string;
  salesEmail: string;
  whatsapp: string;
  address: string;
  businessHours: string;
  distributionCoverage: string;
}
