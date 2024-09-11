import styled from 'styled-components';
import HeroSlider from '../../HeroSlider/HeroSlider';
import FeaturedProducts from '../../FeaturedProducts/FeaturedProducts';
import { HERO_IMAGE_DISPLAYS } from './config';

const PageContainer = styled.section`
  display: grid;
  gap: var(--space-medium);
`;

const HomeHero = styled(HeroSlider)`
  min-height: 80vh;
`;

export default function HomePage() {
  return (
    <PageContainer>
      <HomeHero displays={HERO_IMAGE_DISPLAYS} />
      <FeaturedProducts
        headerText="Featured Electronics"
        category="electronics"
        quality="Rating Score"
      />
    </PageContainer>
  );
}
