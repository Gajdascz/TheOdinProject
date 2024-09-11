import PropTypes from 'prop-types';
import styled from 'styled-components';
import ProductCard from '../ProductCard/ProductCard';
import { useProductContext } from '../../contexts/Products/ProductContext';
import { PRODUCT_CATEGORIES, PRODUCT_SORT_QUALITIES } from './config';
import Spinner from '../../components/Spinner/Spinner';
const Container = styled.div`
  background-color: var(--surface-2-color);
  color: var(--color-on-surface);
  box-shadow: var(--surface-2-shadow);
  display: flex;
  flex-direction: column;
  gap: var(--space-medium);
  border-radius: var(--border-radius);
  border: var(--border);
  padding: var(--space-medium);
  & > h2 {
    text-align: center;
    font-weight: bold;
  }
`;

const Card = styled(ProductCard)`
  flex-direction: column;
  flex: 1;
  max-width: 100%;
`;
const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-medium);
`;

FeaturedProducts.propTypes = {
  headerText: PropTypes.string,
  category: PropTypes.oneOf(...PRODUCT_SORT_QUALITIES),
  quality: PropTypes.oneOf(PRODUCT_CATEGORIES),
  number: PropTypes.number,
};

export default function FeaturedProducts({
  headerText,
  category,
  quality,
  number = 3,
  ...rest
}) {
  const { products, loading, getByCategory, getSortedBy } = useProductContext();
  if (loading) return <Spinner />;
  let featured = [...products];
  if (category) featured = getByCategory(category, featured);
  if (quality) featured = getSortedBy(quality, featured);

  const cards = [];
  for (let i = 0; i < number; i++) {
    const prod = featured[i];
    cards.push(<Card key={prod.id} hideDesc={true} productData={prod} />);
  }
  return (
    <Container {...rest}>
      {headerText && <h2>{headerText}</h2>}
      <CardsWrapper>{cards}</CardsWrapper>
    </Container>
  );
}
