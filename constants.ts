import { Product, Category } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'Our Tech', href: '#tech' },
  { name: 'Products', href: '#products' },
  { name: 'Contact', href: '#contact' },
];

export const CATEGORIES: Category[] = [
  'All',
  'Custom Base',
  'Active Ingredients',
  'Emollients & Oils',
  'Surfactants',
  'Preservatives',
  'Specialty Poly',
  'Functional Additives'
];

export const PRODUCTS: Product[] = [
  // --- Custom Base (Pages 3-5) ---
  {
    id: 'cb-1',
    category: 'Custom Base',
    item: 'Custom Plant Water',
    description: 'Tailored plant water extraction service (Aloe, Lavender, Chamomile, Rose, etc.)',
    inciName: 'Centella Asiatica Leaf Water (and) Butylene Glycol',
    brand: 'KPROS Custom'
  },
  {
    id: 'cb-2',
    category: 'Custom Base',
    item: 'Ferment Water',
    description: 'Fermented extracts for low irritation, moisturizing, and enhanced efficacy.',
    inciName: 'Galactomyces Ferment Filtrate',
    brand: 'KPROS Custom'
  },
  
  // --- Emollients & Oils (Page 6, 8, 11 - Glycerin, Fatty Acids, Oils, Polyols) ---
  {
    id: 'eo-1',
    category: 'Emollients & Oils',
    item: 'Glycerine(99.5%) USP',
    description: 'High purity pharmaceutical grade glycerin humectant.',
    inciName: 'Glycerine',
    brand: 'Acid chem'
  },
  {
    id: 'eo-2',
    category: 'Emollients & Oils',
    item: 'Glycerine(99.5%) MB',
    description: 'Mass balance sustainable glycerin.',
    inciName: 'Glycerine',
    brand: 'Acid chem'
  },
  {
    id: 'eo-3',
    category: 'Emollients & Oils',
    item: 'Palmac 98-12',
    description: 'High purity Lauric Acid.',
    inciName: 'Lauric acid',
    brand: 'Acid chem'
  },
  {
    id: 'eo-4',
    category: 'Emollients & Oils',
    item: 'Palmac 98-14',
    description: 'High purity Myristic Acid.',
    inciName: 'Myristic acid',
    brand: 'Acid chem'
  },
  {
    id: 'eo-5',
    category: 'Emollients & Oils',
    item: 'Palmac 98-16',
    description: 'High purity Palmitic Acid.',
    inciName: 'Palmitic acid',
    brand: 'Acid chem'
  },
  {
    id: 'eo-6',
    category: 'Emollients & Oils',
    item: 'Palmac 98-18',
    description: 'High purity Stearic Acid.',
    inciName: 'Stearic acid',
    brand: 'Acid chem'
  },
  {
    id: 'eo-7',
    category: 'Emollients & Oils',
    item: 'Palmac 70-18',
    description: 'Fatty acid blend.',
    inciName: 'Palmitic acid/Stearic acid',
    brand: 'Acid chem'
  },
  {
    id: 'eo-8',
    category: 'Emollients & Oils',
    item: 'Palmsurf IPM 98',
    description: 'Isopropyl Myristate emollient.',
    inciName: 'Isopropyl Myristate',
    brand: 'Acid chem'
  },
  {
    id: 'eo-9',
    category: 'Emollients & Oils',
    item: 'kalcol 6850',
    description: 'Cetearyl Alcohol fatty alcohol.',
    inciName: 'CETEARYL ALCOHOL',
    brand: 'KAO'
  },
  {
    id: 'eo-10',
    category: 'Emollients & Oils',
    item: 'ECOROL 1498',
    description: 'Myristyl alcohol.',
    inciName: 'Myristyl alcohol',
    brand: 'Ecogreen'
  },
  {
    id: 'eo-11',
    category: 'Emollients & Oils',
    item: 'LILY 70',
    description: 'White Mineral Oil.',
    inciName: 'White Mineral Oil',
    brand: 'Kukdong'
  },
  {
    id: 'eo-12',
    category: 'Emollients & Oils',
    item: 'FOMI 70',
    description: 'White Mineral Oil.',
    inciName: 'White Mineral Oil',
    brand: 'MICHANG'
  },
  {
    id: 'eo-13',
    category: 'Emollients & Oils',
    item: 'HM-CEH MB',
    description: 'Cetyl Ethylhexanoate.',
    inciName: 'Cetyl Ethylhexanoate',
    brand: 'HEMLO'
  },
  {
    id: 'eo-14',
    category: 'Emollients & Oils',
    item: 'PUROLAN® IDD',
    description: 'Isododecane volatile emollient.',
    inciName: 'Isododecane',
    brand: 'LANXESS'
  },
  {
    id: 'eo-15',
    category: 'Emollients & Oils',
    item: 'PUROLAN® IHD',
    description: 'Isohexadecane emollient.',
    inciName: 'Isohexadecane',
    brand: 'LANXESS'
  },
  {
    id: 'eo-16',
    category: 'Emollients & Oils',
    item: 'HYPG-3III',
    description: 'Polyglycerin-3 humectant.',
    inciName: 'POLYGLYCERIN-3',
    brand: 'HUAYI BIO'
  },
  {
    id: 'eo-17',
    category: 'Emollients & Oils',
    item: 'PG-F',
    description: 'Propylene Glycol.',
    inciName: 'Propylene Glycol',
    brand: 'SK picglobal'
  },
  {
    id: 'eo-18',
    category: 'Emollients & Oils',
    item: '1,3 BG C',
    description: 'Butylene Glycol.',
    inciName: '1,3- BUTYLENE GLYCOL',
    brand: 'DAICEL'
  },
  {
    id: 'eo-19',
    category: 'Emollients & Oils',
    item: 'MONOPOL HYDRO EG',
    description: 'Glycereth-26.',
    inciName: 'Glycereth-26',
    brand: 'Dongnam Chemical'
  },
  {
    id: 'eo-20',
    category: 'Emollients & Oils',
    item: 'HM-DIM',
    description: 'Diisostearyl malate.',
    inciName: 'Diisostearyl malate',
    brand: 'HEMLO'
  },

  // --- Surfactants (Page 7) ---
  {
    id: 'surf-1',
    category: 'Surfactants',
    item: 'MONSA® SCN-95',
    description: 'Mild amino acid surfactant.',
    inciName: 'Sodium Cocoyl Glycinate',
    brand: 'MONSA'
  },
  {
    id: 'surf-2',
    category: 'Surfactants',
    item: 'MONSA® SLG-95',
    description: 'Mild amino acid surfactant.',
    inciName: 'Sodium Lauroyl Glutamate',
    brand: 'MONSA'
  },
  {
    id: 'surf-3',
    category: 'Surfactants',
    item: 'MONSA® SCG-95',
    description: 'Mild amino acid surfactant.',
    inciName: 'Sodium Cocoyl Glutamate',
    brand: 'MONSA'
  },
  {
    id: 'surf-4',
    category: 'Surfactants',
    item: 'MONSA® CMIPA',
    description: 'Foam booster and stabilizer.',
    inciName: 'Cocamide MIPA',
    brand: 'MONSA'
  },

  // --- Preservatives (Page 7) ---
  {
    id: 'pres-1',
    category: 'Preservatives',
    item: 'PROTIVE-1 (Natural)',
    description: 'Natural preservative system.',
    inciName: 'Propanediol, Chamaecyparis obtusa leaf extract',
    brand: 'K-PROS'
  },
  {
    id: 'pres-2',
    category: 'Preservatives',
    item: 'PROTIVE-12',
    description: '1,2-Hexanediol.',
    inciName: '1,2-Hexanediol',
    brand: 'K-PROS'
  },
  {
    id: 'pres-3',
    category: 'Preservatives',
    item: 'PROTIVE-MixDiOL',
    description: 'Preservative blend.',
    inciName: '1,2-Hexanediol, Caprylyl glycol',
    brand: 'K-PROS'
  },

  // --- Specialty Poly (Page 9, 10, 11) ---
  {
    id: 'poly-1',
    category: 'Specialty Poly',
    item: 'PolyViscol K30',
    description: 'PVP Polymer.',
    inciName: 'Polyvinylpyrrolidone',
    brand: 'NKY PHARMA'
  },
  {
    id: 'poly-2',
    category: 'Specialty Poly',
    item: 'PolyViscol K90',
    description: 'High molecular weight PVP.',
    inciName: 'Polyvinylpyrrolidone',
    brand: 'NKY PHARMA'
  },
  {
    id: 'poly-3',
    category: 'Specialty Poly',
    item: 'PolyViscol VA64',
    description: 'VP/VA Copolymer.',
    inciName: 'VP/VA Copolymer',
    brand: 'NKY PHARMA'
  },
  {
    id: 'poly-4',
    category: 'Specialty Poly',
    item: 'PROGEL-10',
    description: 'Emulsifying thickener complex.',
    inciName: 'Hydroxy Ethyl Acrylate / Sodium Acryloyl dimethyl Taurate copolymer...',
    brand: 'K-PROS'
  },
  {
    id: 'poly-5',
    category: 'Specialty Poly',
    item: 'SW62',
    description: 'Synthetic Wax.',
    inciName: 'Synthetic Wax',
    brand: 'K-PROS'
  },
  {
    id: 'poly-6',
    category: 'Specialty Poly',
    item: 'Silma Fresh 10',
    description: 'Film former.',
    inciName: 'Trimethylsilyloxy Silicate',
    brand: 'K-PROS'
  },
  {
    id: 'poly-7',
    category: 'Specialty Poly',
    item: 'ARON NT-Z',
    description: 'Texturizing powder.',
    inciName: 'Sodium acrylates crosspolymer-2',
    brand: 'TOAGOSEI'
  },
  {
    id: 'poly-8',
    category: 'Specialty Poly',
    item: 'PVA 0810',
    description: 'Polyvinyl Alcohol.',
    inciName: 'POLYVINYLALCOHOL',
    brand: 'HEMLO'
  },

  // --- Active Ingredients (Page 10, 11) ---
  {
    id: 'act-1',
    category: 'Active Ingredients',
    item: 'BeriCos® TA',
    description: 'Whitening agent.',
    inciName: 'Tranexamic Acid',
    brand: 'BeriCos'
  },
  {
    id: 'act-2',
    category: 'Active Ingredients',
    item: 'Trehalose',
    description: 'Moisturizing sugar.',
    inciName: 'Trehalose',
    brand: 'Qingdao Zhonghaidu'
  },
  {
    id: 'act-3',
    category: 'Active Ingredients',
    item: 'Adenosine',
    description: 'Anti-wrinkle agent.',
    inciName: 'Adenosine',
    brand: 'MEIHUA'
  },
  {
    id: 'act-4',
    category: 'Active Ingredients',
    item: 'Hydrolyzed Hyaluronic Acid',
    description: 'Low molecular weight HA.',
    inciName: 'Hydrolyzed hyaluronic Acid',
    brand: 'AMHWA BIOPHARM'
  },
  {
    id: 'act-5',
    category: 'Active Ingredients',
    item: 'Allantoin',
    description: 'Soothing agent.',
    inciName: 'Allantoin',
    brand: 'Wuhu Huahai'
  },
  {
    id: 'act-6',
    category: 'Active Ingredients',
    item: 'Alpha-arbutin',
    description: 'Whitening agent.',
    inciName: 'Alpha-arbutin',
    brand: 'Hubei Artec'
  },
  {
    id: 'act-7',
    category: 'Active Ingredients',
    item: 'L-Arginine',
    description: 'Amino acid.',
    inciName: 'L-Arginine',
    brand: 'Hebei Huayang'
  },
  {
    id: 'act-8',
    category: 'Active Ingredients',
    item: 'Natural Menthol Crystal',
    description: 'Cooling agent.',
    inciName: 'Peppermint Camphor',
    brand: 'Anhui Province Yifan'
  },
  {
    id: 'act-9',
    category: 'Active Ingredients',
    item: 'DL-Panthenol',
    description: 'Provitamin B5.',
    inciName: 'Panthenol',
    brand: 'Hangzhou Lingeba'
  },
  {
    id: 'act-10',
    category: 'Active Ingredients',
    item: 'NIACINAMIDE',
    description: 'Vitamin B3, Whitening.',
    inciName: 'Niacinamide',
    brand: 'Jiangxi Haven'
  },
  {
    id: 'act-11',
    category: 'Active Ingredients',
    item: 'InuSilk',
    description: 'Prebiotic Inulin.',
    inciName: 'Inulin',
    brand: 'HEMLO'
  },
  {
    id: 'act-12',
    category: 'Active Ingredients',
    item: 'Biosaccharide Gum-1 Sol',
    description: 'Soothing & Moisturizing.',
    inciName: 'Biosaccharide Gum-1',
    brand: 'Ecosfarm'
  },
  {
    id: 'act-13',
    category: 'Active Ingredients',
    item: 'NT Sodium Hyaluronate 1.0',
    description: 'Hyaluronic Acid solution.',
    inciName: 'Sodium Hyaluronate',
    brand: 'Ecosfarm'
  },

  // --- Functional Additives (Page 9, 10) ---
  {
    id: 'func-1',
    category: 'Functional Additives',
    item: 'Dissolvine NA2',
    description: 'Chelating agent.',
    inciName: 'Disodium EDTA (EDTA-2NA)',
    brand: 'Nouryon'
  },
  {
    id: 'func-2',
    category: 'Functional Additives',
    item: 'EDTA 4NA',
    description: 'Chelating agent.',
    inciName: 'Tetrasodium EDTA (EDTA-4NA)',
    brand: 'Nouryon'
  },
  {
    id: 'func-3',
    category: 'Functional Additives',
    item: 'Citric acid Anhydrous',
    description: 'pH adjuster.',
    inciName: 'Citric Acid',
    brand: 'Weifang Ensign'
  },
  {
    id: 'func-4',
    category: 'Functional Additives',
    item: 'Tromethamine',
    description: 'pH adjuster / Neutralizer.',
    inciName: 'Tromethamine',
    brand: 'YACOO'
  }
];