import PropTypes from 'prop-types';
import { ProductContext } from '../../../src/contexts/Products/ProductContext';
import {
  mockProducts,
  mockGetByCategory,
  mockSearchProducts,
  mockGetSortedBy,
} from './mockProductProviderFunctions';

MockProductProvider.propTypes = {
  children: PropTypes.node,
  products: PropTypes.arrayOf(PropTypes.object),
  getSortedBy: PropTypes.func,
  getByCategory: PropTypes.func,
  searchProducts: PropTypes.func,
};

export default function MockProductProvider({
  children,
  products = mockProducts,
  getSortedBy = mockGetSortedBy,
  getByCategory = mockGetByCategory,
  searchProducts = mockSearchProducts,
}) {
  return (
    <ProductContext.Provider
      value={{
        products,
        getSortedBy,
        getByCategory,
        searchProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
