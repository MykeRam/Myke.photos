export type Photo = {
  title: string;
  category: string;
  location: string;
  image: string;
  alt: string;
};

export const featuredPhotos: Photo[] = [
  { title: 'A quiet kind of blue', category: 'Selected work', location: 'Brooklyn, NY', image: '/images/hero.svg', alt: 'Abstract blue light falling across a textured wall' },
  { title: 'Between departures', category: 'Street', location: 'New York, NY', image: '/images/study-01.svg', alt: 'A cinematic street scene at dusk' },
  { title: 'After the rain', category: 'Atmosphere', location: 'Queens, NY', image: '/images/study-02.svg', alt: 'Reflections and soft light after rainfall' }
];
