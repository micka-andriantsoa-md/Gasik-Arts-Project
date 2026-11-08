import React, { useState } from 'react';
import { 
  Building2, 
  Truck, 
  FileText, 
  Send, 
  CheckCircle, 
  MessageCircle, 
  Phone, 
  Calculator, 
  Globe 
} from 'lucide-react';
import { BRAND_HOTLINES } from '../data/products';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface WholesaleSectionProps {
  currency: Currency;
}

export const WholesaleSection: React.FC<WholesaleSectionProps> = ({ currency }) => {
  const [bagCount, setBagCount] = useState<number>(20);
  const [modelType, setModelType] = useState<string>('mix');
  const [companyName, setCompanyName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [destination, setDestination] = useState<string>('France / Europe');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Discount calculation
  const getDiscount = (count: number) => {
    if (count >= 100) return 0.50;
    if (count >= 30) return 0.40;
    if (count >= 10) return 0.30;
    return 0.15;
  };

  const discount = getDiscount(bagCount);
  const baseAvgPriceMGA = 110000;
  const unitPriceAfterDiscountMGA = Math.round(baseAvgPriceMGA * (1 - discount));
  const totalMGA = unitPriceAfterDiscountMGA * bagCount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="grossiste-section" className="py-16 sm:py-24 bg-[#f3ede9] border-b border-[#dac2b6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#dac2b6] text-xs font-semibold uppercase tracking-wider text-[#8b4513] mb-3">
            <Building2 className="w-3.5 h-3.5 text-[#10b981]" />
            Espace B2B, Hôtels & Concept Stores
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2c1b10] tracking-tight">
            Commandes en Gros & Export International
          </h2>
          <p className="text-[#54433a] text-sm sm:text-base mt-3">
            Vous gérez une boutique en France, à La Réunion, en Europe, ou un hôtel éco-lodge à Madagascar ? Bénéficiez de nos tarifs grossistes directs ateliers et de notre accompagnement douane & logistique.
          </p>
        </div>

        {/* 2-Column Grid: Calculator & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Instant Volume Calculator */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#dac2b6]/70">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#dac2b6]/50">
              <Calculator className="w-5 h-5 text-[#8b4513]" />
              <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                Simulateur de Devis Grossiste
              </h3>
            </div>

            {/* Quantity Slider */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-[#54433a]">
                  Quantité de sacs :
                </label>
                <span className="font-mono text-base font-bold text-[#6c2f00] bg-[#f8f2ee] px-2.5 py-1 rounded-md border border-[#dac2b6]">
                  {bagCount} pièces
                </span>
              </div>
              <input
                type="range"
                min={5}
                max={200}
                step={5}
                value={bagCount}
                onChange={(e) => setBagCount(Number(e.target.value))}
                className="w-full h-2 bg-[#f3ede9] rounded-lg appearance-none cursor-pointer accent-[#8b4513]"
              />
              <div className="flex justify-between text-[11px] text-[#877369] mt-1.5">
                <span>5 pcs (-15%)</span>
                <span>10 pcs (-30%)</span>
                <span>30 pcs (-40%)</span>
                <span>100+ pcs (-50%)</span>
              </div>
            </div>

            {/* Model Type */}
            <div className="mb-6">
              <label className="text-xs font-bold uppercase tracking-wider text-[#54433a] block mb-2">
                Assortiment souhaité :
              </label>
              <select
                value={modelType}
                onChange={(e) => setModelType(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-[#dac2b6] text-xs font-medium text-[#2c1b10] bg-white focus:outline-none focus:border-[#8b4513]"
              >
                <option value="mix">Assortiment Équilibré (Cabas Sud-Est + Vohipeno + Harona Tsotra)</option>
                <option value="sud-est">100% Modèles Prestige Sud-Est Losanges</option>
                <option value="vohipeno">100% Modèles Vohipeno Rayés avec Lettrage</option>
                <option value="leather">100% Modèles avec Anses Cuir & Palissandre</option>
              </select>
            </div>

            {/* Calculation Breakdown */}
            <div className="bg-[#f8f2ee] rounded-xl p-4 border border-[#dac2b6]/60 mb-6">
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Remise volume appliquée :</span>
                <span className="font-bold text-[#10b981]">- {Math.round(discount * 100)} %</span>
              </div>
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Prix unitaire moyen remisé :</span>
                <span className="font-semibold text-[#2c1b10]">
                  {formatPrice(unitPriceAfterDiscountMGA, currency)} / sac
                </span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#2c1b10] pt-2 border-t border-[#dac2b6]/40">
                <span>Total estimatif HT :</span>
                <span className="font-serif text-xl text-[#6c2f00]">
                  {formatPrice(totalMGA, currency)}
                </span>
              </div>
            </div>

            {/* WhatsApp Quick Quote link */}
            <a
              href={`https://wa.me/261387760947?text=Bonjour%20Gasik'arts,%20je%20suis%20un%20professionnel%20et%20souhaite%20un%20devis%20grossiste%20pour%20${bagCount}%20sacs%20(${modelType})%20vers%20${encodeURIComponent(destination)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-lg bg-[#10b981] text-white font-bold text-xs hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-sm text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Demander ce Devis par WhatsApp Direct</span>
            </a>

          </div>

          {/* Right Column: Wholesale Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#dac2b6]/70">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2c1b10] mb-2">
                  Demande de Devis Reçue !
                </h3>
                <p className="text-sm text-[#54433a] max-w-md mx-auto mb-6">
                  Merci {companyName || 'cher partenaire'}. Notre responsable des partenariats et export vous contactera sous 24h avec le catalogue pro et le barème de transport maritime / aérien.
                </p>
                <div className="inline-flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href={`tel:${BRAND_HOTLINES[0].raw}`}
                    className="px-4 py-2 rounded-lg bg-[#8b4513] text-white text-xs font-bold"
                  >
                    Nous joindre immédiatement ({BRAND_HOTLINES[0].number})
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-[#78582f] underline"
                  >
                    Faire une autre demande
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[#dac2b6]/50">
                  <FileText className="w-5 h-5 text-[#8b4513]" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                      Formulaire de Contact Pro & Export
                    </h3>
                    <p className="text-xs text-[#54433a]">
                      Réponse et devis officiel sous 24 heures ouvrées
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54433a] block mb-1.5">
                      Nom de la Boutique / Société *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Ex: Maison Malagasy Paris / Hôtel Eden"
                      className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] focus:outline-none focus:border-[#8b4513]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-[#54433a] block mb-1.5">
                      Email de contact *
                    </label>
                    <input
                      type="email"
                      required
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      placeholder="contact@boutique.fr"
                      className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] focus:outline-none focus:border-[#8b4513]"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#54433a] block mb-1.5">
                    Pays ou Ville de Destination *
                  </label>
                  <input
                    type="text"
                    required
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Ex: Paris (France), Saint-Denis (La Réunion), Antananarivo..."
                    className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] focus:outline-none focus:border-[#8b4513]"
                  />
                </div>

                <div className="mb-6">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#54433a] block mb-1.5">
                    Détails ou personnalisation demandée (lettrage, logo d'enseigne...)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Précisez vos besoins : délais, personnalisation avec le nom de votre hôtel/boutique, couleurs particulières..."
                    className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] focus:outline-none focus:border-[#8b4513]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-[#8b4513] text-white font-bold text-xs hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer ma Demande de Devis B2B</span>
                </button>
              </form>
            )}

            {/* Export guarantees footer */}
            <div className="mt-6 pt-6 border-t border-[#dac2b6]/40 grid grid-cols-2 gap-4 text-xs text-[#54433a]">
              <div className="flex items-start gap-2">
                <Truck className="w-4 h-4 text-[#8b4513] shrink-0 mt-0.5" />
                <span>Expéditions sécurisées DHL Express avec numéro de suivi international</span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-[#8b4513] shrink-0 mt-0.5" />
                <span>Certificat phytosanitaire & attestation d'origine artisanale fournis</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
