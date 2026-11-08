import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Leaf, 
  MessageCircle, 
  Check, 
  ChevronRight,
  Share2
} from 'lucide-react';
import { Product } from '../data/products';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currency: Currency;
  onAddToCart: (product: Product, quantity: number, selectedColor?: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: (productId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0] || '');
  const [quantity, setQuantity] = useState<number>(1);
  const [added, setAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    onAddToCart(product, quantity, selectedColor);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-[#fef8f4] w-full max-w-4xl rounded-2xl shadow-2xl overflow-hidden border border-[#dac2b6] my-8 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs text-[#2c1b10] hover:bg-white flex items-center justify-center shadow-md transition-transform active:scale-90"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image Gallery */}
          <div className="p-6 bg-[#f3ede9] flex flex-col justify-between">
            {/* Main Stage Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-white shadow-md border border-[#dac2b6]/60 mb-4">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />

              {product.badge && (
                <div className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 bg-[#8b4513] text-white rounded-md shadow-xs">
                  {product.badge}
                </div>
              )}
            </div>

            {/* Thumbnails Gallery */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto pb-1">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0 transition-all ${
                      activeImage === img 
                        ? 'border-[#8b4513] shadow-md scale-102' 
                        : 'border-[#dac2b6] opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Vue ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Specifications & Purchasing */}
          <div className="p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
            <div>
              
              {/* Origin & Craft Hours */}
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#78582f] mb-2 font-medium">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#8b4513]" />
                  {product.origin}
                </span>
                <span className="flex items-center gap-1 bg-[#f3ede9] px-2 py-0.5 rounded-md text-[#54433a]">
                  <Clock className="w-3.5 h-3.5 text-[#8b4513]" />
                  {product.craftHours}h de façonnage manuel
                </span>
              </div>

              {/* Title & Malagasy name */}
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c1b10] leading-snug">
                {product.name}
              </h2>
              <div className="italic text-xs text-[#877369] font-medium mt-0.5 mb-4">
                Nom traditionnel : « {product.malagasyName} »
              </div>

              {/* Price section */}
              <div className="flex items-baseline gap-3 pb-4 mb-4 border-b border-[#dac2b6]/40">
                <span className="font-serif text-3xl font-bold text-[#6c2f00]">
                  {formatPrice(product.priceMGA, currency)}
                </span>
                {currency !== 'MGA' && (
                  <span className="text-xs text-[#877369]">
                    ({new Intl.NumberFormat('fr-MG').format(product.priceMGA)} Ariary)
                  </span>
                )}
                <span className="ml-auto text-xs font-semibold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-md">
                  En Stock Atelier ({product.stockCount} dispo)
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-[#54433a] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Dimensions & Craft Specs */}
              <div className="bg-white rounded-xl p-4 border border-[#dac2b6]/60 mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#2c1b10] mb-2.5">
                  Fiche Technique d'Atelier
                </h4>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs text-[#54433a]">
                  <div>
                    <span className="text-[#877369]">Dimensions :</span>{' '}
                    <strong className="text-[#2c1b10]">
                      {product.dimensions.width} &times; {product.dimensions.height} &times; {product.dimensions.depth} cm
                    </strong>
                  </div>
                  <div>
                    <span className="text-[#877369]">Fibres :</span>{' '}
                    <strong className="text-[#2c1b10]">{product.material.split('&')[0]}</strong>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#877369]">Tissage :</span>{' '}
                    <span className="text-[#2c1b10]">{product.technique}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-[#877369]">Collectif :</span>{' '}
                    <span className="text-[#2c1b10]">{product.artisanGroup}</span>
                  </div>
                </div>
              </div>

              {/* Colorway Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2c1b10] mb-2">
                    Déclinaisons de Teinte :
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c}
                        onClick={() => setSelectedColor(c)}
                        className={`text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                          selectedColor === c
                            ? 'border-[#8b4513] bg-[#8b4513] text-white font-bold shadow-xs'
                            : 'border-[#dac2b6] bg-white text-[#54433a] hover:border-[#8b4513]'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Bottom Actions: Quantity, Cart & WhatsApp */}
            <div className="pt-4 border-t border-[#dac2b6]/40 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center border border-[#dac2b6] rounded-lg bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-sm font-bold text-[#54433a] hover:bg-[#f3ede9] rounded-l-lg"
                  >
                    -
                  </button>
                  <span className="px-3 py-2 text-xs font-bold text-[#2c1b10] min-w-[32px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-sm font-bold text-[#54433a] hover:bg-[#f3ede9] rounded-r-lg"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-4 rounded-lg bg-[#8b4513] text-[#fef8f4] font-bold text-xs hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{added ? 'Ajouté avec succès !' : `Ajouter au Panier • ${formatPrice(product.priceMGA * quantity, currency)}`}</span>
                </button>

                {/* Wishlist toggle */}
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className="p-3 rounded-lg border border-[#dac2b6] bg-white text-[#54433a] hover:text-[#ba1a1a] transition-colors shadow-xs"
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#ba1a1a] text-[#ba1a1a]' : ''}`} />
                </button>
              </div>

              {/* Direct WhatsApp Ordering */}
              <a
                href={`https://wa.me/261380545766?text=${encodeURIComponent(`Bonjour Gasik'arts, je souhaite commander immédiatement :\n- Modèle: ${product.name}\n- Quantité: ${quantity}\n- Teinte: ${selectedColor}\n- Prix total: ${product.priceMGA * quantity} Ar.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-lg bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander directement via WhatsApp (038 05 457 66)</span>
              </a>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
