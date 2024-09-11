import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';

import { useCartContext } from '../../contexts/Cart/CartContext';
import ProductRating from './components/ProductRating/ProductRating';
import QuantityInput from '../QuantityInput/QuantityInput';
import AddToCartButton from './components/AddToCartButton/AddToCartButton';

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: var(--color-on-surface);
  box-shadow: var(--surface-4-shadow);
  border: var(--border);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-width: 125px;
  max-width: 100%;
  max-height: 100%;
  & > img {
    width: 100%;
    height: 100%;
    max-height: 50vh;
    object-fit: contain;
  }
`;

const ProductBodyContainer = styled.div`
  padding: var(--space-small);
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: var(--space-small);
  min-height: min-content;
  max-width: 100%;
`;
const ProductBodyHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--space-small);
`;

const ProductTitle = styled.h2`
  font-size: 1.25rem;
`;
const ProductPrice = styled.p`
  font-size: 1.5rem;
  font-style: italic;
  font-weight: bold;
`;
const ProductDescription = styled.p`
  flex-grow: 1;
  text-align: center;
  display: flex;
  align-items: center;
`;

const QuantityAddToCartWrapper = styled.div`
  display: flex;
  gap: var(--space-medium);
  flex-wrap: wrap;
  max-width: 100%;
`;
const CardQuantityInput = styled(QuantityInput)`
  max-width: 33%;
`;

ProductCard.propTypes = {
  productData: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.shape({
      rate: PropTypes.number,
      count: PropTypes.number,
    }),
    description: PropTypes.string,
  }),
  hideDesc: PropTypes.bool,
};
export default function ProductCard({ productData, hideDesc, ...rest }) {
  const [quantity, setQuantity] = useState(1);
  const [addStatus, setAddStatus] = useState(false);
  const { id, image, title, price, rating, description } = productData;
  const { addToCart } = useCartContext();
  const handleAddToCart = () => {
    const result = addToCart({ id, image, title, price, quantity });
    setAddStatus(result);
    setTimeout(() => setAddStatus(false), 2500);
  };
  return (
    <Card {...rest}>
      <ImageWrapper>
        <img src={image} />
      </ImageWrapper>

      <ProductBodyContainer>
        <ProductBodyHeader>
          <ProductTitle>{title}</ProductTitle>
          <ProductRating rate={rating.rate} count={rating.count} />
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </ProductBodyHeader>
        {!hideDesc && <ProductDescription>{description}</ProductDescription>}
        <QuantityAddToCartWrapper>
          <CardQuantityInput
            quantity={quantity}
            onQuantityChange={setQuantity}
            min={1}
          />
          <AddToCartButton
            addStatus={addStatus}
            handleAddToCart={handleAddToCart}
          />
        </QuantityAddToCartWrapper>
      </ProductBodyContainer>
    </Card>
  );
}
