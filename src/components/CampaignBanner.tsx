import React, { useState } from 'react';
import { Phone, MessageCircle, Sparkles, Check, Share2, Copy } from 'lucide-react';
import { BRAND_HOTLINES, PRODUCTS } from '../data/products';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface CampaignBannerProps {
  currency: Currency;
  onAddToCart: (product: typeof PRODUCTS[0]) => void;
  onQuickView: (product: typeof PRODUCTS[0]) => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({
  currency,
  onAddToCart,
  onQuickView
}) => {
  const [copied, setCopied] = useState(false);
  const featuredProduct = PRODUCTS.find(p => p.id === 'cabas-cuir-naturel-ebene') || PRODUCTS[0];

  const handleCopyHotline = (number: string) => {
    navigator.clipboard.writeText(number);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="bg-gradient-to-r from-[#7a1c1c] via-[#991b1b] to-[#7f1d1d] text-white py-12 lg:py-16 overflow-hidden relative shadow-inner">
      {/* Subtle organic pattern overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fed39f_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: The Campaign Poster Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 bg-black/30">
              <img
                src="/assets/aistudio/Publication_Instagram_Promotion_de_produit_Moderne_Rouge_20260310_052310_0000_daf5550f.png"
                alt="Affiche Officielle Gasik'arts - Complétez votre élégance"
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute top-3 left-3 bg-[#2c1b10]/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
                Campagne Officielle
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Details & Direct Order Action */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-semibold tracking-widest uppercase mb-4 w-fit text-[#fed39f] border border-white/20">
              Édition Spéciale Gasik'arts 2026
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Complétez Votre Élégance !
            </h2>

            <p className="text-white/90 text-base sm:text-lg mb-6 leading-relaxed">
              Inspirée des lignes pures du cabas traditionnel en fibres végétales blondes et anses sellier en cuir orangé surpiqué. Une silhouette intemporelle pour vos journées en ville, vos voyages et réceptions.
            </p>

            {/* Price & Actions Box */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#fed39f] font-semibold">
                    Modèle en vedette :
                  </div>
                  <div className="font-serif text-xl font-bold text-white">
                    {featuredProduct.name}
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-white/70">Prix unitaire</div>
                  <div className="text-2xl font-bold text-[#fed39f]">
                    {formatPrice(featuredProduct.priceMGA, currency)}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onAddToCart(featuredProduct)}
                  className="px-5 py-2.5 rounded-lg bg-[#fef8f4] text-[#6c2f00] font-bold text-sm hover:bg-[#fed39f] transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  Ajouter au Panier
                </button>

                <button
                  onClick={() => onQuickView(featuredProduct)}
                  className="px-4 py-2.5 rounded-lg border border-white/50 text-white font-medium text-sm hover:bg-white/15 transition-colors cursor-pointer"
                >
                  Voir les Détails
                </button>

                <a
                  href={`https://wa.me/261387760947?text=Bonjour%20Gasik'arts,%20je%20souhaite%20commander%20le%20sac%20de%20la%20campagne%20Complétez%20votre%20Élégance%20(Prix:%20${featuredProduct.priceMGA}%20Ar).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#10b981] text-white font-bold text-sm hover:bg-emerald-600 transition-colors flex items-center gap-2 ml-auto shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  Commander sur WhatsApp
                </a>
              </div>
            </div>

            {/* Direct hotline telephone banner from the poster */}
            <div className="pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/70 font-medium mb-1">
                  Ligne directe service client & commandes :
                </div>
                <div className="flex flex-wrap items-center gap-3 font-mono text-base font-bold text-white">
                  <a 
                    href={`tel:${BRAND_HOTLINES[0].raw}`}
                    className="hover:text-[#fed39f] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#10b981]" />
                    {BRAND_HOTLINES[0].number}
                  </a>
                  <span className="text-white/40">&bull;</span>
                  <a 
                    href={`tel:${BRAND_HOTLINES[1].raw}`}
                    className="hover:text-[#fed39f] transition-colors flex items-center gap-1.5"
                  >
                    <Phone className="w-4 h-4 text-[#10b981]" />
                    {BRAND_HOTLINES[1].number}
                  </a>
                </div>
              </div>

              <button
                onClick={() => handleCopyHotline(BRAND_HOTLINES[0].number)}
                className="px-3 py-1.5 rounded-md bg-white/10 hover:bg-white/20 text-xs font-semibold text-white/90 transition-colors flex items-center gap-1.5 border border-white/20"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#10b981]" />
                    <span>Numéro copié !</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copier le contact</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
