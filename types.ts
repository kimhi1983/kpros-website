export type Category =
  | 'All'
  | 'Custom Base'
  | 'Active Ingredients'
  | 'Emollients & Oils'
  | 'Surfactants'
  | 'Preservatives'
  | 'UV Filters'
  | 'Specialty Poly'
  | 'Pigments & Powders'
  | 'Beads & Capsules'
  | 'Functional Additives';

export interface Product {
  id: string;
  category: Category;
  brand: string;
  item: string;      // 품명
  inciName: string;  // INCI
  packing?: string;  // 포장단위
}
