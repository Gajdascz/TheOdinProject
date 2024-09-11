import PropTypes from 'prop-types';
import { ProductContext } from './ProductContext';
import { useEffect, useState } from 'react';

ProductProvider.propTypes = {
  children: PropTypes.node,
};

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const products = localStorage.getItem('products');
    return products ? JSON.parse(products) : [];
  });
  const [loading, setLoading] = useState(products.length === 0);

  const saveProducts = (productData) => {
    localStorage.setItem('products', JSON.stringify(productData));
    setProducts(productData);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error(
            `Network Response Error: ${response.status} ${response.statusText}.`,
          );
        }
        const data = await response.json();
        saveProducts(data);
      } catch (error) {
        console.error(`Product Fetch error: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    products.length === 0 && fetchProducts();
  }, [products.length]);

  const getSortedBy = (sortBy, productArray = products) => {
    switch (sortBy) {
      case 'Rating Score':
        return [...productArray].sort((a, b) => b.rating.rate - a.rating.rate);
      case 'Rating Count':
        return [...productArray].sort(
          (a, b) => b.rating.count - a.rating.count,
        );
      case 'Price Low-High':
        return [...productArray].sort((a, b) => a.price - b.price);
      case 'Price High-Low':
        return [...productArray].sort((a, b) => b.price - a.price);
      default:
        return [...productArray];
    }
  };

  const getByCategory = (categories, productsArray = products) =>
    productsArray.filter((product) => categories.includes(product.category));

  const searchProducts = (query, productsArray = products) => {
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
  };

  return (
    <ProductContext.Provider
      value={{ products, loading, getSortedBy, getByCategory, searchProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}
