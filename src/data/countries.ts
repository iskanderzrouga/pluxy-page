export interface Country {
  readonly id: string;
  readonly name: string;
  readonly currency: string;
  readonly flagUrl: string;
  readonly isSelected?: boolean;
}

export const countries: Country[] = [
  { id: 'au', name: 'Australia', currency: 'AUD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'at', name: 'Austria', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'be', name: 'Belgium', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'ca', name: 'Canada', currency: 'CAD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'cz', name: 'Czechia', currency: 'CZK', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'dk', name: 'Denmark', currency: 'DKK', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'fi', name: 'Finland', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'fr', name: 'France', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'de', name: 'Germany', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'hk', name: 'Hong Kong SAR', currency: 'HKD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'ie', name: 'Ireland', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'il', name: 'Israel', currency: 'ILS', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'it', name: 'Italy', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'jp', name: 'Japan', currency: 'JPY', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'my', name: 'Malaysia', currency: 'MYR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'nl', name: 'Netherlands', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'nz', name: 'New Zealand', currency: 'NZD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'no', name: 'Norway', currency: 'USD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'pl', name: 'Poland', currency: 'PLN', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'pt', name: 'Portugal', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'sg', name: 'Singapore', currency: 'SGD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'kr', name: 'South Korea', currency: 'KRW', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'es', name: 'Spain', currency: 'EUR', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'se', name: 'Sweden', currency: 'SEK', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'ch', name: 'Switzerland', currency: 'CHF', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'ae', name: 'United Arab Emirates', currency: 'AED', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'gb', name: 'United Kingdom', currency: 'GBP', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif" },
  { id: 'us', name: 'United States', currency: 'USD', flagUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/image-1.gif", isSelected: true }
] as const;
