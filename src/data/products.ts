import { Product, CategoryInfo, CompanyContact } from '../types/product';

export const COMPANY_CONTACT: CompanyContact = {
  businessName: 'NOVA PRODUCTS PRIVATE LIMITED',
  brandName: 'NOVA PRODUCTS',
  tagline: 'Precision Formulation & Quality Consumer Essentials',
  phone: '+91 (0) 80 4123 8900',
  email: 'info@novaproducts.com',
  salesEmail: 'catalogue@novaproducts.com',
  whatsapp: '+91 98765 43210',
  address: 'Plot 42, Industrial Innovation Corridor, Phase 2, Electronic City, Bengaluru, KA 560100, India',
  businessHours: 'Monday – Saturday: 9:00 AM – 6:30 PM (IST)',
  distributionCoverage: 'Pan-India Distribution & Export Inquiries Welcome'
};

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'Personal Care',
    name: 'Personal Care',
    shortDescription: 'Botanical soaps, hair care solutions, and nourishing daily skin treatments.',
    iconName: 'Sparkles',
    tagline: 'Gentle, skin-friendly daily formulations',
    accentColor: 'emerald'
  },
  {
    id: 'Home Care',
    name: 'Home Care',
    shortDescription: 'High-efficiency floor cleaners, surface disinfectants, and dishwashing solutions.',
    iconName: 'Home',
    tagline: 'Powerful cleaning for spotless living spaces',
    accentColor: 'blue'
  },
  {
    id: 'Hygiene',
    name: 'Hygiene',
    shortDescription: 'Germ-protection hand washes, instant sanitizers, and antiseptic preparations.',
    iconName: 'ShieldCheck',
    tagline: 'Advanced antimicrobial defense for your family',
    accentColor: 'teal'
  },
  {
    id: 'Daily Essentials',
    name: 'Daily Essentials',
    shortDescription: 'Cotton facial wipes, refreshing body sprays, and convenience essentials.',
    iconName: 'PackageCheck',
    tagline: 'Essential everyday utility items crafted to perfection',
    accentColor: 'amber'
  },
  {
    id: 'Other Products',
    name: 'Other Products',
    shortDescription: 'Specialty industrial cleaners, institutional bulk packs, and customized solutions.',
    iconName: 'Layers',
    tagline: 'Institutional & custom volume offerings',
    accentColor: 'slate'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Premium Bath Soap',
    category: 'Personal Care',
    image: '',
    gallery: [],
    shortDescription: 'Grade 1 vegetable oil bath soap enriched with natural almond moisture and gentle fragrance.',
    description: 'NOVA Premium Bath Soap is crafted using 76% Total Fatty Matter (TFM) Grade 1 formulation. Blended with cold-pressed sweet almond oil, vitamin E, and pure plant lipids, it produces a rich, creamy lather that gently purifies skin while retaining natural epidermal moisture without dryness.',
    mrp: 30,
    availablePrice: '₹22 – ₹25',
    packSize: '100g',
    sku: 'NP-PC-SOAP-100',
    shelfLife: '24 Months from packaging',
    origin: 'Manufactured in Karnataka, India',
    isFeatured: true,
    badge: 'Grade 1 TFM 76%',
    colorTheme: 'amber',
    features: [
      'High 76% Total Fatty Matter (Grade 1 Bathing Bar)',
      'Infused with sweet almond oil and skin-comforting Vitamin E',
      'Long-lasting formulation that does not melt quickly in water',
      'Free from harsh sulfates, parabens, and synthetic animal fats',
      'Dermatologically tested for daily family use'
    ],
    specifications: {
      'TFM Grade': 'Grade 1 (TFM 76%)',
      'Net Weight': '100g (at packing)',
      'Primary Base': 'Pure Vegetable Palm & Coconut Kernel Oil',
      'Skin Compatibility': 'Suitable for All Skin Types',
      'Fragrance Profile': 'Subtle French Floral & Sandalwood Base',
      'Inner Packaging': 'Hermetic Moisture-Barrier Wrapper'
    },
    ingredients: [
      'Sodium Palmate',
      'Sodium Palm Kernelate',
      'Aqua (Purified Water)',
      'Glycerin',
      'Prunus Amygdalus Dulcis (Almond) Oil',
      'Tocopheryl Acetate (Vitamin E)',
      'Titanium Dioxide',
      'Tetrasodium EDTA'
    ],
    usage: 'Lather between wet palms and massage gently over damp body. Rinse thoroughly with clean warm or cool water. Keep soap dry between uses in a draining dish to extend longevity.',
    storage: 'Store in a cool, well-ventilated dry place away from direct sunlight.'
  },
  {
    id: 'prod-002',
    name: 'Herbal Shampoo',
    category: 'Personal Care',
    image: '',
    gallery: [],
    shortDescription: 'Strengthening Ayurvedic infusion shampoo featuring Shikakai, Amla, and Bhringraj extracts.',
    description: 'Designed for daily scalp health and follicle vitality, NOVA Herbal Shampoo blends time-honored botanical extracts of Amla, Shikakai, and Reetha with contemporary provitamin B5. It gently dissolves excess sebum and environmental dust without stripping natural hair conditioning oils.',
    mrp: 120,
    availablePrice: '₹90 – ₹100',
    packSize: '180ml',
    sku: 'NP-PC-SHMP-180',
    shelfLife: '30 Months from date of mfg',
    origin: 'Manufactured in Uttarakhand, India',
    isFeatured: true,
    badge: 'Ayurvedic Botanical Formula',
    colorTheme: 'emerald',
    features: [
      'Active herbal decoction of Amla, Shikakai, and Bhringraj',
      'Fortified with D-Panthenol (Provitamin B5) for cuticle smoothing',
      'Mild plant-derived surfactants safe for color-treated hair',
      'Balances scalp sebum and reduces visible split-end breakage',
      'pH balanced formulation (5.5) respecting scalp microbiome'
    ],
    specifications: {
      'Volume': '180ml (6.08 fl. oz.)',
      'pH Range': '5.2 – 5.6',
      'Surfactant Class': 'SLES-mild coco-glucoside blend',
      'Hair Type': 'Normal to Dry, Weakened hair',
      'Bottle Type': 'Amber UV-protective PET with flip-top cap',
      'Certifications': 'GMP Certified Facility, Cruelty-Free'
    },
    ingredients: [
      'Purified Water',
      'Sodium Lauroyl Sarcosinate',
      'Coco Glucoside',
      'Phyllanthus Emblica (Amla) Fruit Extract',
      'Acacia Concinna (Shikakai) Extract',
      'Eclipta Prostrata (Bhringraj) Extract',
      'D-Panthenol',
      'Hydrolyzed Wheat Protein'
    ],
    usage: 'Apply a generous coin-sized amount onto wet scalp and hair. Massage gently with fingertips in circular motions for 2 minutes to stimulate circulation. Rinse with lukewarm water.',
    storage: 'Keep container tightly closed. Protect from heat and direct sunlight.'
  },
  {
    id: 'prod-003',
    name: 'Fresh Hand Wash',
    category: 'Hygiene',
    image: '',
    gallery: [],
    shortDescription: 'Moisturizing germ-protection liquid hand wash with refreshing citrus aloe notes.',
    description: 'NOVA Fresh Hand Wash is engineered to eliminate 99.9% of harmful bacteria and grime in 20 seconds while keeping sensitive skin deeply hydrated. Powered by skin-compatible glycerin and soothing Aloe Vera gel, it prevents the rough, stripped feeling caused by frequent handwashing.',
    mrp: 99,
    availablePrice: '₹70 – ₹80',
    packSize: '250ml',
    sku: 'NP-HY-HW-250',
    shelfLife: '24 Months',
    origin: 'Manufactured in Gujarat, India',
    isFeatured: true,
    badge: '99.9% Germ Protection',
    colorTheme: 'teal',
    features: [
      'Clinically tested 99.9% efficacy against common pathogenic germs',
      'Enriched with 10% pure vegetable moisturizing glycerin',
      'Rich foam action that rinses cleanly without leaving slick residues',
      'Refreshing green tea & lime essence for enduring fragrance',
      'Precision pump dispenser delivering exactly 1.2ml per press'
    ],
    specifications: {
      'Net Quantity': '250ml Dispenser with Pump',
      'Dispenser Type': 'Ergonomic Lockable Spring Pump',
      'Active Agent': 'Benzalkonium Chloride + Botanical Terpenes',
      'Viscosity': '2,400 – 2,800 cPs (Luxurious Rich Gel)',
      'Skin Safety': 'Hypoallergenic & Triclosan-free'
    },
    ingredients: [
      'Deionized Water',
      'Sodium Laureth Sulfate',
      'Cocamidopropyl Betaine',
      'Glycerin',
      'Aloe Barbadensis Leaf Juice',
      'Citrus Limon (Lemon) Peel Extract',
      'Benzalkonium Chloride',
      'Citric Acid'
    ],
    usage: 'Wet hands thoroughly with potable water. Pump once into palms. Rub palms together, interlace fingers, clean fingertips and thumbs for 20 seconds. Rinse cleanly and dry with clean towel.',
    storage: 'Store at ambient room temperature (15°C - 30°C).'
  },
  {
    id: 'prod-004',
    name: 'Multi-Surface Disinfectant Cleaner',
    category: 'Home Care',
    image: '',
    gallery: [],
    shortDescription: 'All-in-one concentrated surface cleaner with 10x cleaning power and pine protection.',
    description: 'A professional-grade surface sanitizer suitable for kitchen countertops, marble flooring, tiles, glass panels, and appliances. Its triple-action surfactant complex breaks down stubborn oil, grease, food stains, and eliminates foul odors on contact.',
    mrp: 165,
    availablePrice: '₹125 – ₹140',
    packSize: '500ml',
    sku: 'NP-HC-MSD-500',
    shelfLife: '24 Months',
    origin: 'Manufactured in Maharashtra, India',
    isFeatured: true,
    badge: '10x Grease Cut Power',
    colorTheme: 'blue',
    features: [
      'Multi-surface compatible: granite, ceramic, wood laminate, and steel',
      'Fast-drying streak-free formula leaving no hazy residue',
      'Leaves a crisp, invigorating mountain pine aroma for up to 8 hours',
      'Highly concentrated: 1 capful dilutes in 4 liters of mop water',
      'Eco-responsible biodegradable surfactant system'
    ],
    specifications: {
      'Packaging': '500ml Heavy-duty HDPE Bottle with Dual-action Spray Cap',
      'Dilution Ratio': 'Direct spray for tough grease; 1:50 for general mopping',
      'Solvent Safety': 'Zero Bleach, Zero Ammonia, Non-corrosive',
      'Disinfection Rate': 'Kills 99.9% bacteria & mold spores in 60s'
    },
    ingredients: [
      'Purified Water',
      'Linear Alkylbenzene Sulfonate',
      'Pine Oil Terpenes',
      'Quaternary Ammonium Compounds',
      'Solubilizers and Stabilizers'
    ],
    usage: 'For regular mopping: Add 1 capful (15ml) into half bucket of water (4L). Mop gently. For tough kitchen oil: Spray directly on the surface, let sit for 1 minute, and wipe with micro-fiber cloth.',
    storage: 'Store away from children and pets. Do not mix with acidic toilet cleaners.'
  },
  {
    id: 'prod-005',
    name: 'Natural Aloe Vera Moisturizing Gel',
    category: 'Personal Care',
    image: '',
    gallery: [],
    shortDescription: '99% pure cold-pressed aloe vera gel for soothing face, body, and sun-stressed skin.',
    description: 'Harvested from organically grown Aloe Barbadensis Miller leaves, this multi-purpose non-greasy gel absorbs instantly. It provides immediate cooling relief for sun-exposed skin, razor burns, insect bites, and restores dehydrated facial moisture barrier.',
    mrp: 149,
    availablePrice: '₹110 – ₹120',
    packSize: '200ml',
    sku: 'NP-PC-AV-200',
    shelfLife: '24 Months',
    origin: 'Manufactured in Rajasthan, India',
    isFeatured: false,
    badge: '99% Pure Organic Aloe',
    colorTheme: 'emerald',
    features: [
      '99% pure stabilized Aloe Vera pulp extract',
      'Non-sticky, lightweight transparent hydrogel texture',
      'Soothes skin redness, dry irritation, and after-sun dryness',
      'Can be used as a daily moisturizer, hair mask, or makeup primer',
      'Free from artificial green colorants and added synthetic alcohol'
    ],
    specifications: {
      'Net Content': '200ml Tub Container with Air-tight Seal',
      'Purity Level': '99% Cold-Stabilized Juice Extract',
      'Skin Profile': 'All skin types, including sensitive and acne-prone',
      'Absorption Time': 'Under 30 seconds with non-tacky finish'
    },
    ingredients: [
      'Organic Aloe Barbadensis Leaf Juice (99%)',
      'Carbomer',
      'Phenoxyethanol',
      'Triethanolamine',
      'Potassium Sorbate',
      'Sodium Benzoate'
    ],
    usage: 'Take a dime-sized amount and spread evenly across face, neck or irritated skin patches. Can be stored in refrigerator for an enhanced cooling effect upon application.',
    storage: 'Store in a cool dry place. Avoid direct sunlight.'
  },
  {
    id: 'prod-006',
    name: 'Ultra Dishwash Liquid Gel',
    category: 'Home Care',
    image: '',
    gallery: [],
    shortDescription: 'Super-degreasing dishwashing gel powered by real lemon concentrate and active enzymes.',
    description: 'NOVA Ultra Dishwash Liquid Gel powers through tough burnt food residues, ghee, and stubborn oil coatings with a single spoonful. Infused with natural citrus oils, it removes strong odors like egg, fish, and garlic while protecting your hands from skin dryness.',
    mrp: 110,
    availablePrice: '₹80 – ₹90',
    packSize: '500ml',
    sku: 'NP-HC-DW-500',
    shelfLife: '24 Months',
    origin: 'Manufactured in Gujarat, India',
    isFeatured: false,
    badge: 'Tough Grease Dissolve',
    colorTheme: 'amber',
    features: [
      'Just 1 teaspoon cleans an entire sink load of greasy utensils',
      'Gentle on hands with neutral pH and added moisturizing glycerin',
      'Zero white powder scratch marks on delicate glassware or non-stick cookware',
      'Natural real lemon peel extracts neutralize persistent food aromas',
      'Biodegradable grease-cutting surfactants'
    ],
    specifications: {
      'Volume': '500ml Ergonomic Grip Bottle with Dispensing Cap',
      'Degreasing Index': '98.5% Cookware Soil Removal Efficiency',
      'Safety': 'Safe on Teflon, Bone China, Copper, and Brass',
      'Fragrance': 'Zesty Citrus Blossom'
    },
    ingredients: [
      'Aqua',
      'Sodium Laureth Sulfate',
      'Secondary Alkane Sulfonate',
      'Citrus Limon Oil Extract',
      'Cocamidopropyl Betaine',
      'Skin Softening Complex'
    ],
    usage: 'Mix 1 teaspoon (4ml) of NOVA Dishwash Gel in a small bowl of 40ml water. Dip sponge or scrubber into solution and wash dishes. Rinse thoroughly with clear water.',
    storage: 'Store in upright position away from direct food storage.'
  },
  {
    id: 'prod-007',
    name: 'Advanced Alcohol Hand Sanitizer',
    category: 'Hygiene',
    image: '',
    gallery: [],
    shortDescription: 'WHO-recommended 75% pharmaceutical alcohol formula with instant evaporate and aloe soothe.',
    description: 'Formulated strictly in compliance with World Health Organization guidelines, NOVA Advanced Hand Sanitizer contains 75% v/v USP-grade ethyl alcohol. It delivers rapid, broad-spectrum germicidal protection in 10 seconds without water, sticky residue, or parched skin.',
    mrp: 75,
    availablePrice: '₹50 – ₹60',
    packSize: '100ml',
    sku: 'NP-HY-SAN-100',
    shelfLife: '36 Months',
    origin: 'Manufactured in Telangana, India',
    isFeatured: false,
    badge: '75% USP Isopropyl & Ethyl',
    colorTheme: 'teal',
    features: [
      '75% v/v high-purity pharmaceutical ethanol & IPA base',
      'Rapid evaporating formula leaving no tackiness or soap film',
      'Infused with glycerin and aloe vera to counter alcohol drying',
      'Compact, leak-proof travel-friendly flip cap bottle',
      'Compliant with Pharmacopoeia germicidal standards'
    ],
    specifications: {
      'Alcohol Strength': '75% v/v USP Grade',
      'Volume': '100ml (3.38 fl. oz.) Pocket Pack',
      'Evaporation Speed': '10 – 15 seconds',
      'Certification': 'Drug License Certified Facility'
    },
    ingredients: [
      'Ethyl Alcohol 75% v/v',
      'Glycerol 1.45% v/v',
      'Hydrogen Peroxide 0.125% v/v',
      'Sterile Distilled Water q.s.',
      'Fragrance'
    ],
    usage: 'Dispense 2-3 drops (approx. 1ml) onto palm. Rub hands vigorously together covering all surfaces, backs of hands, and finger webbing until dry. No water or towel needed.',
    storage: 'Flammable liquid. Keep away from heat, sparks, open flames, and hot surfaces.'
  },
  {
    id: 'prod-008',
    name: 'Botanical Body Wash & Shower Gel',
    category: 'Personal Care',
    image: '',
    gallery: [],
    shortDescription: 'Rich lathering shower gel with sea kelp, tea tree, and invigorating cedar notes.',
    description: 'Elevate your daily shower into a spa ritual. NOVA Botanical Body Wash uses micro-foam cleansing spheres that gently dislodge perspiration, pollution particles, and dead surface cells while enveloping the senses in refreshing earthy cedarwood and tea tree aromas.',
    mrp: 210,
    availablePrice: '₹160 – ₹175',
    packSize: '300ml',
    sku: 'NP-PC-BW-300',
    shelfLife: '30 Months',
    origin: 'Manufactured in Himachal Pradesh, India',
    isFeatured: false,
    badge: 'Micro-Foam Spa Care',
    colorTheme: 'emerald',
    features: [
      'Sulfate-free formulation gentle on skin lipid barriers',
      'Enriched with botanical tea tree, peppermint, and kelp extracts',
      'Creates dense, velvet lather with exceptional fragrance diffusion',
      'Maintains natural skin hydration for up to 12 hours post shower',
      '100% recyclable bottle with leak-lock travel pump'
    ],
    specifications: {
      'Volume': '300ml (10.1 fl. oz.)',
      'Base': 'Plant Glucoside & Amino Acid Cleanser',
      'pH Balance': '5.5 (Acid Mantle Friendly)',
      'Animal Testing': 'Strictly Cruelty-Free, 100% Vegan'
    },
    ingredients: [
      'Aqua',
      'Cocamidopropyl Hydroxysultaine',
      'Sodium Cocoyl Isethionate',
      'Melaleuca Alternifolia (Tea Tree) Oil',
      'Fucus Vesiculosus (Sea Kelp) Extract',
      'Cedarwood Essential Oil',
      'Glycerin'
    ],
    usage: 'Pour a generous amount onto a wet loofah or sponge. Work into a rich creamy lather, massage over body, and rinse thoroughly with warm water.',
    storage: 'Store in dry shower caddy away from continuous running water.'
  },
  {
    id: 'prod-009',
    name: 'Active Floor Cleaner Citrus Breeze',
    category: 'Home Care',
    image: '',
    gallery: [],
    shortDescription: 'Hospital-grade sanitizing floor wash with anti-fly repelling citronella technology.',
    description: 'Designed for Indian households and commercial establishments. NOVA Active Floor Cleaner kills 99.99% of floor-borne bacteria, removes stubborn shoe scuffs, and features natural citronella oil that naturally repels household flies and insects without synthetic chemical fumigants.',
    mrp: 140,
    availablePrice: '₹105 – ₹115',
    packSize: '1 Liter',
    sku: 'NP-HC-FLR-1000',
    shelfLife: '24 Months',
    origin: 'Manufactured in Karnataka, India',
    isFeatured: false,
    badge: 'Anti-Fly Citronella Tech',
    colorTheme: 'blue',
    features: [
      'Safe for Italian marble, polished granite, wooden parquet, and mosaic',
      'Includes botanical citronella oil known to deter flies and insects',
      'Leaves a glossy shine that prevents dust settling for 24 hours',
      'Child and pet safe once floor surface dries completely',
      'Economical 1-Liter volume pack providing up to 60 washes'
    ],
    specifications: {
      'Volume': '1,000ml (1 Liter) HDPE Canister with Measuring Cap',
      'Concentration': 'High Active Disinfectant Matter',
      'Anti-Bacterial': 'Certified 99.99% Kill against E. coli and S. aureus',
      'Surface Safety': 'Non-acidic, zero phosphate formulation'
    },
    ingredients: [
      'Water',
      'Benzalkonium Chloride solution',
      'Non-ionic Surfactants',
      'Citronella Oil Extract',
      'Orange Blossom Essential Oils',
      'Stabilizing Base'
    ],
    usage: 'Add 1 cap (20ml) into 5 liters of water. Swirl mop and wring out excess liquid. Mop floor evenly. No rinsing needed.',
    storage: 'Store in a safe place. Keep tightly capped.'
  },
  {
    id: 'prod-010',
    name: 'Gentle Daily Face Cleanser',
    category: 'Daily Essentials',
    image: '',
    gallery: [],
    shortDescription: 'Soap-free balancing facial gel wash with niacinamide and calming chamomile extract.',
    description: 'A mild, soap-free facial wash crafted for sensitive urban skin. It gently unclogs pores, dissolves environmental fine dust (PM 2.5), and restores skin balance without causing tightness or redness. Enriched with 2% Niacinamide and Chamomile flower water.',
    mrp: 185,
    availablePrice: '₹140 – ₹155',
    packSize: '150ml',
    sku: 'NP-DE-FC-150',
    shelfLife: '24 Months',
    origin: 'Manufactured in Maharashtra, India',
    isFeatured: false,
    badge: '2% Niacinamide + Chamomile',
    colorTheme: 'amber',
    features: [
      'Non-foaming soap-free gel that preserves skin moisture mantle',
      'Contains 2% pharmaceutical-grade Niacinamide to soothe skin tone',
      'Rinses completely clean without leaving clogging residue',
      'Fragrance-free and alcohol-free for reactive or easily irritated skin',
      'Safe for twice-daily morning and evening facial routine'
    ],
    specifications: {
      'Volume': '150ml Soft-squeeze Tube',
      'Formula': 'Gel-to-milk, non-comedogenic',
      'Dermatological Status': 'Patch tested on sensitive human skin',
      'pH': 'Strict 5.5 balanced'
    },
    ingredients: [
      'Aqua',
      'Glycerin',
      'Niacinamide (Vitamin B3)',
      'Chamomilla Recutita (Matricaria) Flower Extract',
      'Cetearyl Alcohol',
      'Sodium Lauroyl Methyl Isethionate',
      'Allantoin'
    ],
    usage: 'Splash face with lukewarm water. Squeeze a pea-sized amount onto clean fingertips. Massage over face in gentle upward circles for 30-45 seconds. Rinse clean and pat dry with soft towel.',
    storage: 'Store below 28°C away from direct heating elements.'
  },
  {
    id: 'prod-011',
    name: 'Organic Cotton Cleansing Wipes',
    category: 'Daily Essentials',
    image: '',
    gallery: [],
    shortDescription: '100% biodegradable bamboo cotton facial wipes soaked in micellar water and aloe.',
    description: 'Thick, ultra-soft cleansing wipes designed for on-the-go hygiene, post-gym refreshment, and gentle makeup removal. Made with 100% natural biodegradable plant fibers that degrade naturally without microplastic environmental pollution.',
    mrp: 95,
    availablePrice: '₹70 – ₹80',
    packSize: '72 Wipes',
    sku: 'NP-DE-WP-72',
    shelfLife: '24 Months',
    origin: 'Manufactured in Tamil Nadu, India',
    isFeatured: false,
    badge: '100% Biodegradable Fiber',
    colorTheme: 'amber',
    features: [
      'Made from 100% unbleached biodegradable viscose cotton fabric',
      'Infused with 98% pure water, vitamin E, and soothing cucumber juice',
      'Resealable moisture-lock flip-top lid keeps wipes moist to the last sheet',
      'Extra thick honeycomb embossing for superior dirt pickup without tearing',
      'Alcohol-free, paraben-free, and hypoallergenic'
    ],
    specifications: {
      'Sheet Count': '72 Pre-moistened Wipes',
      'Sheet Size': '150mm x 200mm (Extra Large)',
      'Substrate Material': '100% Plant Cellulose',
      'Pack Closure': 'Hard Snap-Lock Plastic Lid with Foil Barrier'
    },
    ingredients: [
      'Purified Water',
      'Aloe Barbadensis Leaf Juice',
      'Cucumis Sativus (Cucumber) Fruit Extract',
      'Polysorbate 20',
      'Caprylyl Glycol',
      'Tocopheryl Acetate (Vitamin E)'
    ],
    usage: 'Peel open the hard flip-top lid and pull out a wipe. Reseal immediately to prevent moisture evaporation. Gently wipe over face, neck, or hands. Dispose responsibly in waste bin (do not flush).',
    storage: 'Store in cool place. Always seal lid firmly after every use.'
  },
  {
    id: 'prod-012',
    name: 'Fabric Care Liquid Detergent',
    category: 'Home Care',
    image: '',
    gallery: [],
    shortDescription: 'Advanced enzyme-action liquid detergent for front & top load automatic machines.',
    description: 'NOVA Fabric Care Liquid Detergent dissolves instantly in hot or cold water without chalky powder residues that cling to fabrics and cause skin allergies. Powered by quad-enzyme stain removers that target grass, tea, grease, and collar grime while conditioning delicate fabric threads.',
    mrp: 260,
    availablePrice: '₹195 – ₹220',
    packSize: '1 Liter',
    sku: 'NP-HC-FCD-1000',
    shelfLife: '30 Months',
    origin: 'Manufactured in Gujarat, India',
    isFeatured: false,
    badge: 'Quad-Enzyme Color Protect',
    colorTheme: 'blue',
    features: [
      'Dissolves 100% without leaving residue on dark clothes or washer drums',
      'Quad-enzyme bio-actives remove tough protein, starch, and grease stains',
      'Color-shield polymers prevent fabric fading and color cross-transfer',
      'Low-foaming formula engineered specifically for high-efficiency front-loaders',
      'Leaves clothes smelling fresh with long-lasting French lavender infusion'
    ],
    specifications: {
      'Volume': '1,000ml (1 Liter) Easy-Pour Ergonomic Jug',
      'Washing Machine Compatibility': 'Front Load, Top Load & Hand Wash',
      'Dosage': '60ml for normal loads; 90ml for heavily soiled garments',
      'Fabric Safety': 'Safe for Cotton, Linen, Synthetics, and Blends'
    },
    ingredients: [
      'Water',
      'Anionic & Non-ionic Surfactants (15-30%)',
      'Protease & Amylase Enzymes',
      'Optical Brighteners',
      'Fabric Softening Agents',
      'French Lavender Fragrance'
    ],
    usage: 'Use 1 capful (60ml) for standard 6-7kg washing machine load. Pour into machine detergent dispenser drawer or directly into drum. For tough stains, rub a few drops directly on stain prior to washing.',
    storage: 'Store upright at room temperature. Keep out of reach of children.'
  }
];

