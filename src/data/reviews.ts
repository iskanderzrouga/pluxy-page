export interface CustomerReview {
  readonly id: string;
  readonly title: string;
  readonly content: string;
  readonly author: string;
  readonly avatarUrl: string;
}

export const customerReviews: CustomerReview[] = [
  {
    id: 'rebecca',
    title: '"Hair Grows Much Slower!"',
    content: "I'm thrilled with the results from this epilator! It effectively removes unwanted hair, and I prefer it over shaving. Plus, my hair grows back much slower now. Amazing",
    author: 'Rebecca H.',
    avatarUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/175.png"
  },
  {
    id: 'milena',
    title: '"Perfect for Hormonal Facial Hair"',
    content: "Due to hormonal issues, I have excessive facial hair. This facial epilator is wonderful, removing hair with minimal pain, even the small ones. It's easy to use, comfortable, and well-priced. Highly recommend!",
    author: 'Milena M.',
    avatarUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/169.png"
  },
  {
    id: 'christen',
    title: '"Painless and Effective"',
    content: "This is my first time using an epilator, and I love it! It's so much easier than tweezing, painless, and leaves my skin smooth without any redness or irritation. I highly recommend this product!",
    author: 'Christen M.',
    avatarUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/172.png"
  },
  {
    id: 'isela',
    title: '"Works great!"',
    content: "Works great! After 20 years of plucking and I can finally stop wasting money on laser and time on plucking, I am finally facial hair-free!'",
    author: 'Isela Indira',
    avatarUrl: "https://c.animaapp.com/mdqy9698UVjprT/assets/176.png"
  }
] as const;
