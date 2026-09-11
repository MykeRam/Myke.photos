export type Photo = {
  slug: string;
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
  orientation: 'portrait' | 'landscape';
};

export const featuredPhotos: Photo[] = [
  { slug: 'quiet-blue', title: 'A quiet kind of blue', category: 'Selected work', location: 'Brooklyn, NY', image: '/images/hero.svg', alt: 'Abstract blue light falling across a textured wall', orientation: 'portrait' },
  { slug: 'between-departures', title: 'Between departures', category: 'Street', location: 'New York, NY', image: '/images/study-01.svg', alt: 'A cinematic study of shape and light at dusk', orientation: 'portrait' },
  { slug: 'after-the-rain', title: 'After the rain', category: 'Atmosphere', location: 'Queens, NY', image: '/images/study-02.svg', alt: 'Abstract reflections and soft light after rainfall', orientation: 'portrait' }
];
