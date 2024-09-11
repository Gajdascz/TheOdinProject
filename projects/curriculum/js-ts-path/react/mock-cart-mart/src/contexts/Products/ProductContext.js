import { createContext, useContext } from 'react';

const ProductContext = createContext();
const useProductContext = () => useContext(ProductContext);

export { ProductContext, useProductContext };
