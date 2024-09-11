import { vi } from 'vitest';
import mockProducts from './mockProducts';

const mockGetSortedBy = vi.fn((sortBy, productArray = mockProducts) => {
  switch (sortBy) {
    case 'Rating Score':
      return [...productArray].sort((a, b) => b.rating.rate - a.rating.rate);
    case 'Rating Count':
      return [...productArray].sort((a, b) => b.rating.count - a.rating.count);
    case 'Price Low-High':
      return [...productArray].sort((a, b) => a.price - b.price);
    case 'Price High-Low':
      return [...productArray].sort((a, b) => b.price - a.price);
    default:
      return [...productArray];
  }
});

const mockGetByCategory = vi.fn((categories, productsArray = mockProducts) =>
  productsArray.filter((product) => categories.includes(product.category)),
);

const mockSearchProducts = vi.fn((query, productsArray = mockProducts) => {
  const split = query.split(':');
  const getRegExp = (query) => new RegExp(query, 'ig');
  if (split.length === 2) {
    const [specifier, query] = split;
    const regex = getRegExp(query);
    return productsArray.filter((product) => regex.test(product[specifier]));
  } else {
    const regex = getRegExp(query);
    return productsArray.filter((product) =>
      regex.test(JSON.stringify(product)),
    );
  }
});

export { mockProducts, mockGetByCategory, mockSearchProducts, mockGetSortedBy };
