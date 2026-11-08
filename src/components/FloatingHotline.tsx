import React, { useState } from 'react';
import { MessageCircle, Phone, X, Sparkles } from 'lucide-react';
import { BRAND_HOTLINES } from '../data/products';

export const FloatingHotline: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40">
      
      {/* Expanded popover */}
      {isOpen && (
        <div className="mb-3 w-72 bg-white rounded-2xl shadow-2xl border border-[#dac2b6] p-4 animate-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-[#dac2b6]/40 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-[#2c1b10]">
                <img src="/assets/aistudio/logo_be16e4f3.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-xs font-bold text-[#2c1b10]">Atelier Gasik'arts</div>
                <div className="text-[10px] text-[#10b981] font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-ping" />
                  Conseillers disponibles
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-md text-[#877369] hover:bg-[#f3ede9]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-[#54433a] mb-3 leading-relaxed">
            Une question sur un modèle, un devis grossiste ou une personnalisation sur-mesure ?
          </p>

          <div className="space-y-2">
            <a
              href="https://wa.me/261387760947?text=Bonjour%20Gasik'arts,%20j'aimerais%20avoir%20des%20renseignements%20sur%20vos%20paniers."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 px-3 rounded-lg bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-colors text-center"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Discuter sur WhatsApp</span>
            </a>

            <a
              href={`tel:${BRAND_HOTLINES[0].raw}`}
              className="w-full py-2 px-3 rounded-lg bg-[#8b4513] hover:bg-[#6c2f00] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors text-center"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Appeler {BRAND_HOTLINES[0].number}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#10b981] text-white font-bold text-xs shadow-2xl hover:bg-emerald-600 transition-all transform hover:scale-105 active:scale-95 cursor-pointer border-2 border-white"
        title="Contacter Gasik'arts"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline">WhatsApp &bull; 038 77 609 47</span>
      </button>

    </div>
  );
};
