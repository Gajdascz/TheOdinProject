import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import MockCartProvider from '../../../test/mocks/cart/MockCartProvider';
import { mockAddToCart } from '../../../test/mocks/cart/mockCartProviderFunctions';
import ProductCard from './ProductCard';
import userEvent from '@testing-library/user-event';
const mockProduct = {
  id: 0,
  image: 'image.jpg',
  price: 99.99,
  rating: { rate: 3.5, count: 200 },
  description: 'Description Text',
};
vi.mock('./components/AddToCartButton/AddToCartButton.jsx', () => ({
  default: (props) => {
    return (
      <button
        {...props}
        data-testid="addToCartButton"
        onClick={() => mockAddToCart({ item: mockProduct })}
      >
        Add To Cart
      </button>
    );
  },
}));
vi.mock('./components/ProductRating/ProductRating.jsx', () => ({
  default: (props) => {
    return (
      <div {...props} data-testid="productRating">
        {`rate: ${props.rate}`}
        {`count: ${props.count}`}
      </div>
    );
  },
}));
vi.mock('../QuantityInput/QuantityInput.jsx', () => ({
  default: (props) => <div {...props} data-testid="quantityInput" />,
}));

describe('ProductCard feature', () => {
  const renderWithProvider = (ui) =>
    render(<MockCartProvider data-testid="cartContext">{ui}</MockCartProvider>);
  it('Renders correctly', () => {
    renderWithProvider(
      <ProductCard
        productData={mockProduct}
        hideDesc={false}
        data-testid="productCard"
      />,
    );
    expect(screen.getByTestId('productCard')).toBeInTheDocument();
    expect(screen.getByText('Add To Cart')).toBeInTheDocument();
    expect(screen.getByTestId('productRating')).toBeInTheDocument();
    expect(screen.getByTestId('quantityInput')).toBeInTheDocument();
    expect(screen.getByText('Description Text')).toBeInTheDocument();
  });
  it('Excludes text description when requested', () => {
    renderWithProvider(
      <ProductCard
        productData={mockProduct}
        hideDesc={true}
        data-testid="productCard"
      />,
    );
    expect(screen.queryByText('Description Text')).toBeNull();
  });
  it('Correctly sends item data to cart', async () => {
    renderWithProvider(
      <ProductCard
        productData={mockProduct}
        hideDesc={false}
        data-testid="productCard"
      />,
    );
    const user = userEvent.setup();
    const addToCartButton = screen.getByTestId('addToCartButton');
    await user.click(addToCartButton);
    expect(mockAddToCart).toHaveBeenCalled();
    expect(mockAddToCart).toHaveBeenCalledWith({ item: mockProduct });
  });
});
