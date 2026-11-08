import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Heart, 
  Eye, 
  Clock, 
  MapPin, 
  Sparkles, 
  MessageCircle,
  SlidersHorizontal,
  Check
} from 'lucide-react';
import { Product, PRODUCTS } from '../data/products';
import { Currency } from '../types';
import { formatPrice } from '../utils/formatters';

interface ProductCatalogProps {
  currency: Currency;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currency,
  onAddToCart,
  onQuickView,
  wishlist,
  onToggleWishlist
}) => {
  const [selectedCollection, setSelectedCollection] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'craft-hours'>('featured');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const collections = [
    { id: 'all', label: 'Toutes les Créations' },
    { id: 'sud-est', label: 'Collection Sud-Est Prestige' },
    { id: 'vohipeno', label: 'Vohipeno Souvenir' },
    { id: 'harona', label: 'Harona Tsotra & Paniers' },
    { id: 'maroquinerie', label: 'Ligne Cuir & Palissandre' }
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Collection filter
      if (selectedCollection !== 'all' && product.collection !== selectedCollection) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'all') {
        if (!product.material.toLowerCase().includes(selectedMaterial.toLowerCase())) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesMalagasy = product.malagasyName.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesOrigin = product.origin.toLowerCase().includes(query);
        return matchesName || matchesMalagasy || matchesDesc || matchesOrigin;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.priceMGA - b.priceMGA;
      if (sortBy === 'price-desc') return b.priceMGA - a.priceMGA;
      if (sortBy === 'craft-hours') return b.craftHours - a.craftHours;
      return 0; // default featured
    });
  }, [selectedCollection, selectedMaterial, searchQuery, sortBy]);

  return (
    <section id="boutique-section" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-[#dac2b6]/40">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8b4513]">
              Boutique & Vannerie d'Art
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2c1b10] tracking-tight">
            Les Créations Signées Gasik'arts
          </h2>
          <p className="text-[#54433a] text-sm sm:text-base mt-2 max-w-xl">
            Des paniers et cabas uniques, tressés brin par brin selon les traditions séculaires du Sud-Est de Madagascar.
          </p>
        </div>

        {/* Search & Sort Controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#877369] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un modèle, motif..."
              className="w-full pl-9 pr-3 py-2 text-xs rounded-lg border border-[#dac2b6] bg-white text-[#2c1b10] placeholder-[#877369] focus:outline-none focus:border-[#8b4513] focus:ring-1 focus:ring-[#8b4513]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-[#877369] hover:text-[#2c1b10]"
              >
                &times;
              </button>
            )}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-1.5 bg-white border border-[#dac2b6] rounded-lg px-2.5 py-1.5">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#877369]" />
            <select
              value={sortBy}
              onChange={(e: any) => setSortBy(e.target.value)}
              className="text-xs text-[#54433a] font-medium bg-transparent border-none focus:outline-none cursor-pointer"
            >
              <option value="featured">Tri : En vedette</option>
              <option value="price-asc">Prix : Croissant</option>
              <option value="price-desc">Prix : Décroissant</option>
              <option value="craft-hours">Heures de tissage (+)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Collection Filter Buttons */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {collections.map((tab) => {
          const isSelected = selectedCollection === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCollection(tab.id)}
              className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                isSelected
                  ? 'bg-[#5c3919] text-[#fef8f4] shadow-sm'
                  : 'bg-[#f3ede9] text-[#54433a] hover:bg-[#ede7e3] border border-transparent hover:border-[#dac2b6]'
              }`}
            >
              {tab.label}
            </button>
          );
        })}

        {/* Quick material filter toggle */}
        <div className="ml-auto hidden md:flex items-center gap-2 pl-4 border-l border-[#dac2b6]">
          <span className="text-xs text-[#877369] font-medium">Matière :</span>
          <button
            onClick={() => setSelectedMaterial(selectedMaterial === 'Mahampy' ? 'all' : 'Mahampy')}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              selectedMaterial === 'Mahampy' ? 'bg-[#8b4513] text-white font-bold' : 'text-[#54433a] hover:bg-[#ede7e3]'
            }`}
          >
            Mahampy
          </button>
          <button
            onClick={() => setSelectedMaterial(selectedMaterial === 'Raphia' ? 'all' : 'Raphia')}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              selectedMaterial === 'Raphia' ? 'bg-[#8b4513] text-white font-bold' : 'text-[#54433a] hover:bg-[#ede7e3]'
            }`}
          >
            Raphia
          </button>
          <button
            onClick={() => setSelectedMaterial(selectedMaterial === 'Cuir' ? 'all' : 'Cuir')}
            className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
              selectedMaterial === 'Cuir' ? 'bg-[#8b4513] text-white font-bold' : 'text-[#54433a] hover:bg-[#ede7e3]'
            }`}
          >
            Cuir
          </button>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-[#dac2b6]">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#f8f2ee] flex items-center justify-center text-[#8b4513] mb-3">
            <Search className="w-6 h-6" />
          </div>
          <p className="font-serif text-lg font-bold text-[#2c1b10]">Aucun modèle ne correspond à votre recherche</p>
          <p className="text-sm text-[#54433a] mt-1">Essayez d'ajuster les filtres ou de réinitialiser la recherche.</p>
          <button
            onClick={() => { setSelectedCollection('all'); setSelectedMaterial('all'); setSearchQuery(''); }}
            className="mt-4 px-4 py-2 bg-[#8b4513] text-white text-xs font-semibold rounded-lg"
          >
            Réinitialiser les filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            const isWishlisted = wishlist.includes(product.id);
            return (
              <div
                key={product.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#dac2b6]/50 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-square overflow-hidden bg-[#f3ede9]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                    {product.badge && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 bg-[#8b4513] text-white rounded-md shadow-xs">
                        {product.badge}
                      </span>
                    )}
                    <span className="text-[10px] font-medium px-2 py-0.5 bg-black/60 backdrop-blur-xs text-white rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#fed39f]" />
                      {product.craftHours}h de tissage
                    </span>
                  </div>

                  {/* Wishlist Heart */}
                  <button
                    onClick={() => onToggleWishlist(product.id)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#54433a] hover:text-[#ba1a1a] shadow-sm transition-transform active:scale-90"
                    title={isWishlisted ? "Retirer des favoris" : "Ajouter aux favoris"}
                  >
                    <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#ba1a1a] text-[#ba1a1a]' : ''}`} />
                  </button>

                  {/* Quick Action Overlay on hover */}
                  <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2">
                    <button
                      onClick={() => onQuickView(product)}
                      className="flex-1 py-2 px-3 rounded-lg bg-white/95 backdrop-blur-xs text-[#2c1b10] text-xs font-bold hover:bg-white transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Aperçu rapide</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Origin & Malagasy name */}
                    <div className="flex items-center justify-between text-[11px] text-[#78582f] mb-1 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#8b4513]" />
                        {product.origin.split(',')[0]}
                      </span>
                      <span className="italic text-[#877369] truncate max-w-[130px]">
                        {product.malagasyName}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 
                      onClick={() => onQuickView(product)}
                      className="font-serif text-base sm:text-lg font-bold text-[#2c1b10] hover:text-[#8b4513] transition-colors cursor-pointer line-clamp-1 mb-1.5"
                    >
                      {product.name}
                    </h3>

                    {/* Short Tagline */}
                    <p className="text-xs text-[#54433a] line-clamp-2 mb-3">
                      {product.tagline}
                    </p>

                    {/* Colors & Dimensions */}
                    <div className="flex items-center justify-between text-[11px] text-[#877369] pb-3 mb-3 border-b border-[#dac2b6]/30">
                      <span>Dim : {product.dimensions.width} &times; {product.dimensions.height} cm</span>
                      <span className="text-[#10b981] font-semibold">En stock</span>
                    </div>
                  </div>

                  {/* Price & Add to Cart button */}
                  <div>
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <div className="text-[10px] uppercase font-semibold text-[#877369]">Prix</div>
                        <div className="text-lg font-bold text-[#6c2f00] font-serif">
                          {formatPrice(product.priceMGA, currency)}
                        </div>
                      </div>

                      {currency !== 'MGA' && (
                        <div className="text-[11px] text-[#877369]">
                          ({new Intl.NumberFormat('fr-MG').format(product.priceMGA)} Ar)
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => onAddToCart(product)}
                        className="w-full py-2 px-3 rounded-lg bg-[#8b4513] text-[#fef8f4] text-xs font-semibold hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Ajouter</span>
                      </button>

                      <a
                        href={`https://wa.me/261387760947?text=Bonjour%20Gasik'arts,%20je%20souhaite%20commander%20immédiatement%20le%20modèle%20:%20${encodeURIComponent(product.name)}%20(${product.priceMGA}%20Ar).`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-2 rounded-lg bg-[#f3ede9] text-[#2c1b10] hover:bg-[#ede7e3] text-xs font-semibold transition-colors flex items-center justify-center gap-1 border border-[#dac2b6]"
                        title="Commander par WhatsApp direct"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-[#10b981]" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Stock & Atelier Workshop note */}
      <div className="mt-14 p-6 bg-[#f8f2ee] rounded-2xl border border-[#dac2b6]/60 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#dac2b6]">
            <img src="/assets/aistudio/Stock_01bb8ac6.jpg" alt="Stock d'atelier" className="w-full h-full object-cover" />
          </div>
          <div>
            <h4 className="font-serif font-bold text-base text-[#2c1b10]">
              Besoin de quantités importantes ou d'une commande personnalisée ?
            </h4>
            <p className="text-xs text-[#54433a] mt-0.5">
              Notre stock d'atelier approvisionne les mariages, événements, hôtels de luxe et boutiques internationales.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+261387760947"
            className="px-4 py-2.5 rounded-lg bg-[#2c1b10] text-[#fef8f4] text-xs font-bold hover:bg-black transition-colors"
          >
            Appeler l'Atelier
          </a>
          <a
            href="#grossiste-section"
            className="px-4 py-2.5 rounded-lg border border-[#8b4513] text-[#8b4513] text-xs font-bold hover:bg-[#8b4513] hover:text-white transition-colors"
          >
            Tarifs B2B & Export
          </a>
        </div>
      </div>

    </section>
  );
};
