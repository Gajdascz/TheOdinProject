import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CartSidebar from './CartSidebar';
import MockCartProvider from '../../../../../test/mocks/cart/MockCartProvider';
import {
  itemsInCart,
  mockAddToCart,
  mockClearCart,
} from '../../../../../test/mocks/cart/mockCartProviderFunctions';
import {
  EMPTY_CART_MESSAGE,
  SHOP_ACTION_TEXT,
  TOTAL_LABEL,
  CHECKOUT_ACTION_TEXT,
  CLEAR_ACTION_TEXT,
} from './config';

import { MemoryRouter } from 'react-router-dom';
vi.mock('../../../components/Action/Action.jsx', () => ({
  default: () => <button>action</button>,
}));
vi.mock('../../../components/Icon/Icon.jsx', () => ({
  default: () => <div>icon</div>,
}));
vi.mock('../../components/CartItem/CartItem.jsx', () => ({
  default: () => <div>cartItem</div>,
}));

const mockOnClose = vi.fn();
const mockOpenCheckout = vi.fn();

const mockProducts = [
  {
    id: 0,
    price: 5,
    quantity: 2,
  },
  {
    id: 1,
    price: 2,
    quantity: 20,
  },
];

const mockProps = {
  animationTime: '0.5s',
  openCheckout: mockOpenCheckout,
  onClose: mockOnClose,
};

describe('CartSidebar feature component', () => {
  const renderWithProvider = (ui) =>
    render(
      <MemoryRouter>
        <MockCartProvider>{ui}</MockCartProvider>
      </MemoryRouter>,
    );
  it('Close button', async () => {
    renderWithProvider(<CartSidebar {...mockProps} />);
    const closeButton = screen.getByLabelText('close');
    expect(closeButton).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledOnce();
  });
  it('Renders correctly with no items are in the cart', () => {
    renderWithProvider(<CartSidebar {...mockProps} />);
    expect(screen.getByText(EMPTY_CART_MESSAGE)).toBeInTheDocument();
    expect(screen.getByText(SHOP_ACTION_TEXT)).toBeInTheDocument();
  });
  it('Renders correctly With items in cart', () => {
    mockProducts.forEach((product) => mockAddToCart({ item: product }));
    renderWithProvider(<CartSidebar {...mockProps} />);
    expect(screen.queryByText(EMPTY_CART_MESSAGE)).not.toBeInTheDocument();
    expect(screen.queryByText(SHOP_ACTION_TEXT)).not.toBeInTheDocument();
    expect(screen.getAllByText('cartItem')).toHaveLength(2);
    expect(screen.getByText(CHECKOUT_ACTION_TEXT)).toBeInTheDocument();
    expect(screen.getByText(CLEAR_ACTION_TEXT)).toBeInTheDocument();
    expect(
      screen.getByText(
        `${TOTAL_LABEL}${mockProducts.reduce((acc, curr) => (acc += curr.price * curr.quantity), 0).toFixed(2)}`,
      ),
    );
  });
  it('Clear button calls clearCart and clears all cartItems', async () => {
    mockProducts.forEach((product) => mockAddToCart({ item: product }));
    renderWithProvider(<CartSidebar {...mockProps} />);
    expect(screen.getAllByText('cartItem')).toHaveLength(2);
    expect(itemsInCart).toHaveLength(2);
    const clearButton = screen.getByText(CLEAR_ACTION_TEXT);
    const user = userEvent.setup();
    await user.click(clearButton);
    expect(mockClearCart).toHaveBeenCalled();
    expect(itemsInCart).toHaveLength(0);
  });
  it('Checkout button calls openCheckout', async () => {
    mockProducts.forEach((product) => mockAddToCart({ item: product }));
    renderWithProvider(<CartSidebar {...mockProps} />);
    const checkoutButton = screen.getByText(CHECKOUT_ACTION_TEXT);
    const user = userEvent.setup();
    await user.click(checkoutButton);
    expect(mockOpenCheckout).toHaveBeenCalled();
  });
});
