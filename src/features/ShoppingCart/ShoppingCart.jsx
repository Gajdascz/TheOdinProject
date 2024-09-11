import { useState } from 'react';

import { useCartContext } from '../../contexts/Cart/CartContext';
import CartSidebar from './components/CartSidebar/CartSidebar';
import Backdrop from '../../components/Backdrop/Backdrop';
import CartButton from './components/CartButton/CartButton';
import CheckoutPopup from './components/CheckoutPopup/CheckoutPopup';

const ANIMATION_TIME = 500;

export default function ShoppingCart() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [animatingStatus, setAnimatingStatus] = useState(null);

  const { clearCart, itemsInCart } = useCartContext();

  const openSidebar = () => {
    setAnimatingStatus('opening');
    setIsSidebarOpen(true);
    setTimeout(() => setAnimatingStatus(null), ANIMATION_TIME);
  };
  const closeSidebar = () => {
    setAnimatingStatus('closing');
    setTimeout(() => {
      setIsSidebarOpen(false);
      setAnimatingStatus(null);
    }, ANIMATION_TIME);
  };

  const toggleSidebar = () => (isSidebarOpen ? closeSidebar() : openSidebar());

  const onCloseCheckout = () => setIsCheckingOut(false);
  const onOpenCheckout = () => setIsCheckingOut(true);

  const onCheckout = () => {
    toggleSidebar();
    clearCart();
  };

  return (
    <>
      <CartButton onClick={toggleSidebar} itemsInCart={itemsInCart.length} />
      {(isSidebarOpen || animatingStatus) && (
        <Backdrop onClick={toggleSidebar}>
          <CartSidebar
            onClose={toggleSidebar}
            // isOpen={isSidebarOpen}
            openCheckout={onOpenCheckout}
            animatingStatus={animatingStatus}
            animationTime={`${ANIMATION_TIME / 1000}s`}
          />
        </Backdrop>
      )}
      {isCheckingOut && (
        <CheckoutPopup onClose={onCloseCheckout} onCheckout={onCheckout} />
      )}
    </>
  );
}
