import React, { useState } from 'react';
import { 
  Sparkles, 
  ShoppingBag, 
  MessageCircle, 
  RotateCcw, 
  Check, 
  Layers, 
  Palette, 
  Type, 
  Scissors, 
  Info,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Currency, CustomBagConfig } from '../types';
import { formatPrice } from '../utils/formatters';

interface BagCustomizerProps {
  currency: Currency;
  onAddCustomToCart: (config: CustomBagConfig) => void;
}

export const BagCustomizer: React.FC<BagCustomizerProps> = ({
  currency,
  onAddCustomToCart
}) => {
  const [model, setModel] = useState<'sud-est' | 'vohipeno' | 'harona' | 'pochette'>('vohipeno');
  const [palette, setPalette] = useState<'sud-est' | 'ocre' | 'soleil' | 'naturel'>('sud-est');
  const [wovenText, setWovenText] = useState<string>('VOHIPENO');
  const [handleType, setHandleType] = useState<'braided' | 'leather' | 'shoulder'>('braided');
  const [hasPompon, setHasPompon] = useState<boolean>(true);
  const [hasWoodButton, setHasWoodButton] = useState<boolean>(false);
  const [celebrated, setCelebrated] = useState<boolean>(false);

  // Model definitions
  const models = [
    {
      id: 'vohipeno',
      name: "Cabas Rayé 'Vohipeno Souvenir'",
      basePrice: 65000,
      hours: 26,
      previewBg: 'from-[#ec4899] via-[#f59e0b] to-[#1e3a8a]',
      image: '/assets/aistudio/ChatGPT_Image_1_mars_2026__13_14_34_2e085191.png',
      desc: 'Idéal pour intégrer votre nom ou ville préférée au cœur du tissage rayé.'
    },
    {
      id: 'sud-est',
      name: "Grand Cabas 'Sud-Est Prestige'",
      basePrice: 75000,
      hours: 28,
      previewBg: 'from-[#be185d] via-[#1e3a8a] to-[#eab308]',
      image: '/assets/aistudio/image_62cd8364_c5ac4cb8.png',
      desc: 'Motifs en losanges royaux avec bordure dentelée caractéristique.'
    },
    {
      id: 'harona',
      name: "Panier Marché 'Harona Tsotra'",
      basePrice: 40000,
      hours: 18,
      previewBg: 'from-[#dc2626] via-[#1e3a8a] to-[#d97706]',
      image: '/assets/aistudio/Harona_tsotra_56c229cc.png',
      desc: 'Le panier traditionnel du quotidien revisité avec finitions soignées.'
    },
    {
      id: 'pochette',
      name: "Pochette de Soirée 'Misautri'",
      basePrice: 25000,
      hours: 14,
      previewBg: 'from-[#581c87] via-[#9d174d] to-[#f472b6]',
      image: '/assets/aistudio/1791364287803_e9ab859d.jpg',
      desc: 'Format compact et zippé pour vos sorties et célébrations.'
    }
  ];

  // Palettes
  const palettes = [
    {
      id: 'sud-est',
      name: 'Sud-Est Éclatant',
      subtitle: 'Magenta impérial, Bleu saphir & Jaune solaire',
      colors: ['#e11d48', '#1e3a8a', '#eab308', '#fef3c7'],
      textColor: '#ffffff',
      priceModifier: 0
    },
    {
      id: 'ocre',
      name: 'Ocre & Terre Cuite',
      subtitle: 'Terre rouge de Madagascar & Raphia doré',
      colors: ['#8b4513', '#c19a6b', '#5c3919', '#fef8f4'],
      textColor: '#fef8f4',
      priceModifier: 5000
    },
    {
      id: 'soleil',
      name: 'Soleil & Émeraude',
      subtitle: 'Jaune curcuma, Vert forêt & Noir ébène',
      colors: ['#eab308', '#065f46', '#18181b', '#fef08a'],
      textColor: '#18181b',
      priceModifier: 5000
    },
    {
      id: 'naturel',
      name: 'Sable d\'Écru Minimaliste',
      subtitle: 'Jonc non teinté & Lin brut naturel',
      colors: ['#e5e0d8', '#c9baa9', '#78582f', '#ffffff'],
      textColor: '#2c1b10',
      priceModifier: 0
    }
  ];

  // Handles
  const handles = [
    {
      id: 'braided',
      name: 'Doubles anses tressées rondes',
      price: 0,
      desc: 'Tressage traditionnel en raphia renforcé'
    },
    {
      id: 'shoulder',
      name: 'Bandoulière longue portée épaule',
      price: 5000,
      desc: 'Confort maximal pour les déplacements'
    },
    {
      id: 'leather',
      name: 'Anses cuir de zébu surpiqué',
      price: 10000,
      desc: 'Maroquinerie sellier cousue main'
    }
  ];

  // Calculate totals
  const currentModel = models.find(m => m.id === model)!;
  const currentPalette = palettes.find(p => p.id === palette)!;
  const currentHandle = handles.find(h => h.id === handleType)!;

  const totalMGA = 
    currentModel.basePrice + 
    currentPalette.priceModifier + 
    currentHandle.price + 
    (hasPompon ? 5000 : 0) + 
    (hasWoodButton ? 5000 : 0);

  const totalEUR = Math.round(totalMGA / 4600);
  const estimatedHours = currentModel.hours + (hasPompon ? 2 : 0) + (handleType === 'leather' ? 3 : 0);

  const handleOrder = () => {
    const config: CustomBagConfig = {
      model,
      modelName: currentModel.name,
      palette,
      paletteName: currentPalette.name,
      wovenText: wovenText.trim() ? wovenText.trim().toUpperCase() : 'GASIK\'ARTS',
      handleType,
      handleName: currentHandle.name,
      hasPompon,
      hasWoodButton,
      estimatedHours,
      totalMGA,
      totalEUR
    };

    onAddCustomToCart(config);

    // Fire celebration confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // ignore
    }

    setCelebrated(true);
    setTimeout(() => setCelebrated(false), 3000);
  };

  const cleanText = wovenText.trim().toUpperCase() || 'GASIK\'ARTS';

  return (
    <section id="customizer-section" className="py-16 bg-[#f8f2ee] border-b border-[#dac2b6]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ede7e3] border border-[#dac2b6]/80 text-[#8b4513] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#10b981]" />
            Atelier Sur-Mesure Gasik'arts
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2c1b10] tracking-tight">
            Composez Votre Sac Unique
          </h2>
          <p className="text-[#54433a] text-sm sm:text-base mt-3">
            Choisissez votre modèle, vos couleurs, vos finitions et faites inscrire le mot, nom ou symbole de votre choix directement tissé par nos maîtresses artisanes.
          </p>
        </div>

        {/* Customizer Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Visual Preview Canvas */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-[#dac2b6]/60">
              
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#dac2b6]/40">
                <span className="text-xs font-bold uppercase tracking-wider text-[#78582f]">
                  Aperçu de votre création
                </span>
                <span className="text-xs font-medium text-[#877369] flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#8b4513]" />
                  ~{estimatedHours}h de tressage main
                </span>
              </div>

              {/* Dynamic Bag Canvas */}
              <div className="relative aspect-square rounded-xl overflow-hidden bg-[#f3ede9] flex items-center justify-center p-4 group">
                
                {/* Background image base from real product */}
                <img
                  src={currentModel.image}
                  alt={currentModel.name}
                  className="w-full h-full object-contain filter drop-shadow-lg transition-transform duration-500"
                />

                {/* Dynamic Woven Inscription Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-8">
                  <div className="bg-[#2c1b10]/85 backdrop-blur-xs px-4 py-2 rounded-lg border-2 border-dashed border-[#fed39f] shadow-2xl transform -rotate-2">
                    <div className="text-[10px] font-bold tracking-[0.2em] text-[#fed39f] uppercase text-center">
                      Inscription Tissée
                    </div>
                    <div className="font-mono text-lg sm:text-xl font-black text-white tracking-[0.18em] text-center drop-shadow-md">
                      {cleanText}
                    </div>
                  </div>
                </div>

                {/* Badges on preview */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#8b4513] text-white rounded-md shadow-xs">
                    {currentPalette.name}
                  </span>
                  {hasPompon && (
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-[#2c1b10] text-[#fed39f] rounded-md">
                      + Pompon Raphia
                    </span>
                  )}
                  {hasWoodButton && (
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-[#78582f] text-white rounded-md">
                      + Bouton Palissandre
                    </span>
                  )}
                </div>

                {/* Live handle tag */}
                <div className="absolute bottom-3 right-3 text-[10px] font-semibold bg-white/95 px-2.5 py-1 rounded-md shadow-xs text-[#2c1b10] border border-[#dac2b6]/60">
                  {currentHandle.name}
                </div>
              </div>

              {/* Price & Summary Box */}
              <div className="mt-6 pt-4 border-t border-[#dac2b6]/50">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-xs text-[#877369] block">Estimation de confection :</span>
                    <span className="font-serif text-2xl font-bold text-[#6c2f00]">
                      {formatPrice(totalMGA, currency)}
                    </span>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-[#10b981] font-semibold block">Prêt sous 5 à 7 jours</span>
                    <span className="text-[11px] text-[#877369]">Certificat d'artisanat inclus</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleOrder}
                    className="w-full py-3 px-4 rounded-lg bg-[#8b4513] text-white font-bold text-xs hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{celebrated ? 'Ajouté au panier !' : 'Ajouter au Panier'}</span>
                  </button>

                  <a
                    href={`https://wa.me/261380545766?text=${encodeURIComponent(`Bonjour Gasik'arts, je souhaite commander un sac sur-mesure :\n- Modèle: ${currentModel.name}\n- Couleurs: ${currentPalette.name}\n- Texte tissé: "${cleanText}"\n- Anses: ${currentHandle.name}\n- Pompon: ${hasPompon ? 'Oui' : 'Non'}\n- Bouton: ${hasWoodButton ? 'Oui' : 'Non'}\n- Prix estimé: ${totalMGA} Ar.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-lg bg-[#10b981] text-white font-bold text-xs hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-md text-center"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Commander via WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Configuration Form */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Model Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dac2b6]/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#8b4513] text-white text-xs font-bold flex items-center justify-center">
                  1
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                  Choisissez la Forme & Silhouette
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {models.map((m) => {
                  const isSelected = model === m.id;
                  return (
                    <button
                      key={m.id}
                      onClick={() => setModel(m.id as any)}
                      className={`text-left p-3.5 rounded-xl border-2 transition-all flex items-start gap-3 cursor-pointer ${
                        isSelected 
                          ? 'border-[#8b4513] bg-[#f8f2ee] shadow-sm' 
                          : 'border-[#dac2b6]/60 hover:border-[#8b4513]/50 bg-white'
                      }`}
                    >
                      <div className="w-14 h-14 rounded-lg overflow-hidden shrink-0 bg-[#f3ede9] border border-[#dac2b6]">
                        <img src={m.image} alt={m.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div className="text-xs font-bold text-[#2c1b10]">{m.name}</div>
                          {isSelected && <Check className="w-4 h-4 text-[#8b4513]" />}
                        </div>
                        <div className="text-[11px] text-[#54433a] mt-0.5 line-clamp-1">{m.desc}</div>
                        <div className="text-xs font-bold text-[#8b4513] mt-1">
                          Dès {formatPrice(m.basePrice, currency)}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Color Palette */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dac2b6]/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#8b4513] text-white text-xs font-bold flex items-center justify-center">
                  2
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                  Harmonie de Couleurs & Fibres
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {palettes.map((p) => {
                  const isSelected = palette === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setPalette(p.id as any)}
                      className={`text-left p-3.5 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#8b4513] bg-[#f8f2ee] shadow-sm' 
                          : 'border-[#dac2b6]/60 hover:border-[#8b4513]/50 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-[#2c1b10]">{p.name}</span>
                        {isSelected && <Check className="w-4 h-4 text-[#8b4513]" />}
                      </div>

                      <div className="flex items-center gap-1.5 mb-2">
                        {p.colors.map((c, i) => (
                          <span
                            key={i}
                            className="w-5 h-5 rounded-full border border-black/10 shadow-2xs"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>

                      <div className="text-[11px] text-[#54433a]">{p.subtitle}</div>
                      {p.priceModifier > 0 && (
                        <div className="text-[11px] font-semibold text-[#8b4513] mt-1">
                          +{formatPrice(p.priceModifier, currency)}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Custom Woven Lettering */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dac2b6]/60">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 rounded-full bg-[#8b4513] text-white text-xs font-bold flex items-center justify-center">
                  3
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                  Texte ou Nom Tissé Personnalisé
                </h3>
              </div>
              <p className="text-xs text-[#54433a] mb-4">
                Entrez un prénom, nom de ville, message ou initiales (12 caractères max). Nos tisseuses intègrent chaque lettre maille par maille.
              </p>

              <div className="relative">
                <Type className="w-4 h-4 text-[#877369] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  maxLength={12}
                  value={wovenText}
                  onChange={(e) => setWovenText(e.target.value)}
                  placeholder="Ex: VOHIPENO, SARAH, MADAGASCAR..."
                  className="w-full pl-10 pr-24 py-3 rounded-lg border border-[#dac2b6] font-mono text-sm uppercase tracking-widest text-[#2c1b10] focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513] bg-[#fef8f4]"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#877369]">
                  {wovenText.length}/12
                </span>
              </div>

              {/* Suggestions */}
              <div className="flex flex-wrap items-center gap-1.5 mt-3">
                <span className="text-[11px] text-[#877369]">Exemples populaires :</span>
                {['VOHIPENO', 'GASIK\'ARTS', 'MADAGASCAR', 'SOUVENIR', 'AMOUR', 'MAMA'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setWovenText(tag)}
                    className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-[#f3ede9] hover:bg-[#ede7e3] text-[#54433a] cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Handles & Accessories */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#dac2b6]/60">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-[#8b4513] text-white text-xs font-bold flex items-center justify-center">
                  4
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2c1b10]">
                  Anses & Finitions d'Apparat
                </h3>
              </div>

              {/* Handle options */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
                {handles.map((h) => {
                  const isSelected = handleType === h.id;
                  return (
                    <button
                      key={h.id}
                      onClick={() => setHandleType(h.id as any)}
                      className={`text-left p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#8b4513] bg-[#f8f2ee]' 
                          : 'border-[#dac2b6]/60 bg-white hover:border-[#8b4513]/40'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#2c1b10]">{h.name}</div>
                      <div className="text-[11px] text-[#54433a] mt-0.5">{h.desc}</div>
                      <div className="text-xs font-bold text-[#8b4513] mt-2">
                        {h.price === 0 ? 'Inclus' : `+${formatPrice(h.price, currency)}`}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Addons toggles */}
              <div className="pt-4 border-t border-[#dac2b6]/40 flex flex-col sm:flex-row gap-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasPompon}
                    onChange={(e) => setHasPompon(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8b4513] accent-[#8b4513]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2c1b10]">
                      Pompon soyeux bicolore fait main (+{formatPrice(5000, currency)})
                    </div>
                    <div className="text-[11px] text-[#877369]">
                      En fibres de raphia peignées
                    </div>
                  </div>
                </label>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={hasWoodButton}
                    onChange={(e) => setHasWoodButton(e.target.checked)}
                    className="w-4 h-4 rounded text-[#8b4513] accent-[#8b4513]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2c1b10]">
                      Bouton fermoir en palissandre (+{formatPrice(5000, currency)})
                    </div>
                    <div className="text-[11px] text-[#877369]">
                      Bois noble sculpté à la gouge
                    </div>
                  </div>
                </label>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
