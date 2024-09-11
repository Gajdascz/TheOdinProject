import PropTypes from 'prop-types';
import { CartContext } from '../../../src/contexts/Cart/CartContext';
import {
  itemsInCart,
  mockAddToCart,
  mockClearCart,
  mockGetCartTotal,
  mockSetItemQuantity,
} from './mockCartProviderFunctions';

MockCartProvider.propTypes = {
  children: PropTypes.node,
};

export default function MockCartProvider({ children }) {
  return (
    <CartContext.Provider
      value={{
        itemsInCart,
        addToCart: mockAddToCart,
        setItemQuantity: mockSetItemQuantity,
        clearCart: mockClearCart,
        getCartTotal: mockGetCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
