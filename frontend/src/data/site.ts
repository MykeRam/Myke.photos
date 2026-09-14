export type Photo = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
  orientation: 'portrait' | 'landscape';
};

export type PortfolioCategory = {
  slug: 'just-for-fun' | 'selected';
  title: 'Just for fun' | 'Selected work';
  description: string;
};

export const portfolioCategories: PortfolioCategory[] = [
  {
    slug: 'just-for-fun',
    title: 'Just for fun',
    description: 'Film photographs shaped by grain, patience, and chance.',
  },
  {
    slug: 'selected',
    title: 'Selected work',
    description: 'Polished, intentional photographs chosen for their point of view.',
  },
];

export const featuredPhotos: Photo[] = [
  {
    slug: 'quiet-blue',
    title: 'A quiet kind of blue',
    category: 'Editorial',
    location: 'Brooklyn, NY',
    image: '/images/hero.svg',
    alt: 'Abstract blue light falling across a textured wall',
    orientation: 'portrait',
  },
  {
    slug: 'between-departures',
    title: 'Between departures',
    category: 'On street',
    location: 'New York, NY',
    image: '/images/study-01.svg',
    alt: 'A cinematic study of shape and light at dusk',
    orientation: 'portrait',
  },
  {
    slug: 'after-the-rain',
    title: 'After the rain',
    category: 'Analog',
    location: 'Queens, NY',
    image: '/images/study-02.svg',
    alt: 'Abstract reflections and soft light after rainfall',
    orientation: 'portrait',
  },
];
