import React from 'react';
import { X, Heart, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistIds: string[];
  onRemoveFromWishlist: (id: string) => void;
  onAddToCart: (product: Product) => void;
  currency: Currency;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onAddToCart,
  currency
}) => {
  if (!isOpen) return null;

  const wishlistedProducts = PRODUCTS.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
      
      <div className="relative bg-[#fef8f4] w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden border border-[#dac2b6] my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#dac2b6]/60 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#ba1a1a] fill-[#ba1a1a]" />
            <h2 className="font-serif text-lg font-bold text-[#2c1b10]">
              Mes Créations Favorites ({wishlistedProducts.length})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#54433a] hover:bg-[#f3ede9]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* List */}
        <div className="p-5 max-h-[70vh] overflow-y-auto divide-y divide-[#dac2b6]/40">
          {wishlistedProducts.length === 0 ? (
            <div className="text-center py-12">
              <Heart className="w-12 h-12 text-[#dac2b6] mx-auto mb-3" />
              <p className="font-serif text-base font-bold text-[#2c1b10]">
                Aucun favori enregistré
              </p>
              <p className="text-xs text-[#54433a] mt-1">
                Cliquez sur le cœur d'un produit dans la boutique pour le retrouver ici.
              </p>
            </div>
          ) : (
            wishlistedProducts.map((prod) => (
              <div key={prod.id} className="py-3.5 first:pt-0 flex items-center gap-3.5">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-[#f3ede9] border border-[#dac2b6]/60 shrink-0">
                  <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-sm font-bold text-[#2c1b10] truncate">
                    {prod.name}
                  </h4>
                  <div className="text-[11px] text-[#78582f] truncate">
                    {prod.origin}
                  </div>
                  <div className="font-serif text-xs font-bold text-[#6c2f00] mt-0.5">
                    {formatPrice(prod.priceMGA, currency)}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(prod);
                      onRemoveFromWishlist(prod.id);
                    }}
                    className="p-2 rounded-lg bg-[#8b4513] text-white hover:bg-[#6c2f00] text-xs font-bold transition-colors flex items-center gap-1 shadow-xs cursor-pointer"
                    title="Ajouter au panier"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onRemoveFromWishlist(prod.id)}
                    className="p-2 rounded-lg text-[#877369] hover:text-[#ba1a1a] hover:bg-[#f3ede9] transition-colors"
                    title="Supprimer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};
