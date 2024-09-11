import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';
import MockCartProvider from '../../../test/mocks/cart/MockCartProvider';

vi.mock('./components/CartButton/CartButton', () => ({
  default: () => <button>cart</button>,
}));
vi.mock('./components/CartSidebar/CartSidebar.jsx', () => ({
  default: () => <div>sidebar</div>,
}));
vi.mock('./components/CheckoutPopup/CheckoutPopup.jsx', () => ({
  default: () => <div>popup</div>,
}));
vi.mock('../../components/Backdrop/Backdrop.jsx', () => ({
  default: () => <div>backdrop</div>,
}));

describe('ShoppingCart feature ', () => {
  const renderWithProvider = (ui) =>
    render(<MockCartProvider>{ui}</MockCartProvider>);
  it('Renders correctly ', () => {
    renderWithProvider(<ShoppingCart />);
    expect(screen.getByRole('button', { name: 'cart' })).toBeInTheDocument();
    expect(screen.queryByText('sidebar')).not.toBeInTheDocument();
  });
});
