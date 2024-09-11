import hero0 from '../../../assets/hero-0.webp';
import hero1 from '../../../assets/hero-1.webp';
import hero2 from '../../../assets/hero-2.webp';

export const HERO_IMAGE_DISPLAYS = [
  {
    img: { src: hero0 },
    overlay: {
      header: 'Lorem',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
      position: { align: 'start', justify: 'start' },
      action: { type: 'link', to: '/products', text: 'Shop' },
    },
  },
  {
    img: { src: hero1 },
    overlay: {
      header: 'Ipsum',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
      position: { align: 'center', justify: 'center' },
      action: { type: 'button', text: 'About' },
    },
  },
  {
    img: { src: hero2 },
    overlay: {
      header: 'Dolor',
      text: 'ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at quam imperdiet, dignissim lorem quis, consectetur nunc.',
      position: { align: 'end', justify: 'end' },
      action: { type: 'button', text: 'Blog' },
    },
  },
];
