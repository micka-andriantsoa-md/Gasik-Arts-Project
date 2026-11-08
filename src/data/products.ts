export interface Product {
  id: string;
  name: string;
  malagasyName: string;
  tagline: string;
  collection: 'sud-est' | 'vohipeno' | 'harona' | 'maroquinerie' | 'accessoires';
  priceMGA: number;
  priceEUR: number;
  rating: number;
  reviewsCount: number;
  image: string;
  gallery: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  material: string;
  technique: string;
  origin: string;
  artisanGroup: string;
  craftHours: number;
  inStock: boolean;
  stockCount: number;
  badge?: string;
  description: string;
  details: string[];
  colors: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'porte-cles-mini-panier',
    name: "Mini Panier Charm 'Tsiroanomandidy' en Raphia",
    malagasyName: "Kitapokely Firavaka 5000",
    tagline: "Accessoire d'entrée de gamme, bijou de sac ou porte-clés tressé main",
    collection: 'accessoires',
    priceMGA: 5000,
    priceEUR: 1.5,
    rating: 4.9,
    reviewsCount: 52,
    image: '/assets/aistudio/1791361603956_e1a7aa46.jpg',
    gallery: [
      '/assets/aistudio/1791361603956_e1a7aa46.jpg',
      '/assets/aistudio/1791364287803_e9ab859d.jpg'
    ],
    dimensions: { width: 8, height: 7, depth: 4 },
    material: "100% Fibres de Raphia naturel et anneau laiton",
    technique: "Micro-tressage minutieux fait main",
    origin: "Atelier Vohipeno, Sud-Est",
    artisanGroup: "Jeunes Apprenties d'Art Gasik'arts",
    craftHours: 2,
    inStock: true,
    stockCount: 45,
    badge: "Prix Doux • 5 000 Ar",
    description: "Une délicate miniature de notre panier traditionnel malgache, à accrocher à vos clés, votre sac ou votre rétroviseur. Entièrement tressé à la main avec les chutes nobles de raphia.",
    details: [
      "Micro-vannerie artisanale 100% fait main",
      "Anneau métallique doré inclus",
      "Fibres végétales teintées naturellement",
      "Parfait petit souvenir de Madagascar ou cadeau"
    ],
    colors: ['Multicolore Vif', 'Naturel Écru', 'Magenta & Or']
  },
  {
    id: 'lot-sous-verres-mahampy',
    name: "Set de 4 Sous-Verres Tressés en Mahampy",
    malagasyName: "Fandrakofana Kaopy Mahampy",
    tagline: "Art de la table naturel aux motifs géométriques du Sud-Est",
    collection: 'accessoires',
    priceMGA: 15000,
    priceEUR: 3.5,
    rating: 4.8,
    reviewsCount: 26,
    image: '/assets/aistudio/1753813398517_acf47cca.jpg',
    gallery: [
      '/assets/aistudio/1753813398517_acf47cca.jpg',
      '/assets/aistudio/1753813401830_5db9cfb5.jpg'
    ],
    dimensions: { width: 12, height: 12, depth: 1 },
    material: "Jonc Mahampy sauvage et bordure fil ciré",
    technique: "Tressage plat en spirale serrée",
    origin: "Manakara / Vohipeno",
    artisanGroup: "Coopérative Ravinala",
    craftHours: 4,
    inStock: true,
    stockCount: 30,
    badge: "Maison & Table",
    description: "Habillez vos tables de fête et réceptions avec ces sous-verres durables en jonc de mahampy résistant à la chaleur et à l'humidité.",
    details: [
      "Lot de 4 pièces coordonnées",
      "Protection thermique naturelle des surfaces",
      "Lavable d'un simple coup de chiffon humide",
      "Finitions soignées aux teintes végétales"
    ],
    colors: ['Écru & Carmin', 'Soleil & Vert', 'Naturel Brut']
  },
  {
    id: 'pochette-pompon-misautri',
    name: "Pochette de Soirée 'Misautri Pompon'",
    malagasyName: "Kitapokely Misautri",
    tagline: "Écrin compact avec fermeture zippée et pompon fait main",
    collection: 'harona',
    priceMGA: 35000,
    priceEUR: 8,
    rating: 4.7,
    reviewsCount: 19,
    image: '/assets/aistudio/1791364287803_e9ab859d.jpg',
    gallery: [
      '/assets/aistudio/1791364287803_e9ab859d.jpg',
      '/assets/aistudio/1791361603956_e1a7aa46.jpg'
    ],
    dimensions: { width: 26, height: 20, depth: 8 },
    material: "Fibres teintes en prune profond & pompon bicolore",
    technique: "Vannerie fine à points serrés avec doublure et zip",
    origin: "Atelier Vohipeno Sud-Est",
    artisanGroup: "Jeunes Apprenties d'Art Gasik'arts",
    craftHours: 14,
    inStock: true,
    stockCount: 16,
    badge: "Bestseller Soirée",
    description: "Une ravissante pochette à main ou sacoche d'épaule ornée d'une frise tissée géométrique et d'un pompon soyeux bicolore. Fermeture éclair discrète pour garder vos indispensables en toute sécurité lors des cérémonies.",
    details: [
      "Fermeture éclair sécurisée sur toute la longueur",
      "Anse fine tressée adaptée au porté main ou avant-bras",
      "Pompon volumineux fait main en fibres soyeuses",
      "Format idéal pour téléphone portable et maquillage"
    ],
    colors: ['Prune & Aubergine', 'Ivoire Naturel']
  },
  {
    id: 'harona-tsotra-tradition',
    name: "Panier Cabas 'Harona Tsotra Tradition'",
    malagasyName: "Harona Tsotra Nentim-paharazana",
    tagline: "L'authenticité pure du panier quotidien malagasy sublimé",
    collection: 'harona',
    priceMGA: 45000,
    priceEUR: 10,
    rating: 4.8,
    reviewsCount: 34,
    image: '/assets/aistudio/Harona_tsotra_56c229cc.png',
    gallery: [
      '/assets/aistudio/Harona_tsotra_56c229cc.png',
      '/assets/aistudio/image_28a8967c_af334e8b.png',
      '/assets/aistudio/1753813401830_5db9cfb5.jpg'
    ],
    dimensions: { width: 36, height: 30, depth: 15 },
    material: "100% Jonc Mahampy sauvage de marais",
    technique: "Tressage traditionnel croisé serré étanche",
    origin: "Manakara / Vohipeno",
    artisanGroup: "Union des Femmes Artisanes du Sud-Est",
    craftHours: 18,
    inStock: true,
    stockCount: 22,
    badge: "Incontournable",
    description: "Le 'Harona Tsotra' est l'âme du panier malagasy. Réinterprété ici dans une version contemporaine aux finitions soignées, avec sa bordure rouge carmin et sa composition asymétrique de losanges bordeaux et bleu saphir sur trame de paille blonde.",
    details: [
      "Quatre points d'ancrage renforcés pour les anses",
      "Légèreté plume et solidité éprouvée pour le marché",
      "Bordure supérieure cousue à la main au fil ciré",
      "Idéal comme panier de ville ou sac cabas d'été"
    ],
    colors: ['Rouge Carmin', 'Bleu Nuit', 'Paille Naturelle']
  },
  {
    id: 'panier-soleil-ambre',
    name: "Panier Marché 'Soleil & Émeraude'",
    malagasyName: "Harona Masoandro sy Ala",
    tagline: "L'énergie éclatante des paysages tropicaux de Madagascar",
    collection: 'harona',
    priceMGA: 55000,
    priceEUR: 12,
    rating: 4.8,
    reviewsCount: 21,
    image: '/assets/aistudio/1791361494883_de65a6d0.jpg',
    gallery: [
      '/assets/aistudio/1791361494883_de65a6d0.jpg',
      '/assets/aistudio/1791361542195_7273bcf9.jpg',
      '/assets/aistudio/Stock_01bb8ac6.jpg'
    ],
    dimensions: { width: 40, height: 33, depth: 18 },
    material: "Jonc de rivière et raphia teinté au curcuma naturel",
    technique: "Tissage en carreaux biseautés et surpiqûres violettes",
    origin: "Vohipeno, Sud-Est",
    artisanGroup: "Coopérative Ravinala",
    craftHours: 20,
    inStock: true,
    stockCount: 14,
    badge: "Chaleur d'Été",
    description: "Inspiré par le soleil levant sur l'Océan Indien et la forêt humide de l'Est malgache, ce panier allie le jaune or et le vert pétrole dans une trame diagonale dynamique.",
    details: [
      "Grande capacité pour pique-niques, courses et plage",
      "Anse tressée souple et confortable au bras",
      "Rigidité naturelle assurée par le jonc de rivière séché",
      "Nettoyage ultra facile d'un simple coup d'éponge humide"
    ],
    colors: ['Jaune Soleil', 'Vert Émeraude / Bleu Pétrole', 'Violet Doux']
  },
  {
    id: 'vohipeno-souvenir-original',
    name: "Grand Panier 'Vohipeno Souvenir'",
    malagasyName: "Harona Fahatsiarovana Vohipeno",
    tagline: "Le cabas rayé patrimonial avec lettrage intégré au tissage",
    collection: 'vohipeno',
    priceMGA: 75000,
    priceEUR: 16.5,
    rating: 5.0,
    reviewsCount: 42,
    image: '/assets/aistudio/ChatGPT_Image_1_mars_2026__13_14_34_2e085191.png',
    gallery: [
      '/assets/aistudio/ChatGPT_Image_1_mars_2026__13_14_34_2e085191.png',
      '/assets/aistudio/20260524_105716_807fd75b.jpg',
      '/assets/aistudio/1791361533939_68c55256.jpg'
    ],
    dimensions: { width: 42, height: 36, depth: 18 },
    material: "Mahampy naturel de berge & fibres de raphia teinté garance",
    technique: "Tissage calligraphique en chevron et trame bicolore",
    origin: "Vohipeno, Région Fitovinany",
    artisanGroup: "Coopérative Artisanale Ravinala",
    craftHours: 28,
    inStock: true,
    stockCount: 15,
    badge: "Coup de Cœur",
    description: "Porteur de l'histoire vivante des tisserandes du Sud-Est, le panier 'Vohipeno Souvenir' affiche fièrement le nom de la cité historique tissé en plein cœur de ses rayures obliques.",
    details: [
      "Inscription VOHIPENO intégrée dans le tissage sans surpiqûre",
      "Rayures marinières bicolores jaune impérial et fuchsia",
      "Large contenance adaptée aux escapades et week-ends",
      "Résistance naturelle aux frottements et à l'humidité"
    ],
    colors: ['Jaune Ambré', 'Magenta Intense', 'Bleu Indigo']
  },
  {
    id: 'cabas-cuir-naturel-ebene',
    name: "Cabas Minimaliste 'Sable d'Écru' Anses Cuir",
    malagasyName: "Harona Hoditra sy Raphia",
    tagline: "Design épuré moderne avec bouton en palissandre sculpté",
    collection: 'maroquinerie',
    priceMGA: 90000,
    priceEUR: 19.5,
    rating: 4.9,
    reviewsCount: 28,
    image: '/assets/aistudio/1772083826957_9cee2c1d.jpg',
    gallery: [
      '/assets/aistudio/1772083826957_9cee2c1d.jpg',
      '/assets/aistudio/Publication_Instagram_Promotion_de_produit_Moderne_Rouge_20260310_052310_0000_daf5550f.png',
      '/assets/aistudio/1752487029816_f8f18ab5.jpg'
    ],
    dimensions: { width: 44, height: 35, depth: 14 },
    material: "Raphia peigné de première coupe & Cuir véritable de zébu tanné végétal",
    technique: "Tressage fin à grain de riz et maroquinerie sellier",
    origin: "Atelier Gasik'arts Antananarivo & Vohipeno",
    artisanGroup: "Atelier Cuir & Fibres Gasik'arts",
    craftHours: 22,
    inStock: true,
    stockCount: 10,
    badge: "Édition Limitée",
    description: "La rencontre entre le raffinement du cuir sellier surpiqué orangé et la pureté d'un tissage en fibres naturelles blondes. Fermé par un bouton taillé dans du bois noble de Madagascar.",
    details: [
      "Anses ergonomiques en cuir de zébu souple surpiqué",
      "Fermoir bouton bois sculpté et ganse raphia",
      "Teinte naturelle non blanchie chimiquement",
      "Élégance bohème chic et silhouette structurée"
    ],
    colors: ['Sable Doré Naturel', 'Cuir Terre Cuite']
  },
  {
    id: 'gasikarts-sud-est-prestige',
    name: "Cabas Sud-Est Prestige 'Élégance'",
    malagasyName: "Harona Tsara Tarehy Sud-Est",
    tagline: "Le chef-d'œuvre emblématique de Gasik'arts en losanges bicolores",
    collection: 'sud-est',
    priceMGA: 95000,
    priceEUR: 21,
    rating: 4.9,
    reviewsCount: 47,
    image: '/assets/aistudio/image_62cd8364_c5ac4cb8.png',
    gallery: [
      '/assets/aistudio/image_62cd8364_c5ac4cb8.png',
      '/assets/aistudio/1791361537944_be86a328.jpg',
      '/assets/aistudio/1791361542195_7273bcf9.jpg',
      '/assets/aistudio/1791361537944_-_Copie_be86a328.jpg'
    ],
    dimensions: { width: 38, height: 32, depth: 16 },
    material: "Fibres de Mahampy sélectionnées & Raphia fin teinté végétal",
    technique: "Tressage jacquard en losanges imbriqués avec bord festonné",
    origin: "Atelier Vohipeno, Sud-Est Madagascar",
    artisanGroup: "Maîtres Tisserandes de la Vallée du Matitanana",
    craftHours: 24,
    inStock: true,
    stockCount: 8,
    badge: "Emblème Maison",
    description: "Ce cabas d'exception incarne l'apogée de la vannerie d'art malgache. Tressé brin par brin à partir de joncs de mahampy séchés au soleil et de raphia naturel teinté, il présente un motif géométrique en damier de losanges magenta, bleu nuit et écru naturel, couronné d'une finition dentelée jaune solaire et de doubles anses torsadées.",
    details: [
      "Fond renforcé rigide pour un maintien impeccable même chargé",
      "Doubles anses tressées rondes haute résistance",
      "Bordure supérieure dentelée signature Gasik'arts",
      "Teintures végétales écologiques sans solvants chimiques"
    ],
    colors: ['Magenta & Bleu Nuit', 'Jaune Solaire', 'Écru Naturel']
  },
  {
    id: 'cabas-monogramme-luxe',
    name: "Cabas d'Apparat 'Monogramme Géométrique'",
    malagasyName: "Harona Kintana sy Marika",
    tagline: "Anses bicolores intégrées et motif central en marqueterie végétale",
    collection: 'sud-est',
    priceMGA: 98000,
    priceEUR: 21.5,
    rating: 5.0,
    reviewsCount: 31,
    image: '/assets/aistudio/image_28a8967c_af334e8b.png',
    gallery: [
      '/assets/aistudio/image_28a8967c_af334e8b.png',
      '/assets/aistudio/image_2a060742_24400b58.png',
      '/assets/aistudio/1791361494883_de65a6d0.jpg'
    ],
    dimensions: { width: 39, height: 34, depth: 17 },
    material: "Mahampy fin teinté fuchsia impérial et noir ébène",
    technique: "Marqueterie végétale tissée et découpe ergonomique",
    origin: "Sud-Est de Madagascar",
    artisanGroup: "Atelier d'Excellence Gasik'arts",
    craftHours: 26,
    inStock: true,
    stockCount: 6,
    badge: "Pièce d'Exception",
    description: "Un chef-d'œuvre de patience et de rigueur géométrique. Le centre du sac présente une structure optique évoquant les totems et symboles traditionnels malgaches, entourée d'une palette vibrante rose bonbon, paille et noir d'encre.",
    details: [
      "Anses torsadées bicolores intégrées dans l'échancrure du cabas",
      "Motif central de prestige tissé avec une précision d'orfèvre",
      "Protection des angles inférieurs",
      "Chaque pièce nécessite plus de trois jours de façonnage"
    ],
    colors: ['Fuchsia & Noir', 'Beige Sable', 'Doré Végétal']
  },
  {
    id: 'lot-decouverte-atelier-100k',
    name: "Coffret Découverte Spécial Atelier Gasik'arts",
    malagasyName: "Andiana Vokatra Santionany 100 000 Ar",
    tagline: "Trio artisanal complet : Grand Panier + Pochette Soirée + Porte-Clés",
    collection: 'vohipeno',
    priceMGA: 100000,
    priceEUR: 22,
    rating: 5.0,
    reviewsCount: 38,
    image: '/assets/aistudio/Stock_01bb8ac6.jpg',
    gallery: [
      '/assets/aistudio/Stock_01bb8ac6.jpg',
      '/assets/aistudio/20260524_105716_807fd75b.jpg',
      '/assets/aistudio/image_62cd8364_c5ac4cb8.png'
    ],
    dimensions: { width: 45, height: 36, depth: 20 },
    material: "Mahampy sauvage, Raphia soyeux & Joncs fins",
    technique: "Assortiment coordonné de nos trois techniques emblématiques",
    origin: "Madagascar (Vohipeno / Antananarivo)",
    artisanGroup: "Collectif des Ateliers Gasik'arts",
    craftHours: 35,
    inStock: true,
    stockCount: 12,
    badge: "Offre Spéciale • 100 000 Ar",
    description: "Le coffret cadeau idéal plafonné à 100 000 Ar : réunit un grand panier cabas traditionnel, une pochette zippée à pompon et un charm porte-clés coordonné.",
    details: [
      "3 pièces artisanales authentiques assorties",
      "Économie immédiate par rapport aux achats séparés",
      "Certificat d'artisanat d'art malgache inclus",
      "Emballage végétal soigné prêt à offrir"
    ],
    colors: ['Assortiment Harmonieux']
  }
];

