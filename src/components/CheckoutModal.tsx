import React, { useState } from 'react';
import { 
  X, 
  CheckCircle, 
  Truck, 
  CreditCard, 
  Smartphone, 
  MapPin, 
  User, 
  Phone, 
  MessageCircle,
  Copy,
  Check,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CartItem, Currency } from '../types';
import { formatPrice } from '../utils/formatters';
import { BRAND_HOTLINES } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currency: Currency;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  currency,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [shippingZone, setShippingZone] = useState<'tana' | 'provinces' | 'international'>('tana');
  const [paymentMethod, setPaymentMethod] = useState<'mvola' | 'orange' | 'airtel' | 'cash' | 'card'>('mvola');
  const [confirmed, setConfirmed] = useState(false);
  const [orderRef, setOrderRef] = useState('');
  const [copied, setCopied] = useState(false);

  // Shipping costs in MGA
  const shippingCosts = {
    tana: 10000,
    provinces: 20000,
    international: 150000
  };

  const subtotalMGA = items.reduce((acc, it) => acc + (it.priceMGA * it.quantity), 0);
  const shippingMGA = shippingCosts[shippingZone];
  const totalMGA = subtotalMGA + shippingMGA;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRef = `GASIK-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderRef(newRef);
    setConfirmed(true);

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.5 }
      });
    } catch (e) {
      // ignore
    }

    onOrderCompleted();
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-[#fef8f4] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-[#dac2b6] my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="p-5 border-b border-[#dac2b6]/60 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#8b4513]" />
            <h2 className="font-serif text-lg font-bold text-[#2c1b10]">
              {confirmed ? 'Confirmation de votre Commande' : 'Finalisation de la Commande'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#54433a] hover:bg-[#f3ede9]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-9 h-9" />
            </div>

            <div className="inline-block px-3 py-1 bg-[#fed39f]/50 border border-[#8b4513]/30 rounded-full text-xs font-mono font-bold text-[#6c2f00] mb-3">
              Référence : {orderRef}
            </div>

            <h3 className="font-serif text-2xl font-bold text-[#2c1b10] mb-2">
              Misaotra betsaka ! Commande confirmée
            </h3>

            <p className="text-sm text-[#54433a] max-w-md mx-auto mb-6">
              Votre commande pour <strong>{fullName}</strong> a bien été enregistrée par les ateliers Gasik'arts. Notre équipe prépare votre colis avec le plus grand soin.
            </p>

            {/* Summary card */}
            <div className="bg-white rounded-xl p-5 border border-[#dac2b6]/60 text-left max-w-md mx-auto mb-6">
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Téléphone client :</span>
                <span className="font-bold text-[#2c1b10]">{phoneNumber}</span>
              </div>
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Mode de livraison :</span>
                <span className="font-medium text-[#2c1b10]">
                  {shippingZone === 'tana' && 'Livraison Express Antananarivo (24h)'}
                  {shippingZone === 'provinces' && 'Livraison Provinces de Madagascar'}
                  {shippingZone === 'international' && 'Export International DHL'}
                </span>
              </div>
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Règlement :</span>
                <span className="uppercase font-bold text-[#8b4513]">{paymentMethod}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#2c1b10] pt-2 border-t border-[#dac2b6]/40">
                <span>Montant total :</span>
                <span className="font-serif text-lg text-[#6c2f00]">{formatPrice(totalMGA, currency)}</span>
              </div>
            </div>

            {/* Direct WhatsApp follow-up */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`https://wa.me/261380545766?text=${encodeURIComponent(`Bonjour Gasik'arts, je confirme ma commande Réf: ${orderRef} pour ${fullName} (${totalMGA} Ar).`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#10b981] hover:bg-emerald-600 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Suivre ma commande sur WhatsApp</span>
              </a>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#8b4513] text-white font-bold text-xs hover:bg-[#6c2f00] transition-colors"
              >
                Retour à la Boutique
              </button>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            
            {/* Step 1: Customer Contact */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2c1b10] mb-3 flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#8b4513]" />
                Vos Coordonnées de Livraison
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-[11px] font-semibold text-[#54433a] block mb-1">
                    Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Hery Rakoto"
                    className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] bg-white text-[#2c1b10] focus:outline-none focus:border-[#8b4513]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold text-[#54433a] block mb-1">
                    Numéro de Téléphone * (Airtel, Orange, Telma ou intl)
                  </label>
                  <input
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Ex: 038 05 457 66 ou +33 6..."
                    className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] bg-white text-[#2c1b10] focus:outline-none focus:border-[#8b4513]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold text-[#54433a] block mb-1">
                  Adresse de livraison / Quartier / Ville *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Ex: Lot II A Analakely, Antananarivo ou 14 rue de la Paix, Paris"
                  className="w-full p-2.5 text-xs rounded-lg border border-[#dac2b6] bg-white text-[#2c1b10] focus:outline-none focus:border-[#8b4513]"
                />
              </div>
            </div>

            {/* Step 2: Shipping Zone */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2c1b10] mb-3 flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#8b4513]" />
                Zone de Livraison
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { id: 'tana', title: 'Antananarivo (24h)', fee: 10000, desc: 'Livreur à domicile' },
                  { id: 'provinces', title: 'Provinces Mada', fee: 20000, desc: 'Coopératives / Colis' },
                  { id: 'international', title: 'International DHL', fee: 150000, desc: 'Europe, Réunion, USA' }
                ].map((zone) => {
                  const isSelected = shippingZone === zone.id;
                  return (
                    <button
                      type="button"
                      key={zone.id}
                      onClick={() => setShippingZone(zone.id as any)}
                      className={`text-left p-3 rounded-xl border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#8b4513] bg-[#f8f2ee] shadow-2xs' 
                          : 'border-[#dac2b6]/60 bg-white hover:border-[#8b4513]/40'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#2c1b10]">{zone.title}</div>
                      <div className="text-[10px] text-[#877369]">{zone.desc}</div>
                      <div className="text-xs font-bold text-[#8b4513] mt-1.5">
                        +{formatPrice(zone.fee, currency)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Payment Method */}
            <div className="mb-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#2c1b10] mb-3 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-[#8b4513]" />
                Mode de Règlement
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'mvola', label: 'MVola (Telma)', badge: 'Mada' },
                  { id: 'orange', label: 'Orange Money', badge: 'Mada' },
                  { id: 'airtel', label: 'Airtel Money', badge: 'Mada' },
                  { id: 'cash', label: 'À la livraison', badge: 'Tana' }
                ].map((pay) => {
                  const isSelected = paymentMethod === pay.id;
                  return (
                    <button
                      type="button"
                      key={pay.id}
                      onClick={() => setPaymentMethod(pay.id as any)}
                      className={`text-center p-2.5 rounded-lg border-2 transition-all cursor-pointer ${
                        isSelected 
                          ? 'border-[#8b4513] bg-[#f8f2ee] font-bold text-[#6c2f00]' 
                          : 'border-[#dac2b6]/60 bg-white text-[#54433a]'
                      }`}
                    >
                      <div className="text-xs">{pay.label}</div>
                      <span className="text-[9px] uppercase font-semibold text-[#877369]">
                        {pay.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Order Total recap */}
            <div className="p-4 bg-white rounded-xl border border-[#dac2b6]/70 mb-6">
              <div className="flex justify-between text-xs text-[#54433a] mb-1.5">
                <span>Sous-total articles ({items.length}) :</span>
                <span>{formatPrice(subtotalMGA, currency)}</span>
              </div>
              <div className="flex justify-between text-xs text-[#54433a] mb-2">
                <span>Frais d'acheminement :</span>
                <span>{formatPrice(shippingMGA, currency)}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#2c1b10] pt-2 border-t border-[#dac2b6]/40">
                <span>Total à régler :</span>
                <span className="font-serif text-xl text-[#6c2f00]">
                  {formatPrice(totalMGA, currency)}
                </span>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[#8b4513] text-white font-bold text-xs hover:bg-[#6c2f00] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Confirmer la Commande &bull; {formatPrice(totalMGA, currency)}</span>
            </button>
          </form>
        )}

      </div>

    </div>
  );
};
