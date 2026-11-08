import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Leaf, HeartHandshake, PhoneCall } from 'lucide-react';
import { BRAND_HOTLINES } from '../data/products';

interface HeroSectionProps {
  onExplore: () => void;
  onCustomize: () => void;
  onCampaign: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExplore,
  onCustomize,
  onCampaign
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8f2ee] via-[#fef8f4] to-[#fef8f4] pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#dac2b6]/30">
      {/* Decorative ambient background blur */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#fed39f]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#10b981]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Value Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Provenance badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede7e3] border border-[#dac2b6]/60 w-fit mb-6">
              <span className="w-2 h-2 rounded-full bg-[#10b981]"></span>
              <span className="text-xs font-semibold uppercase tracking-[0.1em] text-[#6c2f00]">
                Maison d'Artisanat Malagasy &bull; Sud-Est Madagascar
              </span>
            </div>

            {/* Main Editorial Title */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2c1b10] leading-[1.15] mb-6">
              Complétez votre élégance avec l'art du <span className="italic text-[#8b4513] underline decoration-[#c19a6b]/50 underline-offset-8">tressage ancestral</span>.
            </h1>

            {/* Subtitle / Manifesto */}
            <p className="text-lg sm:text-xl text-[#54433a] font-normal leading-relaxed mb-8 max-w-2xl">
              Chaque panier <strong className="text-[#2c1b10] font-semibold">Gasik'arts</strong> est une pièce d'orfèvrerie végétale façonnée à la main par les femmes artisanes de Vohipeno. Jonc Mahampy sauvage, raphia doré et teintures écologiques pour sublimer votre quotidien.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExplore}
                className="px-6 py-3.5 rounded-lg bg-[#8b4513] text-[#fef8f4] font-semibold text-sm tracking-wide hover:bg-[#6c2f00] transition-all shadow-md hover:shadow-lg flex items-center gap-2 group cursor-pointer"
              >
                <span>Découvrir la Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onCustomize}
                className="px-6 py-3.5 rounded-lg border-2 border-[#8b4513] text-[#6c2f00] font-semibold text-sm tracking-wide bg-white/70 hover:bg-[#fed39f]/30 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#8b4513]" />
                <span>Atelier Sur-Mesure</span>
              </button>

              <button
                onClick={onCampaign}
                className="text-xs font-bold uppercase tracking-wider text-[#78582f] hover:text-[#2c1b10] underline underline-offset-4 px-2 py-1"
              >
                Voir l'affiche &bull; Campagne 2026
              </button>
            </div>

            {/* Trust Markers Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t border-[#dac2b6]/40">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#f3ede9] text-[#8b4513]">
                  <Leaf className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2c1b10]">100% Fibres Naturelles</div>
                  <div className="text-[11px] text-[#877369]">Mahampy & Raphia pur</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-[#f3ede9] text-[#8b4513]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2c1b10]">Commerce Équitable</div>
                  <div className="text-[11px] text-[#877369]">Coopératives Vohipeno</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-2 rounded-lg bg-[#f3ede9] text-[#8b4513]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2c1b10]">Finitions Sellier</div>
                  <div className="text-[11px] text-[#877369]">Jusqu'à 28h par pièce</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Stage with the Flagship Woven Bag */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Luxury Frame */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#f3ede9] group">
                <img
                  src="/assets/aistudio/image_62cd8364_c5ac4cb8.png"
                  alt="Cabas d'exception Gasik'arts Sud-est"
                  className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Plaque / Stamp Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-[#dac2b6]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg overflow-hidden border border-[#8b4513]/20 bg-[#2c1b10]">
                      <img src="/assets/aistudio/logo_be16e4f3.jpg" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-serif text-sm font-bold text-[#2c1b10]">
                        GASIK'ARTS Sud-est
                      </div>
                      <div className="text-[11px] text-[#78582f]">
                        Motif Losanges Royaux &bull; Fait Main
                      </div>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-[#8b4513] text-white rounded-md">
                    Signature
                  </span>
                </div>
              </div>

              {/* Floating secondary badge card: Direct hotline */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#2c1b10] text-[#fef8f4] rounded-xl p-3.5 shadow-xl border border-[#dac2b6]/30 max-w-xs animate-in fade-in duration-500">
                <div className="flex items-center gap-2 mb-1">
                  <PhoneCall className="w-4 h-4 text-[#10b981]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#fed39f]">
                    Service Commandes Directes
                  </span>
                </div>
                <p className="text-xs text-[#dac2b6] mb-2">
                  Conseil personnalisé et commande immédiate par téléphone ou WhatsApp :
                </p>
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>{BRAND_HOTLINES[0].number}</span>
                  <span className="text-[#10b981]">&bull; En ligne</span>
                </div>
              </div>

              {/* Floating artisan seal */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-2.5 shadow-lg border border-[#dac2b6]/40 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full border-2 border-dashed border-[#8b4513] flex flex-col items-center justify-center text-center p-1">
                  <span className="text-[9px] font-bold tracking-tight text-[#8b4513] uppercase leading-none">
                    100%
                  </span>
                  <span className="text-[8px] font-medium text-[#78582f] uppercase leading-none mt-0.5">
                    Malgache
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