export const TRUST_POINTS = [
  {
    title: 'Quality Products',
    description: 'Strict manufacturing standards with certified ingredients and verified formulation testing.'
  },
  {
    title: 'Detailed Information',
    description: 'Complete breakdown of ingredients, MRP, specifications, and usage instructions for every item.'
  },
  {
    title: 'Trusted Collection',
    description: 'Curated consumer essentials designed for households, institutions, and wholesale partners.'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    id: 1,
    title: 'Quality Product Information',
    description: 'Every product sheet provides transparent, accurate, and scientifically validated details, eliminating guesswork for retail and commercial buyers.',
    iconName: 'ClipboardCheck'
  },
  {
    id: 2,
    title: 'Easy Product Discovery',
    description: 'Search, filter by category, and compare pack sizes and wholesale price ranges with clean, lightning-fast digital catalogue navigation.',
    iconName: 'Search'
  },
  {
    id: 3,
    title: 'Complete Specifications',
    description: 'From TFM percentage and pH balance to shelf life and packaging substrates, access complete technical data in one accessible place.',
    iconName: 'FileText'
  },
  {
    id: 4,
    title: 'Professional Product Catalogue',
    description: 'A dedicated showcase designed specifically for distributors, stockists, and institutional clients to review catalogued items and initiate inquiries directly.',
    iconName: 'Briefcase'
  }
];
