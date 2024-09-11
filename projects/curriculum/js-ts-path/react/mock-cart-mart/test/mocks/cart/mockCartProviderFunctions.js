import { vi } from 'vitest';
const itemsInCart = [];

const isInCart = (itemId) => itemsInCart.some((item) => item.id === itemId);

const mockGetCartTotal = vi.fn(() =>
  itemsInCart.reduce(
    (acc, current) => (acc += current.price * current.quantity),
    0,
  ),
);
const mockAddToCart = vi.fn(({ item }) => {
  if (!isInCart(item.id, itemsInCart)) itemsInCart.push(item);
  else {
    itemsInCart.forEach((inCart, index) => {
      if (item.id === inCart.id) itemsInCart[index].quantity += item.quantity;
    });
  }
  return true;
});

const mockClearCart = vi.fn(() => {
  itemsInCart.length = 0;
});

const mockSetItemQuantity = vi.fn(({ id, quantity }) => {
  itemsInCart.forEach((item, index) => {
    if (id === item.id) {
      const newQuantity = itemsInCart[index].quantity + quantity;
      if (newQuantity <= 0) {
        itemsInCart[index] = false;
        const newItemsInCart = itemsInCart.filter(Boolean);
        itemsInCart.length = 0;
        itemsInCart.push(...newItemsInCart);
      } else itemsInCart[index].quantity = newQuantity;
    }
  });
});

export {
  itemsInCart,
  mockGetCartTotal,
  mockAddToCart,
  mockSetItemQuantity,
  mockClearCart,
};
