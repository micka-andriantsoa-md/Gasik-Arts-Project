import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Phone, 
  Menu, 
  X, 
  Sparkles, 
  Palette, 
  Compass, 
  Store,
  ChevronDown
} from 'lucide-react';
import { Currency } from '../types';
import { BRAND_HOTLINES } from '../data/products';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  cartCount: number;
  openCart: () => void;
  wishlistCount: number;
  openWishlist: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  currency,
  setCurrency,
  cartCount,
  openCart,
  wishlistCount,
  openWishlist
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdown, setCurrencyDropdown] = useState(false);

  const navLinks = [
    { id: 'accueil', label: 'Accueil' },
    { id: 'boutique', label: 'Boutique & Modèles' },
    { id: 'customizer', label: 'Atelier Sur-Mesure', icon: Palette, badge: 'Nouveau' },
    { id: 'atelier', label: 'L\'Atelier & Savoir-Faire' },
    { id: 'campagne', label: 'Campagne Élégance' },
    { id: 'grossiste', label: 'Grossistes & Devis' }
  ];

  const handleNavClick = (tabId: string) => {
    setCurrentTab(tabId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#fef8f4]/95 backdrop-blur-md border-b border-[#dac2b6]/40 transition-all">
      {/* Top Banner with phone hotline */}
      <div className="bg-[#2c1b10] text-[#fef8f4] text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#10b981] animate-pulse"></span>
            <span className="font-medium tracking-wide">
              Atelier d'Art Vohipeno & Sud-Est Madagascar
            </span>
            <span className="hidden sm:inline text-[#dac2b6]">|</span>
            <span className="hidden sm:inline text-[#fed39f] font-light">
              Paniers & Cabas 100% Fibres Naturelles
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <div className="flex items-center gap-2 text-[#fed39f]">
              <Phone className="w-3.5 h-3.5 text-[#10b981]" />
              <span className="text-[#dac2b6]">Commandes directes :</span>
              <a 
                href={`tel:${BRAND_HOTLINES[0].raw}`} 
                className="hover:underline font-semibold text-white tracking-wider"
              >
                {BRAND_HOTLINES[0].number}
              </a>
              <span className="text-[#dac2b6]/60">/</span>
              <a 
                href={`tel:${BRAND_HOTLINES[1].raw}`} 
                className="hover:underline font-semibold text-white tracking-wider hidden md:inline"
              >
                {BRAND_HOTLINES[1].number}
              </a>
            </div>

            <span className="text-[#dac2b6] hidden md:inline">|</span>
            <a 
              href="https://wa.me/261387760947?text=Bonjour%20Gasik'arts,%20je%20souhaite%20commander%20un%20panier." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#10b981] hover:text-emerald-300 font-semibold flex items-center gap-1"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Identity */}
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border-2 border-[#8b4513]/20 bg-[#2c1b10] flex items-center justify-center transition-transform group-hover:scale-105">
              <img 
                src="/assets/aistudio/logo_be16e4f3.jpg" 
                alt="Logo Gasik'arts" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight text-[#2c1b10] flex items-center gap-1.5">
                Gasik'arts
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] font-medium text-[#78582f] -mt-0.5">
                Le meilleur pour vous
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                    isActive 
                      ? 'text-[#6c2f00] bg-[#f8f2ee] shadow-xs' 
                      : 'text-[#54433a] hover:text-[#6c2f00] hover:bg-[#f3ede9]'
                  }`}
                >
                  {Icon && <Icon className="w-4 h-4 text-[#8b4513]" />}
                  {link.label}
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-[#8b4513] text-white rounded-full">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#8b4513] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Actions: Currency, Wishlist, Cart */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Currency selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdown(!currencyDropdown)}
                className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-lg border border-[#dac2b6] bg-white text-[#54433a] hover:border-[#8b4513] transition-colors"
                title="Changer de devise"
              >
                <span>{currency === 'MGA' ? 'MGA (Ar)' : currency}</span>
                <ChevronDown className="w-3 h-3 text-[#877369]" />
              </button>

              {currencyDropdown && (
                <div className="absolute right-0 mt-1 w-28 bg-white border border-[#dac2b6] rounded-lg shadow-lg py-1 z-50">
                  <button
                    onClick={() => { setCurrency('MGA'); setCurrencyDropdown(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-[#f8f2ee] ${currency === 'MGA' ? 'text-[#8b4513] font-bold bg-[#f8f2ee]' : 'text-[#54433a]'}`}
                  >
                    Ariary (MGA)
                  </button>
                  <button
                    onClick={() => { setCurrency('EUR'); setCurrencyDropdown(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-[#f8f2ee] ${currency === 'EUR' ? 'text-[#8b4513] font-bold bg-[#f8f2ee]' : 'text-[#54433a]'}`}
                  >
                    Euro (€ EUR)
                  </button>
                  <button
                    onClick={() => { setCurrency('USD'); setCurrencyDropdown(false); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-medium hover:bg-[#f8f2ee] ${currency === 'USD' ? 'text-[#8b4513] font-bold bg-[#f8f2ee]' : 'text-[#54433a]'}`}
                  >
                    Dollar ($ USD)
                  </button>
                </div>
              )}
            </div>

            {/* Wishlist button */}
            <button
              onClick={openWishlist}
              className="relative p-2 rounded-lg text-[#54433a] hover:text-[#6c2f00] hover:bg-[#f8f2ee] transition-colors"
              title="Mes favoris"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#8b4513] text-white text-[11px] font-bold flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#8b4513] text-[#fef8f4] hover:bg-[#6c2f00] transition-colors shadow-sm"
              title="Mon panier"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs font-semibold hidden sm:inline">Panier</span>
              <span className="w-5 h-5 rounded-full bg-[#fed39f] text-[#6c2f00] text-[11px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#54433a] hover:bg-[#f8f2ee]"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#dac2b6]/60 bg-[#fef8f4] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              const Icon = link.icon;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-[#8b4513] text-white' 
                      : 'text-[#54433a] hover:bg-[#f8f2ee]'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {Icon && <Icon className="w-4 h-4" />}
                    {link.label}
                  </span>
                  {link.badge && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#fed39f] text-[#6c2f00] rounded-full">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-[#dac2b6]/40 flex flex-col gap-2">
            <div className="text-xs font-semibold text-[#877369] uppercase tracking-wider">
              Assistance & Commandes téléphoniques
            </div>
            <a 
              href={`tel:${BRAND_HOTLINES[0].raw}`}
              className="text-sm font-bold text-[#6c2f00] flex items-center gap-2 py-1"
            >
              <Phone className="w-4 h-4 text-[#10b981]" />
              {BRAND_HOTLINES[0].number} (Airtel)
            </a>
            <a 
              href={`tel:${BRAND_HOTLINES[1].raw}`}
              className="text-sm font-bold text-[#6c2f00] flex items-center gap-2 py-1"
            >
              <Phone className="w-4 h-4 text-[#10b981]" />
              {BRAND_HOTLINES[1].number} (Orange)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
