export type Category = 
  | 'All'
  | 'Custom Base'
  | 'Active Ingredients'
  | 'Emollients & Oils'
  | 'Surfactants'
  | 'Preservatives'
  | 'Specialty Poly'
  | 'Functional Additives';

export interface Product {
  id: string;
  category: Category;
  item: string; // The main display name
  description: string;
  inciName: string; // Ingredient definition
  brand?: string; // Optional brand name if applicable
}