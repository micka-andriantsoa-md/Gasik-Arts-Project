import { Currency } from '../types';

export function formatPrice(priceMGA: number, currency: Currency): string {
  if (currency === 'MGA') {
    return new Intl.NumberFormat('fr-MG', {
      style: 'currency',
      currency: 'MGA',
      maximumFractionDigits: 0
    }).format(priceMGA).replace('MGA', 'Ar');
  }

  if (currency === 'EUR') {
    const eur = Math.round(priceMGA / 4600);
    return `${eur} €`;
  }

  // USD
  const usd = Math.round(priceMGA / 4200);
  return `$${usd}`;
}
