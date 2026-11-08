import React from 'react';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ArrowRight, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, qty: number) => void;
  onRemoveItem: (id: string) => void;
  currency: Currency;
  onOpenCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onOpenCheckout
}) => {
  if (!isOpen) return null;

  const totalMGA = items.reduce((acc, it) => acc + (it.priceMGA * it.quantity), 0);

  // Generate WhatsApp order message
  const generateWhatsAppMessage = () => {
    let msg = "Bonjour Gasik'arts ! Je souhaite valider la commande suivante :%0A%0A";
    items.forEach((it, idx) => {
      msg += `*${idx + 1}. ${it.title}*%0A`;
      if (it.selectedColor) msg += `   • Teinte: ${it.selectedColor}%0A`;
      if (it.customDetails) {
        msg += `   • Inscription: "${it.customDetails.wovenText}"%0A`;
        msg += `   • Finitions: ${it.customDetails.handleName}%0A`;
      }
      msg += `   • Quantité: ${it.quantity} x ${it.priceMGA} Ar = ${it.quantity * it.priceMGA} Ar%0A%0A`;
    });
    msg += `*TOTAL ESTIMÉ : ${totalMGA} Ar*%0A%0AMerci de m'indiquer les modalités de livraison et de règlement !`;
    return msg;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="flex-1" onClick={onClose} />

      {/* Drawer Container */}
      <div className="relative w-full max-w-md bg-[#fef8f4] h-full shadow-2xl flex flex-col border-l border-[#dac2b6] animate-in slide-in-from-right duration-300">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#dac2b6]/60 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#8b4513]" />
            <h2 className="font-serif text-lg font-bold text-[#2c1b10]">
              Mon Panier ({items.reduce((acc, it) => acc + it.quantity, 0)})
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#54433a] hover:bg-[#f3ede9] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 divide-y divide-[#dac2b6]/40">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#f3ede9] flex items-center justify-center text-[#877369] mb-4">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="font-serif text-lg font-bold text-[#2c1b10]">Votre panier est vide</p>
              <p className="text-xs text-[#54433a] mt-1 mb-6">
                Découvrez nos créations de vannerie d'art et personnalisez votre sac unique.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-[#8b4513] text-white text-xs font-bold rounded-lg hover:bg-[#6c2f00] transition-colors cursor-pointer"
              >
                Explorer la boutique
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 flex gap-3.5">
                {/* Thumb */}
                <div className="w-20 h-20 rounded-xl overflow-hidden bg-[#f3ede9] border border-[#dac2b6]/70 shrink-0">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="font-serif text-sm font-bold text-[#2c1b10] line-clamp-1">
                        {item.title}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#877369] hover:text-[#ba1a1a] p-1 transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {item.selectedColor && (
                      <span className="text-[11px] text-[#78582f] block">
                        Teinte : {item.selectedColor}
                      </span>
                    )}

                    {item.customDetails && (
                      <span className="text-[10px] font-mono text-[#8b4513] bg-[#f8f2ee] px-1.5 py-0.5 rounded border border-[#dac2b6]/60 inline-block mt-0.5">
                        Tissage : "{item.customDetails.wovenText}"
                      </span>
                    )}
                  </div>

                  {/* Quantity & Price */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#dac2b6] rounded-md bg-white">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="px-2 py-0.5 text-xs text-[#54433a] hover:bg-[#f3ede9]"
                      >
                        -
                      </button>
                      <span className="px-2 py-0.5 text-xs font-bold text-[#2c1b10]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-xs text-[#54433a] hover:bg-[#f3ede9]"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-sm font-bold text-[#6c2f00]">
                      {formatPrice(item.priceMGA * item.quantity, currency)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#dac2b6]/60 bg-white shadow-inner flex flex-col gap-3">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#877369]">
                Sous-total articles :
              </span>
              <span className="font-serif text-2xl font-bold text-[#6c2f00]">
                {formatPrice(totalMGA, currency)}
              </span>
            </div>

            <div className="text-[11px] text-[#877369] flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#10b981]" />
              <span>Livraison express partout à Madagascar & Export DHL sécurisé</span>
            </div>

            <div className="grid grid-cols-1 gap-2 pt-2">
              <button
                onClick={onOpenCheckout}
                className="w-full py-3 px-4 rounded-xl bg-[#8b4513] text-white font-bold text-xs hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Finaliser la Commande en Ligne</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/261387760947?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Commander ce Panier par WhatsApp</span>
              </a>
            </div>
          </div>
        )}

      </div>

    </div>
  );
};
