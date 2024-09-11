import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CartItem from './CartItem';
import userEvent from '@testing-library/user-event';
import { REMOVE_BUTTON_TEXT, ITEM_PRICE_LABEL, TOTAL_LABEL } from './config';
const mockSetItemQuantity = vi.fn();

const mockProduct = {
  id: 0,
  image: 'image.jpg',
  title: 'product title',
  price: 99.99,
  quantity: 1,
  setItemQuantity: mockSetItemQuantity,
};

vi.mock('../../../QuantityInput/QuantityInput.jsx', () => ({
  default: (props) => (
    <div {...props} data-testid="quantityInput" data-value={props.quantity} />
  ),
}));

const runRender = ({ props = mockProduct } = {}) => {
  render(<CartItem {...props} data-testid="cartItem" />);
};

describe('CartItem feature component', () => {
  it('Renders correctly', () => {
    runRender();
    const item = screen.getByTestId('cartItem');
    expect(item).toBeInTheDocument();
    expect(item.querySelector('img')).toHaveAttribute('src', 'image.jpg');
    expect(screen.getByText('product title')).toBeInTheDocument();
    expect(
      screen.getByText(`${ITEM_PRICE_LABEL}${mockProduct.price}`),
    ).toBeInTheDocument();
    expect(screen.getByTestId('quantityInput')).toBeInTheDocument();
    expect(
      screen.getByText(
        `${TOTAL_LABEL}${mockProduct.price * mockProduct.quantity}`,
      ),
    );
  });
  it('Removes an item from the cart properly', async () => {
    const newQuantity = 10;
    runRender({ props: { ...mockProduct, quantity: newQuantity } });
    const item = screen.getByTestId('cartItem');
    expect(item).toBeInTheDocument();
    expect(
      screen.getByText(
        `${TOTAL_LABEL}${`${(mockProduct.price * newQuantity).toFixed(2)}`}`,
      ),
    );
    const user = userEvent.setup();
    const button = screen.getByText(REMOVE_BUTTON_TEXT);
    await user.click(button);
    expect(mockSetItemQuantity).toHaveBeenCalledWith({
      id: mockProduct.id,
      quantity: 0,
    });
  });
});
