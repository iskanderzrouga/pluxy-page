export interface HeroFeature {
  readonly id: string;
  readonly text: string;
  readonly iconUrl: string;
}

export interface ProductFeature {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imageUrl: string;
}

export const heroFeatures: HeroFeature[] = [
  { id: 'ingrown', text: 'Prevents Ingrown Hairs & Irritation', iconUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/119.png" },
  { id: 'regrowth', text: 'Promotes Slower, Finer Regrowth', iconUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/119.png" },
  { id: 'tested', text: 'Dermotologically Tested for Safe and Effective Use', iconUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/119.png" },
  { id: 'effective', text: 'Effective on Coarse, Fine, And Stubborn Hairs', iconUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/119.png" },
  { id: 'salon', text: 'Salon-Quality Results At Home', iconUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/119.png" }
] as const;

export const productFeatures: ProductFeature[] = [
  {
    id: 'fast-lasting',
    title: 'Fast & Long-Lasting Results',
    description: 'The Pluxy Epil Pro plucks the hair straight from the root, leaving your skin smooth for up to 4 weeks and making sure the hairs grow thinner each time',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/28.webp"
  },
  {
    id: 'precise',
    title: 'Highly Precise',
    description: 'With its 17mm discs, it removes hair 4x shorter than waxing. No more waiting for hair to grow out in order to have smooth skin again!',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/29.avif"
  },
  {
    id: 'antimicrobial',
    title: 'Antimicrobial Protection',
    description: 'Our Silver Ion Technology protects your skin against harmful bacteria and helps prevent ingrown hairs.',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/30.webp"
  },
  {
    id: 'no-irritation',
    title: 'No Irritated Skin',
    description: 'The Pluxy patented Glide Technology allows the tweezer discs to glide over your skin without irritating it.',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/31.webp"
  },
  {
    id: 'convenient',
    title: 'More Convenient and Less Painful Than Waxing',
    description: 'The dual-opposed heads hold your skin gently and makes the removal easier and more comfortable.',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/33.webp"
  },
  {
    id: 'balance',
    title: 'The Perfect Balance',
    description: 'The Pluxy ergonomically engineered handle fits perfectly in your hand, making it easy for you to hold and maneuver the epilator.',
    imageUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/32.webp"
  }
] as const;
