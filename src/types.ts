import { Product } from './data/products';

export type Currency = 'MGA' | 'EUR' | 'USD';

export interface CartItem {
  id: string; // unique item id (could be product.id or custom-bag-timestamp)
  product?: Product;
  customDetails?: CustomBagConfig;
  title: string;
  priceMGA: number;
  priceEUR: number;
  quantity: number;
  image: string;
  selectedColor?: string;
}

export interface CustomBagConfig {
  model: 'sud-est' | 'vohipeno' | 'harona' | 'pochette';
  modelName: string;
  palette: 'sud-est' | 'ocre' | 'soleil' | 'naturel';
  paletteName: string;
  wovenText: string;
  handleType: 'braided' | 'leather' | 'shoulder';
  handleName: string;
  hasPompon: boolean;
  hasWoodButton: boolean;
  estimatedHours: number;
  totalMGA: number;
  totalEUR: number;
}
