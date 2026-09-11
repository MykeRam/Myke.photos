export type Photo = {
  slug: string;
  title: string;
  category: PortfolioCategory['title'];
  location: string;
  image: string;
  alt: string;
  orientation: 'portrait' | 'landscape';
};

export type PortfolioCategory = {
  slug: 'editorial' | 'street' | 'film';
  title: 'Editorial' | 'Street' | 'Film';
  description: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  { slug: 'editorial', title: 'Editorial', description: 'Portraits, assignments, and commissioned stories.' },
  { slug: 'street', title: 'Street', description: 'Unscripted observations from New York and elsewhere.' },
  { slug: 'film', title: 'Film', description: 'Analog frames shaped by grain, patience, and chance.' }
];

export const featuredPhotos: Photo[] = [
  { slug: 'quiet-blue', title: 'A quiet kind of blue', category: 'Editorial', location: 'Brooklyn, NY', image: '/images/hero.svg', alt: 'Abstract blue light falling across a textured wall', orientation: 'portrait' },
  { slug: 'between-departures', title: 'Between departures', category: 'Street', location: 'New York, NY', image: '/images/study-01.svg', alt: 'A cinematic study of shape and light at dusk', orientation: 'portrait' },
  { slug: 'after-the-rain', title: 'After the rain', category: 'Film', location: 'Queens, NY', image: '/images/study-02.svg', alt: 'Abstract reflections and soft light after rainfall', orientation: 'portrait' }
];
