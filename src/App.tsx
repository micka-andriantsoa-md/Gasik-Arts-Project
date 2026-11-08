/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CampaignBanner } from './components/CampaignBanner';
import { ProductCatalog } from './components/ProductCatalog';
import { BagCustomizer } from './components/BagCustomizer';
import { AtelierStory } from './components/AtelierStory';
import { WholesaleSection } from './components/WholesaleSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistModal } from './components/WishlistModal';
import { FloatingHotline } from './components/FloatingHotline';
import { Footer } from './components/Footer';
import { Product, PRODUCTS, BRAND_HOTLINES } from './data/products';
import { CartItem, Currency, CustomBagConfig } from './types';
import { 
  Sparkles, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Phone,
  Flame
} from 'lucide-react';
import { formatPrice } from './utils/formatters';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('accueil');
  const [currency, setCurrency] = useState<Currency>('MGA');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('gasikarts_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gasikarts_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync to local storage
  useEffect(() => {
    try {
      localStorage.setItem('gasikarts_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('gasikarts_wishlist', JSON.stringify(wishlist));
    } catch {
      // ignore
    }
  }, [wishlist]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // Add standard product to cart
  const handleAddToCart = (product: Product, quantity = 1, selectedColor?: string) => {
    setCart((prev) => {
      const colorKey = selectedColor || product.colors[0] || '';
      const existingIdx = prev.findIndex(
        (it) => it.product?.id === product.id && it.selectedColor === colorKey
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      }

      const newItem: CartItem = {
        id: `${product.id}-${Date.now()}`,
        product,
        title: product.name,
        priceMGA: product.priceMGA,
        priceEUR: product.priceEUR,
        quantity,
        image: product.image,
        selectedColor: colorKey
      };
      return [...prev, newItem];
    });

    showToast(`« ${product.name} » ajouté au panier !`);
  };

  // Add custom bag to cart
  const handleAddCustomToCart = (config: CustomBagConfig) => {
    const newItem: CartItem = {
      id: `custom-${Date.now()}`,
      customDetails: config,
      title: `Sac Personnalisé : "${config.wovenText}" (${config.modelName})`,
      priceMGA: config.totalMGA,
      priceEUR: config.totalEUR,
      quantity: 1,
      image: config.model === 'sud-est' 
        ? '/assets/aistudio/image_62cd8364_c5ac4cb8.png'
        : config.model === 'harona'
        ? '/assets/aistudio/Harona_tsotra_56c229cc.png'
        : config.model === 'pochette'
        ? '/assets/aistudio/1791364287803_e9ab859d.jpg'
        : '/assets/aistudio/ChatGPT_Image_1_mars_2026__13_14_34_2e085191.png',
      selectedColor: config.paletteName
    };

    setCart((prev) => [...prev, newItem]);
    showToast(`Votre création sur-mesure "${config.wovenText}" a été ajoutée !`);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, qty: number) => {
    if (qty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) => prev.map((it) => (it.id === id ? { ...it, quantity: qty } : it)));
  };

  const handleRemoveItem = (id: string) => {
    setCart((prev) => prev.filter((it) => it.id !== id));
    showToast('Article retiré du panier');
  };

  const handleToggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast('Retiré de vos favoris');
        return prev.filter((id) => id !== productId);
      } else {
        showToast('Ajouté à vos favoris !');
        return [...prev, productId];
      }
    });
  };

  const handleOrderCompleted = () => {
    setCart([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fef8f4] text-[#1d1b19] font-sans">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#2c1b10] text-white px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 border border-[#fed39f]/40 animate-in fade-in slide-in-from-top-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-[#10b981]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={cart.reduce((acc, it) => acc + it.quantity, 0)}
        openCart={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        openWishlist={() => setIsWishlistOpen(true)}
      />

      {/* Screen Routing */}
      <main className="flex-1">
        {currentTab === 'accueil' && (
          <div>
            <HeroSection
              onExplore={() => {
                const el = document.getElementById('boutique-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                else setCurrentTab('boutique');
              }}
              onCustomize={() => setCurrentTab('customizer')}
              onCampaign={() => setCurrentTab('campagne')}
            />

            <CampaignBanner
              currency={currency}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setSelectedProduct(p)}
            />

            <ProductCatalog
              currency={currency}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setSelectedProduct(p)}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />

            <BagCustomizer
              currency={currency}
              onAddCustomToCart={handleAddCustomToCart}
            />

            <AtelierStory />

            <WholesaleSection currency={currency} />
          </div>
        )}

        {currentTab === 'boutique' && (
          <div className="py-6">
            <ProductCatalog
              currency={currency}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setSelectedProduct(p)}
              wishlist={wishlist}
              onToggleWishlist={handleToggleWishlist}
            />
          </div>
        )}

        {currentTab === 'customizer' && (
          <div className="py-6">
            <BagCustomizer
              currency={currency}
              onAddCustomToCart={handleAddCustomToCart}
            />
          </div>
        )}

        {currentTab === 'atelier' && (
          <div className="py-6">
            <AtelierStory />
          </div>
        )}

        {currentTab === 'campagne' && (
          <div className="py-8">
            <CampaignBanner
              currency={currency}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setSelectedProduct(p)}
            />
            {/* Extended gallery of campaign images */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h3 className="font-serif text-3xl font-bold text-[#2c1b10]">
                  L'Élégance du Sac Malagasy au Quotidien
                </h3>
                <p className="text-sm text-[#54433a] mt-2">
                  Découvrez nos mises en scène et séries photographiques de nos collections à travers l'île.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { img: '/assets/aistudio/1772083826957_9cee2c1d.jpg', title: 'Cabas Anses Cuir sur les Toits', tag: 'Chic Urbain' },
                  { img: '/assets/aistudio/1791361542195_7273bcf9.jpg', title: 'Losanges Émeraude en Jardin Tropical', tag: 'Nature & Soleil' },
                  { img: '/assets/aistudio/1791361494883_de65a6d0.jpg', title: 'Soleil & Émeraude sur Banc en Bois', tag: 'Sud-Est Authentique' },
                  { img: '/assets/aistudio/image_28a8967c_af334e8b.png', title: 'Monogramme Géométrique Haute Couture', tag: 'Pièce d\'Orfèvrerie' },
                  { img: '/assets/aistudio/1791364287803_e9ab859d.jpg', title: 'Pochette Misautri Soirée & Cérémonie', tag: 'Soirée Chic' },
                  { img: '/assets/aistudio/20260524_105716_807fd75b.jpg', title: 'L\'Harmonie des Modèles Réunis', tag: 'Collection 2026' }
                ].map((item, idx) => (
                  <div key={idx} className="group rounded-2xl overflow-hidden bg-white shadow-md border border-[#dac2b6]/60">
                    <div className="aspect-4/3 overflow-hidden bg-[#f3ede9]">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="p-4 flex items-center justify-between">
                      <div>
                        <div className="font-serif text-sm font-bold text-[#2c1b10]">{item.title}</div>
                        <span className="text-[11px] text-[#78582f] font-semibold">{item.tag}</span>
                      </div>
                      <button
                        onClick={() => setCurrentTab('boutique')}
                        className="text-xs font-bold text-[#8b4513] hover:underline flex items-center gap-1"
                      >
                        Voir boutique <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {currentTab === 'grossiste' && (
          <div className="py-6">
            <WholesaleSection currency={currency} />
          </div>
        )}
      </main>

      {/* Modals & Drawers */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currency={currency}
        onOpenCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        currency={currency}
        onOrderCompleted={handleOrderCompleted}
      />

      <WishlistModal
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        currency={currency}
      />

      {/* Floating Hotline WhatsApp / Phone */}
      <FloatingHotline />

      {/* Main Footer */}
      <Footer onNavClick={(tab) => {
        setCurrentTab(tab);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

    </div>
  );
}
