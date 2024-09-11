import { createContext, useContext } from 'react';

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export { CartContext, useCartContext };