export const ARTISAN_STORIES = [
  {
    name: "Mama Soa & l'Atelier de Vohipeno",
    role: "Maître Tisserande & Doyenne de la Vannerie",
    village: "Vohipeno, Région Vatovavy-Fitovinany",
    experience: "32 ans de métier",
    quote: "Chaque brin de mahampy porte la voix de nos ancêtres. Tisser n'est pas seulement un travail, c'est dessiner la fierté de notre terre malgache.",
    image: '/assets/aistudio/20260524_105716_807fd75b.jpg',
    description: "Soa dirige une communauté de 28 femmes artisanes à Vohipeno. Grâce à Gasik'arts, leurs créations sont valorisées à leur juste valeur, permettant de scolariser leurs enfants et de préserver un art séculaire menacé par les plastiques industriels."
  },
  {
    name: "La Récolte Éco-Responsable du Mahampy",
    role: "Filière Végétale Durable",
    village: "Marais côtiers du Canal des Pangalanes",
    experience: "100% Biodégradable & Naturel",
    quote: "Nous ne coupons que les tiges parvenues à maturité afin que la plante repousse naturellement à la saison des pluies.",
    image: '/assets/aistudio/Stock_01bb8ac6.jpg',
    description: "Le Mahampy (Lepironia mucronata) pousse à l'état sauvage dans les cours d'eau calmes de la côte Est. Récolté à la main en pirogue, il est ensuite fendu, séché sur des nattes au soleil tropical puis assoupli à la batte de bois."
  }
];

export const BRAND_HOTLINES = [
  { label: 'WhatsApp Principal', number: '038 05 457 66', raw: '+261380545766', operator: 'Orange / WhatsApp' },
  { label: 'Téléphone Secondaire', number: '038 77 609 47', raw: '+261387760947', operator: 'Airtel / Mobile' }
];
