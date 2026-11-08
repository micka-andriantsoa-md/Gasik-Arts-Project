import React from 'react';
import { 
  Sparkles, 
  MapPin, 
  Award, 
  Leaf, 
  HeartHandshake, 
  SunMedium, 
  Scissors, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { ARTISAN_STORIES } from '../data/products';

export const AtelierStory: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Récolte Durable en Pirogue',
      fiber: 'Jonc Mahampy Sauvage',
      desc: 'Récolté à maturité dans les zones humides préservées du Canal des Pangalanes et de la côte Sud-Est. Les racines restent intactes pour garantir une repousse naturelle.',
      badge: 'Éco-Responsable'
    },
    {
      num: '02',
      title: 'Séchage Tropical & Battage',
      fiber: 'Soleil de Madagascar',
      desc: 'Les tiges sont triées brin par brin, étalées sur des nattes traditionnelles sous le soleil équatorial, puis battues délicatement au maillet de bois pour libérer leur souplesse soyeuse.',
      badge: '100% Naturel'
    },
    {
      num: '03',
      title: 'Teintures Minérales & Végétales',
      fiber: 'Pigments Organiques',
      desc: 'Les brins sont plongés dans des décoctions d\'écorces forestières, de curcuma frais et de garance. Zéro solvant chimique, des couleurs chaudes qui résistent au temps.',
      badge: 'Sans Chimie'
    },
    {
      num: '04',
      title: 'Tressage Jacquard Ancestral',
      fiber: 'Savoir-Faire Vohipeno',
      desc: 'Les artisanes entrecroisent les fils sans aucun métier mécanique. Losanges géométriques, chevrons traditionnels et lettrages personnalisés prennent forme point après point.',
      badge: '18 à 28h par sac'
    },
    {
      num: '05',
      title: 'Maroquinerie & Contrôle Qualité',
      fiber: 'Cuir & Finitions Nobles',
      desc: 'Pose des anses sellier en cuir de zébu tanné végétal ou tresses de raphia doublées, boutons en palissandre sculpté, et apposition du sceau d\'authenticité Gasik\'arts.',
      badge: 'Finition Haute Couture'
    }
  ];

  return (
    <section id="atelier-section" className="py-16 sm:py-24 bg-[#fef8f4] border-b border-[#dac2b6]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f3ede9] border border-[#dac2b6] text-xs font-semibold uppercase tracking-wider text-[#8b4513] mb-3">
            <Award className="w-3.5 h-3.5 text-[#10b981]" />
            L'Atelier & Le Savoir-Faire
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#2c1b10] tracking-tight leading-tight">
            L'Héritage Millénaire des Tisserandes du Sud-Est
          </h2>
          <p className="text-[#54433a] text-base sm:text-lg mt-4 leading-relaxed">
            Chez <strong>Gasik'arts</strong>, chaque panier raconte l'histoire d'un terroir singulier, celui des rives du Matitanana et des plateaux de Vohipeno. Nous refusons la cadence industrielle pour célébrer la beauté du geste lent et de la matière vivante.
          </p>
        </div>

        {/* 5-Step Craft Journey Grid */}
        <div className="mb-20">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#78582f] mb-6 flex items-center gap-2">
            <span>Le Cycle de Création d'une Pièce Gasik'arts</span>
            <div className="h-px bg-[#dac2b6] flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((st) => (
              <div 
                key={st.num}
                className="bg-white rounded-2xl p-6 border border-[#dac2b6]/60 shadow-xs hover:shadow-md transition-shadow relative flex flex-col justify-between"
              >
                <div>
                  <div className="font-serif text-3xl font-black text-[#8b4513]/25 mb-2">
                    {st.num}
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#2c1b10] mb-1">
                    {st.title}
                  </h3>
                  <div className="text-[11px] font-semibold text-[#8b4513] mb-3">
                    {st.fiber}
                  </div>
                  <p className="text-xs text-[#54433a] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#dac2b6]/40">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#f8f2ee] text-[#78582f] rounded-md">
                    {st.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Artisan Portrait & Community Impact */}
        <div className="bg-[#f8f2ee] rounded-3xl p-8 sm:p-12 border border-[#dac2b6]/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Visual Mosaic of Workshop Realities */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/5 border-2 border-white">
                <img
                  src="/assets/aistudio/20260524_105716_807fd75b.jpg"
                  alt="Créations Gasik'arts côte à côte"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-4/5 border-2 border-white mt-6">
                <img
                  src="/assets/aistudio/Stock_01bb8ac6.jpg"
                  alt="Stock de l'atelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Narrative & Impact Metrics */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-xs font-semibold uppercase tracking-wider text-[#8b4513] mb-4 border border-[#dac2b6]/60">
                <HeartHandshake className="w-3.5 h-3.5 text-[#10b981]" />
                Autonomisation Féminine & Rémunération Juste
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2c1b10] mb-4">
                « Quand vous portez un panier Gasik'arts, vous soutenez directement 45 familles de tisseuses. »
              </h3>

              <p className="text-sm sm:text-base text-[#54433a] leading-relaxed mb-6">
                À Madagascar, la vannerie est souvent cantonnée à un artisanat de subsistance sous-payé par les intermédiaires. Gasik'arts a établi un modèle de commerce direct et transparent : nos artisanes perçoivent une rémunération 2,5 fois supérieure aux moyennes régionales, bénéficient de préfinancements de récolte et travaillent dans des conditions dignes.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-[#dac2b6]/60">
                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#8b4513]">
                    45+
                  </div>
                  <div className="text-xs text-[#54433a] mt-0.5">
                    Artisanes rémunérées au prix juste
                  </div>
                </div>

                <div>
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#8b4513]">
                    100%
                  </div>
                  <div className="text-xs text-[#54433a] mt-0.5">
                    Fibres végétales biodégradables
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <div className="font-serif text-2xl sm:text-3xl font-bold text-[#8b4513]">
                    0 Plastique
                  </div>
                  <div className="text-xs text-[#54433a] mt-0.5">
                    Emballages éco-conçus en fibres
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
