export interface NavigationItem {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'benefits', label: 'Benefits', href: '/#benefits' },
  { id: 'reviews', label: 'Reviews', href: '/#reviews' },
  { id: 'faq', label: 'FAQ', href: '/#faq-section' },
  { id: 'order', label: 'Order', href: '#products' },
  { id: 'help', label: 'Need Help?', href: '/pages/help-center' }
] as const;
