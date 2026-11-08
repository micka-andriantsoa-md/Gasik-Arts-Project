import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, Globe, Instagram, Facebook } from 'lucide-react';
import { BRAND_HOTLINES } from '../data/products';

interface FooterProps {
  onNavClick: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
  return (
    <footer className="bg-[#2c1b10] text-[#fef8f4] pt-16 pb-12 border-t border-[#dac2b6]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1: Brand & Official Logo */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-[#8b4513]/40 bg-[#1d1b19] shadow-lg shrink-0">
                <img
                  src="/assets/aistudio/logo_be16e4f3.jpg"
                  alt="Gasik'arts Logo Officiel"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white flex items-center gap-1.5">
                  Gasik'arts
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" />
                </span>
                <span className="text-[11px] uppercase tracking-[0.25em] font-medium text-[#fed39f] block">
                  Le meilleur pour vous
                </span>
              </div>
            </div>

            <p className="text-sm text-[#dac2b6] leading-relaxed mb-6 max-w-sm">
              Maison de haute vannerie artisanale malgache. Paniers et cabas en joncs de mahampy sauvage et raphia naturel, tressés avec passion au Sud-Est de Madagascar.
            </p>

            {/* Direct hotline numbers */}
            <div className="bg-[#1d1b19] rounded-xl p-4 border border-[#877369]/30 max-w-sm">
              <div className="text-[11px] uppercase tracking-wider text-[#fed39f] font-semibold mb-1 flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#10b981]" />
                Lignes Directes & Commandes :
              </div>
              <div className="flex flex-col gap-1 text-sm font-bold text-white font-mono">
                <a href={`tel:${BRAND_HOTLINES[0].raw}`} className="hover:text-[#fed39f] transition-colors flex items-center justify-between">
                  <span>{BRAND_HOTLINES[0].number}</span>
                  <span className="text-[10px] text-[#10b981] font-sans font-semibold">WhatsApp & Appels</span>
                </a>
                <a href={`tel:${BRAND_HOTLINES[1].raw}`} className="hover:text-[#fed39f] transition-colors flex items-center justify-between">
                  <span>{BRAND_HOTLINES[1].number}</span>
                  <span className="text-[10px] text-[#dac2b6] font-sans">Airtel</span>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Explorer
            </h4>
            <ul className="space-y-2.5 text-xs text-[#dac2b6]">
              <li>
                <button onClick={() => onNavClick('accueil')} className="hover:text-white transition-colors">
                  Accueil & Lookbook
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('boutique')} className="hover:text-white transition-colors">
                  Toutes les Créations
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('customizer')} className="hover:text-white transition-colors text-[#fed39f] font-semibold">
                  Atelier Sur-Mesure
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('campagne')} className="hover:text-white transition-colors">
                  Campagne « Complétez votre élégance »
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('atelier')} className="hover:text-white transition-colors">
                  L'Atelier de Vohipeno
                </button>
              </li>
              <li>
                <button onClick={() => onNavClick('grossiste')} className="hover:text-white transition-colors">
                  Grossistes & Devis Pro
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Collections */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-[#dac2b6]">
              <li>Collection Sud-Est Prestige</li>
              <li>Série Vohipeno Souvenir</li>
              <li>Harona Tsotra Traditionnel</li>
              <li>Cabas Anses Cuir & Palissandre</li>
              <li>Pochettes Zippées à Pompon</li>
              <li>Assortiments pour Revendeurs</li>
            </ul>
          </div>

          {/* Col 4: Engagements & Localisation */}
          <div>
            <h4 className="font-serif text-base font-bold text-white mb-4">
              Atelier & Terroir
            </h4>
            <div className="space-y-3 text-xs text-[#dac2b6]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#8b4513] shrink-0 mt-0.5" />
                <span>Atelier de Vohipeno, Région Vatovavy-Fitovinany, Madagascar</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#10b981] shrink-0 mt-0.5" />
                <span>Expédition Antananarivo & Export Monde (DHL / Fret)</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#fed39f] shrink-0 mt-0.5" />
                <span>Garantie 100% végétal biodégradable et fait main</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#dac2b6]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#dac2b6]/70">
          <div>
            &copy; {new Date().getFullYear()} <strong>Gasik'arts</strong>. Tous droits réservés. Vannerie d'art et Slow Luxury Malagasy.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Fait avec fierté à Madagascar</span>
            <span className="text-[#10b981]">&bull;</span>
            <span className="italic text-[#fed39f]">Le meilleur pour vous</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
